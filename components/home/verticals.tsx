import type { CSSProperties } from "react"
import { Scissors, ShoppingBag, UtensilsCrossed } from "lucide-react"
import type { Dictionary } from "@/lib/dictionaries/en"

const ORDER = ["hospitality", "beauty", "shops"] as const
const ICONS = { hospitality: UtensilsCrossed, beauty: Scissors, shops: ShoppingBag }

/** "Who we work with" — the three verticals, each with the one action its site is built around. */
export function Verticals({ dict }: { dict: Dictionary["verticals"] }) {
  return (
    <section id="who" className="scroll-mt-24 border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className="mt-5 font-serif text-h1 font-medium text-heading text-balance">{dict.headline}</h2>
          <p className="mt-5 text-body-lg text-muted-foreground">{dict.sub}</p>
          <span className="draw-rule mt-8 w-24" aria-hidden />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {ORDER.map((id, index) => {
            const item = dict.items[id]
            const Icon = ICONS[id]
            return (
              <article
                key={id}
                className="reveal flex flex-col rounded-lg border border-border bg-surface p-8 transition-colors duration-300 hover:border-brass/60 md:p-10"
                style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}
              >
                <div className="flex items-center justify-between gap-4">
                  <Icon className="h-6 w-6 text-primary-deep" strokeWidth={1.5} aria-hidden />
                  {"kicker" in item && (
                    <span className="rounded-full bg-espresso px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] text-cream">
                      {item.kicker}
                    </span>
                  )}
                </div>
                <h3 className="mt-6 font-serif text-h3 font-medium text-heading">{item.title}</h3>
                <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">{item.examples}</p>
                <p className="mt-4 leading-relaxed text-foreground/80">{item.body}</p>

                <div className="mt-auto pt-8">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{dict.actionLabel}</p>
                  <p className="mt-2 inline-flex items-center gap-2.5 rounded-full border border-brass px-4 py-2 font-mono text-label uppercase text-heading">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-deep" aria-hidden />
                    {item.action}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
