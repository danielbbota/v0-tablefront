import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { isLocale, SITE_URL } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { languageAlternates, openGraphFor } from "@/lib/seo"
import { Navigation } from "@/components/site/navigation"
import { Footer } from "@/components/site/footer"
import { RevealInit } from "@/components/site/reveal-init"
import { PricingBuilder } from "@/components/pricing/pricing-builder"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = await getDictionary(lang)

  return {
    title: dict.meta.pricing.title,
    description: dict.meta.pricing.description,
    alternates: {
      canonical: `${SITE_URL}/${lang}/pricing`,
      languages: languageAlternates("/pricing"),
    },
    openGraph: openGraphFor(lang, "/pricing", dict.meta.pricing.title, dict.meta.pricing.description),
  }
}

export default async function PricingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <RevealInit />
      <Navigation lang={lang} dict={dict.nav} />
      <main className="bg-background">
        <header className="mx-auto max-w-[1280px] px-6 pb-4 pt-36 lg:px-8">
          <p className="eyebrow">{dict.pricing.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-serif text-display font-medium text-heading text-balance">
            {dict.pricing.headline1} <em className="not-italic text-primary">{dict.pricing.headline2}</em>
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground">{dict.pricing.sub}</p>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {dict.pricing.strip.map((item) => (
              <li key={item} className="flex items-center gap-2.5 font-mono text-label text-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-brass" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </header>

        <PricingBuilder lang={lang} dict={dict.pricing} />
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </>
  )
}
