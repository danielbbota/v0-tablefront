import Image from "next/image"
import Link from "next/link"
import { CALENDLY_URL, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/dictionaries/en"

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link href={`/${lang}`} aria-label={dict.homeLabel} className="inline-block">
              <Image
                src="/logo-espresso.png"
                alt="TableFront Hospitality"
                width={121}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{dict.tagline}</p>
          </div>

          <nav aria-label={dict.navTitle}>
            <h2 className="eyebrow">{dict.navTitle}</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href={`/${lang}#how-it-works`} className="link-brass text-sm text-foreground/70 hover:text-heading">
                  {dict.linkHow}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}#story`} className="link-brass text-sm text-foreground/70 hover:text-heading">
                  {dict.linkStory}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}#faq`} className="link-brass text-sm text-foreground/70 hover:text-heading">
                  {dict.linkFaq}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/pricing`} className="link-brass text-sm text-foreground/70 hover:text-heading">
                  {dict.linkPricing}
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label={dict.startTitle}>
            <h2 className="eyebrow">{dict.startTitle}</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-brass text-sm text-foreground/70 hover:text-heading"
                >
                  {dict.linkCall}
                </a>
              </li>
              <li>
                <Link href={`/${lang}#free-prototype`} className="link-brass text-sm text-foreground/70 hover:text-heading">
                  {dict.linkPrototype}
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label={dict.legalTitle}>
            <h2 className="eyebrow">{dict.legalTitle}</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href={`/${lang}/legal`} className="link-brass text-sm text-foreground/70 hover:text-heading">
                  {dict.linkLegal}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">{dict.rights}</p>
        </div>
      </div>
    </footer>
  )
}
