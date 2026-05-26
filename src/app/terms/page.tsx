import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use | MaxPerformance100",
  description: "MaxPerformance100 terms of use — terms and conditions for using our website and purchasing our digital products.",
  alternates: { canonical: "https://maxperformance100.com/terms" },
}

export default function TermsPage() {
  return (
    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "5rem 1.5rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.5rem" }}>Terms of Use</h1>
      <p style={{ color: "#64748b", marginBottom: "2.5rem" }}>Last updated: May 2025</p>
      <div className="prose">
        <h2>Acceptance of Terms</h2>
        <p>By accessing MaxPerformance100.com or purchasing any of our digital products, you agree to these terms of use. If you do not agree, please do not use our website or purchase our products.</p>
        <h2>Digital Products</h2>
        <p>All products sold by MaxPerformance100 are digital downloads. Upon successful payment, you will receive access to your purchased files. You receive a personal, non-transferable license to use the templates, documents, and scripts for your own business purposes.</p>
        <h2>Refund Policy</h2>
        <p>We offer a 14-day satisfaction guarantee on the Client Scope & Protection Playbook. If you are not satisfied with your purchase, contact us at support.maxperformance100@gmail.com within 14 days of purchase for a full refund.</p>
        <h2>Prohibited Uses</h2>
        <p>You may not resell, redistribute, sublicense, or share our digital products with others. Each purchase is for a single user or business entity. You may customize the templates for client use within your own business.</p>
        <h2>Disclaimer</h2>
        <p>The Client Scope & Protection Playbook is a business tool and professional resource — it is NOT legal advice and does not constitute a legally binding contract. For complex or high-value agreements, always consult a licensed attorney in your jurisdiction.</p>
        <h2>Limitation of Liability</h2>
        <p>MaxPerformance100 shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products. Our total liability is limited to the purchase price of the product.</p>
        <h2>Contact</h2>
        <p>For terms-related inquiries, contact us at support.maxperformance100@gmail.com.</p>
      </div>
    </div>
  )
}
