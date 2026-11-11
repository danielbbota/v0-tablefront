import type { CSSProperties } from "react"
import Link from "next/link"
import { ArrowRight, BedDouble, Scissors, ShoppingBag, UtensilsCrossed } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { BUSINESS_PATH, BUSINESS_TYPES, type BusinessType } from "@/lib/business"
import type { Dictionary } from "@/lib/dictionaries/en"

const ICONS: Record<BusinessType, typeof BedDouble> = {
  restaurants: UtensilsCrossed,
  stays: BedDouble,
  beauty: Scissors,
  shops: ShoppingBag,
}

/**
 * "What kind of business do you run?" — the fork right under the hero. Each
 * card is one link to that business's page, which explains its website and
 * its own platform (tables, stays, appointments or the online shop).
 */
export function BusinessChooser({ lang, dict }: { lang: Locale; dict: Dictionary["business"] }) {
  const { chooser, labels } = dict

  return (
    <section id="business" className="scroll-mt-24 border-t border-border bg-background py-16 md:py-[clamp(2.5rem,6.5svh,5rem)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="reveal max-w-4xl">
          <p className="eyebrow">{chooser.eyebrow}</p>
          <h2 className="mt-4 font-serif text-h1 font-medium text-heading text-balance">{chooser.headline}</h2>
          <p className="mt-4 text-body-lg text-muted-foreground">{chooser.sub}</p>
          <span className="draw-rule mt-5 w-24" aria-hidden />
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {BUSINESS_TYPES.map((type, index) => {
            const item = chooser.items[type]
            const Icon = ICONS[type]
            return (
              <li
                key={type}
                className="reveal flex"
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <Link
                  href={`/${lang}${BUSINESS_PATH[type]}`}
                  className="group flex w-full flex-col rounded-lg border border-border bg-surface px-6 py-5 transition-colors duration-300 hover:border-brass"
                >
                  <Icon className="h-6 w-6 text-primary-deep" strokeWidth={1.5} aria-hidden />
                  <h3 className="mt-4 font-serif text-h3 font-medium text-heading">{labels[type]}</h3>
                  <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {item.examples}
                  </p>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-foreground/80">{item.body}</p>

                  <div className="mt-auto pt-5">
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {chooser.platformLabel}
                    </p>
                    <p className="mt-2 inline-flex items-center gap-2.5 rounded-full border border-brass px-4 py-2 font-mono text-label uppercase text-heading">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-deep" aria-hidden />
                      {item.platform}
                    </p>
                    <p className="mt-5 flex items-center gap-2 font-mono text-label uppercase text-primary-deep">
                      {chooser.cta}
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden
                      />
                    </p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
