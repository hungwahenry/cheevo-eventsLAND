import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://cheevo.events/sitemap.xml",
    host: "https://cheevo.events",
  }
}
