"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { isLocale, type Locale } from "@/lib/i18n/config"

const COPY: Record<Locale, { headline: string; body: string; cta: string }> = {
  en: {
    headline: "This table isn't set.",
    body: "The page you're looking for doesn't exist or has moved.",
    cta: "Back to the homepage",
  },
  de: {
    headline: "Dieser Tisch ist nicht gedeckt.",
    body: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    cta: "Zurück zur Startseite",
  },
  pt: {
    headline: "Esta mesa não está posta.",
    body: "A página que procura não existe ou mudou de lugar.",
    cta: "Voltar à página inicial",
  },
  fr: {
    headline: "Cette table n'est pas dressée.",
    body: "La page que vous cherchez n'existe pas ou a été déplacée.",
    cta: "Retour à la page d'accueil",
  },
}

export default function NotFound() {
  const pathname = usePathname()
  const segment = pathname.split("/")[1] ?? ""
  const lang: Locale = isLocale(segment) ? segment : "en"
  const copy = COPY[lang]

  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-background px-6 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-5 font-serif text-display font-medium text-heading">{copy.headline}</h1>
      <p className="mt-5 max-w-md text-body-lg text-muted-foreground">{copy.body}</p>
      <Link href={`/${lang}`} className="btn btn-primary mt-10">
        {copy.cta}
      </Link>
    </main>
  )
}
