import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { isLocale, SITE_URL } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { languageAlternates, openGraphFor } from "@/lib/seo"
import { BUSINESS_PATH, BUSINESS_PLANS } from "@/lib/business"
import { Navigation } from "@/components/site/navigation"
import { Footer } from "@/components/site/footer"
import { RevealInit } from "@/components/site/reveal-init"
import { DemoVideo } from "@/components/reservations/demo-video"
import { InteractiveTour } from "@/components/reservations/interactive-tour"
import {
  ExitSection,
  FeatureCards,
  GetSection,
  OwnSection,
  PageHeader,
  SectionIntro,
  SetupSection,
  SiteSection,
} from "@/components/business/sections"

const PATH = BUSINESS_PATH.restaurants

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = await getDictionary(lang)
  const { title, description } = dict.meta.reservations

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/${lang}${PATH}`, languages: languageAlternates(PATH) },
    openGraph: openGraphFor(lang, PATH, title, description),
  }
}

/**
 * Restaurants, bars and cafés: the website, then the table-reservation
 * platform (app.tablesfront.com) — the presentation video, a working
 * click-through of the widget and dashboard, the team features, why not a
 * marketplace, and the two ways to get it. Same order as the other business
 * pages; `/reservations` redirects here.
 */
export default async function RestaurantsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const t = dict.reservations
  const { common, labels } = dict.business
  const [includedPlan, standalonePlan] = BUSINESS_PLANS.restaurants

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
          primaryLabel={t.ctaPrimary}
          secondary={{ href: `/${lang}#free-prototype`, label: common.ctaPrototype }}
          login={{ hint: t.loginHint, cta: t.loginCta }}
        />

        <SiteSection eyebrow={common.siteEyebrow} headline={t.site.headline} items={t.site.items} />

        {/* The presentation video is narrated in Portuguese, so only the PT site shows it. */}
        {lang === "pt" && <DemoVideo dict={t.video} />}

        {/* Interactive tour — brings its own compact heading and scales to fit one screen */}
        <section id="tour" className="scroll-mt-20 border-t border-border bg-surface py-16 md:py-[clamp(2rem,5svh,4rem)]">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <InteractiveTour dict={t.tour} />
          </div>
        </section>

        {/* For your team */}
        <section id="platform" className="scroll-mt-24 border-t border-border py-16 md:py-[clamp(2.5rem,6.5svh,5rem)]">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <SectionIntro eyebrow={t.team.eyebrow} headline={t.team.headline} sub={t.team.sub} />
            <FeatureCards features={t.team.features} tone="surface" className="mt-7" />
          </div>
        </section>

        <OwnSection eyebrow={t.own.eyebrow} headline={t.own.headline} points={t.own.points} />

        <GetSection
          lang={lang}
          eyebrow={t.pricing.eyebrow}
          headline={t.pricing.headline}
          plans={[
            { planId: includedPlan!, title: t.pricing.included.title, body: t.pricing.included.body },
            { planId: standalonePlan!, title: t.pricing.standalone.title, body: t.pricing.standalone.body },
          ]}
          labels={common}
        />

        <SetupSection eyebrow={t.setup.eyebrow} items={t.setup.items} />

        <ExitSection
          lang={lang}
          current="restaurants"
          title={t.exitTitle}
          sub={t.exitSub}
          callLabel={t.exitCall}
          pricingLabel={t.exitPricing}
          otherTitle={common.otherTitle}
          businessLabels={labels}
        />
      </main>
      <Footer lang={lang} dict={dict.footer} business={labels} />
    </>
  )
}
