import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { isLocale, SITE_URL } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { languageAlternates } from "@/lib/seo"
import { Navigation } from "@/components/site/navigation"
import { Footer } from "@/components/site/footer"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = await getDictionary(lang)

  return {
    title: dict.meta.legal.title,
    description: dict.meta.legal.description,
    alternates: {
      canonical: `${SITE_URL}/${lang}/legal`,
      languages: languageAlternates("/legal"),
    },
    robots: { index: false },
  }
}

export default async function LegalPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <Navigation lang={lang} dict={dict.nav} />
      <main className="bg-background">
        <div className="mx-auto max-w-3xl px-6 pb-24 pt-36 lg:px-8">
          <h1 className="font-serif text-h1 font-medium text-heading">{dict.legal.title}</h1>
          <p className="mt-4 font-mono text-label uppercase text-muted-foreground">{dict.legal.updated}</p>

          <div className="mt-12 space-y-10">
            {dict.legal.sections.map((section) => (
              <section key={section.h}>
                <h2 className="font-serif text-h3 font-medium text-heading">{section.h}</h2>
                <p className="mt-3 leading-relaxed text-foreground/80">{section.p}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </>
  )
}
