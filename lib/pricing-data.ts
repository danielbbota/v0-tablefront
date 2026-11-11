import type { Currency } from "@/lib/i18n/config"

/** Fixed per-market prices — no conversion, each market gets its own clean number. */
export type Price = Record<Currency, number>

export type PlanId =
  | "essencial"
  | "profissional"
  | "loja"
  | "mensalEssencial"
  | "mensalProfissional"
  | "reservas"

export interface PlanData {
  id: PlanId
  price: Price
  /** true = billed per month, false = one-time build */
  monthly: boolean
  /** the plan we recommend — gets the badge and the brass frame */
  highlight: boolean
  /**
   * Minimum contract in months. The monthly website plans include the build
   * with nothing upfront, so they run for 12 months — and 12 × the monthly
   * price must never be lower than the matching one-time build (Essential /
   * Professional), or a client who leaves after year one costs us money.
   */
  minTermMonths?: number
}

export const ONE_TIME_PLANS: PlanData[] = [
  { id: "essencial", price: { EUR: 490, CHF: 790 }, monthly: false, highlight: false },
  { id: "profissional", price: { EUR: 890, CHF: 1290 }, monthly: false, highlight: false },
  { id: "loja", price: { EUR: 1190, CHF: 1890 }, monthly: false, highlight: false },
]

export const MONTHLY_PLANS: PlanData[] = [
  { id: "mensalEssencial", price: { EUR: 49, CHF: 79 }, monthly: true, highlight: false, minTermMonths: 12 },
  { id: "mensalProfissional", price: { EUR: 79, CHF: 119 }, monthly: true, highlight: true, minTermMonths: 12 },
  /**
   * One booking platform on its own (tables, stays or appointments) — for
   * clients who bought a one-time site, or already have a website and only
   * need the bookings.
   */
  { id: "reservas", price: { EUR: 39, CHF: 59 }, monthly: true, highlight: false },
]

export const PLANS: PlanData[] = [...ONE_TIME_PLANS, ...MONTHLY_PLANS]

export function planById(id: PlanId): PlanData {
  return PLANS.find((plan) => plan.id === id)!
}
