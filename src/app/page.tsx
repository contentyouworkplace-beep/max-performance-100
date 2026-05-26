import type { Metadata } from "next"
import Link from "next/link"
import CTABox from "@/components/CTABox"
import { ProductSchema } from "@/components/SchemaMarkup"
import { keywords } from "@/data/keywords"
import { cities } from "@/data/cities"

export const metadata: Metadata = {
  title: "MaxPerformance100 — Stop Scope Creep & Protect Your Freelance Business in the US",
  description:
    "MaxPerformance100 provides US freelancers and agencies with professional templates, client contracts, scope of work documents, and payment protection systems. Stop losing $7,800–$15,600/year to unbilled scope creep.",
  alternates: { canonical: "https://maxperformance100.com" },
}

const stats = [
  { value: "$15,600+", label: "Average annual loss to scope creep per freelancer" },
  { value: "57%", label: "Of agencies lose $1,000–$5,000/month to unbillable work" },
  { value: "89K+", label: "Reddit upvotes on a single freelancer scope creep post" },
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

const forYouPoints = [
  "You're a freelancer, VA, designer, writer, developer, coach, or consultant",
  "You regularly absorb extra work without charging for it",
  "You feel awkward chasing clients for late payments",
  "Clients keep asking for 'just one more revision'",
  "You don't have a written scope of work or revision policy",
  "You've been burned by scope creep or non-payment before",
  "You want to run your business like a professional",
]

const notForYouPoints = [
  "You already have a dedicated legal team handling contracts",
  "You're looking for a formal solicitor-drafted legal contract",
  "You're not willing to have direct professional conversations with clients",
  "You prefer learning from expensive client mistakes for years",
]

const testimonials = [
  { quote: "I used to absorb at least 3–5 hours of extra work per project without charging. The scope of work template alone has saved me thousands this year.", name: "Sarah K.", role: "Brand Designer, Austin TX", stars: 5 },
  { quote: "The payment reminder scripts are gold. I recovered $2,400 in overdue invoices in my first month using them. No awkwardness, just professional follow-ups.", name: "Marcus T.", role: "Web Developer, New York NY", stars: 5 },
  { quote: "I was giving unlimited revisions because I didn't know how to say no. The revision policy module completely changed my client relationships.", name: "Priya M.", role: "Copywriter, San Francisco CA", stars: 5 },
  { quote: "The client intake form caught a nightmare client before I even started the project. The 5 red flag questions saved me from a disastrous $3,000 job.", name: "James R.", role: "Marketing Consultant, Chicago IL", stars: 5 },
]

const topKeywords = keywords.filter(k => k.volume >= 1800).slice(0, 12)
const topCities = cities.slice(0, 20)

export default function HomePage() {
  return (
    <>
      <ProductSchema />

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1e40af 100%)", padding: "5rem 1.5rem 6rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 20%, rgba(245,158,11,0.08) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative" }}>
          <span className="badge" style={{ marginBottom: "1.5rem", display: "inline-block" }}>
            #1 Client Protection System for US Freelancers
          </span>
          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 3.75rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.03em" }}>
            Stop Revision Hell.<br />
            <span style={{ color: "#f59e0b" }}>Get Paid on Time.</span><br />
            Protect Your Business.
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "clamp(1rem, 2.5vw, 1.25rem)", maxWidth: "640px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            US freelancers lose <strong style={{ color: "#f59e0b" }}>$7,800–$15,600 per year</strong> to unbilled scope creep.
            The <strong style={{ color: "#fff" }}>Client Scope & Protection Playbook</strong> is the complete 6-module system to end scope creep, protect your payments, and run a professional client business — permanently.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <Link href="/product" className="btn-primary" style={{ fontSize: "1.1rem", padding: "1.1rem 2.5rem" }}>Get the Playbook — $47 One-Time</Link>
            <Link href="/product#modules" className="btn-secondary" style={{ fontSize: "1rem", padding: "1.1rem 2rem" }}>See All 6 Modules</Link>
          </div>
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
            {["PDF + Word + Cheat Sheet", "13 Copy-Ready Email Scripts", "14-Day Money Back Guarantee", "Instant Download"].map(item => (
              <span key={item} style={{ color: "#94a3b8", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span style={{ color: "#22c55e" }}>✓</span> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#f8fafc", padding: "3rem 1.5rem", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
          {stats.map(({ value, label }) => (
            <div key={value} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, color: "#1e40af", lineHeight: 1 }}>{value}</div>
              <p style={{ color: "#64748b", fontSize: "0.9rem", marginTop: "0.5rem", lineHeight: "1.5" }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY THIS WORKS */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>Why It Works</span>
          <h2 className="section-title">This Is a Working Toolkit — Not Another Course</h2>
          <div className="divider" />
          <p className="section-subtitle">Most freelancers have brilliant skills but zero business training. The Client Scope & Protection Playbook fills every gap.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {[
            { icon: "⚡", title: "Ready to Use Immediately", desc: "Every module is fill-in-the-blank. Open it, customize your name, and send it to your next client today." },
            { icon: "📧", title: "13 Copy-Ready Email Scripts", desc: "Every awkward client situation has a script. Late payment, extra revisions, scope changes — all written for you." },
            { icon: "🛡️", title: "Prevents the Most Expensive Mistakes", desc: "The SOW template, revision policy, and payment terms work together as a system to close every loophole." },
            { icon: "📱", title: "Works for Any Freelance Service", desc: "Design, development, copywriting, marketing, coaching, VA services — the system is universal." },
            { icon: "🎯", title: "Catches Bad Clients Early", desc: "The intake module includes 5 red flag questions proven to identify nightmare clients before you invest a single hour." },
            { icon: "💼", title: "Makes You Look Like a Pro", desc: "When you send a proper SOW and onboarding process, clients take you seriously." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="card">
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{icon}</div>
              <h3 style={{ fontWeight: 700, color: "#0f172a", fontSize: "1.1rem", marginBottom: "0.5rem" }}>{title}</h3>
              <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: "1.6" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" style={{ background: "#f8fafc", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>What You Get</span>
            <h2 className="section-title">6 Modules That Cover Your Entire Client Lifecycle</h2>
            <div className="divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {modules.map(({ number, title, description, icon }) => (
              <div key={number} className="card" style={{ borderLeft: "4px solid #1e40af" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: "48px", height: "48px", background: "linear-gradient(135deg, #eff6ff, #dbeafe)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1e40af", textTransform: "uppercase", letterSpacing: "0.1em" }}>Module {number}</div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>{title}</h3>
                  </div>
                </div>
                <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: "1.7", margin: 0 }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR YOU / NOT FOR YOU */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          <div style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", border: "2px solid #86efac", borderRadius: "1.25rem", padding: "2.5rem" }}>
            <h2 style={{ color: "#15803d", fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.5rem" }}>✅ This Is For You If…</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {forYouPoints.map(point => (
                <li key={point} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.875rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#22c55e", fontSize: "1.1rem", flexShrink: 0 }}>✓</span>
                  <span style={{ color: "#166534", fontSize: "0.95rem", lineHeight: "1.5" }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: "linear-gradient(135deg, #fff7ed, #ffedd5)", border: "2px solid #fed7aa", borderRadius: "1.25rem", padding: "2.5rem" }}>
            <h2 style={{ color: "#c2410c", fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.5rem" }}>❌ This Is NOT For You If…</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {notForYouPoints.map(point => (
                <li key={point} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.875rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#ef4444", fontSize: "1.1rem", flexShrink: 0 }}>✗</span>
                  <span style={{ color: "#9a3412", fontSize: "0.95rem", lineHeight: "1.5" }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: "#0f172a", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>Real Results</span>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, marginBottom: "0.5rem" }}>Freelancers Using This System Are Winning</h2>
            <div className="divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {testimonials.map(({ quote, name, role, stars }) => (
              <div key={name} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1rem", padding: "1.75rem" }}>
                <div style={{ color: "#f59e0b", fontSize: "1.25rem", marginBottom: "1rem" }}>{"★".repeat(stars)}</div>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "1.25rem", fontStyle: "italic" }}>&ldquo;{quote}&rdquo;</p>
                <div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>{name}</div>
                  <div style={{ color: "#64748b", fontSize: "0.8rem" }}>{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE COMPARISON */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>Pricing</span>
        <h2 className="section-title">One Investment That Pays for Itself on the First Project</h2>
        <div className="divider" />
        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "1.25rem", padding: "2rem", marginBottom: "2rem" }}>
          {[
            { label: "One business coaching session", price: "$150–$500", muted: true },
            { label: "Freelance business course", price: "$200–$800", muted: true },
            { label: "Learning through client mistakes", price: "$7,800+/year", muted: true },
            { label: "Client Scope & Protection Playbook", price: "$47 one-time", muted: false },
          ].map(({ label, price, muted }) => (
            <div key={label} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "1rem 1.25rem", borderRadius: "0.5rem", marginBottom: "0.5rem",
              background: muted ? "transparent" : "linear-gradient(135deg, #eff6ff, #dbeafe)",
              border: muted ? "none" : "2px solid #1e40af"
            }}>
              <span style={{ color: muted ? "#64748b" : "#1e40af", fontWeight: muted ? 400 : 800, fontSize: muted ? "0.9rem" : "1rem", textDecoration: muted ? "line-through" : "none" }}>{label}</span>
              <span style={{ color: muted ? "#94a3b8" : "#1e40af", fontWeight: 800, fontSize: muted ? "0.9rem" : "1.1rem" }}>{price}</span>
            </div>
          ))}
        </div>
        <Link href="/product" className="btn-primary" style={{ fontSize: "1.15rem", padding: "1.15rem 3rem" }}>Get Instant Access — $47</Link>
        <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginTop: "1rem" }}>✓ 14-day satisfaction guarantee &nbsp;·&nbsp; ✓ Instant digital download</p>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 1.5rem 5rem" }}>
        <CTABox />
      </section>

      {/* TOP RESOURCES */}
      <section style={{ background: "#f8fafc", padding: "5rem 1.5rem", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "0.5rem" }}>Free Freelancer Resources & Guides</h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ textAlign: "center" }}>In-depth guides for every client management challenge US freelancers face.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
            {topKeywords.map(({ slug, keyword, category }) => (
              <Link key={slug} href={`/resources/${slug}`} className="kw-link">
                <div>
                  <div style={{ fontSize: "0.7rem", color: "#1e40af", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>{category}</div>
                  <span>{keyword}</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/resources" className="btn-secondary">Browse All Resources →</Link>
          </div>
        </div>
      </section>

      {/* TOP CITIES */}
      <section style={{ padding: "4rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "0.5rem" }}>Serving Freelancers Across the US</h2>
          <div className="divider" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", justifyContent: "center" }}>
            {topCities.map(({ slug, name, stateCode }) => (
              <Link key={slug} href={`/location/${slug}`} className="city-pill">
                {name}, {stateCode}
              </Link>
            ))}
            <Link href="/location" style={{ padding: "0.5rem 1rem", background: "#1e40af", border: "1px solid #1e40af", borderRadius: "9999px", textDecoration: "none", color: "#fff", fontSize: "0.875rem", fontWeight: 700 }}>
              View All 100 Cities →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
