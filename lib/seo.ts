import { locales, defaultLocale, SITE_URL, type Locale } from "@/lib/i18n/config"

/** hreflang alternates for a path ("" for home, "/pricing", …). */
export function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {}
  for (const locale of locales) {
    languages[locale] = `${SITE_URL}/${locale}${path}`
  }
  languages["x-default"] = `${SITE_URL}/${defaultLocale}${path}`
  return languages
}

export const ogLocaleForLocale: Record<Locale, string> = {
  en: "en_US",
  de: "de_CH",
  pt: "pt_PT",
  fr: "fr_CH",
}

const ogImageAlt: Record<Locale, string> = {
  en: "TableFront — websites that turn visitors into bookings, orders and sales",
  de: "TableFront — Webseiten, die aus Besuchern Buchungen, Bestellungen und Verkäufe machen",
  pt: "TableFront — websites que transformam visitas em reservas, encomendas e vendas",
  fr: "TableFront — des sites web qui transforment les visiteurs en réservations, commandes et ventes",
}

/** Per-language share image (1200×630), rendered from the hero copy; `/og.jpg` is the English copy kept for old links. */
export function ogImageFor(lang: Locale) {
  return { url: `/og-${lang}.jpg`, width: 1200, height: 630, alt: ogImageAlt[lang] }
}

/**
 * Complete OpenGraph object for a page. Page-level `openGraph` replaces the
 * layout's instead of deep-merging, so every page must carry the full set.
 */
export function openGraphFor(lang: Locale, path: string, title: string, description: string) {
  return {
    title,
    description,
    url: `${SITE_URL}/${lang}${path}`,
    siteName: "TableFront",
    type: "website" as const,
    locale: ogLocaleForLocale[lang],
    images: [ogImageFor(lang)],
  }
}
