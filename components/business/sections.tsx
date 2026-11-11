import type { CSSProperties, ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { APP_LOGIN_URL, CALENDLY_URL, type Locale } from "@/lib/i18n/config"
import { BUSINESS_PATH, BUSINESS_TYPES, type BusinessType } from "@/lib/business"
import { planById, type PlanId } from "@/lib/pricing-data"
import { PlanPrice } from "@/components/business/plan-price"

/**
 * Building blocks shared by the four business pages (restaurants, stays,
 * health & beauty, shops), so every page tells its story in the same order:
 * header, the website, the platform, why direct, how to get it, good to
 * know, exit.
 */

const SECTION = "py-16 md:py-[clamp(3rem,8svh,5rem)]"
const WRAP = "mx-auto max-w-[1280px] px-6 lg:px-8"

type TitleBody = { title: string; body: string }

export function SectionIntro({ eyebrow, headline, sub }: { eyebrow: string; headline: string; sub?: string }) {
  return (
    <div className="reveal max-w-4xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-h1 font-medium text-heading text-balance">{headline}</h2>
      {sub && <p className="mt-4 text-body-lg text-muted-foreground">{sub}</p>}
      <span className="draw-rule mt-5 w-24" aria-hidden />
    </div>
  )
}

export function PageHeader({
  eyebrow,
  headline1,
  headline2,
  sub,
  strip,
  primaryLabel,
  secondary,
  login,
}: {
  eyebrow: string
  headline1: string
  headline2: string
  sub: string
  strip: string[]
  primaryLabel: string
  secondary: { href: string; label: string }
  /** Booking businesses only: the dashboard sign-in for existing clients. */
  login?: { hint: string; cta: string }
}) {
  return (
    <header className={`${WRAP} pb-12 pt-28`}>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-5 max-w-4xl break-words font-serif text-display font-medium text-heading text-balance max-sm:hyphens-auto">
        {headline1} <em className="not-italic text-primary">{headline2}</em>
      </h1>
      <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground">{sub}</p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          {primaryLabel}
        </a>
        <Link href={secondary.href} className="btn btn-outline">
          {secondary.label}
        </Link>
      </div>
      {login && (
        <p className="mt-5 text-sm text-muted-foreground">
          {login.hint}{" "}
          <a href={APP_LOGIN_URL} className="link-brass font-medium text-heading">
            {login.cta} →
          </a>
        </p>
      )}
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        {strip.map((item) => (
          <li key={item} className="flex items-center gap-2.5 font-mono text-label text-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-brass" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </header>
  )
}

/** "Your website": the three things the site itself does for this business. */
export function SiteSection({ eyebrow, headline, items }: { eyebrow: string; headline: string; items: TitleBody[] }) {
  return (
    <section className={`border-t border-border ${SECTION}`}>
      <div className={WRAP}>
        <SectionIntro eyebrow={eyebrow} headline={headline} />
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {items.map((item, index) => (
            <div key={item.title} className="reveal" style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}>
              <span className="font-mono text-label tracking-[0.16em] text-brass" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif text-h3 font-medium text-heading">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-foreground/80">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * The platform (or the shop), in two screens: the intro beside its
 * illustration, then what it includes as feature cards. Two sections on
 * purpose, so each one fits a laptop screen.
 */
export function PlatformSection({
  eyebrow,
  headline,
  sub,
  features,
  featuresEyebrow,
  illustration,
}: {
  eyebrow: string
  headline: string
  sub: string
  features: TitleBody[]
  featuresEyebrow: string
  illustration: ReactNode
}) {
  return (
    <>
      <section id="platform" className={`scroll-mt-24 border-t border-border bg-surface ${SECTION}`}>
        <div className={WRAP}>
          <div className="grid items-center gap-14 md:grid-cols-2 md:gap-12">
            <SectionIntro eyebrow={eyebrow} headline={headline} sub={sub} />
            <div className="reveal" style={{ "--reveal-delay": "120ms" } as CSSProperties}>
              {illustration}
            </div>
          </div>
        </div>
      </section>

      <section className={`border-t border-border ${SECTION}`}>
        <div className={WRAP}>
          <p className="eyebrow reveal">{featuresEyebrow}</p>
          <FeatureCards features={features} className="mt-6" tone="surface" />
        </div>
      </section>
    </>
  )
}

export function FeatureCards({
  features,
  className = "mt-10",
  tone = "background",
}: {
  features: TitleBody[]
  className?: string
  /** Card colour: the opposite of the section it sits on. */
  tone?: "background" | "surface"
}) {
  return (
    <div className={`${className} grid gap-5 md:grid-cols-2 lg:grid-cols-3`}>
      {features.map((feature, index) => (
        <article
          key={feature.title}
          className={`reveal rounded-lg border border-border px-6 py-5 transition-colors duration-300 hover:border-brass/60 ${
            tone === "surface" ? "bg-surface" : "bg-background"
          }`}
          style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
        >
          <h3 className="font-serif text-h3 font-medium text-heading">{feature.title}</h3>
          <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-foreground/80">{feature.body}</p>
        </article>
      ))}
    </div>
  )
}

/** Why direct rather than through a marketplace. */
export function OwnSection({ eyebrow, headline, points }: { eyebrow: string; headline: string; points: TitleBody[] }) {
  return (
    <section className={`border-t border-border ${SECTION}`}>
      <div className={WRAP}>
        <SectionIntro eyebrow={eyebrow} headline={headline} />
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {points.map((point, index) => (
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
  )
}

/**
 * How to get it: one card per plan, the first one recommended when there is
 * a choice. Prices come from `lib/pricing-data.ts`, never from the copy.
 */
export function GetSection({
  lang,
  eyebrow,
  headline,
  plans,
  labels,
}: {
  lang: Locale
  eyebrow: string
  headline: string
  plans: { planId: PlanId; title: string; body: string }[]
  labels: { recommended: string; perMonth: string; oneTime: string; contract: string; pricingCta: string }
}) {
  const single = plans.length === 1
  return (
    <section id="pricing" className={`scroll-mt-24 border-t border-border bg-surface ${SECTION}`}>
      <div className={WRAP}>
        <SectionIntro eyebrow={eyebrow} headline={headline} />
        <div className={`mt-10 grid gap-6 ${single ? "max-w-2xl" : "md:grid-cols-2"}`}>
          {plans.map((item, index) => {
            const plan = planById(item.planId)
            const recommended = index === 0 && !single
            return (
              <div
                key={item.planId}
                className={`reveal relative rounded-lg border bg-background p-8 ${
                  recommended ? "border-brass ring-1 ring-brass/40" : "border-border"
                }`}
                style={{ "--reveal-delay": `${index * 120}ms` } as CSSProperties}
              >
                {recommended && (
                  <span className="absolute -top-3 left-6 whitespace-nowrap rounded-full bg-espresso px-4 py-1 font-mono text-xs uppercase tracking-[0.12em] text-cream">
                    {labels.recommended}
                  </span>
                )}
                <h3 className="font-serif text-h2 font-medium text-heading text-balance">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-foreground/80">{item.body}</p>
                <PlanPrice lang={lang} planId={item.planId} suffix={plan.monthly ? labels.perMonth : labels.oneTime} />
                {plan.minTermMonths && (
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {labels.contract}
                  </p>
                )}
              </div>
            )
          })}
        </div>
        <Link href={`/${lang}/pricing`} className="link-brass mt-8 inline-block font-mono text-label uppercase text-heading">
          {labels.pricingCta}
        </Link>
      </div>
    </section>
  )
}

export function SetupSection({ eyebrow, items }: { eyebrow: string; items: TitleBody[] }) {
  return (
    <section className={`border-t border-border ${SECTION}`}>
      <div className={WRAP}>
        <p className="eyebrow reveal">{eyebrow}</p>
        <dl className="mt-6 grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <div key={item.title} className="reveal" style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}>
              <dt className="font-serif text-h3 font-medium text-heading">{item.title}</dt>
              <dd className="mt-2 leading-relaxed text-foreground/80">{item.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/** The dark closing panel, with links to the other three kinds of business underneath. */
export function ExitSection({
  lang,
  current,
  title,
  sub,
  callLabel,
  pricingLabel,
  otherTitle,
  businessLabels,
}: {
  lang: Locale
  current: BusinessType
  title: string
  sub: string
  callLabel: string
  pricingLabel: string
  otherTitle: string
  businessLabels: Record<BusinessType, string>
}) {
  return (
    <section className={`${WRAP} py-16`}>
      <div className="reveal rounded-lg bg-espresso p-8 text-center">
        <p className="font-serif text-h2 font-medium text-cream">{title}</p>
        <p className="mt-2 text-cream/70">{sub}</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-on-dark">
            {callLabel}
          </a>
          <Link
            href={`/${lang}/pricing`}
            className="btn border border-cream/30 text-cream hover:border-brass hover:text-brass"
          >
            {pricingLabel}
          </Link>
        </div>
      </div>

      <nav className="reveal mt-10 flex flex-wrap items-center gap-x-6 gap-y-3" aria-label={otherTitle}>
        <p className="font-mono text-label uppercase text-muted-foreground">{otherTitle}</p>
        {BUSINESS_TYPES.filter((type) => type !== current).map((type) => (
          <Link
            key={type}
            href={`/${lang}${BUSINESS_PATH[type]}`}
            className="link-brass inline-flex items-center gap-1.5 font-mono text-label uppercase text-heading"
          >
            {businessLabels[type]}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        ))}
      </nav>
    </section>
  )
}
