"use client"

import { useState } from "react"
import Link from "next/link"
import { Check } from "lucide-react"
import { CALENDLY_URL, formatPrice, type Locale } from "@/lib/i18n/config"
import { useCurrency } from "@/lib/currency-context"
import { ADDONS, PLANS, VISUAL_MENU_MONTHLY, type AddonId, type PlanData } from "@/lib/pricing-data"
import type { Dictionary } from "@/lib/dictionaries/en"

type PricingDict = Dictionary["pricing"]
type PlanId = PlanData["id"]
type FeatKey = keyof PricingDict["features"]

const PLAN_FEATURES: Record<PlanId, Array<{ key: FeatKey; included: boolean; note?: FeatKey }>> = {
  onetime: [
    { key: "customDesign", included: true },
    { key: "pdfMenu", included: true },
    { key: "reservation", included: true },
    { key: "googleMaps", included: true },
    { key: "localSeo", included: true },
    { key: "analytics", included: true },
    { key: "support30", included: true },
    { key: "training", included: true },
    { key: "monthlyUpdates", included: false },
    { key: "maintenance", included: false },
  ],
  sub6: [
    { key: "customDesign", included: true },
    { key: "pdfMenu", included: true },
    { key: "reservation", included: true },
    { key: "googleMaps", included: true },
    { key: "localSeo", included: true },
    { key: "analytics", included: true },
    { key: "support30", included: true },
    { key: "training", included: true },
    { key: "oneUpdate", included: true, note: "perContract" },
    { key: "maintenance", included: true },
  ],
  sub12: [
    { key: "customDesign", included: true },
    { key: "pdfMenu", included: true },
    { key: "reservation", included: true },
    { key: "googleMaps", included: true },
    { key: "localSeo", included: true },
    { key: "analytics", included: true },
    { key: "support30", included: true },
    { key: "training", included: true },
    { key: "twoUpdates", included: true, note: "perContract" },
    { key: "maintenance", included: true },
    { key: "guaranteeIncluded", included: true },
  ],
}

