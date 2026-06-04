"use client"
import { useState } from "react"

export default function EmailCapture() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !email.includes("@")) { setError("Please enter a valid email address."); return }
    setLoading(true)
    setError("")
    try {
      await fetch("/api/capture-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
    } catch {
      // non-blocking — proceed to show download regardless
    }
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
        <h3 style={{ color: "#fff", fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.75rem" }}>
          Your free sample is ready!
        </h3>
        <p style={{ color: "#CBD5E1", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
          Click below to download a sample chapter from the Client Scope & Protection Playbook.
        </p>
        <a
          href="/Client_Scope_Protection_SOP_TEASER.pdf"
          download
          className="btn-primary"
          style={{ fontSize: "1rem", padding: "0.9rem 2rem", display: "inline-block" }}
        >
          ⬇ Download Your Free Sample
        </a>
        <p style={{ color: "#64748B", fontSize: "0.8rem", marginTop: "1.25rem" }}>
          Ready for the full system?{" "}
          <a href="/product" style={{ color: "#C9A84C", fontWeight: 700, textDecoration: "none" }}>
            Get the complete playbook — $47 →
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "0.75rem" }}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          style={{
            flex: "1 1 260px",
            padding: "0.875rem 1.25rem",
            borderRadius: "0.5rem",
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.08)",
            color: "#fff",
            fontSize: "0.95rem",
            outline: "none",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-primary pulse-cta"
          style={{ padding: "0.875rem 1.75rem", fontSize: "0.95rem", border: "none", cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0 }}
        >
          {loading ? "Sending…" : "Get Free Sample →"}
        </button>
      </div>
      {error && <p style={{ color: "#FCA5A5", fontSize: "0.85rem", textAlign: "center" }}>{error}</p>}
      <p style={{ color: "#64748B", fontSize: "0.78rem", textAlign: "center" }}>
        No spam. Unsubscribe any time. We respect your privacy.
      </p>
    </form>
  )
}
