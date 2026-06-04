import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }
    const sanitized = email.trim().toLowerCase().slice(0, 320)
    // Log for now — swap in Mailchimp/ConvertKit/Resend credentials when ready
    console.log(`[lead] ${new Date().toISOString()} ${sanitized}`)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
