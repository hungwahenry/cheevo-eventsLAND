import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { SiteHeader } from "@/components/landing/site-header"
import { getPublicPage, listPublicPages } from "@/features/pages/api"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  try {
    const pages = await listPublicPages()
    return pages.map((page) => ({ slug: page.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPublicPage(slug)
  if (!page) return { title: "Not found — cheevo" }
  return {
    title: `${page.title} — cheevo`,
    description: page.meta_description ?? undefined,
  }
}

const PROSE_CLASSES = [
  "max-w-none text-foreground/85 leading-7",
  "[&_h1]:mt-10 [&_h1]:text-3xl [&_h1]:font-sans-bold [&_h1]:tracking-tight [&_h1]:text-foreground",
  "[&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-sans-semibold [&_h2]:tracking-tight [&_h2]:text-foreground",
  "[&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-sans-semibold [&_h3]:text-foreground",
  "[&_h4]:mt-6 [&_h4]:text-lg [&_h4]:font-sans-semibold [&_h4]:text-foreground",
  "[&_p]:mt-4",
  "[&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:opacity-80",
  "[&_strong]:font-sans-semibold [&_strong]:text-foreground",
  "[&_em]:italic",
  "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6",
  "[&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6",
  "[&_li]:mt-1.5",
  "[&_blockquote]:mt-4 [&_blockquote]:border-l-2 [&_blockquote]:border-foreground/20 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-foreground/70",
  "[&_code]:rounded [&_code]:bg-foreground/[0.06] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm",
  "[&_pre]:mt-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-foreground [&_pre]:p-4 [&_pre]:text-background",
  "[&_hr]:my-10 [&_hr]:border-foreground/10",
  "[&_table]:mt-6 [&_table]:w-full [&_table]:border-collapse",
  "[&_th]:border-b [&_th]:border-foreground/15 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-sans-semibold",
  "[&_td]:border-b [&_td]:border-foreground/10 [&_td]:px-3 [&_td]:py-2",
].join(" ")

export default async function PublicPageRoute({ params }: Props) {
  const { slug } = await params
  const page = await getPublicPage(slug)
  if (!page) notFound()

  const updated = page.updated_at
    ? new Date(page.updated_at).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null

  return (
    <main className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />

      <section className="flex flex-1 flex-col px-6 py-10 md:py-16">
        <div className="mx-auto w-full max-w-3xl">
          <Link
            href="/pages"
            className="inline-flex items-center gap-1.5 text-xs font-sans-medium uppercase tracking-[0.18em] text-foreground/55 transition-colors hover:text-foreground"
          >
            <span aria-hidden>&larr;</span>
            All pages
          </Link>

          <h1 className="mt-6 text-[clamp(2rem,5vw,3rem)] font-black leading-[1.05] tracking-[-0.025em]">
            {page.title}
          </h1>

          {updated ? (
            <p className="mt-3 text-xs text-foreground/45">Last updated {updated}</p>
          ) : null}

          <div className="my-8 h-px bg-foreground/10" />

          <article
            className={PROSE_CLASSES}
            dangerouslySetInnerHTML={{ __html: page.body_html }}
          />
        </div>
      </section>
    </main>
  )
}
