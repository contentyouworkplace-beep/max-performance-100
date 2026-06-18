// Secure product download route.
// GET /api/download?token=<signed-token>&file=pdf|docx|cheatsheet
// Tokens are HMAC-signed and expire after 7 days (see src/lib/downloadToken.ts).
// Product files live in /private at the project root (NOT /public — never
// publicly reachable). See private/README.md for expected filenames.

import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"
import { verifyDownloadToken } from "@/lib/downloadToken"

export const dynamic = "force-dynamic"

const FILES: Record<string, { name: string; mime: string }> = {
  pdf: {
    name: "Client_Scope_Protection_Playbook.pdf",
    mime: "application/pdf",
  },
  docx: {
    name: "Client_Scope_Protection_Playbook.docx",
    mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  },
  cheatsheet: {
    name: "Client_Scope_Protection_Cheat_Sheet.docx",
    mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  },
  sample: {
    name: "Client_Scope_Protection_TEASER.pdf",
    mime: "application/pdf",
  },
}

function htmlError(status: number, title: string, message: string): NextResponse {
  return new NextResponse(
    `<!DOCTYPE html><html><body style="font-family:Arial,sans-serif;background:#f1f5f9;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;">
<div style="background:#fff;border-radius:12px;padding:40px;max-width:440px;text-align:center;">
<h1 style="color:#0f172a;font-size:22px;margin:0 0 12px;">${title}</h1>
<p style="color:#475569;font-size:15px;line-height:1.7;margin:0;">${message}</p>
<p style="color:#94a3b8;font-size:13px;margin:20px 0 0;">Need help? Email <a href="mailto:support.maxperformance100@gmail.com" style="color:#1e40af;">support.maxperformance100@gmail.com</a></p>
</div></body></html>`,
    { status, headers: { "Content-Type": "text/html; charset=utf-8" } }
  )
}

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token") || ""
  const fileKey = req.nextUrl.searchParams.get("file") || ""

  const result = verifyDownloadToken(token)
  if (!result.valid) {
    const expired = result.reason === "expired"
    return htmlError(
      403,
      expired ? "This download link has expired" : "Invalid download link",
      expired
        ? "Download links are valid for 7 days after purchase. No problem — just email us (with the address you paid with) and we'll send you a fresh link right away."
        : "This link doesn't look right. Please use the exact link from your purchase email, or contact support and we'll sort it out."
    )
  }

  const file = FILES[fileKey]
  if (!file) return htmlError(404, "Unknown file", "Please use the download buttons from your purchase email.")

  try {
    const filePath = path.join(process.cwd(), "private", file.name)
    const data = await fs.readFile(filePath)
    return new NextResponse(new Uint8Array(data), {
      status: 200,
      headers: {
        "Content-Type": file.mime,
        "Content-Disposition": `attachment; filename="${file.name}"`,
        "Content-Length": String(data.length),
        "Cache-Control": "private, no-store",
      },
    })
  } catch {
    console.error(`[download] file missing on server: ${file.name}`)
    return htmlError(
      503,
      "File temporarily unavailable",
      "Sorry — this file isn't available right now. Email us and we'll send it to you directly within 24 hours."
    )
  }
}
