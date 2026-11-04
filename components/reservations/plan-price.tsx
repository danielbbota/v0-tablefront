"use client"

import { formatPrice, type Locale } from "@/lib/i18n/config"
import { useCurrency } from "@/lib/currency-context"
import { MONTHLY_PLANS } from "@/lib/pricing-data"

const PLAN = MONTHLY_PLANS.find((plan) => plan.id === "mensalProfissional")!

/** Monthly Professional price in the visitor's currency (same toggle as the pricing cards). */
export function PlanPrice({ lang, perMonth }: { lang: Locale; perMonth: string }) {
  const { currency } = useCurrency()
  return (
    <p className="mt-6 font-serif text-h2 font-medium text-heading">
      {formatPrice(PLAN.price[currency], currency, lang)}{" "}
      <span className="text-h3 text-muted-foreground">{perMonth}</span>
    </p>
  )
}
