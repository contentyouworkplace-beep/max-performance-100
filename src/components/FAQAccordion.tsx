"use client"
import { useState } from "react"

interface FAQ {
  q: string
  a: string
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto" }}>
      {faqs.map((faq, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #e2e8f0", borderRadius: "0.75rem", marginBottom: "0.75rem",
            overflow: "hidden", transition: "box-shadow 0.2s",
            boxShadow: open === i ? "0 4px 20px rgba(30,64,175,0.1)" : "none"
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%", padding: "1.25rem 1.5rem", background: open === i ? "#eff6ff" : "#fff",
              border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between",
              alignItems: "center", textAlign: "left", gap: "1rem"
            }}
          >
            <span style={{ fontWeight: 700, color: "#0f172a", fontSize: "1rem", lineHeight: "1.4" }}>{faq.q}</span>
            <span style={{
              width: "24px", height: "24px", borderRadius: "50%", background: open === i ? "#1e40af" : "#f1f5f9",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              color: open === i ? "#fff" : "#64748b", fontSize: "1.25rem", fontWeight: 300, transition: "all 0.2s"
            }}>
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <div style={{ padding: "0 1.5rem 1.25rem", background: "#eff6ff" }}>
              <p style={{ color: "#374151", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
