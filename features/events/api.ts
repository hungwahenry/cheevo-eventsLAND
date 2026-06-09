import "server-only"

import { isApiError } from "@/lib/api/errors"
import { serverFetch } from "@/lib/server/laravel"

import type { PublicEvent } from "./types"

const REVALIDATE_SECONDS = 120

export async function getPublicEvent(slug: string): Promise<PublicEvent | null> {
  try {
    return await serverFetch<PublicEvent>(
      `events/${encodeURIComponent(slug)}`,
      { next: { revalidate: REVALIDATE_SECONDS, tags: ["events", `event:${slug}`] } }
    )
  } catch (error) {
    if (isApiError(error) && error.isNotFound) return null
    throw error
  }
}
