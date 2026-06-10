export const locales = ["en", "de", "pt", "fr"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  pt: "Português",
  fr: "Français",
}

export type Currency = "CHF" | "EUR"

export const currencies: Currency[] = ["CHF", "EUR"]

/** Fixed per-market defaults — currency follows language unless the user overrides it. */
export const defaultCurrencyForLocale: Record<Locale, Currency> = {
  en: "CHF",
  de: "CHF",
  pt: "EUR",
  fr: "EUR",
}

export const SITE_URL = "https://www.tablesfront.com"

export const CALENDLY_URL = "https://calendly.com/daniel-tablesfront/30min"

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

// Deterministic formatting (Intl differs between Node and browsers, which
// breaks hydration). Separators follow each market's convention.
const priceFormat: Record<Locale, { sep: string; pattern: Record<Currency, string> }> = {
  en: { sep: ",", pattern: { CHF: "CHF {n}", EUR: "€{n}" } },
  de: { sep: "’", pattern: { CHF: "CHF {n}", EUR: "€ {n}" } },
  pt: { sep: ".", pattern: { CHF: "{n} CHF", EUR: "{n} €" } },
  fr: { sep: " ", pattern: { CHF: "CHF {n}", EUR: "{n} €" } },
}

export function formatPrice(amount: number, currency: Currency, locale: Locale): string {
  const { sep, pattern } = priceFormat[locale]
  const grouped = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, sep)
  return pattern[currency].replace("{n}", grouped)
}
