"use client"

import type { CSSProperties } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { CALENDLY_URL, formatPrice, type Locale } from "@/lib/i18n/config"
import { useCurrency } from "@/lib/currency-context"
import { BUSINESS_PATH, type BusinessType } from "@/lib/business"
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
        {plan.monthly ? (plan.minTermMonths ? dict.contract : " ") : dict.oneTime}
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
 * The six fixed-price packages — the body of the pricing page, the one place
 * the full cards live (the homepage only shows a three-line summary). Two
 * sections, one-time builds then monthly partnerships, so each row of cards
 * fits a laptop screen; the three booking platforms follow underneath.
 * Prices follow the CHF/EUR toggle in the navigation (EN/PT default to EUR,
 * DE/FR to CHF).
 */
export function PricingPlans({
  lang,
  dict,
  platforms,
}: {
  lang: Locale
  dict: PlansDict
  /** The three booking platforms, linked to the business page that explains each. */
  platforms: { type: BusinessType; label: string; business: string }[]
}) {
  const wrap = "mx-auto max-w-[1280px] px-6 lg:px-8"
  return (
    <>
      <section id="pricing" className="scroll-mt-24 bg-background pb-12 pt-10 md:pb-[clamp(3rem,7svh,4.5rem)]">
        <div className={wrap}>
          <h2 className="font-serif text-h3 font-medium text-heading">{dict.oneTimeTitle}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{dict.oneTimeSub}</p>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {ONE_TIME_PLANS.map((plan, index) => (
              <PlanCard key={plan.id} plan={plan} dict={dict} lang={lang} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="monthly" className="scroll-mt-24 border-t border-border bg-surface py-12 md:py-[clamp(3rem,7svh,4.5rem)]">
        <div className={wrap}>
          <h2 className="font-serif text-h3 font-medium text-heading">{dict.monthlyTitle}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{dict.monthlySub}</p>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {MONTHLY_PLANS.map((plan, index) => (
              <PlanCard key={plan.id} plan={plan} dict={dict} lang={lang} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background pt-12 md:pt-[clamp(3rem,7svh,4.5rem)]">
        <div className={wrap}>
          <div className="reveal rounded-lg border border-border bg-surface p-6 md:p-7">
            <p className="font-mono text-label uppercase text-heading">{dict.platformsNote}</p>
            <ul className="mt-4 grid gap-4 md:grid-cols-3">
              {platforms.map((platform) => (
                <li key={platform.type}>
                  <Link href={`/${lang}${BUSINESS_PATH[platform.type]}`} className="group block">
                    <span className="flex items-center gap-2 font-serif text-h3 font-medium text-heading">
                      {platform.label}
                      <ArrowRight
                        className="h-4 w-4 text-primary-deep transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">{platform.business}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
