import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/dictionaries/en"
import { ReservationsIllustration } from "@/components/reservations/illustration"

/**
 * Home teaser for the hospitality reservation platform, right after
 * "Who we work with": the flagship vertical gets its depth here and the
 * full story lives on /reservations.
 */
export function ReservationsTeaser({
  lang,
  dict,
  mock,
}: {
  lang: Locale
  dict: Dictionary["reservationsTeaser"]
  mock: Dictionary["reservations"]["mock"]
}) {
  return (
    <section id="reservations" className="scroll-mt-24 border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-6 md:grid-cols-[6fr_6fr] md:gap-12 lg:px-8">
        <div className="reveal">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className="mt-5 font-serif text-h1 font-medium text-heading text-balance">{dict.headline}</h2>
          <p className="mt-5 text-body-lg text-muted-foreground">{dict.sub}</p>
          <ul className="mt-8 space-y-3">
            {dict.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-foreground/85">
                <Check className="mt-1 h-4 w-4 shrink-0 text-primary-deep" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-brass px-4 py-2 font-mono text-label uppercase text-heading">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-deep" aria-hidden />
            {dict.included}
          </p>
          <div className="mt-8">
            <Link href={`/${lang}/reservations`} className="btn btn-primary">
              {dict.cta}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="reveal" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
          <ReservationsIllustration mock={mock} />
        </div>
      </div>
    </section>
  )
}
