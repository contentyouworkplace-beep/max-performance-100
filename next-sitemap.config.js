/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://maxperformance100.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/thank-you", "/api/*"],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thank-you", "/api/"],
      },
    ],
  },
  transform: async (config, path) => {
    // Higher priority for important pages
    const highPriority = ["/", "/product"]
    const mediumPriority = ["/resources", "/blog", "/location", "/about"]

    let priority = 0.6
    let changefreq = "monthly"

    if (highPriority.includes(path)) {
      priority = 1.0
      changefreq = "weekly"
    } else if (mediumPriority.some(p => path.startsWith(p) && path === p)) {
      priority = 0.8
      changefreq = "weekly"
    } else if (path.startsWith("/resources/")) {
      priority = 0.7
      changefreq = "monthly"
    } else if (path.startsWith("/location/")) {
      priority = 0.65
      changefreq = "monthly"
    } else if (path.startsWith("/blog/")) {
      priority = 0.75
      changefreq = "monthly"
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}
