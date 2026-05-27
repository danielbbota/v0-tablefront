"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { t } from "@/lib/translations"

export function Footer() {
  const { currentLang } = useLanguage()

  const footerLinks = [
    { href: "#how-it-works", labelKey: "footer_nav_how" as const },
    { href: "#leaders", labelKey: "footer_nav_team" as const },
    { href: "https://calendly.com/daniel-tablesfront/30min", labelKey: "footer_nav_book" as const },
    { href: "/pricing", labelKey: "footer_nav_pricing" as const },
  ]

  return (
    <footer className="bg-background border-t border-border py-16 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8" style={{ maxWidth: "100%" }}>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Brand Column */}
          <div style={{ maxWidth: "100%", minWidth: 0 }}>
            <Link href="/" className="font-serif text-2xl font-bold tracking-wide text-foreground">
              TableFront
            </Link>
            <p className="mt-4 font-sans text-sm leading-relaxed text-foreground/60" style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
              {t("footer_tagline", currentLang)}
            </p>
          </div>

          {/* Navigation Column */}
          <div style={{ maxWidth: "100%", minWidth: 0 }}>
            <h4 className="font-mono text-sm uppercase tracking-wider text-primary" style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
              {t("footer_navigation", currentLang)}
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-foreground/60 transition-colors hover:text-primary"
                    style={{ overflowWrap: "break-word", wordBreak: "break-word" }}
                  >
                    {t(link.labelKey, currentLang)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="font-sans text-sm text-foreground/40" style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
            tablesfront.com · {t("footer_rights", currentLang)}
          </p>
        </div>
      </div>
    </footer>
  )
}
