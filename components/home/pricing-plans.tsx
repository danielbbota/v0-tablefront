"use client"

import type { CSSProperties } from "react"
import Link from "next/link"
import { Check } from "lucide-react"
import { CALENDLY_URL, formatPrice, type Locale } from "@/lib/i18n/config"
import { useCurrency } from "@/lib/currency-context"
import { MONTHLY_PLANS, ONE_TIME_PLANS, type PlanData } from "@/lib/pricing-data"
import type { Dictionary } from "@/lib/dictionaries/en"

type PlansDict = Dictionary["plans"]

function PlanCard({ plan, dict, lang, index }: { plan: PlanData; dict: PlansDict; lang: Locale; index: number }) {
  const { currency } = useCurrency()
  const copy = dict.items[plan.id]

  return (
    <article
      className={`reveal plan-card relative flex flex-col rounded-lg border bg-background p-7 md:p-8 ${
        plan.highlight ? "border-brass ring-1 ring-brass/40" : "border-border hover:border-brass/60"
      }`}
      style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}
    >
      {plan.highlight && (
        <span className="absolute -top-3 left-6 whitespace-nowrap rounded-full bg-espresso px-4 py-1 font-mono text-xs uppercase tracking-[0.12em] text-cream">
          {dict.recommended}
        </span>
      )}
      <p className="font-mono text-label uppercase text-primary-deep">{copy.label}</p>
      <p className="mt-1.5 text-sm text-muted-foreground">{copy.tagline}</p>

      {/* Deterministic formatting + server-matching default currency: no hydration mismatch. */}
      <p className="mt-4 font-serif text-h1 font-medium text-heading">
        {formatPrice(plan.price[currency], currency, lang)}
        {plan.monthly && <span className="ml-1 text-h3 text-muted-foreground">{dict.perMonth}</span>}
      </p>
      <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
        {plan.monthly ? " " : dict.oneTime}
      </p>

      <hr className="my-4 border-border" />

      <ul className="space-y-2">
        {copy.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm leading-snug text-foreground/85">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-deep" aria-hidden />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn mt-6 !px-5 !py-3 ${plan.highlight ? "btn-primary" : "btn-outline"}`}
      >
        {dict.cta}
      </a>
    </article>
  )
}

/**
 * The five fixed-price packages. Prices follow the CHF/EUR toggle in the
 * navigation (EN/PT default to EUR, DE/FR to CHF). Used on the homepage and,
 * with `showFullLink` off, as the body of the pricing page.
 */
export function PricingPlans({
  lang,
  dict,
  compact = false,
}: {
  lang: Locale
  dict: PlansDict
  /** Pricing page: the page header already introduces the section, so skip the intro and the "full pricing" link. */
  compact?: boolean
}) {
  return (
    <section
      id="pricing"
      className={`scroll-mt-24 ${compact ? "bg-background pb-20 pt-12 md:pt-16" : "bg-surface py-16 md:py-[clamp(3rem,8svh,5rem)]"}`}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        {!compact && (
          <div className="reveal max-w-4xl">
            <p className="eyebrow">{dict.eyebrow}</p>
            <h2 className="mt-4 font-serif text-h1 font-medium text-heading text-balance">{dict.headline}</h2>
            <p className="mt-4 text-body-lg text-muted-foreground">{dict.sub}</p>
            <span className="draw-rule mt-5 w-24" aria-hidden />
          </div>
        )}

        <div className={compact ? "" : "mt-10"}>
          <h3 className="font-serif text-h3 font-medium text-heading">{dict.oneTimeTitle}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{dict.oneTimeSub}</p>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {ONE_TIME_PLANS.map((plan, index) => (
              <PlanCard key={plan.id} plan={plan} dict={dict} lang={lang} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-serif text-h3 font-medium text-heading">{dict.monthlyTitle}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{dict.monthlySub}</p>
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:max-w-[66%]">
            {MONTHLY_PLANS.map((plan, index) => (
              <PlanCard key={plan.id} plan={plan} dict={dict} lang={lang} index={index} />
            ))}
          </div>
        </div>

        {!compact && <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted-foreground">{dict.note}</p>}
        {!compact && (
          <Link
            href={`/${lang}/pricing`}
            className="link-brass mt-5 inline-block font-mono text-label uppercase text-heading"
          >
            {dict.ctaSecondary}
          </Link>
        )}
      </div>
    </section>
  )
}
