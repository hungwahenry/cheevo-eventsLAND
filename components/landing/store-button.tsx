import Link from "next/link"
import { ApplePhoneIcon, GooglePhoneIcon } from "@/components/landing/icons"
import { cn } from "@/lib/utils"

type Store = "apple" | "google"

const COPY: Record<Store, { eyebrow: string; label: string; href: string }> = {
  apple: {
    eyebrow: "Download on the",
    label: "App Store",
    href: "https://apps.apple.com/app/cheevo",
  },
  google: {
    eyebrow: "Get it on",
    label: "Google Play",
    href: "https://play.google.com/store/apps/details?id=events.cheevo.app",
  },
}

type Props = {
  store: Store
  className?: string
}

export function StoreButton({ store, className }: Props) {
  const meta = COPY[store]
  const Icon = store === "apple" ? ApplePhoneIcon : GooglePhoneIcon

  return (
    <Link
      href={meta.href}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full bg-primary px-5 py-3 text-primary-foreground transition-colors hover:bg-primary/90",
        className
      )}
    >
      <Icon className="size-5 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-[9px] tracking-[0.14em] uppercase opacity-65">
          {meta.eyebrow}
        </span>
        <span className="mt-0.5 text-[15px] font-medium tracking-tight">
          {meta.label}
        </span>
      </span>
    </Link>
  )
}
