"use client"

import { formatPrice, type Locale } from "@/lib/i18n/config"
import { useCurrency } from "@/lib/currency-context"
import { planById, type PlanId } from "@/lib/pricing-data"

/** A plan's price in the visitor's currency (same toggle as the pricing cards), with "per month" or "one-time" after it. */
export function PlanPrice({
  lang,
  planId,
  suffix,
  className = "mt-6 font-serif text-h2 font-medium text-heading",
}: {
  lang: Locale
  planId: PlanId
  suffix: string
  className?: string
}) {
  const { currency } = useCurrency()
  const plan = planById(planId)
  return (
    <p className={className}>
      {formatPrice(plan.price[currency], currency, lang)}{" "}
      <span className="text-h3 text-muted-foreground">{suffix}</span>
    </p>
  )
}
