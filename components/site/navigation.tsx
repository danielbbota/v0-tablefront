"use client"

import { useEffect, useRef, useState } from "react"
import { Wordmark } from "@/components/site/wordmark"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  APP_LOGIN_URL,
  CALENDLY_URL,
  currencies,
  localeNames,
  locales,
  type Locale,
} from "@/lib/i18n/config"
import { BUSINESS_PATH, BUSINESS_TYPES, type BusinessType } from "@/lib/business"
import { useCurrency } from "@/lib/currency-context"
import type { Dictionary } from "@/lib/dictionaries/en"

const LINK_CLASS =
  "link-brass whitespace-nowrap font-mono text-label uppercase text-foreground/80 transition-colors hover:text-heading"

/**
 * Site header. The first item, "For your business", opens the four business
 * pages; the rest is short on purpose (how it works, work, pricing) so a
 * visitor always knows where they are.
 */
export function Navigation({
  lang,
  dict,
  business,
}: {
  lang: Locale
  dict: Dictionary["nav"]
  /** Names of the four business pages, shown in the "For your business" menu. */
  business: Record<BusinessType, string>
}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isBusinessOpen, setIsBusinessOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const businessRef = useRef<HTMLDivElement>(null)
  const mobileTriggerRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()
  const { currency, setCurrency } = useCurrency()

  // Current path with the locale segment stripped, so switching keeps the page.
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "") || ""

  const businessLinks = BUSINESS_TYPES.map((type) => ({
    href: `/${lang}${BUSINESS_PATH[type]}`,
    label: business[type],
    current: pathWithoutLocale === BUSINESS_PATH[type],
  }))

  const navLinks = [
    { href: `/${lang}#how-it-works`, label: dict.how },
    { href: `/${lang}#work`, label: dict.work },
    { href: `/${lang}/pricing`, label: dict.pricing },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (langRef.current && !langRef.current.contains(target)) setIsLangOpen(false)
      if (businessRef.current && !businessRef.current.contains(target)) setIsBusinessOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (!isMobileOpen && !isLangOpen && !isBusinessOpen) return
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      setIsLangOpen(false)
      setIsBusinessOpen(false)
      if (isMobileOpen) {
        setIsMobileOpen(false)
        mobileTriggerRef.current?.focus()
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isMobileOpen, isLangOpen, isBusinessOpen])

  const currencyToggle = (
    <div
      className="flex items-center rounded-full border border-border p-0.5"
      role="group"
      aria-label={dict.currencyLabel}
    >
      {currencies.map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => setCurrency(c)}
          aria-pressed={currency === c}
          className={`rounded-full px-2.5 py-1 font-mono text-xs tracking-wider transition-colors ${
            currency === c ? "bg-espresso text-cream" : "text-muted-foreground hover:text-heading"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  )

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur-sm transition-shadow ${
        isScrolled ? "border-b border-border" : ""
      }`}
    >
      <div className="mx-auto flex h-18 max-w-[1280px] items-center justify-between gap-8 px-6 py-4 lg:px-8">
        <Link href={`/${lang}`} aria-label={dict.homeLabel} className="shrink-0">
          <Wordmark className="text-[1.625rem] md:text-[1.75rem]" />
        </Link>

        {/* Desktop — xl breakpoint: DE/FR/PT labels need the room */}
        <div className="hidden items-center gap-5 xl:flex">
          <nav className="flex items-center gap-5" aria-label={dict.mainNavLabel}>
            <div className="relative" ref={businessRef}>
              <button
                type="button"
                onClick={() => setIsBusinessOpen(!isBusinessOpen)}
                aria-expanded={isBusinessOpen}
                aria-controls="business-menu"
                className="flex items-center gap-1 whitespace-nowrap font-mono text-label uppercase text-foreground/80 transition-colors hover:text-heading"
              >
                {dict.business}
                <ChevronDown
                  className={`h-3 w-3 transition-transform ${isBusinessOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              {isBusinessOpen && (
                <div
                  id="business-menu"
                  className="absolute left-0 top-full mt-3 min-w-64 overflow-hidden rounded-lg border border-border bg-background shadow-lg"
                >
                  {businessLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsBusinessOpen(false)}
                      aria-current={link.current ? "page" : undefined}
                      className={`block whitespace-nowrap px-4 py-3 font-mono text-label uppercase transition-colors ${
                        link.current
                          ? "bg-surface text-primary-deep"
                          : "text-foreground/80 hover:bg-surface hover:text-heading"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={LINK_CLASS}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="relative" ref={langRef}>
            <button
              type="button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-expanded={isLangOpen}
              aria-label={dict.languageLabel}
              className="flex items-center gap-1 font-mono text-label uppercase text-foreground/80 transition-colors hover:text-heading"
            >
              {lang.toUpperCase()}
              <ChevronDown className={`h-3 w-3 transition-transform ${isLangOpen ? "rotate-180" : ""}`} aria-hidden />
            </button>
            {isLangOpen && (
              <div className="absolute right-0 top-full mt-3 min-w-36 overflow-hidden rounded-lg border border-border bg-background shadow-lg">
                {locales.map((locale) => (
                  <Link
                    key={locale}
                    href={`/${locale}${pathWithoutLocale}`}
                    onClick={() => setIsLangOpen(false)}
                    className={`block px-4 py-2.5 font-mono text-label uppercase transition-colors ${
                      locale === lang
                        ? "bg-surface text-primary-deep"
                        : "text-foreground/80 hover:bg-surface hover:text-heading"
                    }`}
                  >
                    {localeNames[locale]}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {currencyToggle}

          <a href={APP_LOGIN_URL} className={LINK_CLASS}>
            {dict.login}
          </a>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary whitespace-nowrap !px-5 !py-3"
          >
            {dict.bookCall}
          </a>
        </div>

        {/* Mobile trigger */}
        <button
          ref={mobileTriggerRef}
          type="button"
          className="text-heading xl:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isMobileOpen ? dict.closeMenu : dict.openMenu}
        >
          {isMobileOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </div>

      {/* Mobile panel */}
      {isMobileOpen && (
        <div
          id="mobile-nav-panel"
          className="max-h-[calc(100svh-4.5rem)] overflow-y-auto border-b border-border bg-background px-6 pb-8 pt-2 xl:hidden"
        >
          <nav className="flex flex-col gap-5" aria-label={dict.mainNavLabel}>
            <div>
              <p className="eyebrow">{dict.business}</p>
              <ul className="mt-3 flex flex-col gap-3 border-l-2 border-brass pl-4">
                {businessLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      aria-current={link.current ? "page" : undefined}
                      className={`font-mono text-label uppercase ${
                        link.current ? "text-primary-deep" : "text-foreground/80"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="font-mono text-label uppercase text-foreground/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex items-center gap-3">
            {locales.map((locale, index) => (
              <span key={locale} className="flex items-center gap-3">
                <Link
                  href={`/${locale}${pathWithoutLocale}`}
                  onClick={() => setIsMobileOpen(false)}
                  className={`font-mono text-label uppercase ${
                    locale === lang ? "text-primary-deep" : "text-foreground/70"
                  }`}
                >
                  {locale.toUpperCase()}
                </Link>
                {index < locales.length - 1 && <span className="text-border-strong">·</span>}
              </span>
            ))}
            <span className="ml-auto">{currencyToggle}</span>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {dict.bookCall}
            </a>
            <Link href={`/${lang}#free-prototype`} onClick={() => setIsMobileOpen(false)} className="btn btn-outline">
              {dict.getPrototype}
            </Link>
            <a href={APP_LOGIN_URL} className="btn btn-outline">
              {dict.login}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
