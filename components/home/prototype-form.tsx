"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/dictionaries/en"

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit"
// Public-by-design Web3Forms key — "Contact Form" (daniel@tablesfront.com).
const WEB3FORMS_KEY = "071e4b20-394e-4551-9710-01b07e91e7f3"

type Status = "idle" | "sending" | "success" | "error"

export function PrototypeForm({ lang, dict }: { lang: Locale; dict: Dictionary["prototype"] }) {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (data.get("botcheck")) return // honeypot

    setStatus("sending")
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "Free prototype request — tablesfront.com",
          from_name: "TableFront website",
          website_or_name: data.get("website_or_name"),
          email: data.get("email"),
          page_language: lang,
        }),
      })
      const result = await response.json()
      setStatus(result.success ? "success" : "error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="free-prototype" className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="reveal mx-auto grid max-w-5xl gap-10 rounded-lg border border-border bg-background p-8 md:grid-cols-2 md:gap-14 md:p-12">
          <div>
            <p className="eyebrow">{dict.eyebrow}</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-heading text-balance">{dict.headline}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{dict.sub}</p>
          </div>

          <div className="flex flex-col justify-center">
            {status === "success" ? (
              <div role="status" className="rounded-lg bg-surface p-8 text-center">
                <p className="font-serif text-h3 font-medium text-heading">{dict.successTitle}</p>
                <p className="mt-3 text-muted-foreground">{dict.successBody}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="checkbox" name="botcheck" tabIndex={-1} className="hidden" aria-hidden="true" />

                <div>
                  <label htmlFor="proto-site" className="font-mono text-label uppercase text-heading">
                    {dict.siteLabel}
                  </label>
                  <input
                    id="proto-site"
                    name="website_or_name"
                    type="text"
                    required
                    placeholder={dict.sitePlaceholder}
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-brass focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="proto-email" className="font-mono text-label uppercase text-heading">
                    {dict.emailLabel}
                  </label>
                  <input
                    id="proto-email"
                    name="email"
                    type="email"
                    required
                    placeholder={dict.emailPlaceholder}
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-brass focus:outline-none"
                  />
                </div>

                <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-60">
                  {status === "sending" ? dict.sending : dict.submit}
                </button>

                {status === "error" && (
                  <p role="alert" className="text-sm text-destructive">
                    {dict.errorBody}
                  </p>
                )}

                <p className="text-xs leading-relaxed text-muted-foreground">
                  {dict.privacyNote}{" "}
                  <Link href={`/${lang}/legal`} className="link-brass underline-offset-2">
                    →
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
