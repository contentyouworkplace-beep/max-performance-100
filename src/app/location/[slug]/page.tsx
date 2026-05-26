import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { cities } from "@/data/cities"
import FAQAccordion from "@/components/FAQAccordion"
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/SchemaMarkup"

export async function generateStaticParams() {
  return cities.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const city = cities.find(c => c.slug === slug)
  if (!city) return {}
  return {
    title: `Freelancer Resources in ${city.name}, ${city.stateCode} — Scope of Work, Contracts & Client Protection`,
    description: `Free resources for freelancers and agencies in ${city.name}, ${city.state}. Scope of work templates, freelance contracts, payment terms, client intake forms, and scope creep prevention tools tailored for the ${city.name} market.`,
    keywords: [`freelancer ${city.name}`, `scope of work template ${city.name}`, `freelance contract ${city.name}`, `client protection ${city.name} freelancers`],
    alternates: { canonical: `https://maxperformance100.com/location/${slug}` },
    openGraph: {
      title: `Freelancer Resources in ${city.name}, ${city.stateCode} | MaxPerformance100`,
      description: `Professional tools for freelancers and agencies in ${city.name}, ${city.state}. Templates, contracts, and scripts to protect your income.`,
      type: "website",
      url: `https://maxperformance100.com/location/${slug}`,
    },
  }
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const city = cities.find(c => c.slug === slug)
  if (!city) notFound()

  const faqs = [
    {
      q: `Do freelancers in ${city.name} need a written scope of work?`,
      a: `Absolutely. ${city.name} is ${city.freelanceContext}. In any competitive market, a written scope of work is what separates professional freelancers from amateurs. It defines deliverables, sets revision limits, protects your payment, and prevents the most common client disputes. The Client Scope & Protection Playbook provides a fill-in-the-blank scope of work template that ${city.name} freelancers can customize and send to clients in under 30 minutes.`
    },
    {
      q: `What are the most common scope creep problems for ${city.name} freelancers?`,
      a: `Freelancers across the US — including ${city.name} — consistently report the same scope creep issues: clients requesting extra revisions beyond the agreed limit, adding deliverables not listed in the original brief, treating phone calls and strategy sessions as free consultation, and requesting post-delivery support without a maintenance agreement. All of these are preventable with the right scope of work and revision policy in place.`
    },
    {
      q: `How much do ${city.name} freelancers lose to unbilled scope creep?`,
      a: `The national average is $7,800–$15,600 per year for independent freelancers and up to $60,000 for small agencies. In major markets like ${city.name}, where project budgets tend to be higher, the per-project losses can be even more significant. The Client Scope & Protection Playbook pays for itself on the first project where you enforce a revision limit or charge for a scope change.`
    },
    {
      q: `Is the Client Scope & Protection Playbook relevant for ${city.name}'s freelance market?`,
      a: `Yes — the system is designed for US freelancers regardless of location. The templates, scripts, and checklists are universal and work for any service-based freelancer or agency. The principles of scope definition, revision limits, and payment protection are equally important whether you are based in ${city.name} or anywhere else in the US.`
    },
    {
      q: `What should freelancers in ${city.name} include in their client contracts?`,
      a: `Every freelance contract for ${city.name} professionals should include: a detailed scope of work with explicit exclusions, a revision limit policy with clear definition of what constitutes a revision, a payment structure with a deposit requirement, payment terms with a late payment clause, intellectual property rights transfer on full payment, and a termination clause. The Client Scope & Protection Playbook provides all of these elements in customizable Word format.`
    },
    {
      q: `How can ${city.name} freelancers get paid faster?`,
      a: `The most effective approach combines three elements: a 50% deposit requirement before starting any work, milestone-based billing for larger projects, and a consistent follow-up system using escalating payment reminder scripts. The Client Scope & Protection Playbook includes four professionally written payment reminder emails — from a friendly first nudge to a formal final notice — that ${city.name} freelancers can use immediately.`
    },
  ]

  const resources = [
    { icon: "📄", title: "Scope of Work Template", desc: "Fill-in-the-blank SOW with exclusions clause", href: "/resources/scope-of-work-template-freelancer" },
    { icon: "📋", title: "Client Intake Form", desc: "8-question form to filter bad clients early", href: "/resources/client-intake-form-template" },
    { icon: "🔄", title: "Revision Policy Template", desc: "Limit revisions and charge for extras", href: "/resources/revision-policy-template" },
    { icon: "💰", title: "Payment Terms Template", desc: "Deposit structure and invoice scripts", href: "/resources/payment-terms-for-freelancers" },
    { icon: "🚩", title: "Client Red Flags Checklist", desc: "Spot nightmare clients before you start", href: "/resources/client-red-flags" },
    { icon: "🎯", title: "Freelance Contract Template", desc: "Professional agreement for every project", href: "/resources/freelancer-contract-template" },
  ]

  const nearbyFilter = cities.filter(c => c.stateCode === city.stateCode && c.slug !== slug).slice(0, 6)

  return (
    <>
      <FAQSchema faqs={faqs} />
      <ArticleSchema
        title={`Freelancer Resources in ${city.name}, ${city.stateCode}`}
        description={`Professional tools for freelancers and agencies in ${city.name}, ${city.state}.`}
        url={`/location/${slug}`}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Locations", url: "/location" },
        { name: `${city.name}, ${city.stateCode}`, url: `/location/${slug}` }
      ]} />

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1e40af 100%)",
        padding: "4rem 1.5rem 5rem",
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1rem" }}>
            <Link href="/location" style={{ color: "#94a3b8", fontSize: "0.85rem", textDecoration: "none" }}>All Cities</Link>
            <span style={{ color: "#475569", margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>{city.name}, {city.stateCode}</span>
          </div>
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>{city.name}, {city.stateCode}</span>
          <h1 style={{
            fontSize: "clamp(1.75rem, 5vw, 2.75rem)", fontWeight: 900, color: "#fff",
            lineHeight: 1.15, marginBottom: "1.25rem"
          }}>
            Freelancer Resources &amp; Client Protection Tools in {city.name}, {city.stateCode}
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem", maxWidth: "700px", lineHeight: 1.7, marginBottom: "2rem" }}>
            {city.name} is {city.freelanceContext}. This page provides every professional tool, template, and script that {city.name} freelancers and agencies need to protect their income and manage clients professionally.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="/product" className="btn-primary" style={{ fontSize: "0.9rem" }}>Get the Playbook — $47</Link>
            <Link href="#resources" className="btn-secondary" style={{ fontSize: "0.9rem" }}>Browse Resources ↓</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#f8fafc", padding: "3rem 1.5rem", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", textAlign: "center" }}>
          {[
            { value: city.population, label: `Population of ${city.name}` },
            { value: "$7,800+", label: "Average annual loss to scope creep per freelancer" },
            { value: "57%", label: "Of agencies lose $1,000–$5,000/month to unbillable work" },
            { value: "$47", label: "One-time investment to protect your entire business" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div style={{ fontSize: "2.25rem", fontWeight: 900, color: "#1e40af" }}>{value}</div>
              <p style={{ color: "#64748b", fontSize: "0.875rem", marginTop: "0.4rem", lineHeight: 1.5 }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 1.5rem" }}>

        {/* INTRO */}
        <div style={{ maxWidth: "820px", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
            Why {city.name} Freelancers Need Professional Client Protection Systems
          </h2>
          <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1e40af, #f59e0b)", borderRadius: "9999px", marginBottom: "1.5rem" }} />
          <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.975rem", marginBottom: "1rem" }}>
            {city.name} is {city.freelanceContext}. With this level of activity comes intense competition — and the pressure to be flexible with clients can lead to the most expensive mistakes independent professionals make: absorbing extra work without charging for it, accepting project creep without documentation, and waiting too long to chase overdue invoices.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.975rem", marginBottom: "1rem" }}>
            The freelancers and agencies in {city.name} who thrive long-term are not necessarily the most talented — they are the most professional. They have written scopes of work. They enforce revision limits. They charge deposits. They use payment reminder systems. They offboard clients professionally and collect testimonials that generate referrals.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.975rem" }}>
            The resources on this page — all drawn from the <strong>Client Scope & Protection Playbook</strong> — are designed specifically to help {city.name} freelancers and agencies build these systems quickly, professionally, and permanently.
          </p>
        </div>

        {/* RESOURCES GRID */}
        <div id="resources" style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.5rem" }}>
            Free Resources for {city.name}, {city.stateCode} Freelancers
          </h2>
          <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1e40af, #f59e0b)", borderRadius: "9999px", marginBottom: "1.5rem" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {resources.map(({ icon, title, desc, href }) => (
              <Link key={title} href={href} style={{
                display: "block", padding: "1.5rem", background: "#fff", border: "1px solid #e2e8f0",
                borderRadius: "1rem", textDecoration: "none", transition: "all 0.2s"
              }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{icon}</div>
                <div style={{ fontWeight: 700, color: "#0f172a", fontSize: "1rem", marginBottom: "0.35rem" }}>{title}</div>
                <div style={{ color: "#64748b", fontSize: "0.875rem" }}>{desc}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* FULL GUIDE */}
        <div style={{ maxWidth: "820px", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
            Scope of Work Templates for {city.name} Freelancers
          </h2>
          <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1e40af, #f59e0b)", borderRadius: "9999px", marginBottom: "1.5rem" }} />
          <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.975rem", marginBottom: "1rem" }}>
            A scope of work (SOW) is the foundational document of any professional freelance project. It defines what you will deliver, what is explicitly excluded, how many revisions are included, what the payment structure is, and what the timeline looks like. In {city.name}&apos;s competitive freelance market, sending a professional SOW signals to clients that you run a serious business.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.975rem", marginBottom: "1rem" }}>
            Without a written scope of work, every client conversation about project boundaries becomes a negotiation — and freelancers almost always lose those negotiations because they feel awkward setting limits without documentation to back them up. With a proper SOW, the document does the boundary-setting for you, professionally and without conflict.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.975rem" }}>
            The scope of work template in the <strong>Client Scope & Protection Playbook</strong> is a fill-in-the-blank Word document designed specifically for {city.name} freelancers and agency owners. It includes an exclusions clause, revision limit statement, payment terms summary, and a client approval signature section — everything you need to protect yourself professionally.
          </p>
        </div>

        <div style={{ maxWidth: "820px", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
            Client Contract Templates for {city.name} Agencies & Freelancers
          </h2>
          <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1e40af, #f59e0b)", borderRadius: "9999px", marginBottom: "1.5rem" }} />
          <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.975rem", marginBottom: "1rem" }}>
            A professional client contract is not just a legal formality — it is a business communication tool that sets clear expectations from day one. In {city.name}, where freelancers often work with sophisticated corporate clients, having a proper contract in place is the difference between being treated as a trusted vendor and being treated as an afterthought.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.975rem", marginBottom: "1rem" }}>
            The most important clauses in any freelance contract include: the scope definition, the revision policy, the payment terms, the intellectual property assignment, and the termination clause. The <strong>Client Scope & Protection Playbook</strong> provides all of these in an editable format that {city.name} freelancers can customize and start using immediately.
          </p>
        </div>

        <div style={{ maxWidth: "820px", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
            Payment Protection for {city.name} Freelancers — How to Get Paid on Time
          </h2>
          <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1e40af, #f59e0b)", borderRadius: "9999px", marginBottom: "1.5rem" }} />
          <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.975rem", marginBottom: "1rem" }}>
            Late payments are one of the most stressful aspects of freelance life — but they are largely preventable with the right systems. For {city.name} freelancers, a three-part payment protection strategy is the most effective approach: a deposit requirement, milestone billing, and a consistent payment follow-up system.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.975rem", marginBottom: "1rem" }}>
            Start by requiring 50% of the project fee upfront before you begin any work. This one policy alone eliminates the worst payment situations — clients who disappear after delivery, clients who dispute final payment after receiving all files, and clients who run out of budget mid-project.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.975rem" }}>
            The <strong>Client Scope & Protection Playbook</strong> includes four escalating payment reminder scripts — designed to recover overdue invoices professionally without burning client relationships. {city.name} freelancers consistently report recovering thousands in outstanding invoices within the first month of using the system.
          </p>
        </div>

        {/* INLINE CTA */}
        <div style={{
          background: "linear-gradient(135deg, #1e40af, #1e3a8a)", borderRadius: "1.25rem",
          padding: "3rem 2rem", textAlign: "center", marginBottom: "4rem"
        }}>
          <h3 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            Built for {city.name} Freelancers — Get the Complete System
          </h3>
          <p style={{ color: "#cbd5e1", fontSize: "0.95rem", marginBottom: "1.75rem", maxWidth: "540px", margin: "0 auto 1.75rem" }}>
            Every template, script, and checklist {city.name} freelancers need to stop scope creep, protect payments, and run a professional client business — in one $47 download.
          </p>
          <Link href="/product" className="btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}>
            Download the Playbook — $47
          </Link>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
            Frequently Asked Questions — {city.name}, {city.stateCode} Freelancers
          </h2>
          <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1e40af, #f59e0b)", borderRadius: "9999px", marginBottom: "1.5rem" }} />
          <FAQAccordion faqs={faqs} />
        </div>

        {/* NEARBY CITIES */}
        {nearbyFilter.length > 0 && (
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "1rem" }}>
              Other Cities in {city.state}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {nearbyFilter.map(c => (
                <Link key={c.slug} href={`/location/${c.slug}`} style={{
                  padding: "0.5rem 1rem", background: "#f1f5f9", border: "1px solid #e2e8f0",
                  borderRadius: "9999px", textDecoration: "none", color: "#374151", fontSize: "0.875rem", fontWeight: 500
                }}>
                  {c.name}, {c.stateCode}
                </Link>
              ))}
              <Link href="/location" style={{
                padding: "0.5rem 1rem", background: "#1e40af", borderRadius: "9999px",
                textDecoration: "none", color: "#fff", fontSize: "0.875rem", fontWeight: 700
              }}>
                View All Cities →
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
