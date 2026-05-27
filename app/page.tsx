"use client"

import { LanguageProvider } from "@/lib/i18n"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { PainPoints } from "@/components/pain-points"
import { HowItWorks } from "@/components/how-it-works"
import { Leaders } from "@/components/leaders"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <Navigation />
        <Hero />
        <PainPoints />
        <HowItWorks />
        <Leaders />
        <FinalCTA />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
