"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { t } from "@/lib/translations"

const CALENDLY_URL = "https://calendly.com/daniel-tablesfront/30min"

export function FinalCTA() {
  const { currentLang } = useLanguage()

  return (
    <section className="bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl text-balance">
          {t("cta_headline", currentLang)}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-primary-foreground/80">
          {t("cta_sub", currentLang)}
        </p>
        <Button
          asChild
          size="lg"
          className="mt-10 bg-background px-8 py-6 font-mono text-base uppercase tracking-wider text-foreground hover:bg-background/90"
        >
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            {t("cta_button", currentLang)}
          </a>
        </Button>
        <p className="mt-4 font-sans text-sm text-primary-foreground/60">
          {t("cta_note", currentLang)}
        </p>
      </div>
    </section>
  )
}
