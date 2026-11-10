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
}

export const ONE_TIME_PLANS: PlanData[] = [
  { id: "essencial", price: { EUR: 490, CHF: 790 }, monthly: false, highlight: false },
  { id: "profissional", price: { EUR: 890, CHF: 1290 }, monthly: false, highlight: false },
  { id: "loja", price: { EUR: 1190, CHF: 1890 }, monthly: false, highlight: false },
]

export const MONTHLY_PLANS: PlanData[] = [
  { id: "mensalEssencial", price: { EUR: 39, CHF: 69 }, monthly: true, highlight: false },
  { id: "mensalProfissional", price: { EUR: 59, CHF: 99 }, monthly: true, highlight: true },
  /**
   * The reservation platform on its own — for clients who bought a one-time
   * site, or already have a website and only need the bookings.
   */
  { id: "reservas", price: { EUR: 29, CHF: 49 }, monthly: true, highlight: false },
]

export const PLANS: PlanData[] = [...ONE_TIME_PLANS, ...MONTHLY_PLANS]

export function planById(id: PlanId): PlanData {
  return PLANS.find((plan) => plan.id === id)!
}
