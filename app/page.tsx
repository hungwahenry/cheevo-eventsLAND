import Link from "next/link"
import { EventMockup } from "@/components/landing/event-mockup"
import { SiteHeader } from "@/components/landing/site-header"
import { StoreButton } from "@/components/landing/store-button"
import { listPublicPages } from "@/features/pages/api"

export default async function Page() {
  const pages = await listPublicPages().catch(() => [])

  return (
    <main className="relative flex h-svh flex-col overflow-hidden bg-background text-foreground">
      <SiteHeader />

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
              {pages.length > 0 ? (
                <span className="opacity-50">·</span>
              ) : null}
              {pages.map((page, i) => (
                <span key={page.slug} className="contents">
                  {i > 0 ? <span className="opacity-50">·</span> : null}
                  <Link
                    href={`/pages/${page.slug}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {page.title}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center px-6">
        <div className="grid w-full max-w-5xl grid-cols-1 items-end md:grid-cols-12 md:gap-10">
          <div className="flex justify-center md:col-span-5 md:col-start-8 md:justify-end">
            <div className="origin-bottom translate-y-[15%] scale-[0.66] sm:translate-y-[17%] sm:scale-[0.8] md:translate-y-[20%] md:scale-100">
              <EventMockup />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
