import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/dictionaries/en"

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/lib/dictionaries/en").then((m) => m.default),
  de: () => import("@/lib/dictionaries/de").then((m) => m.default),
  pt: () => import("@/lib/dictionaries/pt").then((m) => m.default),
  fr: () => import("@/lib/dictionaries/fr").then((m) => m.default),
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]()
}

export type { Dictionary }
