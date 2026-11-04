import Link from "next/link"
import type { CSSProperties } from "react"
import { CALENDLY_URL, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/dictionaries/en"
import { HeroShowcase } from "@/components/home/hero-showcase"

/**
 * "The Front of House" — magazine-spread hero.
 * The headline rises line by line behind masks, supporting copy and CTAs
 * follow in a stagger, and the showcase card settles in from the right (all
 * pure CSS keyframes). The eyebrow cycles through the business types we
 * build for on a CSS-only stack, and the showcase cycles the same verticals
 * on the same clock.
 */
export function Hero({ lang, dict }: { lang: Locale; dict: Dictionary["hero"] }) {
  const labels = dict.verticals

  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 pb-16 pt-24 md:min-h-svh md:grid-cols-[3fr_2fr] md:gap-12 md:pb-10 md:pt-24 lg:px-8">
        {/* Typographic panel */}
        <div>
          <p className="eyebrow hero-enter-eyebrow">
            {dict.eyebrowPrefix}{" "}
            <span className="hero-cycle" style={{ "--n": labels.length } as CSSProperties} aria-hidden>
              {labels.map((label, index) => (
                <span key={label} style={{ "--i": index } as CSSProperties}>
                  {label}
                </span>
              ))}
            </span>
            <span className="sr-only">{labels.join(", ")}</span>
          </p>
          <h1 className="mt-5 font-serif text-display font-medium text-heading">
            <span className="hero-line-mask">
              <span className="hero-line hero-line-1">{dict.headline1}</span>
            </span>
            <span className="hero-line-mask">
              <span className="hero-line hero-line-2 text-primary">{dict.headline2}</span>
            </span>
          </h1>
          <p className="hero-enter-sub mt-5 max-w-lg text-body-lg text-muted-foreground [hyphens:none]">
            {dict.sub}
          </p>

          <div className="hero-enter-cta mt-8 flex flex-wrap items-center gap-3">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {dict.ctaPrimary}
            </a>
            <Link href={`/${lang}#free-prototype`} className="btn btn-outline">
              {dict.ctaSecondary}
            </Link>
          </div>

          <p className="hero-enter-trust mt-5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {dict.trust}
          </p>
        </div>

        {/* Showcase card */}
        <div className="hero-enter-image relative aspect-[4/5] sm:aspect-[4/3] md:aspect-auto md:h-[min(70svh,680px)]">
          <HeroShowcase dict={dict.showcase} />
        </div>
      </div>
    </section>
  )
}
