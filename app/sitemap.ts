import type { MetadataRoute } from "next"
import { locales, SITE_URL } from "@/lib/i18n/config"
import { languageAlternates } from "@/lib/seo"
import { BUSINESS_PATH, BUSINESS_TYPES } from "@/lib/business"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "", priority: 1 },
    ...BUSINESS_TYPES.map((type) => ({ path: BUSINESS_PATH[type], priority: 0.9 })),
    { path: "/pricing", priority: 0.8 },
  ]

  return paths.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: languageAlternates(path) },
    })),
  )
}
