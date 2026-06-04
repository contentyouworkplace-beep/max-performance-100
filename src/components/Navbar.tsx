"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Playbook" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ background: "#0F1F3D", borderBottom: "1px solid rgba(201,168,76,0.15)", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none", flexShrink: 0 }}>
          <Image
            src="/logo.jpeg"
            alt="MaxPerformance100"
            width={40}
            height={40}
            style={{ borderRadius: "6px", objectFit: "cover" }}
          />
          <span style={{ color: "#fff", fontWeight: 800, fontSize: "1rem", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            Max<span style={{ color: "#C9A84C" }}>Performance</span><span style={{ color: "#C9A84C" }}>100</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center" }} className="hidden-mobile">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} style={{ color: "#CBD5E1", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500, transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={e => (e.currentTarget.style.color = "#CBD5E1")}>
              {label}
            </Link>
          ))}
          <Link href="/product" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}>
            Get the Playbook — $47
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <div style={{ width: "22px", height: "2px", background: "#fff", marginBottom: "5px", transition: "all 0.2s" }} />
          <div style={{ width: "22px", height: "2px", background: "#fff", marginBottom: "5px", transition: "all 0.2s" }} />
          <div style={{ width: "22px", height: "2px", background: "#fff", transition: "all 0.2s" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#0F1F3D", borderTop: "1px solid rgba(201,168,76,0.15)", padding: "1rem 1.5rem" }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{ display: "block", color: "#E2E8F0", padding: "0.75rem 0", fontSize: "1rem", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
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
    </header>
  )
}
