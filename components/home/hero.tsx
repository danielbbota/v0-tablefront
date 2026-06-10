import Image from "next/image"
import Link from "next/link"
import { CALENDLY_URL, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/dictionaries/en"

/**
 * "The Front of House" — magazine-spread hero.
 * A cream typographic panel and a full-bleed editorial image card settle into
 * place on landing (pure CSS keyframes). The image drifts slowly on desktop
 * only (transform-based, media-query gated); on mobile it is a static card.
 */
export function Hero({ lang, dict }: { lang: Locale; dict: Dictionary["hero"] }) {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 pb-16 pt-28 md:min-h-[92svh] md:grid-cols-[7fr_6fr] md:gap-12 md:pb-20 md:pt-32 lg:px-8">
        {/* Typographic panel */}
        <div className="hero-enter-text">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h1 className="mt-6 font-serif text-display font-medium text-heading">
            {dict.headline1}
            <br />
            <em className="not-italic text-primary">{dict.headline2}</em>
          </h1>
          <p className="mt-7 max-w-lg text-body-lg text-muted-foreground [hyphens:none]">{dict.sub}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {dict.ctaPrimary}
            </a>
            <Link href={`/${lang}#free-prototype`} className="btn btn-outline">
              {dict.ctaSecondary}
            </Link>
          </div>

          <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{dict.trust}</p>
        </div>

        {/* Editorial image card */}
        <figure className="hero-enter-image image-card aspect-[4/3] md:aspect-auto md:h-[72vh] md:max-h-[760px]">
          <div className="hero-ambient absolute inset-0">
            <Image
              src="/tablefront-hero-poster.jpeg"
              alt={dict.imageAlt}
              fill
              priority
              sizes="(min-width: 768px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
          {/* Warm scrim for the caption */}
          <div
            className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-espresso/80 to-transparent"
            aria-hidden
          />
          <figcaption className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-cream/70">{dict.imageMeta}</span>
            <span className="mt-2 block max-w-xs font-serif text-h3 leading-snug text-cream">
              {dict.imageCaption}
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
