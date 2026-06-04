import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About MaxPerformance100 — Built for Freelancers & Service Businesses Worldwide",
  description:
    "MaxPerformance100 creates practical tools, templates, and systems for freelancers and service businesses. Built from ten years operating inside the freelancing ecosystem.",
  alternates: { canonical: "https://maxperformance100.com/about" },
}

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #0F1F3D 0%, #1A3467 60%, #1E408A 100%)", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>About Us</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            About <span style={{ color: "#C9A84C" }}>MaxPerformance100</span>
          </h1>
          <p style={{ color: "#CBD5E1", fontSize: "1.1rem", lineHeight: 1.75 }}>
            Some businesses exist to make sales. We exist to make a difference to the people who buy from us.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "5rem 1.5rem" }}>

        {/* Mission */}
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1C1C2E", marginBottom: "1rem" }}>Why We Exist</h2>
          <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1A3467, #C9A84C)", borderRadius: "9999px", marginBottom: "1.75rem" }} />
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
            That distinction sounds simple. In practice, it changes everything — what we build, how we price it, and what we consider a success.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
            MaxPerformance100 was founded on a single conviction: that a product should be worth more to the person who buys it than the money they spent on it. Not marginally more. Meaningfully more. The kind of more you feel the first time you use it — and again the tenth time.
          </p>
        </div>

        {/* Decade */}
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1C1C2E", marginBottom: "1rem" }}>A Decade in the Freelancing World</h2>
          <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1A3467, #C9A84C)", borderRadius: "9999px", marginBottom: "1.75rem" }} />
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
            We did not build our products in theory. We built them from ten years of operating inside the freelancing ecosystem — working alongside independent professionals, service businesses, and solo operators across industries. A decade of watching what works, what fails, and what quietly costs people thousands every year without anyone naming it clearly enough to fix.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1.05rem" }}>
            What we saw, consistently, was not a skills problem. The freelancers and service professionals we worked with were excellent at their craft. The gaps were operational. A client relationship with no written boundaries. An invoice sent with no follow-up system. A project started without a signed scope. Revision after revision, absorbed silently, because no one had ever given them the exact words to say when it needed to stop. That is what we build systems to address.
          </p>
        </div>

        {/* Value */}
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1C1C2E", marginBottom: "1rem" }}>What "Value" Actually Means to Us</h2>
          <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1A3467, #C9A84C)", borderRadius: "9999px", marginBottom: "1.75rem" }} />
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
            We use the word value carefully, because it is used carelessly almost everywhere else.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
            To us, value means this: after you have used what you bought from us — not just downloaded it, actually used it — you should look back at the price and feel that you got the better half of the deal. That is the standard we set for every product before it leaves our hands.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1.05rem" }}>
            It also means we do not create products to fill a catalogue. Every system, guide, or toolkit in this store exists because a specific, expensive, recurring problem needed a specific, practical solution. We research the problem first. We build the solution second. We release it only when we are confident it earns back its price the first time someone reaches for it.
          </p>
        </div>

        {/* Beliefs */}
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1C1C2E", marginBottom: "1rem" }}>What We Believe</h2>
          <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1A3467, #C9A84C)", borderRadius: "9999px", marginBottom: "1.75rem" }} />
          <div style={{ display: "grid", gap: "1.25rem" }}>
            {[
              { icon: "💼", title: "Professionalism is learnable", desc: "Running a professional service business is a skill — and like every skill, it can be learned quickly with the right tools and guidance." },
              { icon: "📄", title: "Documentation prevents disputes", desc: "The root cause of 90% of client management problems is a lack of written agreements. A clear scope of work eliminates more disputes than any contract clause." },
              { icon: "💰", title: "You deserve to be paid on time", desc: "Late payments are not an inevitable part of freelance life. They are a systemic problem that the right payment terms and follow-up process can solve permanently." },
              { icon: "🛡️", title: "Protection is not confrontational", desc: "Professional client management is not about being aggressive or difficult. It is about setting clear expectations and maintaining them consistently." },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", padding: "1.25rem", background: "#EEE8DE", border: "1px solid #DDD5C0", borderRadius: "0.875rem" }}>
                <span style={{ fontSize: "1.75rem", flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontWeight: 700, color: "#1C1C2E", marginBottom: "0.3rem" }}>{title}</div>
                  <p style={{ color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pays for itself */}
        <div style={{ marginBottom: "4rem", background: "linear-gradient(135deg, #EEE8DE, #DDD5C0)", border: "2px solid #C9A84C", borderRadius: "1.5rem", padding: "2.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1C1C2E", marginBottom: "1rem" }}>Designed to Pay for Itself</h2>
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1rem", marginBottom: "1rem" }}>
            The Client Scope & Protection Playbook — our flagship system — was built around one number: freelancers lose an estimated $7,800 or more per year to unbilled scope creep alone. Work completed, not charged for. Revisions absorbed. Invoices that never came back.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1rem", marginBottom: "1rem" }}>
            The playbook costs $47. One enforced revision limit. One followed-up invoice. One bad-fit client identified before the project starts. Any of these, once, returns the investment in full — often many times over.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1rem" }}>
            This is not a claim we make lightly. It is the design principle the entire system was built around.
          </p>
        </div>

        {/* Guarantee */}
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1C1C2E", marginBottom: "1rem" }}>Nothing to Lose — We Mean It</h2>
          <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1A3467, #C9A84C)", borderRadius: "9999px", marginBottom: "1.75rem" }} />
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
            We offer a 14-day money-back guarantee on every purchase, no questions asked.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
            If you buy the playbook, work through it, apply it to your next client project, and do not find it worth what you paid — email us within 14 days and we will refund you completely. You will not be asked to justify the request, fill in a form, or wait through a lengthy process. A straightforward purchase deserves a straightforward guarantee.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1.05rem" }}>
            We are confident enough in what we have built to stand behind it that simply.
          </p>
        </div>

        {/* The people */}
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1C1C2E", marginBottom: "1rem" }}>The People Behind the Products</h2>
          <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1A3467, #C9A84C)", borderRadius: "9999px", marginBottom: "1.75rem" }} />
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
            MaxPerformance100 is a small operation built by people who have spent years inside the problems our products solve. We are not a large company with a content department. We are practitioners who decided that the systems we built for ourselves were worth sharing — and that the people who needed them most deserved access to them at a price that felt fair.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1.05rem" }}>
            That is who we are. That is what we build. And that is the standard we hold ourselves to — every product, every purchase, every time.
          </p>
        </div>

        {/* Our products CTA */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem", marginBottom: "3.5rem" }}>
          <div style={{ background: "#fff", border: "1px solid #DDD5C0", borderRadius: "1.25rem", padding: "2rem" }}>
            <h3 style={{ fontWeight: 800, color: "#1C1C2E", marginBottom: "0.75rem" }}>Our Products</h3>
            <p style={{ color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
              We build practical systems that solve real, expensive problems for freelancers and service businesses. Each product is tested, refined, and guaranteed.
            </p>
            <Link href="/product" className="btn-secondary" style={{ fontSize: "0.875rem", padding: "0.6rem 1.25rem" }}>View Products →</Link>
          </div>
          <div style={{ background: "#fff", border: "1px solid #DDD5C0", borderRadius: "1.25rem", padding: "2rem" }}>
            <h3 style={{ fontWeight: 800, color: "#1C1C2E", marginBottom: "0.75rem" }}>Contact Us</h3>
            <p style={{ color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "0.75rem" }}>
              For product support, refund requests, or any questions:
            </p>
            <p style={{ color: "#1A3467", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem" }}>support.maxperformance100@gmail.com</p>
            <p style={{ color: "#9CA3AF", fontSize: "0.8rem" }}>We respond within 1–2 business days.</p>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <section style={{ background: "linear-gradient(135deg, #0F1F3D, #1A3467)", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 800, marginBottom: "1rem" }}>
            Ready to Protect Your Business?
          </h2>
          <p style={{ color: "#CBD5E1", fontSize: "1rem", marginBottom: "2rem" }}>
            Download the Client Scope & Protection Playbook and run your next project like a professional.
          </p>
          <Link href="/product" className="btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}>
            Get the Playbook — $47
          </Link>
          <p style={{ color: "#64748B", fontSize: "0.8rem", marginTop: "1rem" }}>
            ✓ Secure checkout · ✓ Instant download · ✓ 14-day money-back guarantee
          </p>
        </div>
      </section>
    </>
  )
}
