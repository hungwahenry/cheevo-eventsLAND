import type { Metadata } from "next"

import type { PublicEvent } from "./types"

const WEB_URL = "https://cheevo.events"

export function eventMetadata(
  event: PublicEvent | null,
  slug: string
): Metadata {
  if (!event) return { title: "Event not found" }

  const description =
    event.description?.replace(/\s+/g, " ").slice(0, 200) ??
    `${event.title} — get tickets on cheevo.`
  const images =
    event.flyer_type === "image" && event.flyer_url
      ? [event.flyer_url]
      : undefined

  return {
    title: event.title,
    description,
    alternates: { canonical: `/events/${slug}` },
    openGraph: {
      type: "website",
      title: event.title,
      description,
      url: `${WEB_URL}/events/${slug}`,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description,
      images,
    },
  }
}
