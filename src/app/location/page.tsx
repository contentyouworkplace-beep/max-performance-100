import type { Metadata } from "next"
import Link from "next/link"
import { cities } from "@/data/cities"

export const metadata: Metadata = {
  title: "Freelancer Resources by US City — Scope of Work & Client Protection | MaxPerformance100",
  description:
    "Find freelancer resources, scope of work templates, and client protection tools tailored for your US city. Coverage across 100 major US cities including New York, Los Angeles, Chicago, Houston, Austin, and more.",
  alternates: { canonical: "https://maxperformance100.com/location" },
}

const stateGroups = cities.reduce<Record<string, typeof cities>>((acc, city) => {
  if (!acc[city.state]) acc[city.state] = []
  acc[city.state].push(city)
  return acc
}, {})

export default function LocationPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1e40af 100%)",
        padding: "4rem 1.5rem 5rem", textAlign: "center"
      }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>100 US Cities</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "1rem" }}>
            Freelancer Resources for Every Major US City
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Scope of work templates, freelance contracts, payment protection, and client management tools — tailored for freelancers and agencies across 100 major US cities.
          </p>
        </div>
      </section>

      {/* ALL CITIES BY STATE */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 1.5rem" }}>
        {Object.entries(stateGroups).sort(([a], [b]) => a.localeCompare(b)).map(([state, stateCities]) => (
          <div key={state} style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "2px solid #e2e8f0" }}>
              {state}
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {stateCities.map(({ slug, name, stateCode }) => (
                <Link key={slug} href={`/location/${slug}`} style={{
                  padding: "0.5rem 1.1rem", background: "#f8fafc", border: "1px solid #e2e8f0",
                  borderRadius: "0.5rem", textDecoration: "none", color: "#374151",
                  fontSize: "0.875rem", fontWeight: 600, transition: "all 0.2s"
                }}>
                  {name}, {stateCode}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #1e40af, #1e3a8a)", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 800, marginBottom: "1rem" }}>
            The System Works Everywhere in the US
          </h2>
          <p style={{ color: "#cbd5e1", marginBottom: "2rem" }}>
            Whether you are in New York or Nashville, the same client management principles apply. Get the complete playbook for $47.
          </p>
          <Link href="/product" className="btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}>
            Download the Playbook — $47
          </Link>
        </div>
      </section>
    </>
  )
}
