// Lead capture — sends the free sample by email via Resend and notifies
// the owner. Never blocks the UX: the front-end shows the download link
// regardless, so email failures only get logged.

import { NextRequest, NextResponse } from "next/server"
import { sendEmail, sampleEmailHtml, ownerNotificationHtml } from "@/lib/email"

export const dynamic = "force-dynamic"

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }
    const sanitized = email.trim().toLowerCase().slice(0, 320)
    console.log(`[lead] ${new Date().toISOString()} ${sanitized}`)

    // Send the sample to the lead + notify the owner (both best-effort).
    const [sentToLead] = await Promise.all([
      sendEmail({
        to: sanitized,
        subject: "Your free sample — Client Scope & Protection Playbook 📕",
        html: sampleEmailHtml(),
        replyTo: process.env.OWNER_NOTIFY_EMAIL || "support.maxperformance100@gmail.com",
      }),
      sendEmail({
        to: process.env.OWNER_NOTIFY_EMAIL || "support.maxperformance100@gmail.com",
        subject: `📧 New lead: ${sanitized}`,
        html: ownerNotificationHtml("lead", {
          Email: sanitized,
          Date: new Date().toUTCString(),
          Source: "Free sample form",
        }),
      }),
    ])

    return NextResponse.json({ ok: true, emailed: sentToLead })
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
