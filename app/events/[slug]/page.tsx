import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getPublicEvent } from "@/features/events/api"
import { EventView } from "@/features/events/components/event-view"
import { eventMetadata } from "@/features/events/metadata"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return eventMetadata(await getPublicEvent(slug), slug)
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params
  const event = await getPublicEvent(slug)
  if (!event) notFound()

  return <EventView event={event} />
}
