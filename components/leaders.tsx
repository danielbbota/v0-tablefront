"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { t } from "@/lib/translations"

export function Leaders() {
  const { currentLang } = useLanguage()

  const leaders = [
    {
      name: "Daniel Bota",
      roleKey: "daniel_role" as const,
      bioKey: "daniel_bio" as const,
      image: "/images/team/daniel-bota.jpg",
    },
    {
      name: "Devin Kabay",
      roleKey: "devin_role" as const,
      bioKey: "devin_bio" as const,
      image: "/images/team/devin-kabay.jpg",
    },
  ]

  return (
    <section id="leaders" className="bg-background-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-secondary">
            {t("team_eyebrow", currentLang)}
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground-dark md:text-4xl lg:text-5xl text-balance">
            {t("team_headline", currentLang)}
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-foreground-dark/70">
            {t("team_sub", currentLang)}
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-sm md:flex-row md:items-start md:text-left"
            >
              {/* Photo */}
              <div className="relative mb-6 h-40 w-40 flex-shrink-0 overflow-hidden rounded-full md:mb-0 md:mr-6">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-top"
                  sizes="160px"
                />
              </div>

              {/* Info */}
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground-dark">
                  {leader.name}
                </h3>
                <p className="mt-1 font-mono text-sm uppercase tracking-wider text-secondary">
                  {t(leader.roleKey, currentLang)}
                </p>
                <p className="mt-4 font-sans leading-relaxed text-foreground-dark/70">
                  {t(leader.bioKey, currentLang)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
