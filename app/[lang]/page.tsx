import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { isLocale, SITE_URL } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { languageAlternates, openGraphFor } from "@/lib/seo"
import { Navigation } from "@/components/site/navigation"
import { Footer } from "@/components/site/footer"
import { Hero } from "@/components/home/hero"
import { Pains } from "@/components/home/pains"
import { Calculator } from "@/components/home/calculator"
import { Process } from "@/components/home/process"
import { FounderStory } from "@/components/home/founder-story"
import { Guarantee } from "@/components/home/guarantee"
import { Team } from "@/components/home/team"
import { Faq } from "@/components/home/faq"
import { PrototypeForm } from "@/components/home/prototype-form"
import { FinalCta } from "@/components/home/final-cta"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = await getDictionary(lang)

  return {
    title: { absolute: dict.meta.home.title },
    description: dict.meta.home.description,
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: languageAlternates(""),
    },
    openGraph: openGraphFor(lang, "", dict.meta.home.title, dict.meta.home.description),
  }
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <Navigation lang={lang} dict={dict.nav} />
      <main>
        <Hero lang={lang} dict={dict.hero} />
        <Pains dict={dict.pains} />
        <Calculator lang={lang} dict={dict.calculator} />
        <Process dict={dict.process} />
        <FounderStory dict={dict.founder} />
        <Guarantee lang={lang} dict={dict.guarantee} />
        <Team dict={dict.team} />
        <Faq dict={dict.faq} />
        <PrototypeForm lang={lang} dict={dict.prototype} />
        <FinalCta lang={lang} dict={dict.finalCta} />
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </>
  )
}
