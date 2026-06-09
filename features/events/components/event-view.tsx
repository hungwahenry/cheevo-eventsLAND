import { SiteHeader } from "@/components/landing/site-header"
import { EventBottomBar } from "@/features/events/components/event-bottom-bar"
import { EventDescription } from "@/features/events/components/event-description"
import { EventDetails } from "@/features/events/components/event-details"
import { EventFeatures } from "@/features/events/components/event-features"
import { EventFlyer } from "@/features/events/components/event-flyer"
import { EventTickets } from "@/features/events/components/event-tickets"
import type { PublicEvent } from "@/features/events/types"

export function EventView({ event }: { event: PublicEvent }) {
  return (
    <main className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto w-full max-w-3xl px-6 pt-10 pb-32 md:pt-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <EventFlyer event={event} />
          </div>
          <div className="md:col-span-3">
            <EventDetails event={event} />
          </div>
        </div>

        {event.description ? (
          <EventDescription text={event.description} />
        ) : null}

        <EventTickets tickets={event.tickets} currency={event.currency} />
        <EventFeatures features={event.features} />
      </section>

      <EventBottomBar event={event} />
    </main>
  )
}
