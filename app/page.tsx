import Image from "next/image"
import Link from "next/link"
import { EventMockup } from "@/components/landing/event-mockup"
import { ArrowRightUp } from "@/components/landing/icons"
import { StoreButton } from "@/components/landing/store-button"

export default function Page() {
  return (
    <main className="relative flex h-svh flex-col overflow-hidden bg-background text-foreground">
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

      <section className="relative z-10 flex flex-1 items-start justify-center px-6 pt-4 md:items-center md:pt-0">
        <div className="grid w-full max-w-5xl grid-cols-1 items-center md:grid-cols-12 md:gap-10">
          <div className="flex flex-col items-center text-center md:col-span-7 md:items-start md:text-left">
            <h1 className="text-[clamp(2.25rem,6.5vw,4.25rem)] font-black leading-[1.02] tracking-[-0.035em]">
              Every event.
              <br />
              In one app.
            </h1>

            <p className="mt-5 max-w-md text-base text-foreground/65 md:text-lg">
              Discover, RSVP, and walk in with your ticket in your pocket.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <StoreButton store="apple" />
              <StoreButton store="google" />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1 text-[11px] text-foreground/45 md:justify-start">
              <span>© {new Date().getFullYear()} cheevo</span>
              <span className="opacity-50">·</span>
              <Link
                href="/legal/terms"
                className="transition-colors hover:text-foreground"
              >
                Terms
              </Link>
              <Link
                href="/legal/privacy"
                className="transition-colors hover:text-foreground"
              >
                Privacy
              </Link>
              <Link
                href="mailto:hello@cheevo.events"
                className="transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center px-6">
        <div className="grid w-full max-w-5xl grid-cols-1 items-end md:grid-cols-12 md:gap-10">
          <div className="flex justify-center md:col-span-5 md:col-start-8 md:justify-end">
            <div className="translate-y-[20%]">
              <EventMockup />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
