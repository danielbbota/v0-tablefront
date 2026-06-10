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

/** Number formatting locale per UI language. */
export const numberLocaleForLocale: Record<Locale, string> = {
  en: "en-CH",
  de: "de-CH",
  pt: "pt-PT",
  fr: "fr-CH",
}

export const SITE_URL = "https://www.tablesfront.com"

export const CALENDLY_URL = "https://calendly.com/daniel-tablesfront/30min"

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export function formatPrice(amount: number, currency: Currency, locale: Locale): string {
  return new Intl.NumberFormat(numberLocaleForLocale[locale], {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}
