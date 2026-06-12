// PayPal IPN (Instant Payment Notification) handler.
// The PayPal Buy Now buttons on /product set notify_url to this route.
// Flow: PayPal POSTs payment data here → we echo it back to PayPal for
// verification → on VERIFIED + Completed we email the buyer their
// tokenized download links (and notify the owner).
//
// Env vars: PAYPAL_BUSINESS_EMAIL, PAYPAL_ENV ("live" | "sandbox"),
//           OWNER_NOTIFY_EMAIL, NEXT_PUBLIC_SITE_URL (+ email/token vars)

import { NextRequest, NextResponse } from "next/server"
import { sendEmail, purchaseEmailHtml, ownerNotificationHtml } from "@/lib/email"
import { createDownloadToken } from "@/lib/downloadToken"

export const dynamic = "force-dynamic"

const PRODUCT_PRICE = 47.0
const PRODUCT_CURRENCY = "USD"

function verifyUrl(): string {
  return process.env.PAYPAL_ENV === "sandbox"
    ? "https://ipnpb.sandbox.paypal.com/cgi-bin/webscr"
    : "https://ipnpb.paypal.com/cgi-bin/webscr"
}

function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://maxperformance100.com").replace(/\/$/, "")
}

export async function POST(req: NextRequest) {
  // 1. Read the RAW body — PayPal requires the exact bytes echoed back.
  const rawBody = await req.text()

  // 2. Ask PayPal to confirm this IPN actually came from them.
  let verdict = ""
  try {
    const res = await fetch(verifyUrl(), {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `cmd=_notify-validate&${rawBody}`,
    })
    verdict = (await res.text()).trim()
  } catch (err) {
    console.error("[ipn] verification request failed:", err)
    // 500 → PayPal will retry the IPN later.
    return new NextResponse("verification unavailable", { status: 500 })
  }

  const params = new URLSearchParams(rawBody)
  const txnId = params.get("txn_id") || "unknown"

  if (verdict !== "VERIFIED") {
    console.warn(`[ipn] NOT verified (${verdict}) txn=${txnId} — ignoring`)
    return new NextResponse("ok", { status: 200 })
  }

  // 3. Business checks.
  const paymentStatus = params.get("payment_status")
  const receiver = (params.get("receiver_email") || params.get("business") || "").toLowerCase()
  const expectedReceiver = (process.env.PAYPAL_BUSINESS_EMAIL || "dchtristate@gmail.com").toLowerCase()
  const gross = parseFloat(params.get("mc_gross") || "0")
  const currency = params.get("mc_currency") || ""
  const payerEmail = (params.get("payer_email") || "").trim().toLowerCase()

  if (paymentStatus !== "Completed") {
    console.log(`[ipn] txn=${txnId} status=${paymentStatus} — no action`)
    return new NextResponse("ok", { status: 200 })
  }
  if (receiver !== expectedReceiver) {
    console.warn(`[ipn] txn=${txnId} receiver mismatch: ${receiver}`)
    return new NextResponse("ok", { status: 200 })
  }
  if (currency !== PRODUCT_CURRENCY || gross < PRODUCT_PRICE) {
    console.warn(`[ipn] txn=${txnId} amount mismatch: ${gross} ${currency}`)
    return new NextResponse("ok", { status: 200 })
  }
  if (!payerEmail || !payerEmail.includes("@")) {
    console.error(`[ipn] txn=${txnId} missing payer_email`)
    return new NextResponse("ok", { status: 200 })
  }

  // 4. Fulfill — email the buyer their download links.
  const token = createDownloadToken(payerEmail)
  const base = `${siteUrl()}/api/download?token=${encodeURIComponent(token)}&file=`
  const links = [
    { label: "Playbook — PDF version", url: `${base}pdf` },
    { label: "Playbook — Word version (editable)", url: `${base}docx` },
    { label: "Cheat Sheet — Word version", url: `${base}cheatsheet` },
  ]

  const sent = await sendEmail({
    to: payerEmail,
    subject: "Your Client Scope & Protection Playbook — Download Inside 🎉",
    html: purchaseEmailHtml(links),
    replyTo: process.env.OWNER_NOTIFY_EMAIL || "support.maxperformance100@gmail.com",
  })
  if (!sent) console.error(`[ipn] txn=${txnId} FULFILLMENT EMAIL FAILED for ${payerEmail} — follow up manually!`)

  // 5. Notify the owner (best-effort).
  const ownerEmail = process.env.OWNER_NOTIFY_EMAIL || "support.maxperformance100@gmail.com"
  await sendEmail({
    to: ownerEmail,
    subject: `💰 New sale: $${gross.toFixed(2)} — ${payerEmail}`,
    html: ownerNotificationHtml("sale", {
      Product: params.get("item_name") || "Client Scope & Protection Playbook",
      Amount: `$${gross.toFixed(2)} ${currency}`,
      Buyer: payerEmail,
      Name: `${params.get("first_name") || ""} ${params.get("last_name") || ""}`.trim() || "—",
      Country: params.get("residence_country") || "—",
      "Transaction ID": txnId,
      "Fulfillment email": sent ? "✅ sent" : "❌ FAILED — send manually",
    }),
  })

  console.log(`[ipn] txn=${txnId} fulfilled for ${payerEmail} (email sent: ${sent})`)
  return new NextResponse("ok", { status: 200 })
}
