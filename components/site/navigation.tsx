"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  CALENDLY_URL,
  currencies,
  localeNames,
  locales,
  type Locale,
} from "@/lib/i18n/config"
import { useCurrency } from "@/lib/currency-context"
import type { Dictionary } from "@/lib/dictionaries/en"

export function Navigation({ lang, dict }: { lang: Locale; dict: Dictionary["nav"] }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const mobileTriggerRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()
  const { currency, setCurrency } = useCurrency()

  // Current path with the locale segment stripped, so switching keeps the page.
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "") || ""

  const navLinks = [
    { href: `/${lang}#why`, label: dict.why },
    { href: `/${lang}#how-it-works`, label: dict.how },
    { href: `/${lang}#story`, label: dict.story },
    { href: `/${lang}#faq`, label: dict.faq },
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
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (!isMobileOpen && !isLangOpen) return
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      setIsLangOpen(false)
      if (isMobileOpen) {
        setIsMobileOpen(false)
        mobileTriggerRef.current?.focus()
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isMobileOpen, isLangOpen])

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
      <div className="mx-auto flex h-18 max-w-[1280px] items-center justify-between px-6 py-4 lg:px-8">
        <Link href={`/${lang}`} aria-label={dict.homeLabel} className="shrink-0">
          <Image
            src="/logo-espresso.png"
            alt="TableFront Hospitality"
            width={148}
            height={44}
            priority
            className="h-10 w-auto md:h-11"
          />
        </Link>

        {/* Desktop — xl breakpoint: DE/FR/PT labels need the room */}
        <div className="hidden items-center gap-5 xl:flex">
          <nav className="flex items-center gap-5" aria-label={dict.mainNavLabel}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-brass whitespace-nowrap font-mono text-label uppercase text-foreground/80 transition-colors hover:text-heading"
              >
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
        <div id="mobile-nav-panel" className="border-b border-border bg-background px-6 pb-8 pt-2 xl:hidden">
          <nav className="flex flex-col gap-5" aria-label={dict.mainNavLabel}>
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
          </div>
        </div>
      )}
    </header>
  )
}
