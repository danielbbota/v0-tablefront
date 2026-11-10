"use client"

import { formatPrice, type Locale } from "@/lib/i18n/config"
import { useCurrency } from "@/lib/currency-context"
import { planById, type PlanId } from "@/lib/pricing-data"

/** A monthly plan's price in the visitor's currency (same toggle as the pricing cards). */
export function PlanPrice({
  lang,
  perMonth,
  planId = "mensalProfissional",
  className = "mt-6 font-serif text-h2 font-medium text-heading",
}: {
  lang: Locale
  perMonth: string
  planId?: PlanId
  className?: string
}) {
  const { currency } = useCurrency()
  const plan = planById(planId)
  return (
    <p className={className}>
      {formatPrice(plan.price[currency], currency, lang)}{" "}
      <span className="text-h3 text-muted-foreground">{perMonth}</span>
    </p>
  )
}
