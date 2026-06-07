import Image from "next/image"
import Link from "next/link"

import { ArrowRightUp } from "@/components/landing/icons"

export function SiteHeader() {
  return (
    <header className="relative z-20 px-6 py-5 md:py-6">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4">
        <Link href="/" aria-label="cheevo" className="inline-flex items-center">
          <Image
            src="/images/logo.png"
            alt="cheevo"
            width={1024}
            height={256}
            priority
            className="h-6 w-auto md:h-7"
          />
        </Link>
        <Link
          href="https://cheevo.vip"
          className="group inline-flex items-center gap-1.5 text-sm text-foreground/70 transition-colors hover:text-foreground"
        >
          For organisers
          <ArrowRightUp className="size-3.5 transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
        </Link>
      </div>
    </header>
  )
}
