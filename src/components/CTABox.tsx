import Link from "next/link"

interface CTABoxProps {
  heading?: string
  subtext?: string
  variant?: "primary" | "dark" | "light"
}

export default function CTABox({
  heading = "Stop Losing Money to Scope Creep — Get Protected Today",
  subtext = "Download the Client Scope & Protection Playbook — 6 modules, 13 email scripts, and every template you need to run a professional freelance business.",
  variant = "primary",
}: CTABoxProps) {
  const bg =
    variant === "dark"
      ? "linear-gradient(135deg, #0F1F3D, #1A3467)"
      : variant === "light"
      ? "#EEE8DE"
      : "linear-gradient(135deg, #1A3467, #0F1F3D)"

  const headingColor = variant === "light" ? "#0f172a" : "#fff"
  const subtextColor = variant === "light" ? "#64748b" : "#cbd5e1"
  const border = variant === "light" ? "1px solid #e2e8f0" : "none"

  return (
    <div style={{
      background: bg, border, borderRadius: "1.25rem", padding: "3rem 2rem",
      textAlign: "center", maxWidth: "720px", margin: "3rem auto",
      boxShadow: variant !== "light" ? "0 20px 60px rgba(30,64,175,0.3)" : "0 4px 20px rgba(0,0,0,0.06)"
    }}>
      <div style={{ marginBottom: "0.75rem" }}>
        <span className="badge">Client Scope & Protection Playbook</span>
      </div>
      <h3 style={{ color: headingColor, fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: "1.25" }}>
        {heading}
      </h3>
      <p style={{ color: subtextColor, fontSize: "1rem", marginBottom: "2rem", maxWidth: "540px", margin: "0 auto 2rem" }}>
        {subtext}
      </p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/product" className="btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.25rem" }}>
          Get Instant Access — $47
        </Link>
        <Link href="/product#modules" className="btn-secondary" style={{ fontSize: "1.05rem", padding: "1rem 2rem" }}>
          See What's Inside
        </Link>
      </div>
      <p style={{ color: variant === "light" ? "#94a3b8" : "#64748b", fontSize: "0.8rem", marginTop: "1rem" }}>
        ✓ One-time payment &nbsp;✓ PDF + Word + Cheat Sheet &nbsp;✓ 14-day guarantee
      </p>
    </div>
  )
}
