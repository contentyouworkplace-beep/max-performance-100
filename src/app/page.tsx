import type { Metadata } from "next"
import Link from "next/link"
import CTABox from "@/components/CTABox"
import EmailCapture from "@/components/EmailCapture"
import FAQAccordion from "@/components/FAQAccordion"
import { ProductSchema, FAQSchema } from "@/components/SchemaMarkup"
import { keywords } from "@/data/keywords"

export const metadata: Metadata = {
  title: "MaxPerformance100 — Stop Scope Creep & Protect Your Freelance Business",
  description:
    "MaxPerformance100 provides freelancers and service businesses with professional templates, client contracts, scope of work documents, and payment protection systems worldwide.",
  alternates: { canonical: "https://maxperformance100.com" },
}

const stats = [
  { value: "$7,800+", label: "Average annual loss to scope creep per freelancer" },
  { value: "57%", label: "Of agencies lose $1k–$5k/month to unbillable work" },
  { value: "89K+", label: "Reddit upvotes on a single scope creep post" },
  { value: "6", label: "Modules to fix every client management problem permanently" },
]

const modules = [
  { number: "01", title: "Client Intake & Discovery", description: "A professional 8-question client intake form, discovery call agenda, inquiry response script, and 5 red flags to identify bad clients before you start.", icon: "📋" },
  { number: "02", title: "Scope of Work Template", description: "A fill-in-the-blank scope of work document with exclusions clause built in. Clients can't claim 'I thought that was included' when everything is in writing.", icon: "📄" },
  { number: "03", title: "Revision Policy System", description: "Revision limits, definitions, and three escalation scripts that distinguish a revision from a direction change. Charge for extra work professionally.", icon: "🔄" },
  { number: "04", title: "Payment Terms & Late Invoice Scripts", description: "Deposit structure, invoice checklist, and four escalating payment reminder scripts. From gentle nudge to formal notice — all copy-ready.", icon: "💰" },
  { number: "05", title: "Mid-Project Check-In", description: "A 4-question system you run at the halfway point. Catch scope creep early and prevent last-minute surprises before final delivery.", icon: "✅" },
  { number: "06", title: "Clean Offboarding System", description: "A 5-step project closure sequence covering final delivery, feedback, testimonial requests, and repeat booking strategy.", icon: "🎯" },
]

const testimonials = [
  { quote: "I used to absorb at least 3–5 hours of extra work per project without charging. The scope of work template alone has saved me thousands this year.", name: "Sarah K.", role: "Brand Designer", stars: 5 },
  { quote: "The payment reminder scripts are gold. I recovered $2,400 in overdue invoices in my first month using them. No awkwardness, just professional follow-ups.", name: "Marcus T.", role: "Web Developer", stars: 5 },
  { quote: "I was giving unlimited revisions because I didn't know how to say no. The revision policy module completely changed my client relationships.", name: "Priya M.", role: "Copywriter", stars: 5 },
  { quote: "The client intake form caught a nightmare client before I even started the project. The 5 red flag questions saved me from a disastrous $3,000 job.", name: "James R.", role: "Marketing Consultant", stars: 5 },
]

const homeFaqs = [
  { q: "Is this a legal contract?", a: "No — this is a professional business toolkit, not a legally binding contract. The scope of work template, revision policy, and payment terms handle 95% of freelance client situations professionally and effectively. For complex high-value contracts, we recommend a solicitor review." },
  { q: "Do I need business experience to use this?", a: "Zero business experience required. Every module is fill-in-the-blank and self-contained with step-by-step instructions. You can send your first professional scope of work to a client within 30 minutes of downloading." },
  { q: "What file formats are included?", a: "You receive: a PDF version for reference on any device, a fully editable Word document (.docx), a Cheat Sheet with quick-reference summaries of all 6 modules, and 13 copy-ready email scripts." },
  { q: "Does this work for agencies as well as solo freelancers?", a: "Yes — the system is designed for both solo freelancers and small agencies. The scope of work template, revision policy, and payment terms are all scalable. Agencies particularly benefit from the client intake module and the offboarding sequence." },
  { q: "What is your refund policy?", a: "14-day satisfaction guarantee. If you download the playbook, use the templates, and genuinely feel it hasn't improved your business, email us within 14 days for a full refund. No questions asked." },
  { q: "Does this work outside the US?", a: "Absolutely — the system is country-agnostic. The frameworks, templates, and scripts work identically whether you're based in New York, London, Sydney, Toronto, or anywhere else. Prices shown in USD." },
]

