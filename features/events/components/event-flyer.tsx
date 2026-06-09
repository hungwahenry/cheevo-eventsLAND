import type { PublicEvent } from "@/features/events/types"

export function EventFlyer({ event }: { event: PublicEvent }) {
  return (
    <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-foreground/5">
      {event.flyer_url ? (
        event.flyer_type === "video" ? (
          <video
            src={event.flyer_url}
            className="size-full object-cover"
            muted
            loop
            autoPlay
            playsInline
          />
        ) : (
          <img
            src={event.flyer_url}
            alt={event.title}
            className="size-full object-cover"
          />
        )
      ) : null}
    </div>
  )
}
