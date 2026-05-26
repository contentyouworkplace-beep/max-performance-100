import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact MaxPerformance100 — Freelancer Business Tools & Client Protection",
  description: "Contact MaxPerformance100 for product support, refund requests, or questions about the Client Scope & Protection Playbook.",
  alternates: { canonical: "https://maxperformance100.com/contact" },
}

export default function ContactPage() {
  return (
    <>
      <section style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1e40af 100%)",
        padding: "5rem 1.5rem", textAlign: "center"
      }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "1rem" }}>
            Get in Touch
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.7 }}>
            We&apos;re here to help. Whether you have a question about the playbook, need support with your download, or want to discuss a partnership — reach out and we&apos;ll respond within 1–2 business days.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "grid", gap: "1.5rem" }}>
          {[
            {
              icon: "📧",
              title: "Product Support & Refunds",
              desc: "For issues with your download, refund requests (14-day guarantee), or questions about the playbook contents.",
              contact: "support.maxperformance100@gmail.com",
            },
            {
              icon: "💼",
              title: "Business & Partnership Inquiries",
              desc: "For affiliate partnerships, bulk licensing for teams/agencies, or media and press inquiries.",
              contact: "support.maxperformance100@gmail.com",
            },
            {
              icon: "❓",
              title: "General Questions",
              desc: "Have a question about which product is right for you, or want to know more before purchasing?",
              contact: "support.maxperformance100@gmail.com",
            },
          ].map(({ icon, title, desc, contact }) => (
            <div key={title} className="card">
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.75rem", flexShrink: 0 }}>{icon}</span>
                <div>
                  <h3 style={{ fontWeight: 700, color: "#0f172a", marginBottom: "0.4rem" }}>{title}</h3>
                  <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.6rem" }}>{desc}</p>
                  <a href={`mailto:${contact}`} style={{ color: "#1e40af", fontWeight: 700, fontSize: "0.95rem" }}>{contact}</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "linear-gradient(135deg, #eff6ff, #dbeafe)", border: "2px solid #bfdbfe", borderRadius: "1.25rem", padding: "2rem", marginTop: "2.5rem", textAlign: "center" }}>
          <h3 style={{ color: "#1e40af", fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.75rem" }}>Response Time</h3>
          <p style={{ color: "#374151", fontSize: "0.95rem", lineHeight: 1.7 }}>
            We respond to all inquiries within <strong>1–2 business days</strong> (Monday–Friday, 9am–6pm EST).
            For refund requests, we process them within 24 hours of receiving your email.
          </p>
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <p style={{ color: "#64748b", marginBottom: "1rem" }}>Looking for the product?</p>
          <Link href="/product" className="btn-primary">View the Client Scope & Protection Playbook →</Link>
        </div>
      </div>
    </>
  )
}
