import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Thank You! Your Download Is Ready | MaxPerformance100",
  description: "Your Client Scope & Protection Playbook download is ready. Check your email for download links.",
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <>
      <section style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1e40af 100%)",
        padding: "6rem 1.5rem", textAlign: "center", minHeight: "70vh",
        display: "flex", alignItems: "center"
      }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎉</div>
          <span className="badge" style={{ marginBottom: "1.5rem", display: "inline-block" }}>Order Confirmed!</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "1.25rem" }}>
            Welcome! Your Playbook Is Ready.
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            Thank you for your purchase! Your <strong style={{ color: "#f59e0b" }}>Client Scope & Protection Playbook</strong> download link has been sent to your email.
            Check your inbox (and spam folder) for an email from PayPal and MaxPerformance100.
          </p>

          <div style={{
            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "1.25rem", padding: "2rem", marginBottom: "2.5rem", textAlign: "left"
          }}>
            <h3 style={{ color: "#f59e0b", fontWeight: 800, marginBottom: "1.25rem", fontSize: "1.1rem" }}>🚀 Your Quick-Start Checklist</h3>
            {[
              { step: "1", text: "Download the PDF and Word versions from the email link" },
              { step: "2", text: "Open Module 1 — Client Intake Form. Send it to your next inquiry today." },
              { step: "3", text: "Customize Module 2 — Scope of Work Template with your business details" },
              { step: "4", text: "Set up Module 4 — Payment Terms. Start requiring a 50% deposit." },
              { step: "5", text: "Save the 13 email scripts somewhere accessible for fast use" },
            ].map(({ step, text }) => (
              <div key={step} style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "0.875rem" }}>
                <div style={{ width: "28px", height: "28px", background: "#f59e0b", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#0f172a", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0 }}>{step}</div>
                <span style={{ color: "#e2e8f0", fontSize: "0.95rem" }}>{text}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="btn-secondary">Return to Homepage</Link>
            <Link href="/blog" className="btn-primary">Read Our Free Guides</Link>
          </div>

          <p style={{ color: "#64748b", fontSize: "0.85rem", marginTop: "1.5rem" }}>
            Need help? Email us at <strong style={{ color: "#94a3b8" }}>support.maxperformance100@gmail.com</strong>
          </p>
        </div>
      </section>
    </>
  )
}