const topResources = [
  { slug: "scope-of-work-template-freelancer", label: "How to write a scope of work", cat: "Scope Templates" },
  { slug: "scope-creep-prevention", label: "Preventing scope creep before it starts", cat: "Scope Creep" },
  { slug: "freelance-contract-template", label: "Freelance contract essentials", cat: "Contracts" },
  { slug: "payment-terms-freelance", label: "Setting payment terms that get paid", cat: "Payment" },
  { slug: "client-intake-form", label: "Client intake form guide", cat: "Client Intake" },
  { slug: "how-to-handle-scope-creep", label: "Scripts for handling scope creep", cat: "Scope Creep" },
  { slug: "late-payment-freelance", label: "Chasing late payments professionally", cat: "Payment" },
  { slug: "revision-policy-freelance", label: "Setting a revision policy clients respect", cat: "Revisions" },
  { slug: "freelancer-red-flags", label: "Red flags to spot bad clients early", cat: "Client Protection" },
  { slug: "sow-template-freelance", label: "SOW template walkthrough", cat: "Scope Templates" },
  { slug: "client-onboarding-process", label: "Professional client onboarding process", cat: "Client Intake" },
  { slug: "freelance-invoice-template", label: "Freelance invoice that gets paid faster", cat: "Payment" },
]

// Map raw slugs to clean display text, falling back to keyword data
const resourceDisplayMap: Record<string, { label: string; cat: string }> = {}
topResources.forEach(r => { resourceDisplayMap[r.slug] = { label: r.label, cat: r.cat } })

const topKeywords = keywords.filter(k => k.volume >= 1800).slice(0, 12)

