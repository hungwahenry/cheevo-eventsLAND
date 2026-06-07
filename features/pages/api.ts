import "server-only"

import { isApiError } from "@/lib/api/errors"
import { serverFetch } from "@/lib/server/laravel"

import type { PublicPage, PublicPageSummary } from "./types"

const REVALIDATE_SECONDS = 300

export async function listPublicPages(): Promise<PublicPageSummary[]> {
  return serverFetch<PublicPageSummary[]>("pages", {
    next: { revalidate: REVALIDATE_SECONDS, tags: ["pages"] },
  })
}

export async function getPublicPage(slug: string): Promise<PublicPage | null> {
  try {
    return await serverFetch<PublicPage>(`pages/${encodeURIComponent(slug)}`, {
      next: { revalidate: REVALIDATE_SECONDS, tags: ["pages", `page:${slug}`] },
    })
  } catch (error) {
    if (isApiError(error) && error.isNotFound) return null
    throw error
  }
}
