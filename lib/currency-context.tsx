"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { Currency } from "@/lib/i18n/config"

const STORAGE_KEY = "tf-currency"

type CurrencyContextType = {
  currency: Currency
  setCurrency: (currency: Currency) => void
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

/**
 * Currency follows the language by default (PT/FR → EUR, DE/EN → CHF).
 * A manual selection overrides the default and persists across pages and visits.
 */
export function CurrencyProvider({
  defaultCurrency,
  children,
}: {
  defaultCurrency: Currency
  children: ReactNode
}) {
  const [currency, setCurrencyState] = useState<Currency>(defaultCurrency)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "CHF" || stored === "EUR") {
      setCurrencyState(stored)
    } else {
      setCurrencyState(defaultCurrency)
    }
  }, [defaultCurrency])

  const setCurrency = (next: Currency) => {
    setCurrencyState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  return <CurrencyContext.Provider value={{ currency, setCurrency }}>{children}</CurrencyContext.Provider>
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider")
  }
  return context
}
