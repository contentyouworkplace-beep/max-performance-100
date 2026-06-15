"use client"
import { useState } from "react"

export default function ResendDownloadForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleResend(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")
    try {
      const res = await fetch("/api/resend-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.")
        setStatus("error")
      } else {
        setStatus("success")
      }
    } catch {
      setErrorMsg("Network error. Please try again.")
      setStatus("error")
    }
  }

  return (
    <div style={{
      background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.3)",
      borderRadius: "1.25rem", padding: "2rem", marginBottom: "2.5rem",
    }}>
      <h3 style={{ color: "#f59e0b", fontWeight: 800, marginBottom: "0.5rem", fontSize: "1rem" }}>
        📥 Get Your Download Links
      </h3>
      <p style={{ color: "#cbd5e1", fontSize: "0.875rem", marginBottom: "1.25rem" }}>
        Enter the email you used at PayPal checkout and we&apos;ll send your download links instantly.
      </p>

      {status === "success" ? (
        <div style={{ background: "rgba(34,197,94,0.15)", border: "1px solid #22c55e", borderRadius: "0.75rem", padding: "1rem" }}>
          <p style={{ color: "#86efac", fontWeight: 700, margin: 0 }}>✅ Download links sent! Check your inbox (and spam).</p>
        </div>
      ) : (
        <form onSubmit={handleResend} style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            disabled={status === "loading"}
            style={{
              flex: "1 1 220px", padding: "0.75rem 1rem", borderRadius: "0.5rem",
              border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)",
              color: "#fff", fontSize: "0.95rem", outline: "none",
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              padding: "0.75rem 1.5rem", background: "#f59e0b", color: "#0f172a",
              border: "none", borderRadius: "0.5rem", fontWeight: 800, fontSize: "0.95rem",
              cursor: status === "loading" ? "wait" : "pointer", whiteSpace: "nowrap",
            }}
          >
            {status === "loading" ? "Sending…" : "Send My Downloads"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p style={{ color: "#fca5a5", fontSize: "0.85rem", marginTop: "0.75rem", margin: "0.75rem 0 0" }}>
          ⚠️ {errorMsg}
        </p>
      )}
    </div>
  )
}
