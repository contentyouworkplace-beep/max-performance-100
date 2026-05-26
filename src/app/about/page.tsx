import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About MaxPerformance100 — Helping US Freelancers Protect Their Business",
  description:
    "MaxPerformance100 creates professional tools, templates, and systems for US freelancers and agencies. Our mission is to help independent professionals stop scope creep, get paid on time, and run profitable client businesses.",
  alternates: { canonical: "https://maxperformance100.com/about" },
}

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1e40af 100%)",
        padding: "5rem 1.5rem",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>Our Mission</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "1rem" }}>
            We Help US Freelancers Build Businesses That <span style={{ color: "#f59e0b" }}>Actually Pay Them Well</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.1rem", lineHeight: 1.7 }}>
            MaxPerformance100 creates practical tools, templates, and systems for US freelancers and agencies who are tired of absorbing extra work, chasing late payments, and feeling taken advantage of by clients.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "5rem 1.5rem" }}>

        <div style={{ marginBottom: "3.5rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>The Problem We Solve</h2>
          <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1e40af, #f59e0b)", borderRadius: "9999px", marginBottom: "1.5rem" }} />
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1rem", marginBottom: "1rem" }}>
            The US has over 60 million freelancers and independent contractors — and the vast majority of them have never received a single day of formal business training. They learned their craft: design, development, writing, marketing, consulting. But no one taught them how to write a scope of work, set a revision limit, charge a deposit, or chase an overdue invoice.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1rem", marginBottom: "1rem" }}>
            The result is that skilled, talented professionals are regularly taken advantage of — not because their clients are bad people, but because there is no system in place to define expectations, protect deliverables, and enforce professional standards.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1rem" }}>
            MaxPerformance100 exists to close that gap. We create the business systems that freelance schools don&apos;t teach.
          </p>
        </div>

        <div style={{ marginBottom: "3.5rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>What We Believe</h2>
          <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1e40af, #f59e0b)", borderRadius: "9999px", marginBottom: "1.5rem" }} />
          <div style={{ display: "grid", gap: "1.25rem" }}>
            {[
              { icon: "💼", title: "Professionalism is learnable", desc: "Running a professional freelance business is a skill — and like every skill, it can be learned quickly with the right tools and guidance." },
              { icon: "📄", title: "Documentation prevents disputes", desc: "The root cause of 90% of client management problems is a lack of written agreements. A clear scope of work eliminates more disputes than any contract clause." },
              { icon: "💰", title: "You deserve to be paid on time", desc: "Late payments are not an inevitable part of freelance life. They are a systemic problem that the right payment terms and follow-up process can solve permanently." },
              { icon: "🛡️", title: "Protection is not confrontational", desc: "Professional client management is not about being aggressive or difficult. It is about setting clear expectations and maintaining them consistently." },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", padding: "1.25rem", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "0.875rem" }}>
                <span style={{ fontSize: "1.75rem", flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontWeight: 700, color: "#0f172a", marginBottom: "0.3rem" }}>{title}</div>
                  <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "3.5rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>Our Product</h2>
          <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1e40af, #f59e0b)", borderRadius: "9999px", marginBottom: "1.5rem" }} />
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1rem", marginBottom: "1rem" }}>
            The <strong>Client Scope & Protection Playbook</strong> is a complete 6-module business system for US freelancers and agencies. It covers the entire client lifecycle — from the first inquiry to the final testimonial — with fill-in-the-blank templates, copy-ready email scripts, and step-by-step checklists.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1rem", marginBottom: "1.5rem" }}>
            At $47 for a one-time download, it is the highest-ROI investment a freelancer can make. Most users recover their investment in the first project where they enforce a revision limit or charge for a scope change.
          </p>
          <Link href="/product" className="btn-primary">Get the Playbook — $47</Link>
        </div>

        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "1.25rem", padding: "2rem", marginBottom: "3rem" }}>
          <h3 style={{ fontWeight: 800, color: "#0f172a", marginBottom: "0.75rem" }}>Contact Us</h3>
          <p style={{ color: "#374151", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>
            For product support, refund requests, or any questions about the Client Scope & Protection Playbook:
          </p>
          <p style={{ color: "#1e40af", fontWeight: 700, fontSize: "1rem" }}>support.maxperformance100@gmail.com</p>
          <p style={{ color: "#64748b", fontSize: "0.85rem", marginTop: "0.5rem" }}>We respond within 1–2 business days.</p>
        </div>
      </div>
    </>
  )
}
