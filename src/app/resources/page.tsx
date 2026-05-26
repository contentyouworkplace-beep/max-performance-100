import type { Metadata } from "next"
import Link from "next/link"
import { keywords, keywordCategories } from "@/data/keywords"

export const metadata: Metadata = {
  title: "Free Freelancer Resources & Guides — Scope of Work, Contracts, Payments | MaxPerformance100",
  description:
    "Browse 220+ free guides and templates for US freelancers. Scope of work templates, freelance contracts, payment terms, client intake forms, scope creep prevention, and more.",
  alternates: { canonical: "https://maxperformance100.com/resources" },
}

const catSlugs: Record<string, string> = {
  "Scope of Work Templates": "scope-of-work-templates",
  "Scope Creep & Prevention": "scope-creep-prevention",
  "Client Contracts & Agreements": "client-contracts",
  "Payment Terms & Invoicing": "payment-terms",
  "Client Intake & Discovery": "client-intake",
  "Freelancer Protection & Red Flags": "freelancer-protection",
  "Revision Policies & Communication": "revision-policies",
  "Client Management & Communication": "client-management",
  "Legal & Protection": "legal-protection",
}

const catIcons: Record<string, string> = {
  "Scope of Work Templates": "📄",
  "Scope Creep & Prevention": "🛡️",
  "Client Contracts & Agreements": "📋",
  "Payment Terms & Invoicing": "💰",
  "Client Intake & Discovery": "🔍",
  "Freelancer Protection & Red Flags": "🚩",
  "Revision Policies & Communication": "🔄",
  "Client Management & Communication": "💬",
  "Legal & Protection": "⚖️",
}

export default function ResourcesPage() {
  const byCategory = keywordCategories.map(cat => ({
    cat,
    items: keywords.filter(k => k.category === cat).sort((a, b) => b.volume - a.volume),
  }))

  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1e40af 100%)", padding: "4rem 1.5rem 5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>220+ Guides & Templates</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "1rem" }}>
            Free Freelancer Resources for US Professionals
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.7 }}>
            In-depth guides, fill-in-the-blank templates, and copy-ready scripts for every client management challenge. Everything US freelancers need to run a professional business.
          </p>
        </div>
      </section>

      <section style={{ background: "#f8fafc", padding: "2rem 1.5rem", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", justifyContent: "center" }}>
            {keywordCategories.map(cat => (
              <a key={cat} href={`#cat-${catSlugs[cat]}`} className="city-pill">
                {catIcons[cat]} {cat}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 1.5rem" }}>
        {byCategory.map(({ cat, items }) => (
          <section key={cat} id={`cat-${catSlugs[cat]}`} style={{ marginBottom: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "1.75rem" }}>{catIcons[cat]}</span>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>{cat}</h2>
            </div>
            <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1e40af, #f59e0b)", borderRadius: "9999px", marginBottom: "1.5rem" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "0.875rem" }}>
              {items.map(({ slug, keyword, volume }) => (
                <Link key={slug} href={`/resources/${slug}`} className="kw-link">
                  <span>{keyword}</span>
                  {volume >= 1000 && (
                    <span style={{ fontSize: "0.7rem", color: "#1e40af", background: "#eff6ff", padding: "0.15rem 0.5rem", borderRadius: "9999px", fontWeight: 700, flexShrink: 0, marginLeft: "0.5rem" }}>
                      {volume >= 2000 ? "🔥" : "📈"}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section style={{ background: "linear-gradient(135deg, #1e40af, #1e3a8a)", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 800, marginBottom: "1rem" }}>
            Get Every Template & Script in One Download
          </h2>
          <p style={{ color: "#cbd5e1", fontSize: "1rem", marginBottom: "2rem" }}>
            The Client Scope & Protection Playbook gives you every fill-in-the-blank template, email script, and checklist in one professionally organized system.
          </p>
          <Link href="/product" className="btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}>
            Download the Complete Playbook — $47
          </Link>
        </div>
      </section>
    </>
  )
}
