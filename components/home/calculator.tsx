"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { formatPrice, type Locale } from "@/lib/i18n/config"
import { useCurrency } from "@/lib/currency-context"
import type { Dictionary } from "@/lib/dictionaries/en"

/** Smoothly tweens toward the target value so the result counts up/down. */
function useTweenedNumber(target: number): number {
  const [display, setDisplay] = useState(target)
  const previous = useRef(target)

  useEffect(() => {
    const from = previous.current
    previous.current = target
    if (from === target) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(target)
      return
    }

    let raf = 0
    const start = performance.now()
    const duration = 450
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(from + (target - from) * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target])

  return display
}

/**
 * Revenue-leak estimator. No invented statistics: the visitor's own numbers
 * run through two clearly labelled, adjustable assumptions.
 */
export function Calculator({ lang, dict }: { lang: Locale; dict: Dictionary["calculator"] }) {
  const { currency } = useCurrency()
  const [covers, setCovers] = useState(900)
  const [ticket, setTicket] = useState(45)
  const [pctCheck, setPctCheck] = useState(70)
  const [pctLost, setPctLost] = useState(10)

  const monthlyLeak = Math.round((covers * (pctCheck / 100) * (pctLost / 100) * ticket) / 10) * 10
  const tweenedMonthly = useTweenedNumber(monthlyLeak)
  const yearlyLeak = tweenedMonthly * 12

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className="mt-5 font-serif text-h1 font-medium text-heading text-balance">{dict.headline}</h2>
          <p className="mt-5 text-body-lg text-muted-foreground">{dict.sub}</p>
        </div>

        <div className="reveal mt-14 grid gap-10 rounded-lg border border-border bg-surface p-8 md:grid-cols-2 md:gap-14 md:p-12">
          <div className="space-y-9">
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <label htmlFor="calc-covers" className="font-mono text-label uppercase text-heading">
                  {dict.coversLabel}
                </label>
                <span className="font-serif text-h3 text-heading tabular-nums">{covers.toLocaleString()}</span>
              </div>
              <input
                id="calc-covers"
                type="range"
                min={100}
                max={6000}
                step={50}
                value={covers}
                onChange={(e) => setCovers(Number(e.target.value))}
                className="mt-3 w-full accent-(--primary-deep)"
              />
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-4">
                <label htmlFor="calc-ticket" className="font-mono text-label uppercase text-heading">
                  {dict.ticketLabel}
                </label>
                <span className="font-serif text-h3 text-heading tabular-nums">
                  {formatPrice(ticket, currency, lang)}
                </span>
              </div>
              <input
                id="calc-ticket"
                type="range"
                min={10}
                max={150}
                step={5}
                value={ticket}
                onChange={(e) => setTicket(Number(e.target.value))}
                className="mt-3 w-full accent-(--primary-deep)"
              />
            </div>

            <details className="group">
              <summary className="cursor-pointer list-none font-mono text-label uppercase text-primary-deep">
                <span className="link-brass">{dict.assumptionsToggle}</span>
                <span className="ml-2 inline-block transition-transform group-open:rotate-180" aria-hidden>
                  ▾
                </span>
              </summary>
              <div className="mt-6 space-y-7">
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <label htmlFor="calc-check" className="text-sm text-foreground/80">
                      {dict.assumption1Label}
                    </label>
                    <span className="font-mono text-sm text-heading tabular-nums">{pctCheck}%</span>
                  </div>
                  <input
                    id="calc-check"
                    type="range"
                    min={10}
                    max={100}
                    step={5}
                    value={pctCheck}
                    onChange={(e) => setPctCheck(Number(e.target.value))}
                    className="mt-2 w-full accent-(--primary-deep)"
                  />
                </div>
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <label htmlFor="calc-lost" className="text-sm text-foreground/80">
                      {dict.assumption2Label}
                    </label>
                    <span className="font-mono text-sm text-heading tabular-nums">{pctLost}%</span>
                  </div>
                  <input
                    id="calc-lost"
                    type="range"
                    min={1}
                    max={30}
                    step={1}
                    value={pctLost}
                    onChange={(e) => setPctLost(Number(e.target.value))}
                    className="mt-2 w-full accent-(--primary-deep)"
                  />
                </div>
              </div>
            </details>
          </div>

          <div className="flex flex-col justify-center border-t border-border pt-10 md:border-l md:border-t-0 md:pl-14 md:pt-0">
            <p className="font-mono text-label uppercase text-muted-foreground">{dict.resultLabel}</p>
            <p
              className="mt-4 font-serif text-display font-medium text-primary tabular-nums"
              aria-live="polite"
            >
              {formatPrice(tweenedMonthly, currency, lang)}
            </p>
            <p className="mt-3 text-body-lg text-muted-foreground">
              {dict.perYearPrefix}{" "}
              <strong className="font-medium text-heading">{formatPrice(yearlyLeak, currency, lang)}</strong>{" "}
              {dict.perYearSuffix}
            </p>
            <p className="mt-6 max-w-sm text-sm italic text-muted-foreground">{dict.disclaimer}</p>
            <div className="mt-8">
              <Link href={`/${lang}#free-prototype`} className="btn btn-primary">
                {dict.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
