import Image from "next/image"
import Link from "next/link"
import { CALENDLY_URL, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/dictionaries/en"
import { HeroAmbience } from "@/components/home/hero-ambience"

const AMBIENCE_SRC = "/videos/hero-ambience.mp4"

/**
 * "The Front of House" — magazine-spread hero.
 * The headline rises line by line behind masks, supporting copy and CTAs
 * follow in a stagger, and the editorial image card settles in from the
 * right (all pure CSS keyframes). On desktop a generated ambience loop fades
 * in over the still once it plays; on mobile the card stays a static image.
 */
export function Hero({ lang, dict }: { lang: Locale; dict: Dictionary["hero"] }) {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 pb-16 pt-28 md:min-h-[92svh] md:grid-cols-[7fr_6fr] md:gap-12 md:pb-20 md:pt-32 lg:px-8">
        {/* Typographic panel */}
        <div>
          <p className="eyebrow hero-enter-eyebrow">{dict.eyebrow}</p>
          <h1 className="mt-6 font-serif text-display font-medium text-heading">
            <span className="hero-line-mask">
              <span className="hero-line hero-line-1">{dict.headline1}</span>
            </span>
            <span className="hero-line-mask">
              <span className="hero-line hero-line-2 text-primary">{dict.headline2}</span>
            </span>
          </h1>
          <p className="hero-enter-sub mt-7 max-w-lg text-body-lg text-muted-foreground [hyphens:none]">
            {dict.sub}
          </p>

          <div className="hero-enter-cta mt-10 flex flex-wrap items-center gap-4">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {dict.ctaPrimary}
            </a>
            <Link href={`/${lang}#free-prototype`} className="btn btn-outline">
              {dict.ctaSecondary}
            </Link>
          </div>

          <p className="hero-enter-trust mt-6 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {dict.trust}
          </p>
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
          {/* Outside the drifting div: the video has real motion and the
              pause control must not ride the ken-burns transform. */}
          <HeroAmbience src={AMBIENCE_SRC} pauseLabel={dict.pauseAmbience} playLabel={dict.playAmbience} />
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
