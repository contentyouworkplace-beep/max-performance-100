import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { keywords, keywordCategories } from "@/data/keywords"
import { BreadcrumbSchema } from "@/components/SchemaMarkup"

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

const slugToCatMap = Object.fromEntries(
  Object.entries(catSlugMap).map(([cat, slug]) => [slug, cat])
)

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

const catDescriptions: Record<string, string> = {
  "Scope of Work Templates": "Fill-in-the-blank scope of work templates for freelancers and agencies. Define deliverables, timelines, and boundaries before work begins.",
  "Scope Creep & Prevention": "Proven strategies and scripts to prevent scope creep, handle out-of-scope requests professionally, and protect your project budget.",
  "Client Contracts & Agreements": "Professional contract templates for freelancers — service agreements, work-for-hire clauses, kill fees, and client protection language.",
  "Payment Terms & Invoicing": "Payment terms, invoice templates, and scripts for getting paid on time. Late payment policies, deposit structures, and collection strategies.",
  "Client Intake & Discovery": "Client intake forms, discovery call scripts, and onboarding checklists to qualify leads and set expectations before projects start.",
  "Freelancer Protection & Red Flags": "Red flag checklists, client warning signs, and protection strategies to avoid problem clients and nightmare projects.",
  "Revision Policies & Communication": "Revision policy templates, round limits, and communication scripts to manage change requests professionally.",
  "Client Management & Communication": "Email templates, communication workflows, and client management systems for smoother projects and better relationships.",
  "Legal & Protection": "Legal guides for freelancers — contract law basics, copyright, IP rights, dispute resolution, and payment protection strategies.",
}

export async function generateStaticParams() {
  return Object.values(catSlugMap).map(cat => ({ cat }))
}

export async function generateMetadata({ params }: { params: Promise<{ cat: string }> }): Promise<Metadata> {
  const { cat } = await params
  const categoryName = slugToCatMap[cat]
  if (!categoryName) return {}

  const count = keywords.filter(k => k.category === categoryName).length
  const title = `${categoryName} — ${count} Free Guides for US Freelancers | MaxPerformance100`
  const description = catDescriptions[categoryName] ?? `Browse ${count} free ${categoryName.toLowerCase()} guides and templates for US freelancers.`

  return {
    title,
    description,
    alternates: { canonical: `https://maxperformance100.com/resources/category/${cat}` },
    openGraph: {
      title,
      description,
      url: `https://maxperformance100.com/resources/category/${cat}`,
      type: "website",
    },
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params
  const categoryName = slugToCatMap[cat]
  if (!categoryName) notFound()

  const items = keywords
    .filter(k => k.category === categoryName)
    .sort((a, b) => b.volume - a.volume)

  const icon = catIcons[categoryName] ?? "📌"
  const description = catDescriptions[categoryName] ?? ""

  const otherCategories = keywordCategories
    .filter(c => c !== categoryName)
    .map(c => ({ name: c, slug: catSlugMap[c], icon: catIcons[c] ?? "📌" }))

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Resources", url: "/resources" },
        { name: categoryName, url: `/resources/category/${cat}` },
      ]} />

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1e40af 100%)", padding: "4rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1rem" }}>
            <Link href="/resources" style={{ color: "#94a3b8", fontSize: "0.85rem", textDecoration: "none" }}>Resources</Link>
            <span style={{ color: "#475569", margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#64748b", fontSize: "0.85rem" }}>{categoryName}</span>
          </div>
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>{icon}</div>
          <h1 style={{ fontSize: "clamp(1.75rem, 5vw, 2.75rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            {categoryName}
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem", maxWidth: "680px", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            {description}
          </p>
          <span className="badge">{items.length} Free Guides & Templates</span>
        </div>
      </section>

      {/* RESOURCES GRID */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "0.875rem", marginBottom: "4rem" }}>
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

        {/* OTHER CATEGORIES */}
        <div>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem" }}>Browse Other Categories</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "0.75rem" }}>
            {otherCategories.map(({ name, slug, icon: ic }) => (
              <Link
                key={slug}
                href={`/resources/category/${slug}`}
                style={{
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  padding: "1rem 1.25rem", background: "#f8fafc",
                  border: "1px solid #e2e8f0", borderRadius: "0.75rem",
                  textDecoration: "none", color: "#0f172a", fontWeight: 600, fontSize: "0.875rem",
                  transition: "border-color 0.15s",
                }}
              >
                <span style={{ fontSize: "1.25rem" }}>{ic}</span>
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
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
