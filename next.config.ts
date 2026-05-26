import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Generate static exports for all dynamic routes
  output: "standalone",

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  // Compress responses
  compress: true,

  // Strict mode for better SEO
  reactStrictMode: true,

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/(.*)\\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ]
  },

  // Redirects for common URL patterns
  async redirects() {
    return [
      {
        source: "/playbook",
        destination: "/product",
        permanent: true,
      },
      {
        source: "/download",
        destination: "/product",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