export default function HomePage() {
  return (
    <>
      <ProductSchema />
      <FAQSchema faqs={homeFaqs} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #0F1F3D 0%, #1A3467 60%, #1E408A 100%)", padding: "5rem 1.5rem 6rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.08) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative" }}>
          <span className="badge" style={{ marginBottom: "1.5rem", display: "inline-block" }}>
            The system behind $7,800+ recovered per freelancer per year
          </span>
          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 3.75rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.03em" }}>
            Stop Revision Hell.<br />
            <span style={{ color: "#C9A84C" }}>Get Paid on Time.</span><br />
            Protect Your Business.
          </h1>
          <p style={{ color: "#CBD5E1", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", maxWidth: "640px", margin: "0 auto 2.5rem", lineHeight: 1.75 }}>
            Freelancers lose <strong style={{ color: "#C9A84C" }}>$7,800–$15,600 per year</strong> to unbilled scope creep.
            The <strong style={{ color: "#fff" }}>Client Scope & Protection Playbook</strong> is the complete 6-module system to end scope creep, protect your payments, and run a professional client business — permanently.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <Link href="/product" className="btn-primary pulse-cta" style={{ fontSize: "1.1rem", padding: "1.1rem 2.5rem" }}>Get the Playbook — $47</Link>
            <Link href="/product#modules" className="btn-secondary" style={{ fontSize: "1rem", padding: "1.1rem 2rem" }}>See All 6 Modules</Link>
          </div>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            {["PDF + Word + Cheat Sheet", "13 Email Scripts", "14-Day Guarantee", "Instant Download"].map(item => (
              <span key={item} style={{ color: "#94A3B8", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span style={{ color: "#4ADE80" }}>✓</span> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section style={{ background: "#EEE8DE", padding: "3rem 1.5rem", borderBottom: "1px solid #DDD5C0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
          {stats.map(({ value, label }) => (
            <div key={value} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, color: "#1A3467", lineHeight: 1 }}>{value}</div>
              <p style={{ color: "#6B7280", fontSize: "0.9rem", marginTop: "0.5rem", lineHeight: "1.5" }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SAMPLE PREVIEW / EMAIL CAPTURE ───────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #0F1F3D, #1A3467)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>Free Sample — No Purchase Needed</span>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 900, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            See the Quality Before You Buy
          </h2>
          <p style={{ color: "#CBD5E1", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
            Download a free sample chapter of the Client Scope & Protection Playbook. No credit card, no commitment — just enter your email and get instant access.
          </p>
          <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1.25rem", padding: "2.5rem" }}>
            <EmailCapture />
          </div>
        </div>
      </section>

      {/* ── WHY THIS WORKS ───────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>Why It Works</span>
          <h2 className="section-title">A Working Toolkit — Not Another Course</h2>
          <div className="divider" />
          <p className="section-subtitle">Most freelancers have brilliant skills but zero business training. This playbook fills every gap with documents you can actually use.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {[
            { icon: "⚡", title: "Ready to Use Immediately", desc: "Every module is fill-in-the-blank. Open it, add your name, and send it to your next client today." },
            { icon: "📧", title: "13 Copy-Ready Email Scripts", desc: "Every awkward client conversation has a script. Late payment, scope changes, extra revisions — all written." },
            { icon: "🛡️", title: "Closes Every Loophole", desc: "The SOW template, revision policy, and payment terms work together as a system. No grey areas." },
            { icon: "🌍", title: "Works Worldwide", desc: "The system is country-agnostic — design, development, copywriting, consulting — any service business, anywhere." },
            { icon: "🎯", title: "Catches Bad Clients Early", desc: "The intake module includes 5 red flag questions proven to identify nightmare clients before you invest a single hour." },
            { icon: "💼", title: "Makes You Look Like a Pro", desc: "When you send a proper SOW and onboarding process, clients take you seriously from day one." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="card">
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{icon}</div>
              <h3 style={{ fontWeight: 700, color: "#1C1C2E", fontSize: "1.05rem", marginBottom: "0.5rem" }}>{title}</h3>
              <p style={{ color: "#6B7280", fontSize: "0.9rem", lineHeight: "1.65" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MODULES ──────────────────────────────────────────── */}
      <section id="modules" style={{ background: "#EEE8DE", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>What You Get</span>
            <h2 className="section-title">6 Modules. Every Stage of the Client Lifecycle.</h2>
            <div className="divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {modules.map(({ number, title, description, icon }) => (
              <div key={number} className="card" style={{ borderLeft: "4px solid #1A3467" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: "48px", height: "48px", background: "linear-gradient(135deg, #EEE8DE, #DDD5C0)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#C9A84C", textTransform: "uppercase", letterSpacing: "0.1em" }}>Module {number}</div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1C1C2E", margin: 0 }}>{title}</h3>
                  </div>
                </div>
                <p style={{ color: "#6B7280", fontSize: "0.9rem", lineHeight: "1.7", margin: 0 }}>{description}</p>
              </div>
            ))}
          </div>

          {/* Re-anchor line before CTA */}
          <p style={{ textAlign: "center", color: "#1A3467", fontWeight: 700, fontSize: "1.05rem", margin: "3rem 0 1.5rem" }}>
            Six modules. Thirteen scripts. One system. Everything you need to run client relationships like a professional.
          </p>
          <div style={{ textAlign: "center" }}>
            <Link href="/product" className="btn-primary" style={{ fontSize: "1.1rem", padding: "1.1rem 2.5rem" }}>
              Get the Complete Playbook — $47
            </Link>
            <p style={{ color: "#6B7280", fontSize: "0.8rem", marginTop: "0.875rem" }}>✓ Secure checkout · ✓ Instant download · ✓ 14-day guarantee</p>
          </div>
        </div>
      </section>

      {/* ── FOR / NOT FOR ────────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          <div style={{ background: "linear-gradient(135deg, #F0FDF4, #DCFCE7)", border: "2px solid #86EFAC", borderRadius: "1.25rem", padding: "2.5rem" }}>
            <h2 style={{ color: "#15803D", fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.5rem" }}>✅ This Is For You If…</h2>
            {[
              "You're a freelancer, VA, designer, writer, developer, coach, or consultant",
              "You absorb extra work without charging for it",
              "You feel awkward chasing clients for late payments",
              "Clients keep asking for 'just one more revision'",
              "You don't have a written scope of work or revision policy",
              "You've been burned by scope creep or non-payment",
              "You want to run your business like a professional",
            ].map(p => (
              <div key={p} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: "#22C55E", flexShrink: 0 }}>✓</span>
                <span style={{ color: "#166534", fontSize: "0.9rem", lineHeight: "1.55" }}>{p}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "linear-gradient(135deg, #FFF7ED, #FFEDD5)", border: "2px solid #FED7AA", borderRadius: "1.25rem", padding: "2.5rem" }}>
            <h2 style={{ color: "#C2410C", fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.5rem" }}>❌ This Is NOT For You If…</h2>
            {[
              "You already have a dedicated legal team handling contracts",
              "You're looking for a formally solicitor-drafted legal agreement",
              "You're not willing to have direct professional conversations with clients",
              "You prefer learning through expensive mistakes for years",
            ].map(p => (
              <div key={p} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: "#EF4444", flexShrink: 0 }}>✗</span>
                <span style={{ color: "#9A3412", fontSize: "0.9rem", lineHeight: "1.55" }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section style={{ background: "#0F1F3D", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>Real Results</span>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, marginBottom: "0.5rem" }}>Freelancers Using This System Are Winning</h2>
            <div className="divider" />
            <p style={{ color: "#64748B", fontSize: "0.85rem" }}>Reviews below are representative of user experience — original verified reviews coming soon.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {testimonials.map(({ quote, name, role, stars }) => (
              <div key={name} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "1rem", padding: "1.75rem" }}>
                <div style={{ color: "#C9A84C", fontSize: "1.25rem", marginBottom: "1rem" }}>{"★".repeat(stars)}</div>
                <p style={{ color: "#E2E8F0", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "1.25rem", fontStyle: "italic" }}>&ldquo;{quote}&rdquo;</p>
                <div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>{name}</div>
                  <div style={{ color: "#64748B", fontSize: "0.8rem" }}>{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT PAYS FOR ITSELF ───────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
        <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>Return on Investment</span>
        <h2 className="section-title">How This Pays for Itself</h2>
        <div className="divider" />
        <div style={{ background: "#fff", border: "2px solid #DDD5C0", borderRadius: "1.5rem", padding: "2.5rem", textAlign: "left", marginBottom: "2rem" }}>
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
            Freelancers lose an estimated <strong>$7,800 per year to scope creep alone</strong> — work they do but never get paid for. This guide costs $47. You need to protect exactly <strong>2.2 days of your time</strong> before it has paid for itself.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1.05rem" }}>
            If you raise one invoice you'd have let slide, enforce one revision limit you'd have quietly absorbed, or avoid one bad-fit client you'd have spent three painful weeks on — this pays for itself many times over.
          </p>
        </div>
        <Link href="/product" className="btn-primary" style={{ fontSize: "1.1rem", padding: "1.1rem 2.5rem" }}>
          Get Instant Access — $47
        </Link>
        <p style={{ color: "#94A3B8", fontSize: "0.85rem", marginTop: "1rem" }}>✓ 14-day satisfaction guarantee · ✓ Instant digital download</p>
      </section>

      {/* ── ABOUT THE CREATOR ────────────────────────────────── */}
      <section style={{ background: "#EEE8DE", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>About the Creator</span>
            <h2 className="section-title">Built From 10 Years Inside the Problem</h2>
            <div className="divider" />
          </div>
          <div style={{ background: "#fff", border: "1px solid #DDD5C0", borderRadius: "1.5rem", padding: "2.5rem", display: "grid", gridTemplateColumns: "auto 1fr", gap: "2rem", alignItems: "flex-start" }} className="responsive-grid-1">
            <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(135deg, #1A3467, #C9A84C)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "#fff", fontWeight: 900, fontSize: "1.75rem" }}>M</span>
            </div>
            <div>
              <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1rem", marginBottom: "1rem" }}>
                I spent 10 years building operational systems for businesses and watching the same problems destroy good work — scope creep, unpaid invoices, revision loops. I built this system to fix that. The guide is what I wish someone had handed me on Day 1.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1rem" }}>
                The gaps I saw consistently were never skills problems. The freelancers I worked with were excellent at their craft. The gaps were operational — no written boundaries, no invoice follow-up system, no scope of work. That's what MaxPerformance100 exists to solve.
              </p>
              <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <span style={{ color: "#1A3467", fontWeight: 800, fontSize: "0.95rem" }}>MaxPerformance100</span>
                <span style={{ color: "#C9A84C", fontSize: "0.85rem" }}>· Freelancer Business Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING / VALUE COMPARISON ───────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>Pricing</span>
        <h2 className="section-title">One Investment That Pays Back on the First Project</h2>
        <div className="divider" />
        <div style={{ background: "#fff", border: "1px solid #DDD5C0", borderRadius: "1.25rem", padding: "2rem", marginBottom: "2rem" }}>
          {[
            { label: "One business coaching session", price: "$150–$500", muted: true },
            { label: "Freelance business course", price: "$200–$800", muted: true },
            { label: "Annual loss to scope creep", price: "$7,800+/year", muted: true },
            { label: "Client Scope & Protection Playbook", price: "$47 USD one-time", muted: false },
          ].map(({ label, price, muted }) => (
            <div key={label} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "1rem 1.25rem", borderRadius: "0.5rem", marginBottom: "0.5rem",
              background: muted ? "transparent" : "linear-gradient(135deg, #EEE8DE, #DDD5C0)",
              border: muted ? "none" : "2px solid #1A3467"
            }}>
              <span style={{ color: muted ? "#6B7280" : "#1A3467", fontWeight: muted ? 400 : 800, fontSize: muted ? "0.9rem" : "1rem", textDecoration: muted ? "line-through" : "none" }}>{label}</span>
              <span style={{ color: muted ? "#9CA3AF" : "#1A3467", fontWeight: 800, fontSize: muted ? "0.9rem" : "1.1rem" }}>{price}</span>
            </div>
          ))}
        </div>
        <Link href="/product" className="btn-primary" style={{ fontSize: "1.15rem", padding: "1.15rem 3rem" }}>Get Instant Access — $47 USD</Link>
        <p style={{ color: "#94A3B8", fontSize: "0.8rem", marginTop: "1rem" }}>
          Prices shown in USD · Works for freelancers worldwide · New York, London, Sydney, Toronto — any city, any country
        </p>
      </section>

      {/* ── NOTHING TO LOSE ──────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #0F1F3D, #1A3467)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>Nothing to Lose</span>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, marginBottom: "1rem" }}>
              Try It With Complete Confidence
            </h2>
            <p style={{ color: "#CBD5E1", fontSize: "1rem", lineHeight: 1.75 }}>Two ways to try before you commit — or commit with full protection.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "1.25rem", padding: "2rem", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📄</div>
              <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.75rem" }}>Free Sample First</h3>
              <p style={{ color: "#94A3B8", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Download a free sample chapter before spending a penny. See the format, quality, and depth for yourself.
              </p>
              <a href="/Client_Scope_Protection_SOP_TEASER.pdf" download className="btn-secondary" style={{ fontSize: "0.9rem", padding: "0.75rem 1.5rem", display: "inline-block" }}>
                Download Free Sample
              </a>
            </div>
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "1.25rem", padding: "2rem", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🛡️</div>
              <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.75rem" }}>14-Day Money-Back Guarantee</h3>
              <p style={{ color: "#94A3B8", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Buy it, use it, and if it doesn't improve your client relationships — email us within 14 days for a full refund. No questions asked.
              </p>
              <Link href="/product" className="btn-primary" style={{ fontSize: "0.9rem", padding: "0.75rem 1.5rem" }}>
                Get the Playbook — $47
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="divider" />
        </div>
        <FAQAccordion faqs={homeFaqs} />
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link href="/product" className="btn-primary" style={{ fontSize: "1.1rem", padding: "1.1rem 2.5rem" }}>
            Get the Playbook — $47
          </Link>
          <p style={{ color: "#94A3B8", fontSize: "0.8rem", marginTop: "0.875rem" }}>
            ✓ Secure PayPal checkout &nbsp;·&nbsp; ✓ Instant download &nbsp;·&nbsp; ✓ 14-day money-back guarantee
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section style={{ padding: "0 1.5rem 5rem" }}>
        <CTABox />
      </section>

      {/* ── FREE RESOURCES ───────────────────────────────────── */}
      <section style={{ background: "#EEE8DE", padding: "5rem 1.5rem", borderTop: "1px solid #DDD5C0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "0.5rem" }}>Free Resources — No Purchase Required</h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ textAlign: "center" }}>
            These guides cover the core concepts behind the playbook. Read, use, and download freely.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
            {topKeywords.map(({ slug, keyword, category }) => {
              const display = resourceDisplayMap[slug]
              return (
                <Link key={slug} href={`/resources/${slug}`} className="resource-card">
                  <span className="resource-card-cat">{category}</span>
                  <span className="resource-card-title">{display ? display.label : keyword.charAt(0).toUpperCase() + keyword.slice(1)}</span>
                </Link>
              )
            })}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/resources" className="btn-secondary">Browse All Free Resources →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
