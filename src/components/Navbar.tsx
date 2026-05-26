"use client"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ background: "#0f172a", borderBottom: "1px solid rgba(255,255,255,0.08)", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
          <div style={{ width: "32px", height: "32px", background: "linear-gradient(135deg, #f59e0b, #d97706)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#0f172a", fontWeight: 800, fontSize: "14px" }}>M</span>
          </div>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>MaxPerformance<span style={{ color: "#f59e0b" }}>100</span></span>
        </Link>

        <nav style={{ display: "flex", gap: "1.75rem", alignItems: "center" }} className="hidden-mobile">
          <Link href="/" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>Home</Link>
          <Link href="/product" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>Playbook</Link>
          <Link href="/resources" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>Resources</Link>
          <Link href="/blog" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>Blog</Link>
          <Link href="/about" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>About</Link>
          <Link href="/product" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}>
            Get the Playbook — $47
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <div style={{ width: "22px", height: "2px", background: "#fff", marginBottom: "5px" }} />
          <div style={{ width: "22px", height: "2px", background: "#fff", marginBottom: "5px" }} />
          <div style={{ width: "22px", height: "2px", background: "#fff" }} />
        </button>
      </div>

      {open && (
        <div style={{ background: "#0f172a", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "1rem 1.5rem" }}>
          {[
            { href: "/", label: "Home" },
            { href: "/product", label: "Playbook" },
            { href: "/resources", label: "Resources" },
            { href: "/blog", label: "Blog" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{ display: "block", color: "#e2e8f0", padding: "0.75rem 0", fontSize: "1rem", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/product"
            onClick={() => setOpen(false)}
            className="btn-primary"
            style={{ display: "block", textAlign: "center", marginTop: "1rem" }}
          >
            Get the Playbook — $47
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}
