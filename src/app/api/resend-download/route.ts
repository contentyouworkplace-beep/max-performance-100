// Resend download links to a buyer who already paid.
// POST { email: string }
// Generates a fresh signed token and re-emails the download links.
// Rate-limited to prevent abuse: max 3 requests per email per hour (in-memory, resets on cold start).

import { NextRequest, NextResponse } from "next/server"
import { sendEmail, purchaseEmailHtml } from "@/lib/email"
import { createDownloadToken } from "@/lib/downloadToken"

export const dynamic = "force-dynamic"

// Simple in-memory rate limit: email → { count, resetAt }
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const MAX_PER_HOUR = 3
const HOUR_MS = 60 * 60 * 1000

function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://maxperformance100.com").replace(/\/$/, "")
}

export async function POST(req: NextRequest) {
  let email = ""
  try {
    const body = await req.json()
    email = (body.email || "").trim().toLowerCase()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
  }

  // Rate limit
  const now = Date.now()
  const entry = rateLimitMap.get(email)
  if (entry && now < entry.resetAt) {
    if (entry.count >= MAX_PER_HOUR) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a while and try again, or contact support." },
        { status: 429 }
      )
    }
    entry.count++
  } else {
    rateLimitMap.set(email, { count: 1, resetAt: now + HOUR_MS })
  }

  // Generate a fresh download token and send email
  const token = createDownloadToken(email)
  const base = `${siteUrl()}/api/download?token=${encodeURIComponent(token)}&file=`
  const links = [
    { label: "Playbook — PDF version", url: `${base}pdf` },
    { label: "Playbook — Word version (editable)", url: `${base}docx` },
    { label: "Cheat Sheet — Word version", url: `${base}cheatsheet` },
  ]

  const sent = await sendEmail({
    to: email,
    subject: "Your Client Scope & Protection Playbook — Download Links 📥",
    html: purchaseEmailHtml(links),
    replyTo: process.env.OWNER_NOTIFY_EMAIL || "support.maxperformance100@gmail.com",
  })

  if (!sent) {
    return NextResponse.json({ error: "Could not send email. Please contact support." }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
