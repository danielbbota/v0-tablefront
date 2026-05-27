"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { t } from "@/lib/translations"

const CALENDLY_URL = "https://calendly.com/daniel-tablesfront/30min"

export function HowItWorks() {
  const { currentLang } = useLanguage()

  const steps = [
    {
      number: "01",
      titleKey: "step_1_title" as const,
      descKey: "step_1_body" as const,
    },
    {
      number: "02",
      titleKey: "step_2_title" as const,
      descKey: "step_2_body" as const,
    },
    {
      number: "03",
      titleKey: "step_3_title" as const,
      descKey: "step_3_body" as const,
    },
    {
      number: "04",
      titleKey: "step_4_title" as const,
      descKey: "step_4_body" as const,
    },
  ]

  return (
    <section id="how-it-works" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">
            {t("process_eyebrow", currentLang)}
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            {t("process_headline", currentLang)}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Connecting Line - Desktop */}
          <div className="absolute left-0 right-0 top-6 hidden h-0.5 bg-primary/30 md:block" />

          {/* Steps */}
          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number Circle */}
                <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-mono text-sm font-bold text-primary-foreground">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                  {t(step.titleKey, currentLang)}
                </h3>
                <p className="font-sans leading-relaxed text-foreground/70">
                  {t(step.descKey, currentLang)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary px-8 py-6 font-mono text-base uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              {t("process_cta", currentLang)}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
