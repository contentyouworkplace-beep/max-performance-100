// Email delivery via Resend HTTP API (free tier: 3,000/month, 100/day).
// No SDK dependency — plain fetch keeps the bundle lean.
//
// Required env vars (set in Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY  — from https://resend.com/api-keys
//   EMAIL_FROM      — verified sender, e.g. "MaxPerformance100 <support@maxperformance100.com>"

const RESEND_ENDPOINT = "https://api.resend.com/emails"

export interface SendEmailInput {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmail({ to, subject, html, replyTo }: SendEmailInput): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.EMAIL_FROM
  if (!apiKey || !from) {
    console.warn("[email] RESEND_API_KEY / EMAIL_FROM not set — email not sent:", subject, "→", to)
    return false
  }
  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    })
    if (!res.ok) {
      console.error("[email] Resend error", res.status, await res.text())
      return false
    }
    return true
  } catch (err) {
    console.error("[email] send failed:", err)
    return false
  }
}

/* ---------- Shared template bits ---------- */

const BRAND = "#1e40af"
const ACCENT = "#f59e0b"
const SUPPORT_EMAIL = "support.maxperformance100@gmail.com"
const SITE = "https://maxperformance100.com"

function shell(body: string): string {
  return `<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:24px 0;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;">
<tr><td style="background:#0f172a;padding:16px 32px;">
  <img src="https://maxperformance100.com/logo.jpeg" alt="MaxPerformance100" width="48" height="48" style="display:inline-block;border-radius:8px;vertical-align:middle;margin-right:10px;" />
  <span style="font-size:18px;font-weight:800;color:#ffffff;vertical-align:middle;">Max<span style="color:${ACCENT};">Performance</span>100</span>
</td></tr>
<tr><td style="padding:32px;">
${body}
</td></tr>
<tr><td style="padding:20px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;">
  <p style="margin:0;color:#94a3b8;font-size:12px;line-height:1.6;">
    Questions? Email <a href="mailto:${SUPPORT_EMAIL}" style="color:${BRAND};">${SUPPORT_EMAIL}</a><br/>
    © MaxPerformance100 · <a href="${SITE}" style="color:#94a3b8;">${SITE.replace("https://", "")}</a>
  </p>
</td></tr>
</table>
</td></tr>
</table>
</body></html>`
}

/** Purchase fulfillment email — sent after verified PayPal payment. */
export function purchaseEmailHtml(downloadLinks: { label: string; url: string }[]): string {
  const buttons = downloadLinks
    .map(
      ({ label, url }) => `
  <tr><td style="padding:6px 0;">
    <a href="${url}" style="display:block;background:${BRAND};color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 24px;border-radius:8px;text-align:center;">⬇ ${label}</a>
  </td></tr>`
    )
    .join("")
  return shell(`
  <h1 style="margin:0 0 8px;color:#0f172a;font-size:24px;">🎉 Your Playbook is ready!</h1>
  <p style="margin:0 0 24px;color:#475569;font-size:15px;line-height:1.7;">
    Thank you for your purchase. Download your <strong>Client Scope &amp; Protection Playbook</strong> below —
    the links are personal to you and valid for <strong>7 days</strong>, so save the files somewhere safe.
  </p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${buttons}</table>
  <p style="margin:24px 0 0;color:#475569;font-size:14px;line-height:1.7;">
    <strong>Quick start:</strong> open Module 1 (Client Intake Form) and send it to your very next inquiry.
    Then customize the Scope of Work template in the Word file with your business details.
  </p>
  <p style="margin:16px 0 0;color:#94a3b8;font-size:13px;line-height:1.6;">
    Links expired or trouble downloading? Just reply to this email and we'll sort it out —
    your purchase includes our 14-day satisfaction guarantee.
  </p>`)
}

/** Free-sample email — sent on lead capture. downloadUrl is a signed /api/download link. */
export function sampleEmailHtml(downloadUrl: string): string {
  return shell(`
  <h1 style="margin:0 0 8px;color:#0f172a;font-size:24px;">Your free sample is here 📕</h1>
  <p style="margin:0 0 24px;color:#475569;font-size:15px;line-height:1.7;">
    Here's your free sample chapter from the <strong>Client Scope &amp; Protection Playbook</strong> —
    a taste of the system freelancers use to stop scope creep and get paid on time.
  </p>
  <a href="${downloadUrl}" style="display:block;background:${BRAND};color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 24px;border-radius:8px;text-align:center;">⬇ Download the Free Sample (PDF)</a>
  <p style="margin:24px 0 0;color:#475569;font-size:14px;line-height:1.7;">
    This link is personal to you and valid for <strong>7 days</strong>. When you're ready for the complete system —
    all 6 modules, 13 email scripts, and every template — the full playbook is a one-time <strong>$47</strong>:
  </p>
  <a href="${SITE}/product" style="display:block;background:${ACCENT};color:#0f172a;text-decoration:none;font-weight:800;font-size:15px;padding:14px 24px;border-radius:8px;text-align:center;margin-top:12px;">Get the Complete Playbook → $47</a>`)
}

/** Owner notification for a new sale or lead. */
export function ownerNotificationHtml(kind: "sale" | "lead", details: Record<string, string>): string {
  const rows = Object.entries(details)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;color:#64748b;font-size:13px;border-bottom:1px solid #e2e8f0;">${k}</td><td style="padding:6px 12px;color:#0f172a;font-size:13px;font-weight:600;border-bottom:1px solid #e2e8f0;">${v}</td></tr>`
    )
    .join("")
  return shell(`
  <h1 style="margin:0 0 16px;color:#0f172a;font-size:20px;">${kind === "sale" ? "💰 New sale!" : "📧 New lead captured"}</h1>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:8px;">${rows}</table>`)
}
