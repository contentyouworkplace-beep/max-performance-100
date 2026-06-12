// Stateless, HMAC-signed download tokens — no database required.
// Token = base64url(payload) + "." + base64url(HMAC-SHA256(payload, DOWNLOAD_SECRET))
// Payload = { e: buyerEmail, x: expiryEpochMs }
//
// Required env var:
//   DOWNLOAD_SECRET — any long random string (e.g. `openssl rand -hex 32`)

import { createHmac, timingSafeEqual } from "crypto"

const DEFAULT_TTL_MS = 7 * 24 * 60 * 60 * 1000 // 7 days

function b64url(buf: Buffer): string {
  return buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

function fromB64url(s: string): Buffer {
  const padded = s.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (s.length % 4)) % 4)
  return Buffer.from(padded, "base64")
}

function getSecret(): string {
  const secret = process.env.DOWNLOAD_SECRET
  if (!secret) throw new Error("DOWNLOAD_SECRET env var is not set")
  return secret
}

function sign(payload: string): Buffer {
  return createHmac("sha256", getSecret()).update(payload).digest()
}

export function createDownloadToken(email: string, ttlMs: number = DEFAULT_TTL_MS): string {
  const payload = JSON.stringify({ e: email.trim().toLowerCase(), x: Date.now() + ttlMs })
  const body = b64url(Buffer.from(payload, "utf8"))
  return `${body}.${b64url(sign(body))}`
}

export interface TokenResult {
  valid: boolean
  email?: string
  reason?: "malformed" | "bad-signature" | "expired"
}

export function verifyDownloadToken(token: string): TokenResult {
  const parts = token.split(".")
  if (parts.length !== 2) return { valid: false, reason: "malformed" }
  const [body, sig] = parts
  let expected: Buffer
  try {
    expected = sign(body)
  } catch {
    return { valid: false, reason: "malformed" }
  }
  const actual = fromB64url(sig)
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) {
    return { valid: false, reason: "bad-signature" }
  }
  try {
    const { e, x } = JSON.parse(fromB64url(body).toString("utf8"))
    if (typeof x !== "number" || Date.now() > x) return { valid: false, reason: "expired" }
    return { valid: true, email: typeof e === "string" ? e : undefined }
  } catch {
    return { valid: false, reason: "malformed" }
  }
}
