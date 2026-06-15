import type { Metadata } from "next"
import { Playfair_Display, Lora, Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { notFound } from "next/navigation"
import {
  defaultCurrencyForLocale,
  isLocale,
  locales,
  SITE_URL,
} from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { ogLocaleForLocale } from "@/lib/seo"
import { CurrencyProvider } from "@/lib/currency-context"
import "../globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = await getDictionary(lang)

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.home.title,
      template: "%s | TableFront",
    },
    description: dict.meta.home.description,
    icons: {
      icon: [
        { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
        { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-icon.png",
    },
    openGraph: {
      siteName: "TableFront",
      type: "website",
      locale: ogLocaleForLocale[lang],
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "TableFront — websites for hospitality" }],
    },
    twitter: {
      card: "summary_large_image",
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  // Organization (not LocalBusiness): TableFront sells worldwide and is not location-scoped.
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TableFront",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-espresso.png`,
    description: dict.meta.home.description,
    founder: { "@type": "Person", name: "Daniel Bota" },
    knowsLanguage: ["en", "de", "pt", "fr"],
    areaServed: "Worldwide",
  }

  return (
    <html
      lang={lang}
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${lora.variable} ${syne.variable}`}
    >
      <body className="font-sans antialiased">
        <CurrencyProvider defaultCurrency={defaultCurrencyForLocale[lang]}>{children}</CurrencyProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {process.env.NODE_ENV === "production" && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
