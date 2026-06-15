import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Clarity from "@/components/Clarity"

export const metadata: Metadata = {
  metadataBase: new URL("https://maxperformance100.com"),
  title: {
    default: "MaxPerformance100 — Client Protection & Business Tools for Freelancers",
    template: "%s | MaxPerformance100",
  },
  description:
    "MaxPerformance100 helps freelancers and service businesses stop scope creep, get paid on time, and protect their business with professional templates, contracts, and client management systems.",
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
    title: "MaxPerformance100 — Stop Scope Creep & Protect Your Freelance Business",
    description:
      "The complete 6-module client protection system. 6 modules, 13 email scripts, instant download. $47 one-time.",
    images: [{ url: "/logo.jpeg", width: 1080, height: 1080, alt: "MaxPerformance100 — Client Protection for Freelancers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxPerformance100 — Stop Scope Creep & Get Paid on Time",
    description: "The complete client protection system for freelancers and service businesses worldwide. 6 modules, 13 email scripts, $47 one-time.",
    images: ["/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "https://maxperformance100.com" },
  verification: {
    google: "googlec1b155cb6acd07f9",
  },
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
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
        <Clarity />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
