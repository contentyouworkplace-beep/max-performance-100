"use client"
import Link from "next/link"
import { useState } from "react"
import { keywords } from "@/data/keywords"
import { cities } from "@/data/cities"

const footerLinks = {
  "Resources": [
    { label: "Scope of Work Templates", href: "/resources/category/scope-of-work-templates" },
    { label: "Scope Creep Prevention", href: "/resources/category/scope-creep-prevention" },
    { label: "Client Contracts", href: "/resources/category/client-contracts" },
    { label: "Payment Terms", href: "/resources/category/payment-terms" },
    { label: "Client Intake", href: "/resources/category/client-intake" },
    { label: "Red Flags Guide", href: "/resources/category/freelancer-protection" },
  ],
  "Product": [
    { label: "Client Scope & Protection Playbook", href: "/product" },
    { label: "What's Inside", href: "/product#modules" },
    { label: "Pricing", href: "/product#pricing" },
    { label: "FAQ", href: "/product#faq" },
    { label: "14-Day Guarantee", href: "/product#guarantee" },
  ],
  "Company": [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
}

// Top keywords by volume — first 20 visible, rest toggleable
const topKeywords = [...keywords].sort((a, b) => b.volume - a.volume)
const KEYWORDS_VISIBLE = 24
const CITIES_VISIBLE = 20

export default function Footer() {
  const [showAllKeywords, setShowAllKeywords] = useState(false)
  const [showAllCities, setShowAllCities] = useState(false)

  const visibleKeywords = showAllKeywords ? topKeywords : topKeywords.slice(0, KEYWORDS_VISIBLE)
  const visibleCities = showAllCities ? cities : cities.slice(0, CITIES_VISIBLE)

  return (
    <footer style={{ background: "#0f172a", color: "#94a3b8", paddingTop: "3.5rem", paddingBottom: "1.5rem", marginTop: "5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* TOP ROW — brand + nav columns */}
        <div style={{ display: "grid", gridTemplateColumns: "220px repeat(3, 1fr)", gap: "2rem", marginBottom: "2.5rem" }} className="footer-top-grid">
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", marginBottom: "0.875rem" }}>
              <div style={{ width: "28px", height: "28px", background: "linear-gradient(135deg, #f59e0b, #d97706)", borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#0f172a", fontWeight: 800, fontSize: "13px" }}>M</span>
              </div>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: "0.95rem" }}>MaxPerformance<span style={{ color: "#f59e0b" }}>100</span></span>
            </Link>
            <p style={{ fontSize: "0.775rem", lineHeight: "1.6", marginBottom: "1rem", color: "#64748b" }}>
              Client protection tools for US freelancers & agencies.
            </p>
            <a href="https://payhip.com/b/0WOr6" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "0.75rem", padding: "0.45rem 0.9rem" }}>
              Get Playbook — $47
            </a>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 style={{ color: "#e2e8f0", fontSize: "0.75rem", fontWeight: 700, marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>
                {section}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {links.map(({ label, href }) => (
                  <li key={href} style={{ marginBottom: "0.35rem" }}>
                    <Link href={href} className="footer-link" style={{ fontSize: "0.775rem" }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* DIVIDER */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginBottom: "2rem" }} />

        {/* KEYWORDS SECTION */}
        <div style={{ marginBottom: "1.75rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
            <span style={{ color: "#475569", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Freelancer Resources
            </span>
            <button
              onClick={() => setShowAllKeywords(v => !v)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#64748b", fontSize: "0.7rem", fontWeight: 600, padding: "0.2rem 0.5rem", borderRadius: "4px" }}
            >
              {showAllKeywords ? "Show less ↑" : `+${topKeywords.length - KEYWORDS_VISIBLE} more ↓`}
            </button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
            {visibleKeywords.map(({ slug, keyword }) => (
              <Link
                key={slug}
                href={`/resources/${slug}`}
                style={{
                  fontSize: "0.7rem",
                  color: "#64748b",
                  textDecoration: "none",
                  padding: "0.2rem 0.55rem",
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "4px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  whiteSpace: "nowrap",
                  transition: "color 0.15s",
                  textTransform: "capitalize",
                }}
                className="footer-kw-link"
              >
                {keyword}
              </Link>
            ))}
          </div>
        </div>

        {/* CITIES SECTION */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
            <span style={{ color: "#475569", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Freelancers by City
            </span>
            <button
              onClick={() => setShowAllCities(v => !v)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#64748b", fontSize: "0.7rem", fontWeight: 600, padding: "0.2rem 0.5rem", borderRadius: "4px" }}
            >
              {showAllCities ? "Show less ↑" : `+${cities.length - CITIES_VISIBLE} more ↓`}
            </button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
            {visibleCities.map(({ slug, name, stateCode }) => (
              <Link
                key={slug}
                href={`/location/${slug}`}
                style={{
                  fontSize: "0.7rem",
                  color: "#64748b",
                  textDecoration: "none",
                  padding: "0.2rem 0.55rem",
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "4px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  whiteSpace: "nowrap",
                  transition: "color 0.15s",
                }}
                className="footer-kw-link"
              >
                {name}, {stateCode}
              </Link>
            ))}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.25rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem", fontSize: "0.72rem", color: "#475569" }}>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} MaxPerformance100. All rights reserved. Built for US freelancers and agencies.</p>
          <p style={{ margin: 0 }}>
            <Link href="/privacy" style={{ color: "#475569", textDecoration: "none", marginRight: "1rem" }}>Privacy</Link>
            <Link href="/terms" style={{ color: "#475569", textDecoration: "none" }}>Terms</Link>
          </p>
        </div>
      </div>

      <style>{`
        .footer-kw-link:hover { color: #94a3b8 !important; border-color: rgba(255,255,255,0.12) !important; }
        @media (max-width: 768px) {
          .footer-top-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-top-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
