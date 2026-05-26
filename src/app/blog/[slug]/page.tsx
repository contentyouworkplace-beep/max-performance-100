import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { blogPosts } from "@/data/blogPosts"
import CTABox from "@/components/CTABox"
import { ArticleSchema, BreadcrumbSchema } from "@/components/SchemaMarkup"

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `https://maxperformance100.com/blog/${slug}` },
    openGraph: { title: post.title, description: post.metaDescription, type: "article", url: `https://maxperformance100.com/blog/${slug}` },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) notFound()

  const related = blogPosts.filter(p => p.slug !== slug).slice(0, 3)

  const bodyHtml = post.body
    .split("\n\n")
    .map(para => {
      if (para.startsWith("## ")) return `<h2>${para.slice(3)}</h2>`
      if (para.startsWith("### ")) return `<h3>${para.slice(4)}</h3>`
      const formatted = para
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/- \*\*(.*?)\*\*(.*)/g, "<li><strong>$1</strong>$2</li>")
      if (formatted.includes("<li>")) return `<ul>${formatted}</ul>`
      return `<p>${formatted}</p>`
    })
    .join("\n")

  return (
    <>
      <ArticleSchema title={post.title} description={post.metaDescription} url={`/blog/${slug}`} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: post.title, url: `/blog/${slug}` }
      ]} />

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1e40af 100%)",
        padding: "4rem 1.5rem 5rem",
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1rem" }}>
            <Link href="/blog" style={{ color: "#94a3b8", fontSize: "0.85rem", textDecoration: "none" }}>Blog</Link>
            <span style={{ color: "#475569", margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>{post.category}</span>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ background: "rgba(245,158,11,0.2)", color: "#f59e0b", fontSize: "0.75rem", fontWeight: 700, padding: "0.2rem 0.75rem", borderRadius: "9999px" }}>
              {post.category}
            </span>
            <span style={{ color: "#64748b", fontSize: "0.8rem" }}>{post.date}</span>
            <span style={{ color: "#64748b", fontSize: "0.8rem" }}>· {post.readTime}</span>
          </div>
          <h1 style={{
            fontSize: "clamp(1.75rem, 5vw, 2.75rem)", fontWeight: 900, color: "#fff",
            lineHeight: 1.15, marginBottom: "1.25rem"
          }}>
            {post.title}
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.7 }}>{post.excerpt}</p>
        </div>
      </section>

      {/* CONTENT */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 1.5rem", display: "grid", gridTemplateColumns: "1fr 300px", gap: "3rem", alignItems: "start" }} className="blog-grid">
        <article className="prose" dangerouslySetInnerHTML={{ __html: bodyHtml }} />

        {/* SIDEBAR */}
        <aside style={{ position: "sticky", top: "80px" }}>
          <div style={{
            background: "linear-gradient(135deg, #0f172a, #1e3a8a)", borderRadius: "1.25rem",
            padding: "2rem", marginBottom: "1.5rem", textAlign: "center"
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>📦</div>
            <h3 style={{ color: "#fff", fontSize: "1.05rem", fontWeight: 800, marginBottom: "0.75rem", lineHeight: 1.3 }}>
              Get Every Template & Script
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              The complete 6-module client protection system — $47 one-time.
            </p>
            <Link href="/product" className="btn-primary" style={{ display: "block", fontSize: "0.9rem" }}>
              Download — $47
            </Link>
          </div>

          {related.length > 0 && (
            <div>
              <h4 style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.9rem", marginBottom: "0.75rem" }}>Related Posts</h4>
              {related.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{
                  display: "block", padding: "0.875rem", background: "#f8fafc", border: "1px solid #e2e8f0",
                  borderRadius: "0.75rem", textDecoration: "none", marginBottom: "0.6rem"
                }}>
                  <div style={{ color: "#0f172a", fontWeight: 600, fontSize: "0.85rem", lineHeight: 1.4 }}>{p.title}</div>
                  <div style={{ color: "#94a3b8", fontSize: "0.75rem", marginTop: "0.3rem" }}>{p.readTime}</div>
                </Link>
              ))}
            </div>
          )}
        </aside>
      </div>

      <section style={{ padding: "0 1.5rem 5rem" }}>
        <CTABox />
      </section>

      <style>{`
        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr !important; }
          .blog-grid aside { position: static !important; }
        }
        .prose h2 { font-size: 1.5rem; font-weight: 800; color: #0f172a; margin: 2.5rem 0 1rem; }
        .prose h3 { font-size: 1.15rem; font-weight: 700; color: #1e40af; margin: 2rem 0 0.75rem; }
        .prose p { color: #374151; line-height: 1.85; margin-bottom: 1.1rem; font-size: 1rem; }
        .prose ul { margin-bottom: 1.25rem; padding-left: 0; list-style: none; }
        .prose li { color: #374151; font-size: 1rem; line-height: 1.7; margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative; }
        .prose li::before { content: "→"; position: absolute; left: 0; color: #1e40af; font-weight: 700; }
        .prose strong { color: #0f172a; font-weight: 700; }
      `}</style>
    </>
  )
}
