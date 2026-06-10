import type { Currency } from "@/lib/i18n/config"

/** Fixed per-market prices — same clean digits in both currencies, no conversion. */
export type Price = Record<Currency, number>

export interface PlanData {
  id: "onetime" | "sub6" | "sub12"
  price: Price
  monthly: boolean
  highlight: boolean
  includesGuarantee: boolean
}

export const PLANS: PlanData[] = [
  { id: "onetime", price: { CHF: 1500, EUR: 1500 }, monthly: false, highlight: false, includesGuarantee: false },
  { id: "sub6", price: { CHF: 149, EUR: 149 }, monthly: true, highlight: false, includesGuarantee: false },
  { id: "sub12", price: { CHF: 149, EUR: 149 }, monthly: true, highlight: true, includesGuarantee: true },
]

export type AddonId =
  | "menu_visual"
  | "speed"
  | "guarantee"
  | "updates_monthly"
  | "updates_ondemand"
  | "support60"
  | "reports"

export interface AddonData {
  id: AddonId
  price: Price | null
  monthly: boolean
  /** "from" pricing — variable scope, quoted per update */
  variable?: boolean
  /** only selectable on the one-time plan */
  onetimeOnly?: boolean
  /** included at no cost when the 12-month plan is selected */
  freeOnSub12?: boolean
}

export const ADDONS: AddonData[] = [
  { id: "menu_visual", price: { CHF: 500, EUR: 500 }, monthly: false },
  { id: "speed", price: { CHF: 800, EUR: 800 }, monthly: false },
  { id: "guarantee", price: { CHF: 600, EUR: 600 }, monthly: false, freeOnSub12: true },
  { id: "updates_monthly", price: { CHF: 79, EUR: 79 }, monthly: true, onetimeOnly: true },
  { id: "updates_ondemand", price: { CHF: 80, EUR: 80 }, monthly: false, variable: true },
  { id: "support60", price: { CHF: 400, EUR: 400 }, monthly: false },
  { id: "reports", price: { CHF: 350, EUR: 350 }, monthly: false },
]

/** Visual menu monthly update coverage on subscription plans. */
export const VISUAL_MENU_MONTHLY: Price = { CHF: 60, EUR: 60 }
