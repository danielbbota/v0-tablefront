"use client"

import { useEffect } from "react"

/**
 * Drives `.reveal` elements. IntersectionObserver is the primary mechanism,
 * with a rAF-throttled scroll fallback so reveals still fire in environments
 * where IO is inert (embedded webviews, some readers). The hidden initial
 * state is gated behind `@media (scripting: enabled)`, so content is always
 * visible without JavaScript. Include once per page.
 */
export function RevealInit() {
  useEffect(() => {
    // .reveal fades in; .reveal-trigger only receives is-visible to drive
    // child transitions (e.g. the process arrow track) without fading itself.
    const pending = new Set(Array.from(document.querySelectorAll<HTMLElement>(".reveal, .reveal-trigger")))
    if (pending.size === 0) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      pending.forEach((el) => el.classList.add("is-visible"))
      return
    }

    let observer: IntersectionObserver | null = null
    let lastCheck = 0
    let trailing: ReturnType<typeof setTimeout> | null = null

    const show = (el: HTMLElement) => {
      el.classList.add("is-visible")
      pending.delete(el)
      observer?.unobserve(el)
    }

    const detach = () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (trailing !== null) {
        clearTimeout(trailing)
        trailing = null
      }
      observer?.disconnect()
    }

    const check = () => {
      const viewportBottom = window.innerHeight * 0.92
      for (const el of Array.from(pending)) {
        const rect = el.getBoundingClientRect()
        if (rect.top < viewportBottom && rect.bottom > 0) show(el)
      }
      if (pending.size === 0) detach()
    }

    // Time-based throttle instead of rAF: rAF (and IntersectionObserver) are
    // suspended in hidden/embedded contexts, while scroll events still fire.
    // A trailing call guarantees the burst's final position gets evaluated.
    const onScroll = () => {
      const now = Date.now()
      if (now - lastCheck < 80) {
        trailing ??= setTimeout(() => {
          trailing = null
          lastCheck = Date.now()
          check()
        }, 80)
        return
      }
      lastCheck = now
      check()
    }

    try {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) show(entry.target as HTMLElement)
          }
          if (pending.size === 0) detach()
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
      )
      pending.forEach((el) => observer!.observe(el))
    } catch {
      // No IntersectionObserver — the scroll fallback carries it alone.
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    check()

    return detach
  }, [])

  return null
}
