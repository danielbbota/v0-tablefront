import Link from "next/link"
import { CALENDLY_URL, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/dictionaries/en"

export function FinalCta({ lang, dict }: { lang: Locale; dict: Dictionary["finalCta"] }) {
  return (
    <section className="bg-background py-24 md:py-36">
      <div className="reveal mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-serif text-display font-medium text-heading text-balance">{dict.headline}</h2>
        <p className="mx-auto mt-6 max-w-xl text-body-lg text-muted-foreground">{dict.sub}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {dict.ctaPrimary}
          </a>
          <Link href={`/${lang}#free-prototype`} className="btn btn-outline">
            {dict.ctaSecondary}
          </Link>
        </div>

        <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{dict.note}</p>
      </div>
    </section>
  )
}
