"use client"

import { Clock, DollarSign, Globe, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { t } from "@/lib/translations"

export function PainPoints() {
  const { currentLang } = useLanguage()

  const painPoints = [
    {
      icon: Users,
      titleKey: "pain_1_title" as const,
      descKey: "pain_1_body" as const,
    },
    {
      icon: DollarSign,
      titleKey: "pain_2_title" as const,
      descKey: "pain_2_body" as const,
    },
    {
      icon: Clock,
      titleKey: "pain_3_title" as const,
      descKey: "pain_3_body" as const,
    },
    {
      icon: Globe,
      titleKey: "pain_4_title" as const,
      descKey: "pain_4_body" as const,
    },
  ]

  return (
    <section id="pain-points" className="bg-background-light py-24 md:py-32 overflow-x-hidden" style={{ marginTop: "-50vh", paddingTop: "6rem" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8" style={{ maxWidth: "100%" }}>
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center px-2">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-secondary" style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
            {t("pain_eyebrow", currentLang)}
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground-dark md:text-4xl lg:text-5xl text-balance" style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
            {t("pain_headline", currentLang)}
          </h2>
        </div>

        {/* Pain Points Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="rounded-lg border border-secondary/20 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              style={{ maxWidth: "100%", overflowX: "hidden" }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                <point.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground-dark" style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
                {t(point.titleKey, currentLang)}
              </h3>
              <p className="font-sans leading-relaxed text-foreground-dark/70" style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
                {t(point.descKey, currentLang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
