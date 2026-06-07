import { cn } from "@/lib/utils"

const EMOJIS = [
  { char: "🎉", className: "left-1 top-3 text-3xl animate-bob" },
  { char: "🎟️", className: "-right-2 top-32 text-2xl animate-bob-soft [animation-delay:-1.4s]" },
  { char: "✨", className: "right-12 -top-1 text-xl animate-bob [animation-delay:-2.6s]" },
  { char: "🎤", className: "-left-3 top-[55%] text-2xl animate-bob-soft [animation-delay:-0.6s]" },
  { char: "🔥", className: "-right-2 bottom-32 text-2xl animate-bob [animation-delay:-1.8s]" },
  { char: "🥂", className: "left-10 bottom-12 text-xl animate-bob-soft [animation-delay:-2.2s]" },
]

export function EventMockup() {
  return (
    <div className="relative h-[640px] w-[320px] md:h-[700px] md:w-[350px]">
      {EMOJIS.map((e, i) => (
        <span
          key={i}
          aria-hidden
          className={cn("absolute z-30 select-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.12)]", e.className)}
        >
          {e.char}
        </span>
      ))}

      <div
        className="absolute inset-0 flex items-start justify-center pt-[20px]"
        style={{ perspective: "1400px" }}
      >
        <div
          className="relative h-[600px] w-[277px] md:h-[660px] md:w-[305px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <span className="absolute -left-[2px] top-[15%] h-[5.5%] w-[3.5px] rounded-l-[1.5px] bg-[#0d0d0d]" />
          <span className="absolute -left-[2px] top-[23%] h-[8%] w-[3.5px] rounded-l-[1.5px] bg-[#0d0d0d]" />
          <span className="absolute -left-[2px] top-[33%] h-[8%] w-[3.5px] rounded-l-[1.5px] bg-[#0d0d0d]" />
          <span className="absolute -right-[2px] top-[26%] h-[11%] w-[3.5px] rounded-r-[1.5px] bg-[#0d0d0d]" />

          <div className="absolute inset-0 rounded-[44px] bg-[linear-gradient(180deg,#262626_0%,#0e0e0e_8%,#0a0a0a_92%,#262626_100%)] p-[5px] shadow-[0_50px_120px_-30px_rgba(0,0,0,0.42),0_22px_55px_-25px_rgba(0,0,0,0.26),inset_0_0_0_0.5px_rgba(255,255,255,0.08)] md:rounded-[48px]">
            <div
              className="relative h-full w-full overflow-hidden rounded-[40px] bg-white md:rounded-[44px] dark:bg-background"
              style={{ boxShadow: "inset 0 0 0 0.5px rgba(255,255,255,0.06)" }}
            >
              <div className="absolute left-1/2 top-[10px] z-30 h-[26px] w-[88px] -translate-x-1/2 rounded-full bg-[#0a0a0a] shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.04)] md:h-[28px] md:w-[96px]">
                <span className="absolute right-[9px] top-1/2 size-[6px] -translate-y-1/2 rounded-full bg-[#1a1a1a] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />
                <span className="absolute right-[9px] top-1/2 size-[2.5px] -translate-y-1/2 rounded-full bg-[#3a3a3a]" />
              </div>

              <div className="relative aspect-[5/4] w-full overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(150deg,oklch(0.38_0.22_320)_0%,oklch(0.55_0.27_5)_35%,oklch(0.72_0.22_45)_75%,oklch(0.86_0.16_75)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(at_75%_20%,oklch(0.96_0.12_80_/_0.55)_0%,transparent_45%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(at_10%_95%,oklch(0.3_0.18_310_/_0.5)_0%,transparent_55%)]" />

                <div className="absolute left-3 top-[44px] flex size-8 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </div>
                <div className="absolute right-3 top-[44px] flex size-8 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm">
                  <svg viewBox="0 0 24 24" fill="white" className="size-4">
                    <circle cx="5" cy="12" r="1.6" />
                    <circle cx="12" cy="12" r="1.6" />
                    <circle cx="19" cy="12" r="1.6" />
                  </svg>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/70">
                    Sundown / 04
                  </p>
                  <p className="font-mono text-[8px] uppercase tracking-wider text-white/55">
                    24.05 · 4PM
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 px-4 pt-3.5 md:gap-3 md:pt-4">
                <div>
                  <p className="text-[16px] font-bold leading-tight tracking-tight text-foreground md:text-[18px]">
                    Sundown · The Day Party
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="inline-flex items-center gap-1 text-[10px] text-foreground/55 md:text-[11px]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      Sat, May 24 · 4:00 PM
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-foreground/55 md:text-[11px]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      The Rooftop
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-full border border-foreground/8 bg-foreground/[0.04] px-2.5 py-1 text-[9.5px] font-medium text-foreground/75 md:text-[10.5px]">
                    Day party
                  </span>
                  <span className="rounded-full border border-foreground/8 bg-foreground/[0.04] px-2.5 py-1 text-[9.5px] font-medium text-foreground/75 md:text-[10.5px]">
                    Outdoor
                  </span>
                  <span className="rounded-full border border-foreground/8 bg-foreground/[0.04] px-2.5 py-1 text-[9.5px] font-medium text-foreground/75 md:text-[10.5px]">
                    Cocktails
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[10px] font-medium text-foreground md:text-[11px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="size-3">
                    <path d="M12 2l1.9 5.8H20l-5 3.6 1.9 5.8L12 13.6 7.1 17.2 9 11.4 4 7.8h6.1z" />
                  </svg>
                  Matches 2 of your interests
                </div>

                <p className="text-[10px] leading-relaxed text-foreground/55 md:text-[11px]">
                  Sundown returns. House and amapiano DJs from 4PM till the last cocktail.
                </p>

                <div className="mt-1 flex items-center justify-between">
                  <p className="text-[12px] font-semibold text-foreground md:text-[13px]">
                    Tickets
                  </p>
                  <span className="text-[9px] text-foreground/45 md:text-[10px]">
                    3 tiers
                  </span>
                </div>

                <div
                  className="relative rounded-2xl bg-white p-2.5 shadow-[0_22px_44px_-12px_rgba(0,0,0,0.25),0_8px_16px_-8px_rgba(0,0,0,0.15)] ring-1 ring-foreground/8 md:p-3 dark:bg-card dark:shadow-[0_22px_44px_-12px_rgba(0,0,0,0.6),0_8px_16px_-8px_rgba(0,0,0,0.4)]"
                  style={{ transform: "translateZ(45px)" }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12px] font-semibold text-foreground md:text-[13px]">
                        General entry
                      </p>
                      <p className="mt-0.5 text-[9px] leading-tight text-foreground/55 md:text-[10px]">
                        Includes welcome cocktail
                      </p>
                    </div>
                    <p className="text-[14px] font-bold leading-tight tracking-tight text-foreground md:text-[16px]">
                      ₦15,000
                    </p>
                  </div>
                  <p className="mt-1.5 text-[9px] text-foreground/55 md:text-[10px]">
                    45 left · Closes May 22
                  </p>
                  <div
                    className="absolute -right-2 -top-2 rounded-full bg-destructive px-2 py-[3px] text-[8px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_15px_30px_-8px_rgba(220,38,38,0.55)] md:text-[9px]"
                    style={{ transform: "rotate(8deg) translateZ(55px)" }}
                  >
                    Selling fast
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-[5px] bottom-[5px] overflow-hidden rounded-b-[36px] bg-white md:rounded-b-[40px] dark:bg-background">
                <div className="h-px w-full bg-foreground/10" />
                <div className="flex items-center gap-2 px-4 pt-3.5 pb-4">
                  <div className="flex-1 leading-tight">
                    <p className="text-[8px] font-medium uppercase tracking-[0.12em] text-foreground/55">
                      From
                    </p>
                    <p className="mt-0.5 text-[13px] font-bold tracking-tight text-foreground md:text-[14px]">
                      ₦15,000
                    </p>
                  </div>
                  <button className="flex items-center gap-1 rounded-full border border-foreground/12 bg-white px-2.5 py-1.5 text-[10px] font-medium text-foreground dark:bg-background">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="size-3">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    12
                  </button>
                  <button
                    className="flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-[11px] font-semibold text-primary-foreground shadow-[0_15px_30px_-8px_rgba(0,0,0,0.45),0_6px_12px_-4px_rgba(0,0,0,0.3)]"
                    style={{ transform: "translateZ(40px) scale(1.05)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="size-3">
                      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                      <path d="M13 5v2M13 11v2M13 17v2" />
                    </svg>
                    Get Tixs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
