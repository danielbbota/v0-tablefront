import type { Metadata } from "next"
import type { CSSProperties } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CALENDLY_URL, isLocale, SITE_URL } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { languageAlternates, openGraphFor } from "@/lib/seo"
import { Navigation } from "@/components/site/navigation"
import { Footer } from "@/components/site/footer"
import { RevealInit } from "@/components/site/reveal-init"
import { ReservationsIllustration } from "@/components/reservations/illustration"
import { PlanPrice } from "@/components/reservations/plan-price"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = await getDictionary(lang)

  return {
    title: dict.meta.reservations.title,
    description: dict.meta.reservations.description,
    alternates: {
      canonical: `${SITE_URL}/${lang}/reservations`,
      languages: languageAlternates("/reservations"),
    },
    openGraph: openGraphFor(lang, "/reservations", dict.meta.reservations.title, dict.meta.reservations.description),
  }
}

function SectionIntro({ eyebrow, headline, sub }: { eyebrow: string; headline: string; sub?: string }) {
  return (
    <div className="reveal max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 font-serif text-h1 font-medium text-heading text-balance">{headline}</h2>
      {sub && <p className="mt-5 text-body-lg text-muted-foreground">{sub}</p>}
      <span className="draw-rule mt-8 w-24" aria-hidden />
    </div>
  )
}

/** The hospitality reservation platform (app.tablesfront.com), explained for restaurant owners. */
export default async function ReservationsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const t = dict.reservations

  return (
    <>
      <RevealInit />
      <Navigation lang={lang} dict={dict.nav} />
      <main className="bg-background">
        {/* Header */}
        <header className="mx-auto grid max-w-[1280px] items-center gap-14 px-6 pb-20 pt-36 md:grid-cols-[7fr_5fr] md:gap-12 lg:px-8">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 className="mt-5 font-serif text-display font-medium text-heading text-balance">
              {t.headline1} <em className="not-italic text-primary">{t.headline2}</em>
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground">{t.sub}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {t.ctaPrimary}
              </a>
              <Link href={`/${lang}/pricing`} className="btn btn-outline">
                {t.ctaSecondary}
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {t.strip.map((item) => (
                <li key={item} className="flex items-center gap-2.5 font-mono text-label text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-brass" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ReservationsIllustration mock={t.mock} />
        </header>

        {/* For your guests */}
        <section className="border-t border-border bg-surface py-24 md:py-32">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <SectionIntro eyebrow={t.guests.eyebrow} headline={t.guests.headline} sub={t.guests.sub} />
            <ol className="mt-16 grid gap-6 md:grid-cols-3">
              {t.guests.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="reveal rounded-lg border border-transparent bg-background p-8 transition-colors duration-300 hover:border-brass/60 md:p-10"
                  style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}
                >
                  <span className="font-mono text-label tracking-[0.16em] text-brass" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-h3 font-medium text-heading">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-foreground/80">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* For your team */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <SectionIntro eyebrow={t.team.eyebrow} headline={t.team.headline} sub={t.team.sub} />
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t.team.features.map((feature, index) => (
                <article
                  key={feature.title}
                  className="reveal rounded-lg border border-border bg-surface p-8 transition-colors duration-300 hover:border-brass/60"
                  style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
                >
                  <h3 className="font-serif text-h3 font-medium text-heading">{feature.title}</h3>
                  <p className="mt-3 leading-relaxed text-foreground/80">{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why not a marketplace */}
        <section className="border-t border-border bg-surface py-24 md:py-32">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <SectionIntro eyebrow={t.own.eyebrow} headline={t.own.headline} />
            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {t.own.points.map((point, index) => (
                <div
                  key={point.title}
                  className="reveal border-l-2 border-brass pl-6"
                  style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}
                >
                  <h3 className="font-serif text-h3 font-medium text-heading">{point.title}</h3>
                  <p className="mt-3 leading-relaxed text-foreground/80">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Included in Monthly Professional + good to know */}
        <section className="py-24 md:py-32">
          <div className="mx-auto grid max-w-[1280px] gap-10 px-6 md:grid-cols-[6fr_6fr] lg:px-8">
            <div className="reveal rounded-lg border border-brass bg-background p-8 ring-1 ring-brass/40 md:p-10">
              <p className="eyebrow">{t.included.eyebrow}</p>
              <h2 className="mt-5 font-serif text-h2 font-medium text-heading text-balance">{t.included.headline}</h2>
              <p className="mt-4 leading-relaxed text-foreground/80">{t.included.body}</p>
              <PlanPrice lang={lang} perMonth={t.included.perMonth} />
              <Link
                href={`/${lang}/pricing`}
                className="link-brass mt-6 inline-block font-mono text-label uppercase text-heading"
              >
                {t.included.cta}
              </Link>
            </div>
            <div className="reveal" style={{ "--reveal-delay": "120ms" } as CSSProperties}>
              <p className="eyebrow">{t.setup.eyebrow}</p>
              <dl className="mt-6 divide-y divide-border">
                {t.setup.items.map((item) => (
                  <div key={item.title} className="py-5 first:pt-0">
                    <dt className="font-serif text-h3 font-medium text-heading">{item.title}</dt>
                    <dd className="mt-2 leading-relaxed text-foreground/80">{item.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Exit */}
        <section className="mx-auto max-w-[1280px] px-6 pb-24 lg:px-8">
          <div className="reveal rounded-lg bg-espresso p-8 text-center md:p-10">
            <p className="font-serif text-h2 font-medium text-cream">{t.exitTitle}</p>
            <p className="mt-2 text-cream/70">{t.exitSub}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-on-dark">
                {t.exitCall}
              </a>
              <Link
                href={`/${lang}/pricing`}
                className="btn border border-cream/30 text-cream hover:border-brass hover:text-brass"
              >
                {t.exitPricing}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </>
  )
}
