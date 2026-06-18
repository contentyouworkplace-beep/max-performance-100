import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import { ProductSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup"

export const metadata: Metadata = {
  title: "Client Scope & Protection Playbook — $47 | Stop Scope Creep & Get Paid on Time",
  description:
    "The complete 6-module client protection system for freelancers and service businesses worldwide. Scope of work template, revision policy, payment terms, 13 email scripts. $47 one-time download — 14-day guarantee.",
  alternates: { canonical: "https://maxperformance100.com/product" },
  openGraph: {
    title: "Client Scope & Protection Playbook — $47 One-Time",
    description: "Stop losing $7,800–$15,600/year to scope creep. Get the complete 6-module client protection system — templates, scripts, and checklists. Instant download.",
    type: "website",
    url: "https://maxperformance100.com/product",
  },
}

const faqs = [
  {
    q: "Is this a legal contract?",
    a: "No — this is a professional business toolkit, not a legally binding contract. For high-value agreements over $10,000 or complex projects, we recommend having a solicitor review your contracts. However, the scope of work template, revision policy, and payment terms in this playbook will handle 95% of freelance client situations professionally and effectively.",
  },
  {
    q: "Do I need business experience to use this?",
    a: "Zero business experience required. Every module is fill-in-the-blank and self-contained with step-by-step instructions. You can download it today and send your first professional scope of work to a client within 30 minutes.",
  },
  {
    q: "How many email scripts are included?",
    a: "13 copy-ready email scripts covering: late payment reminders (4 escalating levels), scope change notifications, extra revision charge requests, project check-ins, testimonial requests, repeat booking outreach, and project delivery emails.",
  },
  {
    q: "What file formats do I receive?",
    a: "You receive three files: a PDF version for easy reading and reference, a Word document (.docx) for editing and customizing with your details, and a Cheat Sheet in Word format with quick-reference summaries of all 6 modules.",
  },
  {
    q: "What is your refund policy?",
    a: "We offer a 14-day satisfaction guarantee. If you download the playbook, use the templates, and genuinely feel it hasn't helped your freelance business, contact us at support.maxperformance100@gmail.com within 14 days for a full refund. No questions asked.",
  },
  {
    q: "Does this work for agencies as well as solo freelancers?",
    a: "Yes — the system is designed for both solo freelancers and small agencies. The scope of work template, revision policy, and payment terms are all scalable. Agencies particularly benefit from the client intake module for qualifying leads and the offboarding module for generating referrals and testimonials.",
  },
  {
    q: "How soon will I see results?",
    a: "Most users report recovering their $47 investment within the first project. The scope of work template alone prevents the average $800–$2,000 in unbilled extra work per project. The payment reminder scripts recover overdue invoices that would otherwise be written off.",
  },
  {
    q: "Is this suitable for all types of freelancers?",
    a: "Yes. The system is universal and works for web designers, developers, copywriters, marketing consultants, VAs, coaches, social media managers, brand designers, and any service provider who works with clients on project-based or retainer work.",
  },
]

const modules = [
  {
    number: "01",
    title: "Client Intake & Discovery",
    icon: "📋",
    items: [
      "8-question professional client intake form",
      "Discovery call agenda (structure every call)",
      "Inquiry response script (never wing it again)",
      "5 red flag questions to walk away from nightmare clients",
      "Budget and timeline qualification framework",
    ],
  },
  {
    number: "02",
    title: "Scope of Work Template",
    icon: "📄",
    items: [
      "Fill-in-the-blank scope of work document",
      "Built-in exclusions clause (closes all loopholes)",
      "Deliverables list template with clear boundaries",
      "Project timeline and milestone structure",
      "Client approval signature section",
    ],
  },
  {
    number: "03",
    title: "Revision Policy System",
    icon: "🔄",
    items: [
      "Revision limit policy (define exactly what's included)",
      "Legal-style definition of 'revision' vs 'new direction'",
      "3 escalation scripts for scope change requests",
      "Extra revision charge template",
      "Direction change vs. revision decision framework",
    ],
  },
  {
    number: "04",
    title: "Payment Terms & Late Invoice Scripts",
    icon: "💰",
    items: [
      "Deposit structure (50% upfront, 50% on delivery)",
      "Invoice checklist — never forget a line item",
      "4 escalating payment reminder email scripts",
      "Formal late payment notice template",
      "Dispute resolution and collection process",
    ],
  },
  {
    number: "05",
    title: "Mid-Project Check-In",
    icon: "✅",
    items: [
      "4-question mid-project check-in system",
      "Alignment verification template",
      "Scope drift early-warning checklist",
      "Client expectation reset framework",
      "Change order process documentation",
    ],
  },
  {
    number: "06",
    title: "Clean Offboarding System",
    icon: "🎯",
    items: [
      "5-step project closure sequence",
      "Final delivery email template",
      "Testimonial and case study request script",
      "Referral outreach template",
      "Repeat booking sequence (3 follow-up emails)",
    ],
  },
]

export default function ProductPage() {
  return (
    <>
      <ProductSchema />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Client Scope & Protection Playbook", url: "/product" }]} />

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1e40af 100%)",
        padding: "5rem 1.5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(245,158,11,0.1) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>
          <span className="badge" style={{ marginBottom: "1.5rem", display: "inline-block" }}>Complete Bundle · Instant Download · Works Worldwide</span>
          <h1 style={{
            fontSize: "clamp(2rem, 5.5vw, 3.5rem)", fontWeight: 900, color: "#fff",
            lineHeight: 1.1, marginBottom: "1.25rem", letterSpacing: "-0.03em"
          }}>
            The Client Scope &<br /><span style={{ color: "#f59e0b" }}>Protection Playbook</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", maxWidth: "600px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
            The 6-module system to stop revision hell, protect your payments, and run a professional freelance business — starting today.
          </p>

          {/* PRICE + BUY */}
          <div style={{
            background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.15)", borderRadius: "1.25rem",
            padding: "2.5rem 2rem", maxWidth: "500px", margin: "0 auto 2rem", display: "inline-block", width: "100%"
          }}>
            <div style={{ fontSize: "0.85rem", color: "#94a3b8", textDecoration: "line-through", marginBottom: "0.25rem" }}>Normally $97</div>
            <div style={{ fontSize: "3.5rem", fontWeight: 900, color: "#f59e0b", lineHeight: 1, marginBottom: "0.25rem" }}>$47</div>
            <div style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "2rem" }}>One-time payment — instant access forever</div>

            {/* PayPal Buy Button */}
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style={{ marginBottom: "1rem" }}>
              <input type="hidden" name="cmd" value="_xclick" />
              <input type="hidden" name="business" value="dchtristate@gmail.com" />
              <input type="hidden" name="lc" value="US" />
              <input type="hidden" name="item_name" value="Client Scope & Protection Playbook — Complete Bundle" />
              <input type="hidden" name="item_number" value="CSPP-001" />
              <input type="hidden" name="amount" value="47.00" />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="hidden" name="button_subtype" value="services" />
              <input type="hidden" name="no_note" value="0" />
              <input type="hidden" name="cn" value="Special instructions (optional)" />
              <input type="hidden" name="no_shipping" value="1" />
              <input type="hidden" name="landing_page" value="Billing" />
              <input type="hidden" name="rm" value="1" />
              <input type="hidden" name="return" value="https://maxperformance100.com/thank-you" />
              <input type="hidden" name="cancel_return" value="https://maxperformance100.com/payment-failed" />
              <input type="hidden" name="notify_url" value="https://maxperformance100.com/api/paypal-ipn" />
              <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHosted" />
              <button
                type="submit"
                style={{
                  width: "100%", padding: "1.1rem 2rem", fontSize: "1.15rem", fontWeight: 800,
                  background: "linear-gradient(135deg, #f59e0b, #d97706)", color: "#0f172a",
                  border: "none", borderRadius: "0.6rem", cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(245,158,11,0.45)", transition: "transform 0.2s"
                }}
              >
                💳 Buy Now with PayPal — $47
              </button>
            </form>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {["PDF + Word + Cheat Sheet included", "Instant digital download", "14-day money-back guarantee", "Secure checkout via PayPal"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#94a3b8", fontSize: "0.8rem" }}>
                  <span style={{ color: "#22c55e" }}>✓</span> {item}
                </div>
              ))}
            </div>

            {/* Payment icons */}
            <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", flexWrap: "wrap" }}>
              <span style={{ color: "#475569", fontSize: "0.72rem", marginRight: "0.25rem" }}>We accept:</span>
              {[
                { label: "VISA", bg: "#1a1f71", color: "#fff" },
                { label: "MC", bg: "#eb001b", color: "#fff" },
                { label: "AMEX", bg: "#007bc1", color: "#fff" },
                { label: "PayPal", bg: "#009cde", color: "#fff" },
                { label: "Discover", bg: "#ff6600", color: "#fff" },
              ].map(({ label, bg, color }) => (
                <span key={label} style={{
                  background: bg, color, fontSize: "0.65rem", fontWeight: 800,
                  padding: "3px 7px", borderRadius: "4px", letterSpacing: "0.03em",
                }}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUNDLE CONTENTS */}
      <section style={{ padding: "4rem 1.5rem", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="section-title">Everything Included in the Complete Bundle</h2>
          <div className="divider" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: "📕", title: "PDF Version", desc: "Read anywhere on any device — phone, tablet, desktop. Perfect for reference." },
              { icon: "📝", title: "Word Document + Cheat Sheet", desc: "Fully editable .docx file plus a quick-reference cheat sheet — customize every template with your name and brand." },
              { icon: "📧", title: "13 Email Scripts", desc: "Copy-paste email templates for every difficult client conversation." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{icon}</div>
                <h3 style={{ fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ color: "#64748b", fontSize: "0.875rem" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS WORKS */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 className="section-title">Why This Product Works</h2>
          <div className="divider" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="responsive-grid-1">
          <div>
            <h3 style={{ color: "#1e40af", fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem" }}>The Problem</h3>
            <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
              Freelancers and agency owners are skilled at their craft — design, development, writing, marketing — but have received
              <strong> zero business training</strong>. You know how to do the work. You just don't know how to protect yourself while doing it.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
              The result? Clients push boundaries. Revisions become endless. Payment gets delayed. Scope balloons beyond what was agreed.
              You absorb it all because you don't have the words, scripts, or systems to push back professionally.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.8 }}>
              The average US freelancer loses <strong>$7,800–$15,600 per year</strong> to unbilled scope creep alone.
              57% of agencies lose $1,000–$5,000 monthly. Most of it is completely preventable.
            </p>
          </div>
          <div>
            <h3 style={{ color: "#15803d", fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem" }}>The Solution</h3>
            <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
              The Client Scope & Protection Playbook is a <strong>complete working toolkit</strong> — not a course, not generic advice.
              It&apos;s the actual documents, templates, and scripts you need to run every client relationship like a professional.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
              Every module covers a specific failure point in the freelance business model: bad client qualification, vague scopes,
              unlimited revisions, late payments, no mid-project check-ins, and weak offboarding.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.8 }}>
              Fix all six failure points, and you stop losing money, stop feeling taken advantage of,
              and start building a client base that respects your time and pays on time — every time.
            </p>
          </div>
        </div>
      </section>

      {/* 6 MODULES DEEP DIVE */}
      <section id="modules" style={{ background: "#f8fafc", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>Inside the Playbook</span>
            <h2 className="section-title">The 6 Modules — Everything You Get</h2>
            <div className="divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {modules.map(({ number, title, icon, items }) => (
              <div key={number} className="card" style={{ borderTop: "4px solid #1e40af" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "2rem" }}>{icon}</span>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#1e40af", textTransform: "uppercase", letterSpacing: "0.1em" }}>Module {number}</div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>{title}</h3>
                  </div>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {items.map(item => (
                    <li key={item} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", marginBottom: "0.6rem" }}>
                      <span style={{ color: "#22c55e", fontWeight: 700, flexShrink: 0, marginTop: "0.15rem" }}>✓</span>
                      <span style={{ color: "#374151", fontSize: "0.9rem", lineHeight: "1.5" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR/NOT FOR */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          <div style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", border: "2px solid #86efac", borderRadius: "1.25rem", padding: "2.5rem" }}>
            <h2 style={{ color: "#15803d", fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.5rem" }}>✅ This Is For You If…</h2>
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
                <span style={{ color: "#22c55e", flexShrink: 0 }}>✓</span>
                <span style={{ color: "#166534", fontSize: "0.9rem", lineHeight: "1.5" }}>{p}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "linear-gradient(135deg, #fff7ed, #ffedd5)", border: "2px solid #fed7aa", borderRadius: "1.25rem", padding: "2.5rem" }}>
            <h2 style={{ color: "#c2410c", fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.5rem" }}>❌ This Is NOT For You If…</h2>
            {[
              "You already have a dedicated legal team handling contracts",
              "You're looking for a formal solicitor-drafted legal agreement",
              "You're not willing to have direct professional conversations with clients",
              "You prefer learning through expensive mistakes for years",
            ].map(p => (
              <div key={p} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: "#ef4444", flexShrink: 0 }}>✗</span>
                <span style={{ color: "#9a3412", fontSize: "0.9rem", lineHeight: "1.5" }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING ANCHOR */}
      <section id="pricing" style={{ background: "linear-gradient(135deg, #0f172a, #1e3a8a)", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <span className="badge" style={{ marginBottom: "1.5rem", display: "inline-block" }}>Limited Time Offer</span>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, marginBottom: "1rem" }}>
            Get the Complete Bundle for <span style={{ color: "#f59e0b" }}>$47</span>
          </h2>
          <p style={{ color: "#94a3b8", marginBottom: "2.5rem", fontSize: "1rem" }}>
            One-time payment. Instant download. Use it on every single project forever.
          </p>
          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1.25rem", padding: "2rem", marginBottom: "2rem" }}>
            {[
              { label: "Business coaching session", price: "$150–$500 per hour" },
              { label: "Freelance business course", price: "$200–$800 one-time" },
              { label: "Annual loss to scope creep", price: "$7,800+ per year" },
            ].map(({ label, price }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)", color: "#64748b", fontSize: "0.9rem" }}>
                <span style={{ textDecoration: "line-through" }}>{label}</span>
                <span style={{ textDecoration: "line-through" }}>{price}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem 0 0", color: "#f59e0b", fontSize: "1.1rem", fontWeight: 800 }}>
              <span>Client Scope & Protection Playbook</span>
              <span>$47 one-time</span>
            </div>
          </div>

          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style={{ marginBottom: "1.5rem" }}>
            <input type="hidden" name="cmd" value="_xclick" />
            <input type="hidden" name="business" value="dchtristate@gmail.com" />
            <input type="hidden" name="lc" value="US" />
            <input type="hidden" name="item_name" value="Client Scope & Protection Playbook — Complete Bundle" />
            <input type="hidden" name="item_number" value="CSPP-001" />
            <input type="hidden" name="amount" value="47.00" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="hidden" name="no_shipping" value="1" />
              <input type="hidden" name="landing_page" value="Billing" />
            <input type="hidden" name="rm" value="1" />
            <input type="hidden" name="return" value="https://maxperformance100.com/thank-you" />
            <input type="hidden" name="cancel_return" value="https://maxperformance100.com/payment-failed" />
            <input type="hidden" name="notify_url" value="https://maxperformance100.com/api/paypal-ipn" />
            <button
              type="submit"
              style={{
                width: "100%", padding: "1.25rem 2rem", fontSize: "1.2rem", fontWeight: 900,
                background: "linear-gradient(135deg, #f59e0b, #d97706)", color: "#0f172a",
                border: "none", borderRadius: "0.75rem", cursor: "pointer",
                boxShadow: "0 6px 30px rgba(245,158,11,0.5)"
              }}
            >
              🚀 Get Instant Access — $47
            </button>
          </form>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
            <span style={{ color: "#475569", fontSize: "0.72rem", marginRight: "0.25rem" }}>We accept:</span>
            {[
              { label: "VISA", bg: "#1a1f71", color: "#fff" },
              { label: "MC", bg: "#eb001b", color: "#fff" },
              { label: "AMEX", bg: "#007bc1", color: "#fff" },
              { label: "PayPal", bg: "#009cde", color: "#fff" },
              { label: "Discover", bg: "#ff6600", color: "#fff" },
            ].map(({ label, bg, color }) => (
              <span key={label} style={{
                background: bg, color, fontSize: "0.65rem", fontWeight: 800,
                padding: "3px 7px", borderRadius: "4px", letterSpacing: "0.03em",
              }}>
                {label}
              </span>
            ))}
          </div>
          <p style={{ color: "#64748b", fontSize: "0.85rem" }}>
            ✓ Secure PayPal checkout &nbsp;·&nbsp; ✓ Instant download &nbsp;·&nbsp; ✓ 14-day money-back guarantee
          </p>
        </div>
      </section>

      {/* GUARANTEE */}
      <section id="guarantee" style={{ padding: "5rem 1.5rem", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", border: "2px solid #86efac", borderRadius: "1.5rem", padding: "3rem 2rem" }}>
          <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🛡️</div>
          <h2 style={{ color: "#15803d", fontSize: "1.75rem", fontWeight: 800, marginBottom: "1rem" }}>14-Day Satisfaction Guarantee</h2>
          <p style={{ color: "#166534", lineHeight: 1.8, fontSize: "1rem" }}>
            Download the playbook, use the templates with real clients, and if you genuinely feel it hasn&apos;t improved your freelance
            business operations, email us at <strong>support.maxperformance100@gmail.com</strong> within 14 days for a complete refund.
            No questions, no hoops.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "0 1.5rem 5rem", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="divider" />
        </div>
        <FAQAccordion faqs={faqs} />
      </section>

      <style>{`
        @media (max-width: 640px) {
          .responsive-grid-1 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
