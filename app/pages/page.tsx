import type { Metadata } from "next"
import Link from "next/link"

import { SiteHeader } from "@/components/landing/site-header"
import { listPublicPages } from "@/features/pages/api"

export const metadata: Metadata = {
  title: "Pages — cheevo",
  description: "Published pages.",
}

export default async function PagesIndex() {
  const pages = await listPublicPages()

  return (
    <main className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />

      <section className="flex flex-1 flex-col px-6 py-12 md:py-20">
        <div className="mx-auto w-full max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/55">
            Pages
          </p>
          <h1 className="mt-3 text-[clamp(2rem,5vw,3rem)] font-black leading-[1.05] tracking-[-0.025em]">
            Published pages.
          </h1>
          <p className="mt-4 max-w-xl text-foreground/65">
            The latest versions of everything cheevo publishes — terms, privacy, and any other live policy pages.
          </p>

          {pages.length === 0 ? (
            <p className="mt-12 text-sm text-foreground/55">
              No published pages yet.
            </p>
          ) : (
            <ul className="mt-10 divide-y divide-foreground/10 border-y border-foreground/10">
              {pages.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/pages/${page.slug}`}
                    className="group flex items-center justify-between gap-4 py-4 transition-colors hover:bg-foreground/[0.03]"
                  >
                    <span className="text-base font-sans-semibold text-foreground">
                      {page.title}
                    </span>
                    {page.updated_at ? (
                      <span className="text-xs text-foreground/45">
                        Updated{" "}
                        {new Date(page.updated_at).toLocaleDateString(
                          undefined,
                          { year: "numeric", month: "short", day: "numeric" }
                        )}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  )
}
