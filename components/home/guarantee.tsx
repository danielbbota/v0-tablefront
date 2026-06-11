import Link from "next/link"
import type { CSSProperties } from "react"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/dictionaries/en"

/** The single espresso contrast panel — the page's one dark editorial moment. */
export function Guarantee({ lang, dict }: { lang: Locale; dict: Dictionary["guarantee"] }) {
  return (
    <section className="bg-espresso py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="font-mono text-label uppercase tracking-[0.16em] text-brass">{dict.eyebrow}</p>
          <h2 className="mt-6 font-serif text-display font-medium text-cream text-balance">{dict.headline}</h2>
          <p className="mx-auto mt-7 max-w-2xl text-body-lg leading-relaxed text-cream/75">{dict.body}</p>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {dict.points.map((point, index) => (
              <li
                key={point}
                className="reveal flex items-center gap-3 font-mono text-label uppercase text-cream/90"
                style={{ "--reveal-delay": `${300 + index * 140}ms` } as CSSProperties}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brass" aria-hidden />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <Link href={`/${lang}/pricing`} className="btn btn-on-dark">
              {dict.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
