import type { MetadataRoute } from "next"

import { listPublicPages } from "@/features/pages/api"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://cheevo.events"
  const pages = await listPublicPages().catch(() => [])

  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    ...pages.map((page) => ({
      url: `${base}/pages/${page.slug}`,
      lastModified: page.updated_at ? new Date(page.updated_at) : undefined,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ]
}
