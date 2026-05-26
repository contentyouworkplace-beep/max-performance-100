"use client"
import Link from "next/link"
import type { CSSProperties, ReactNode } from "react"

interface HoverLinkProps {
  href: string
  baseStyle: CSSProperties
  hoverStyle: CSSProperties
  children: ReactNode
}

export function HoverLink({ href, baseStyle, hoverStyle, children }: HoverLinkProps) {
  return (
    <Link
      href={href}
      style={baseStyle}
      onMouseEnter={e => Object.assign((e.currentTarget as HTMLElement).style, hoverStyle)}
      onMouseLeave={e => Object.assign((e.currentTarget as HTMLElement).style, baseStyle)}
    >
      {children}
    </Link>
  )
}

interface HoverArticleProps {
  children: ReactNode
  style?: CSSProperties
}

export function HoverArticle({ children, style }: HoverArticleProps) {
  return (
    <article
      style={style}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.1)")}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
    >
      {children}
    </article>
  )
}
