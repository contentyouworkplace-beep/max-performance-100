import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://maxperformance100.com"),
  title: {
    default: "MaxPerformance100 — Freelancer Business Tools & Client Protection for US Professionals",
    template: "%s | MaxPerformance100",
  },
  description:
    "MaxPerformance100 helps US freelancers and agencies stop scope creep, get paid on time, and protect their business with professional templates, contracts, and client management systems.",
  keywords: [
    "freelancer tools", "scope of work template", "freelance contract template", "scope creep prevention",
    "client protection playbook", "payment terms freelance", "client intake form", "freelancer business",
  ],
  authors: [{ name: "MaxPerformance100" }],
  creator: "MaxPerformance100",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maxperformance100.com",
    siteName: "MaxPerformance100",
    title: "MaxPerformance100 — Client Scope & Protection Playbook for US Freelancers",
    description:
      "Stop scope creep, protect your payments, and build a professional freelance business. Download the complete 6-module system trusted by 1,000+ US freelancers.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MaxPerformance100 Client Scope & Protection Playbook" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxPerformance100 — Stop Scope Creep & Get Paid on Time",
    description: "The complete client protection system for US freelancers and agencies. 6 modules, 13 email scripts, $47 one-time.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "https://maxperformance100.com" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
