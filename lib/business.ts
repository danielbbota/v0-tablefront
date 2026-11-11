import type { PlanId } from "@/lib/pricing-data"

/**
 * The four kinds of business we build for. Each has its own page, reached
 * from the chooser on the homepage, the "For your business" menu and the
 * footer. Three of them come with their own booking platform (tables, stays,
 * appointments); shops get an online store instead.
 */
export const BUSINESS_TYPES = ["restaurants", "stays", "beauty", "shops"] as const

export type BusinessType = (typeof BUSINESS_TYPES)[number]

/** Route segment after the locale — same in every language, like /pricing. */
export const BUSINESS_PATH: Record<BusinessType, string> = {
  restaurants: "/restaurants",
  stays: "/stays",
  beauty: "/health-beauty",
  shops: "/shops",
}

/**
 * The plans offered on each business page, recommended one first. The three
 * booking businesses get the platform inside Monthly Professional or on its
 * own; shops buy the store build.
 */
export const BUSINESS_PLANS: Record<BusinessType, PlanId[]> = {
  restaurants: ["mensalProfissional", "reservas"],
  stays: ["mensalProfissional", "reservas"],
  beauty: ["mensalProfissional", "reservas"],
  shops: ["loja"],
}
