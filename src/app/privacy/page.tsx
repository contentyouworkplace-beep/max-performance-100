import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | MaxPerformance100",
  description: "MaxPerformance100 privacy policy — how we collect, use, and protect your data.",
  alternates: { canonical: "https://maxperformance100.com/privacy" },
}

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "5rem 1.5rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.5rem" }}>Privacy Policy</h1>
      <p style={{ color: "#64748b", marginBottom: "2.5rem" }}>Last updated: May 2025</p>
      <div className="prose">
        <h2>Information We Collect</h2>
        <p>When you purchase from MaxPerformance100, your payment is processed securely by PayPal. We receive your email address and order details to facilitate your download. We do not store payment card information.</p>
        <h2>How We Use Your Information</h2>
        <p>Your email address is used to deliver your digital product and to send important order-related communications. We do not sell your personal information to third parties.</p>
        <h2>Cookies</h2>
        <p>This website may use basic analytics cookies (such as Google Analytics) to understand how visitors interact with our content. No personally identifiable information is collected through cookies.</p>
        <h2>Third-Party Services</h2>
        <p>We use PayPal for payment processing. PayPal's privacy policy governs the handling of your payment information. Please review PayPal's privacy policy for more information.</p>
        <h2>Data Security</h2>
        <p>We take reasonable measures to protect your information from unauthorized access, disclosure, or misuse. However, no internet transmission is completely secure.</p>
        <h2>Contact</h2>
        <p>For privacy-related inquiries, contact us at support.maxperformance100@gmail.com.</p>
      </div>
    </div>
  )
}
