import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Payment Cancelled | MaxPerformance100",
  description: "Your payment was not completed. Return to the product page to try again.",
  robots: { index: false, follow: false },
}

export default function PaymentFailedPage() {
  return (
    <>
      <section style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e1e2e 60%, #1a1a2e 100%)",
        padding: "6rem 1.5rem", textAlign: "center", minHeight: "70vh",
        display: "flex", alignItems: "center",
      }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>⚠️</div>
          <span className="badge" style={{ marginBottom: "1.5rem", display: "inline-block", background: "rgba(239,68,68,0.15)", color: "#fca5a5", border: "1px solid rgba(239,68,68,0.3)" }}>
            Payment Not Completed
          </span>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "1.25rem" }}>
            Your payment was cancelled or did not go through.
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
            No charge was made to your account. This can happen if the payment window was closed, the session timed out, or a card was declined by PayPal.
            You can try again — or contact us and we&apos;ll help you complete your order.
          </p>

          {/* What to do */}
          <div style={{
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "1.25rem", padding: "2rem", marginBottom: "2.5rem", textAlign: "left",
          }}>
            <h3 style={{ color: "#f59e0b", fontWeight: 800, marginBottom: "1.25rem", fontSize: "1rem" }}>
              💡 Common reasons &amp; quick fixes
            </h3>
            {[
              { icon: "🔄", title: "Payment window closed early", fix: "Try again — click the button below and complete checkout without closing the PayPal tab." },
              { icon: "💳", title: "Card declined by PayPal", fix: "Try a different card, or log into your PayPal account and pay from your balance." },
              { icon: "🌐", title: "Session timeout", fix: "Your session may have expired. Start a fresh checkout by clicking the button below." },
            ].map(({ icon, title, fix }) => (
              <div key={title} style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{title}</div>
                  <div style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.6 }}>{fix}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
            <Link href="/product" className="btn-primary" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>
              🔁 Try Again — $47
            </Link>
            <Link href="/contact" className="btn-secondary" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>
              Contact Us
            </Link>
          </div>

          {/* Support */}
          <div style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "1rem", padding: "1.5rem",
          }}>
            <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
              Need help completing your order? Email us at{" "}
              <a href="mailto:support.maxperformance100@gmail.com" style={{ color: "#93c5fd", textDecoration: "none", fontWeight: 600 }}>
                support.maxperformance100@gmail.com
              </a>{" "}
              and we&apos;ll sort it out — usually within a few hours.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
