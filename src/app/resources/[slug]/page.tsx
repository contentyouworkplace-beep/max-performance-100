import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { keywords } from "@/data/keywords"
import { generateKeywordContent } from "@/lib/generateKeywordContent"
import FAQAccordion from "@/components/FAQAccordion"
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/SchemaMarkup"

export async function generateStaticParams() {
  return keywords.map(k => ({ slug: k.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const kw = keywords.find(k => k.slug === slug)
  if (!kw) return {}
  const content = generateKeywordContent(kw.keyword, kw.category, kw.slug)
  return {
    title: content.title,
    description: content.metaDescription,
    keywords: [kw.keyword, "freelancer tools", "scope of work template", "client protection", "MaxPerformance100"],
    alternates: { canonical: `https://maxperformance100.com/resources/${slug}` },
    openGraph: { title: content.title, description: content.metaDescription, url: `https://maxperformance100.com/resources/${slug}`, type: "article" },
  }
}

const catSlugMap: Record<string, string> = {
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

export default async function KeywordPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const kw = keywords.find(k => k.slug === slug)
  if (!kw) notFound()

  const content = generateKeywordContent(kw.keyword, kw.category, kw.slug)
  const related = keywords.filter(k => k.category === kw.category && k.slug !== slug).slice(0, 6)
  const catSlug = catSlugMap[kw.category] ?? kw.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")

  return (
    <>
      <FAQSchema faqs={content.faqs} />
      <ArticleSchema title={content.title} description={content.metaDescription} url={`/resources/${slug}`} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Resources", url: "/resources" },
        { name: kw.category, url: `/resources/category/${catSlug}` },
        { name: kw.keyword, url: `/resources/${slug}` },
      ]} />

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1e40af 100%)", padding: "4rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1rem" }}>
            <Link href="/resources" style={{ color: "#94a3b8", fontSize: "0.85rem", textDecoration: "none" }}>Resources</Link>
            <span style={{ color: "#475569", margin: "0 0.5rem" }}>›</span>
            <Link href={`/resources/category/${catSlug}`} style={{ color: "#94a3b8", fontSize: "0.85rem", textDecoration: "none" }}>{kw.category}</Link>
          </div>
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>{kw.category}</span>
          <h1 style={{ fontSize: "clamp(1.75rem, 5vw, 2.75rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
            {content.h1}
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem", maxWidth: "700px", lineHeight: 1.7, marginBottom: "2rem" }}>
            A complete guide for US freelancers and agencies — with practical templates, scripts, and strategies you can implement immediately.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="/product" className="btn-primary" style={{ fontSize: "0.9rem", padding: "0.75rem 1.5rem" }}>Get the Complete Playbook — $47</Link>
            <Link href="#guide" className="btn-secondary" style={{ fontSize: "0.9rem", padding: "0.75rem 1.5rem" }}>Read the Full Guide ↓</Link>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 1.5rem", display: "grid", gridTemplateColumns: "1fr 320px", gap: "3rem", alignItems: "start" }} id="guide" className="resource-grid">
        {/* ARTICLE */}
        <article>
          {/* Intro */}
          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "1rem", padding: "1.5rem 2rem", marginBottom: "2.5rem" }}>
            <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#1e40af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>Overview</div>
            {content.intro.split("\n\n").map((para, i) => (
              <p key={i} style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.975rem", marginBottom: i < content.intro.split("\n\n").length - 1 ? "1rem" : 0 }}
                dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
              />
            ))}
          </div>

          {/* Table of Contents */}
          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "0.75rem", padding: "1.25rem 1.5rem", marginBottom: "2.5rem" }}>
            <div style={{ fontWeight: 700, color: "#1e40af", marginBottom: "0.75rem", fontSize: "0.9rem" }}>📑 Table of Contents</div>
            <ol style={{ margin: 0, paddingLeft: "1.5rem" }}>
              {content.sections.map(({ heading }, i) => (
                <li key={i} style={{ marginBottom: "0.35rem" }}>
                  <a href={`#section-${i}`} style={{ color: "#2563eb", fontSize: "0.875rem", textDecoration: "none" }}>{heading}</a>
                </li>
              ))}
              <li><a href="#faq" style={{ color: "#2563eb", fontSize: "0.875rem", textDecoration: "none" }}>Frequently Asked Questions</a></li>
            </ol>
          </div>

          {/* Sections */}
          {content.sections.map(({ heading, body }, i) => (
            <div key={i} id={`section-${i}`} style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem", lineHeight: 1.3 }}>{heading}</h2>
              <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1e40af, #f59e0b)", borderRadius: "9999px", marginBottom: "1.25rem" }} />
              {body.split("\n\n").map((para, j) => (
                <p key={j} style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.975rem", marginBottom: "1rem" }}
                  dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
                />
              ))}
            </div>
          ))}

          {/* Inline CTA */}
          <div style={{ background: "linear-gradient(135deg, #1e40af, #1e3a8a)", borderRadius: "1.25rem", padding: "2.5rem", textAlign: "center", marginBottom: "3rem" }}>
            <h3 style={{ color: "#fff", fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.75rem" }}>
              Get Every Template, Script & Checklist — $47
            </h3>
            <p style={{ color: "#cbd5e1", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              The Client Scope & Protection Playbook includes a complete {kw.keyword} system plus 5 other modules covering your entire client lifecycle.
            </p>
            <Link href="/product" className="btn-primary">Download Now — $47 One-Time</Link>
          </div>

          {/* FAQ */}
          <div id="faq" style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.75rem" }}>Frequently Asked Questions</h2>
            <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1e40af, #f59e0b)", borderRadius: "9999px", marginBottom: "1.5rem" }} />
            <FAQAccordion faqs={content.faqs} />
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "1rem" }}>Related Resources</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "0.75rem" }}>
                {related.map(r => (
                  <Link key={r.slug} href={`/resources/${r.slug}`} className="related-kw-link">{r.keyword}</Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* SIDEBAR */}
        <aside style={{ position: "sticky", top: "80px" }}>
          <div style={{ background: "linear-gradient(135deg, #0f172a, #1e3a8a)", borderRadius: "1.25rem", padding: "2rem", marginBottom: "1.5rem", textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🛡️</div>
            <h3 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.75rem", lineHeight: 1.3 }}>
              Stop Losing $7,800+/Year to Scope Creep
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              Get the complete 6-module client protection system — templates, scripts, and checklists.
            </p>
            <Link href="/product" className="btn-primary" style={{ display: "block", fontSize: "0.9rem", padding: "0.875rem 1rem" }}>
              Get the Playbook — $47
            </Link>
            <p style={{ color: "#475569", fontSize: "0.75rem", marginTop: "0.75rem" }}>✓ 14-day guarantee &nbsp;✓ Instant download</p>
          </div>

          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "1rem", padding: "1.5rem" }}>
            <h4 style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.9rem", marginBottom: "1rem" }}>What&apos;s in the Playbook:</h4>
            {["📋 Client intake & discovery form", "📄 Scope of work template", "🔄 Revision policy system", "💰 Payment terms & scripts", "✅ Mid-project check-in", "🎯 Clean offboarding system", "📧 13 email scripts"].map(item => (
              <div key={item} style={{ fontSize: "0.85rem", color: "#374151", marginBottom: "0.5rem" }}>{item}</div>
            ))}
          </div>
        </aside>
      </div>
    </>
  )
}
