"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { t, Language } from "@/lib/translations"

const CALENDLY_URL = "https://calendly.com/daniel-tablesfront/30min"

const languages = [
  { code: "EN" as Language, label: "English" },
  { code: "DE" as Language, label: "German" },
  { code: "PT" as Language, label: "Portuguese" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const { currentLang, setCurrentLang } = useLanguage()

  const navLinks = [
    { href: "#pain-points", labelKey: "nav_why" as const },
    { href: "#how-it-works", labelKey: "nav_how" as const },
    { href: "#leaders", labelKey: "nav_team" as const },
    { href: "/pricing", labelKey: "nav_investment" as const },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <img src="/TF-logo-noBackground.png" alt="TableFront" style={{ height: "80px", width: "auto" }} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-sm uppercase tracking-wider text-foreground/80 transition-colors hover:text-primary"
              >
                {t(link.labelKey, currentLang)}
              </Link>
            ))}
            
            {/* Language Selector - Desktop */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 font-mono text-sm uppercase tracking-wider text-foreground/80 transition-colors hover:text-primary"
              >
                {currentLang}
                <ChevronDown className={`h-3 w-3 transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
              </button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 min-w-[100px] rounded-md border border-foreground/10 bg-background/95 backdrop-blur-sm shadow-lg overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code)
                        setIsLangOpen(false)
                      }}
                      className={`block w-full px-4 py-2 text-left font-mono text-sm uppercase tracking-wider transition-colors ${
                        currentLang === lang.code
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                      }`}
                    >
                      {lang.code}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button
              asChild
              className="bg-primary font-mono text-sm uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                {t("nav_cta", currentLang)}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-sm uppercase tracking-wider text-foreground/80 transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(link.labelKey, currentLang)}
                </Link>
              ))}
              
              {/* Language Selector - Mobile */}
              <div className="flex items-center gap-2 py-2">
                {languages.map((lang, index) => (
                  <div key={lang.code} className="flex items-center">
                    <button
                      onClick={() => setCurrentLang(lang.code)}
                      className={`font-mono text-sm uppercase tracking-wider transition-colors ${
                        currentLang === lang.code
                          ? "text-primary"
                          : "text-foreground/80 hover:text-primary"
                      }`}
                    >
                      {lang.code}
                    </button>
                    {index < languages.length - 1 && (
                      <span className="ml-2 text-foreground/40">·</span>
                    )}
                  </div>
                ))}
              </div>

              <Button
                asChild
                className="mt-2 bg-primary font-mono text-sm uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
              >
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  {t("nav_cta", currentLang)}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
