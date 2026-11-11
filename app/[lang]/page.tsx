import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { isLocale, SITE_URL } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { languageAlternates, openGraphFor } from "@/lib/seo"
import { Navigation } from "@/components/site/navigation"
import { Footer } from "@/components/site/footer"
import { RevealInit } from "@/components/site/reveal-init"
import { Hero } from "@/components/home/hero"
import { BusinessChooser } from "@/components/home/business-chooser"
import { Pains } from "@/components/home/pains"
import { Calculator } from "@/components/home/calculator"
import { Process } from "@/components/home/process"
import { LatestProject } from "@/components/home/latest-project"
import { PricingSummary } from "@/components/home/pricing-summary"
import { About } from "@/components/home/about"
import { Faq } from "@/components/home/faq"
import { PrototypeForm } from "@/components/home/prototype-form"

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
      <RevealInit />
      <Navigation lang={lang} dict={dict.nav} business={dict.business.labels} />
      {/* Ten sections, each said once and each sized to fit one laptop screen: who it is for, why, what it costs you, how, proof, price, who we are, questions, the free prototype. */}
      <main>
        <Hero lang={lang} dict={dict.hero} />
        <BusinessChooser lang={lang} dict={dict.business} />
        <Pains dict={dict.pains} />
        <Calculator lang={lang} dict={dict.calculator} />
        <Process dict={dict.process} />
        <LatestProject dict={dict.latestProject} />
        <PricingSummary lang={lang} dict={dict.pricingSummary} />
        <About founder={dict.founder} team={dict.team} />
        <Faq dict={dict.faq} />
        <PrototypeForm lang={lang} dict={dict.prototype} />
      </main>
      <Footer lang={lang} dict={dict.footer} business={dict.business.labels} />
    </>
  )
}
