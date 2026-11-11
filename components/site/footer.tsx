import type { ReactNode } from "react"
import { Wordmark } from "@/components/site/wordmark"
import Link from "next/link"
import { APP_LOGIN_URL, CALENDLY_URL, type Locale } from "@/lib/i18n/config"
import { BUSINESS_PATH, BUSINESS_TYPES, type BusinessType } from "@/lib/business"
import type { Dictionary } from "@/lib/dictionaries/en"

const LINK_CLASS = "link-brass text-sm text-foreground/70 hover:text-heading"

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <nav aria-label={title}>
      <h2 className="eyebrow">{title}</h2>
      <ul className="mt-4 space-y-3">{children}</ul>
    </nav>
  )
}

export function Footer({
  lang,
  dict,
  business,
}: {
  lang: Locale
  dict: Dictionary["footer"]
  /** Names of the four business pages. */
  business: Record<BusinessType, string>
}) {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1.4fr_1fr_1fr]">
          <div>
            <Link href={`/${lang}`} aria-label={dict.homeLabel} className="inline-block">
              <Wordmark className="text-[1.75rem]" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{dict.tagline}</p>
          </div>

          <Column title={dict.businessTitle}>
            {BUSINESS_TYPES.map((type) => (
              <li key={type}>
                <Link href={`/${lang}${BUSINESS_PATH[type]}`} className={LINK_CLASS}>
                  {business[type]}
                </Link>
              </li>
            ))}
          </Column>

          <Column title={dict.navTitle}>
            <li>
              <Link href={`/${lang}#how-it-works`} className={LINK_CLASS}>
                {dict.linkHow}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}#work`} className={LINK_CLASS}>
                {dict.linkWork}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/pricing`} className={LINK_CLASS}>
                {dict.linkPricing}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}#story`} className={LINK_CLASS}>
                {dict.linkStory}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}#faq`} className={LINK_CLASS}>
                {dict.linkFaq}
              </Link>
            </li>
          </Column>

          <Column title={dict.startTitle}>
            <li>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
                {dict.linkCall}
              </a>
            </li>
            <li>
              <Link href={`/${lang}#free-prototype`} className={LINK_CLASS}>
                {dict.linkPrototype}
              </Link>
            </li>
            <li>
              <a href={APP_LOGIN_URL} className={LINK_CLASS}>
                {dict.linkLogin}
              </a>
            </li>
          </Column>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">{dict.rights}</p>
          <Link href={`/${lang}/legal`} className={LINK_CLASS}>
            {dict.linkLegal}
          </Link>
        </div>
      </div>
    </footer>
  )
}
