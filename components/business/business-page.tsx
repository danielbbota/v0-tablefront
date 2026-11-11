import type { Metadata } from "next"
import type { ReactNode } from "react"
import { notFound } from "next/navigation"
import { isLocale, SITE_URL } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { languageAlternates, openGraphFor } from "@/lib/seo"
import { BUSINESS_PATH, BUSINESS_PLANS } from "@/lib/business"
import type { BusinessDict } from "@/lib/dictionaries/business.en"
import { Navigation } from "@/components/site/navigation"
import { Footer } from "@/components/site/footer"
import { RevealInit } from "@/components/site/reveal-init"
import {
  ExitSection,
  GetSection,
  OwnSection,
  PageHeader,
  PlatformSection,
  SetupSection,
  SiteSection,
} from "@/components/business/sections"
import { AppointmentsIllustration, ShopIllustration, StaysIllustration } from "@/components/business/illustrations"

/** The business pages that share this template. Restaurants has its own page (video + interactive tour). */
export type TemplateBusiness = keyof BusinessDict["pages"]

type Params = Promise<{ lang: string }>

export async function businessMetadata(type: TemplateBusiness, params: Params): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = await getDictionary(lang)
  const { title, description } = dict.business.pages[type].meta
  const path = BUSINESS_PATH[type]

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/${lang}${path}`, languages: languageAlternates(path) },
    openGraph: openGraphFor(lang, path, title, description),
  }
}

function illustrationFor(type: TemplateBusiness, pages: BusinessDict["pages"]): ReactNode {
  if (type === "stays") return <StaysIllustration mock={pages.stays.mock} />
  if (type === "beauty") return <AppointmentsIllustration mock={pages.beauty.mock} />
  return <ShopIllustration mock={pages.shops.mock} />
}

/**
 * One business, one page, always in the same order: who it is for, what the
 * website does, the platform that comes with it (stays, appointments or the
 * online shop), why direct, how to get it, good to know.
 */
export async function BusinessPage({ type, params }: { type: TemplateBusiness; params: Params }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const { common, labels, pages } = dict.business
  const t = pages[type]
  const planIds = BUSINESS_PLANS[type]

  return (
    <>
      <RevealInit />
      <Navigation lang={lang} dict={dict.nav} business={labels} />
      <main className="bg-background">
        <PageHeader
          eyebrow={t.eyebrow}
          headline1={t.headline1}
          headline2={t.headline2}
          sub={t.sub}
          strip={t.strip}
          primaryLabel={common.ctaCall}
          secondary={{ href: `/${lang}#free-prototype`, label: common.ctaPrototype }}
          login={type === "shops" ? undefined : { hint: common.loginHint, cta: common.loginCta }}
        />
        <SiteSection eyebrow={common.siteEyebrow} headline={t.site.headline} items={t.site.items} />
        <PlatformSection
          eyebrow={t.platform.eyebrow}
          headline={t.platform.headline}
          sub={t.platform.sub}
          features={t.platform.features}
          featuresEyebrow={common.featuresEyebrow}
          illustration={illustrationFor(type, pages)}
        />
        <OwnSection eyebrow={t.own.eyebrow} headline={t.own.headline} points={t.own.points} />
        <GetSection
          lang={lang}
          eyebrow={common.getEyebrow}
          headline={t.get.headline}
          plans={t.get.plans.map((plan, index) => ({ ...plan, planId: planIds[index]! }))}
          labels={common}
        />
        <SetupSection eyebrow={t.setup.eyebrow} items={t.setup.items} />
        <ExitSection
          lang={lang}
          current={type}
          title={t.exitTitle}
          sub={t.exitSub}
          callLabel={common.exitCall}
          pricingLabel={common.exitPricing}
          otherTitle={common.otherTitle}
          businessLabels={labels}
        />
      </main>
      <Footer lang={lang} dict={dict.footer} business={labels} />
    </>
  )
}
