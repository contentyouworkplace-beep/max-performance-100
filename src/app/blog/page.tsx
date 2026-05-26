import type { Metadata } from "next"
import Link from "next/link"
import { blogPosts } from "@/data/blogPosts"

export const metadata: Metadata = {
  title: "Freelancer Business Blog — Scope of Work, Contracts & Client Protection | MaxPerformance100",
  description:
    "In-depth guides and expert advice for US freelancers and agencies. Scope creep prevention, payment terms, client contracts, revision policies, and professional client management strategies.",
  alternates: { canonical: "https://maxperformance100.com/blog" },
}

export default function BlogPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1e40af 100%)", padding: "4rem 1.5rem 5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>Freelancer Business Blog</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "1rem" }}>
            Guides to Help US Freelancers Earn More & Work Less
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Practical advice on scope of work, client contracts, payment protection, and professional client management — from the team behind the Client Scope & Protection Playbook.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 1.5rem" }}>
        {blogPosts.map(post => (
          <article key={post.slug} className="blog-card">
            <div style={{ padding: "2rem" }}>
              <div style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
                <span style={{ background: "#eff6ff", color: "#1e40af", fontSize: "0.75rem", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: "9999px" }}>
                  {post.category}
                </span>
                <span style={{ color: "#94a3b8", fontSize: "0.8rem" }}>{post.date}</span>
                <span style={{ color: "#94a3b8", fontSize: "0.8rem" }}>· {post.readTime}</span>
              </div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.75rem", lineHeight: 1.3 }}>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  {post.title}
                </Link>
              </h2>
              <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} style={{ color: "#1e40af", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>
                Read Full Guide →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <section style={{ background: "linear-gradient(135deg, #1e40af, #1e3a8a)", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 800, marginBottom: "1rem" }}>
            Ready to Put This Into Practice?
          </h2>
          <p style={{ color: "#cbd5e1", marginBottom: "2rem" }}>
            Everything covered in these guides is included in the Client Scope & Protection Playbook — in fill-in-the-blank format, ready to use today.
          </p>
          <Link href="/product" className="btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}>
            Get the Playbook — $47
          </Link>
        </div>
      </section>
    </>
  )
}