export function PricingBuilder({ lang, dict }: { lang: Locale; dict: PricingDict }) {
  const { currency } = useCurrency()
  const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null)
  const [selectedAddons, setSelectedAddons] = useState<AddonId[]>([])

  const fmt = (amount: number) => formatPrice(amount, currency, lang)

  const isSubscription = selectedPlan === "sub6" || selectedPlan === "sub12"
  const guaranteeIncluded = selectedPlan === "sub12"
  const hasVisualMenu = selectedAddons.includes("menu_visual")
  const hasVariableAddon = selectedAddons.includes("updates_ondemand")
  const plan = PLANS.find((p) => p.id === selectedPlan)

  const handlePlan = (id: PlanId) => {
    const next = selectedPlan === id ? null : id
    setSelectedPlan(next)
    setSelectedAddons((prev) =>
      prev.filter((addon) => {
        if ((next === "sub6" || next === "sub12") && addon === "updates_monthly") return false
        if (next === "sub12" && addon === "guarantee") return false
        return true
      }),
    )
  }

  const toggleAddon = (id: AddonId) => {
    if (id === "updates_monthly" && isSubscription) return
    if (id === "guarantee" && guaranteeIncluded) return
    setSelectedAddons((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  const oneTimeAddonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = ADDONS.find((x) => x.id === id)
    if (!addon?.price || addon.monthly || addon.variable) return sum
    return sum + addon.price[currency]
  }, 0)

  const monthlyAddonsTotal =
    selectedAddons.reduce((sum, id) => {
      const addon = ADDONS.find((x) => x.id === id)
      if (!addon?.price || !addon.monthly) return sum
      return sum + addon.price[currency]
    }, 0) + (hasVisualMenu && isSubscription ? VISUAL_MENU_MONTHLY[currency] : 0)

  const addonPriceLabel = (id: AddonId) => {
    const addon = ADDONS.find((x) => x.id === id)
    if (!addon?.price) return ""
    if (addon.variable) return `${dict.addons.updates_ondemand.pricePrefix} ${fmt(addon.price[currency])}`
    return `+${fmt(addon.price[currency])}${addon.monthly ? dict.perMonth : ""}`
  }

  let totalLabel = "—"
  if (selectedPlan === "onetime") {
    totalLabel = fmt(PLANS[0]!.price[currency] + oneTimeAddonsTotal)
    if (monthlyAddonsTotal > 0) totalLabel += ` + ${fmt(monthlyAddonsTotal)}${dict.perMonth}`
  } else if (plan) {
    totalLabel = `${fmt(plan.price[currency] + monthlyAddonsTotal)}${dict.perMonth}`
    if (oneTimeAddonsTotal > 0) totalLabel += ` + ${fmt(oneTimeAddonsTotal)} ${dict.totalBuild}`
  } else if (selectedAddons.length > 0) {
    totalLabel = fmt(oneTimeAddonsTotal)
    if (monthlyAddonsTotal > 0) totalLabel += ` + ${fmt(monthlyAddonsTotal)}${dict.perMonth}`
  }

  return (
    <div className="mx-auto max-w-[1280px] px-6 pb-24 lg:px-8">
      {/* Plans */}
      <section className="mt-16">
        <h2 className="font-serif text-h2 font-medium text-heading">{dict.choose}</h2>
        <p className="mt-2 text-muted-foreground">{dict.chooseSub}</p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {PLANS.map((planData) => {
            const planDict = dict.plans[planData.id]
            const isSelected = selectedPlan === planData.id
            return (
              <button
                key={planData.id}
                type="button"
                onClick={() => handlePlan(planData.id)}
                aria-pressed={isSelected}
                className={`relative rounded-lg border bg-surface p-7 text-left transition-colors ${
                  isSelected
                    ? "border-primary-deep ring-2 ring-primary-deep/20"
                    : planData.highlight
                      ? "border-brass hover:border-primary-deep"
                      : "border-border hover:border-brass"
                }`}
              >
                {"badge" in planDict && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-espresso px-4 py-1 font-mono text-xs uppercase tracking-[0.12em] text-cream">
                    {planDict.badge}
                  </span>
                )}
                <p className="font-mono text-label uppercase text-primary-deep">{planDict.label}</p>
                <p className="mt-4 text-xs text-muted-foreground">{dict.startingFrom}</p>
                <p className="font-serif text-h1 font-medium text-heading">
                  {fmt(planData.price[currency])}
                  {planData.monthly && <span className="text-h3 text-muted-foreground">{dict.perMonth}</span>}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{planDict.priceSub}</p>
                <p className="mt-3 text-sm text-foreground/80">{planDict.commitment}</p>
                {"extra" in planDict && (
                  <p className="mt-2 font-mono text-xs text-primary-deep">✓ {planDict.extra}</p>
                )}
                <p className="mt-3 text-xs italic leading-relaxed text-muted-foreground">{planDict.note}</p>

                <hr className="my-5 border-border" />

                <ul className="space-y-2.5">
                  {PLAN_FEATURES[planData.id].map((feature) => (
                    <li
                      key={feature.key}
                      className={`flex items-start gap-2.5 text-sm leading-snug ${
                        feature.included ? "text-foreground/85" : "text-muted-foreground/50 line-through"
                      }`}
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${feature.included ? "text-primary-deep" : "text-border-strong"}`}
                        aria-hidden
                      />
                      <span>
                        {dict.features[feature.key]}
                        {feature.note && (
                          <span className="block text-xs italic text-muted-foreground">
                            {dict.features[feature.note]}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <span
                  className={`mt-6 block rounded-full border py-2.5 text-center font-mono text-label uppercase transition-colors ${
                    isSelected
                      ? "border-primary-deep bg-primary-deep text-cream"
                      : "border-border-strong text-muted-foreground"
                  }`}
                >
                  {isSelected ? `✓ ${dict.selected}` : dict.select}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {/* Scope rules */}
      <section className="mt-20">
        <h2 className="font-serif text-h2 font-medium text-heading">{dict.scopeTitle}</h2>
        <p className="mt-2 text-muted-foreground">{dict.scopeSub}</p>

        <details className="group mt-6 rounded-lg border border-border bg-surface">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 [&::-webkit-details-marker]:hidden">
            <span className="text-sm text-foreground/85">{dict.scopeToggle}</span>
            <span className="text-brass transition-transform group-open:rotate-180" aria-hidden>
              ▾
            </span>
          </summary>
          <div className="grid gap-8 border-t border-border px-6 py-6 md:grid-cols-3">
            {(
              [
                { label: dict.scopeAlways, items: dict.scopeItems.always, dot: "bg-[#4A7C4E]" },
                { label: dict.scopeLimited, items: dict.scopeItems.limited, dot: "bg-brass" },
                { label: dict.scopeNever, items: dict.scopeItems.never, dot: "bg-[#7C3A3A]" },
              ] as const
            ).map((column) => (
              <div key={column.label}>
                <h3 className="font-mono text-label uppercase text-heading">{column.label}</h3>
                <ul className="mt-4 space-y-2.5">
                  {column.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-foreground/75">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${column.dot}`} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>
      </section>

      {/* Add-ons */}
      <section className="mt-20">
        <h2 className="font-serif text-h2 font-medium text-heading">{dict.addonsTitle}</h2>
        <p className="mt-2 text-muted-foreground">{dict.addonsSub}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {ADDONS.map((addon) => {
            const addonDict = dict.addons[addon.id]
            const isIncluded = addon.id === "guarantee" && guaranteeIncluded
            const isDisabled = addon.id === "updates_monthly" && isSubscription
            const isSelected = selectedAddons.includes(addon.id) || isIncluded
            return (
              <button
                key={addon.id}
                type="button"
                onClick={() => toggleAddon(addon.id)}
                aria-pressed={isSelected}
                disabled={isDisabled}
                className={`relative rounded-lg border bg-surface p-6 text-left transition-colors ${
                  isSelected ? "border-primary-deep ring-2 ring-primary-deep/20" : "border-border hover:border-brass"
                } ${isDisabled ? "cursor-not-allowed opacity-45" : ""}`}
              >
                <span
                  className={`absolute right-5 top-5 flex h-5 w-5 items-center justify-center rounded-full border transition-colors ${
                    isSelected ? "border-primary-deep bg-primary-deep" : "border-border-strong"
                  }`}
                  aria-hidden
                >
                  {isSelected && <Check className="h-3 w-3 text-cream" />}
                </span>

                <div className="flex items-baseline justify-between gap-3 pr-9">
                  <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-heading">
                    {addonDict.label}
                  </h3>
                  <p className="shrink-0 whitespace-nowrap font-serif text-subheading font-medium text-primary-deep">
                    {isIncluded ? dict.included : addonPriceLabel(addon.id)}
                  </p>
                </div>
                {"priceSub" in addonDict && <p className="mt-0.5 text-xs text-muted-foreground">{addonDict.priceSub}</p>}
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">{addonDict.desc}</p>

                {addon.id === "guarantee" && (
                  <p className="mt-3 inline-block rounded-full bg-background px-3 py-1 font-mono text-xs text-primary-deep">
                    {dict.addons.guarantee.includedBadge}
                  </p>
                )}
                {addon.id === "menu_visual" && isSubscription && (
                  <p className="mt-3 inline-block rounded-full bg-background px-3 py-1 font-mono text-xs text-primary-deep">
                    +{fmt(VISUAL_MENU_MONTHLY[currency])}
                    {dict.perMonth} · {dict.addons.menu_visual.subBadge}
                  </p>
                )}
                {"tag" in addonDict && (
                  <p className="mt-3 inline-block rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground">
                    {addonDict.tag}
                  </p>
                )}
                {"scope" in addonDict && (
                  <p className="mt-4 border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground">
                    {addonDict.scope}
                  </p>
                )}
              </button>
            )
          })}
        </div>
      </section>

      {/* Investment summary */}
      <section className="mt-20">
        <h2 className="font-serif text-h2 font-medium text-heading">{dict.summaryTitle}</h2>
        <p className="mt-2 text-muted-foreground">{dict.summarySub}</p>

        <div className="mt-8 rounded-lg border border-border bg-surface p-7 md:p-9" aria-live="polite">
          {!selectedPlan && selectedAddons.length === 0 ? (
            <p className="py-8 text-center text-muted-foreground">{dict.summaryEmpty}</p>
          ) : (
            <>
              {plan && (
                <div className="flex items-baseline justify-between gap-6 border-b border-border py-3">
                  <span className="text-sm text-foreground/85">{dict.plans[plan.id].label}</span>
                  <span className="font-mono text-sm text-heading">
                    {dict.startingFrom} {fmt(plan.price[currency])}
                    {plan.monthly ? dict.perMonth : ""}
                  </span>
                </div>
              )}
              {guaranteeIncluded && (
                <div className="flex items-baseline justify-between gap-6 border-b border-border py-3">
                  <span className="text-sm text-foreground/85">{dict.addons.guarantee.label}</span>
                  <span className="font-mono text-sm text-primary-deep">{dict.included}</span>
                </div>
              )}
              {selectedAddons.map((id) => {
                const addonDict = dict.addons[id]
                const showVisualMenuFee = id === "menu_visual" && isSubscription
                return (
                  <div key={id} className="flex items-baseline justify-between gap-6 border-b border-border py-3">
                    <span className="text-sm text-foreground/85">{addonDict.label}</span>
                    <span className="font-mono text-sm text-heading">
                      {addonPriceLabel(id)}
                      {showVisualMenuFee ? ` + ${fmt(VISUAL_MENU_MONTHLY[currency])}${dict.perMonth}` : ""}
                    </span>
                  </div>
                )
              })}

              <div className="flex items-baseline justify-between gap-6 pt-5">
                <span className="font-serif text-h3 font-medium text-heading">{dict.total}</span>
                <div className="text-right">
                  <p className="font-serif text-h2 font-medium text-primary-deep">
                    {dict.startingFrom} {totalLabel}
                  </p>
                  {hasVariableAddon && <p className="mt-1 text-xs text-muted-foreground">{dict.varNote}</p>}
                </div>
              </div>
            </>
          )}
        </div>

        {(selectedPlan || selectedAddons.length > 0) && (
          <div className="mt-8 rounded-lg bg-espresso p-8 text-center md:p-10">
            <p className="font-serif text-h2 font-medium text-cream">{dict.exitTitle}</p>
            <p className="mt-2 text-cream/70">{dict.exitSub}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-on-dark">
                {dict.exitCall}
              </a>
              <Link
                href={`/${lang}#free-prototype`}
                className="btn border border-cream/30 text-cream hover:border-brass hover:text-brass"
              >
                {dict.exitPrototype}
              </Link>
            </div>
          </div>
        )}

        <p className="mt-8 text-center text-xs leading-relaxed text-muted-foreground">
          {dict.note}
          <br />
          {dict.note2}
        </p>
      </section>
    </div>
  )
}
