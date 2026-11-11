"use client"

import type { CSSProperties } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { formatPrice, type Locale } from "@/lib/i18n/config"
import { useCurrency } from "@/lib/currency-context"
import { MONTHLY_PLANS, ONE_TIME_PLANS, planById } from "@/lib/pricing-data"
import type { Dictionary } from "@/lib/dictionaries/en"

/**
 * Pricing on the homepage, in short: the three ways to work with us with
 * their starting price and one link to the pricing page — the only place the
 * full plan cards live.
 */
export function PricingSummary({ lang, dict }: { lang: Locale; dict: Dictionary["pricingSummary"] }) {
  const { currency } = useCurrency()
  const lowest = (plans: typeof ONE_TIME_PLANS) => Math.min(...plans.map((plan) => plan.price[currency]))

  const rows = [
    { ...dict.items.oneTime, amount: lowest(ONE_TIME_PLANS), from: true, monthly: false },
    {
      ...dict.items.monthly,
      amount: lowest(MONTHLY_PLANS.filter((plan) => plan.minTermMonths)),
      from: true,
      monthly: true,
    },
    { ...dict.items.platform, amount: planById("reservas").price[currency], from: false, monthly: true },
  ]

  return (
    <section id="pricing" className="scroll-mt-24 bg-surface py-16 md:py-[clamp(3rem,8svh,5rem)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="reveal max-w-4xl">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className="mt-4 font-serif text-h1 font-medium text-heading text-balance">{dict.headline}</h2>
          <p className="mt-4 text-body-lg text-muted-foreground">{dict.sub}</p>
          <span className="draw-rule mt-5 w-24" aria-hidden />
        </div>

        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {rows.map((row, index) => (
            <li
              key={row.title}
              className="reveal flex flex-col rounded-lg border border-border bg-background p-7 md:p-8"
              style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}
            >
              <h3 className="font-serif text-h3 font-medium text-heading">{row.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{row.body}</p>
              {/* Deterministic formatting + server-matching default currency: no hydration mismatch. */}
              <p className="mt-auto whitespace-nowrap pt-6 font-serif text-h2 font-medium text-heading">
                {row.from && <span className="mr-2 font-mono text-label uppercase text-muted-foreground">{dict.from}</span>}
                {formatPrice(row.amount, currency, lang)}
                {row.monthly && <span className="ml-1 text-h3 text-muted-foreground">{dict.perMonth}</span>}
              </p>
            </li>
          ))}
        </ul>

        <Link href={`/${lang}/pricing`} className="btn btn-primary reveal mt-8">
          {dict.cta}
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  )
}
