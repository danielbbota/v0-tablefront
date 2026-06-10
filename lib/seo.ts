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
