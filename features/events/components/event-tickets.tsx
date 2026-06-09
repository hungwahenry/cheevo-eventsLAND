import { TicketIcon } from "lucide-react"

import { formatMoney } from "@/features/events/format"
import type { PublicTicket } from "@/features/events/types"

type Props = {
  tickets: PublicTicket[]
  currency: string
}

export function EventTickets({ tickets, currency }: Props) {
  if (tickets.length === 0) return null

  return (
    <section className="mt-12">
      <h2 className="flex items-center gap-2 text-lg font-sans-semibold tracking-tight">
        <TicketIcon className="size-4 text-foreground/40" />
        Tickets
      </h2>
      <div className="mt-4 divide-y divide-foreground/10 rounded-2xl border border-foreground/10">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="flex items-center justify-between gap-4 p-4"
          >
            <div className="min-w-0">
              <p className="font-sans-semibold text-foreground">
                {ticket.name}
              </p>
              {ticket.description ? (
                <p className="mt-0.5 text-sm text-foreground/60">
                  {ticket.description}
                </p>
              ) : null}
            </div>
            <p className="shrink-0 font-sans-semibold text-foreground">
              {formatMoney(ticket.gross_price, currency)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
