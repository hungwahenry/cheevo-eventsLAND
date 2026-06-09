export function formatEventWhen(
  startsAt: string | null,
  timezone: string | null
): string | null {
  if (!startsAt) return null
  try {
    return new Date(startsAt).toLocaleString("en-US", {
      weekday: "short",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZone: timezone ?? undefined,
    })
  } catch {
    return null
  }
}

export function formatMoney(minor: number, currency: string): string {
  if (minor === 0) return "Free"
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(minor / 100)
}

export function formatEventPrice(
  min: number | null,
  max: number | null,
  currency: string
): string {
  if (min == null || min === 0) return "Free"
  if (max != null && max !== min) {
    return `${formatMoney(min, currency)} – ${formatMoney(max, currency)}`
  }
  return `From ${formatMoney(min, currency)}`
}
