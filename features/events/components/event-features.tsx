import { SparklesIcon } from "lucide-react"

import type { PublicFeature } from "@/features/events/types"

export function EventFeatures({ features }: { features: PublicFeature[] }) {
  if (features.length === 0) return null

  return (
    <section className="mt-12">
      <h2 className="flex items-center gap-2 text-lg font-sans-semibold tracking-tight">
        <SparklesIcon className="size-4 text-foreground/40" />
        What&apos;s included
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex gap-3 rounded-2xl border border-foreground/10 p-4"
          >
            {feature.image_url ? (
              <img
                src={feature.image_url}
                alt=""
                className="size-12 shrink-0 rounded-lg object-cover"
              />
            ) : null}
            <div className="min-w-0">
              <p className="font-sans-semibold text-foreground">
                {feature.title}
              </p>
              {feature.description ? (
                <p className="mt-0.5 text-sm text-foreground/60">
                  {feature.description}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
