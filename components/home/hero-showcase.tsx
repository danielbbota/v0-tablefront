import Image from "next/image"
import type { CSSProperties } from "react"
import { CalendarCheck, Coffee, Scissors, ShoppingBag, Stethoscope } from "lucide-react"
import type { Dictionary } from "@/lib/dictionaries/en"

/** One photo and one toast icon per `hero.verticals` entry, in the same order. */
const PHOTOS = [
  "/images/hero/restaurant.webp",
  "/images/hero/cafe.webp",
  "/images/hero/salon.webp",
  "/images/hero/clinic.webp",
  "/images/hero/shop.webp",
]
const ICONS = [CalendarCheck, Coffee, Scissors, Stethoscope, ShoppingBag]
const BARS = [0.34, 0.48, 0.42, 0.6, 0.68, 0.82, 1]

/**
 * "The action, live" — the hero's visual. A phone shows a client site for
 * each vertical; a booking/order/sale toast lands on it and the stat chip's
 * bars climb. Every frame is server-rendered markup cycled by CSS keyframes
 * (`--n` items × `--slot`), in lockstep with the eyebrow label — no state, no
 * hydration, nothing to download beyond five small photos. With reduced
 * motion the first vertical sits still with its toast and chart visible.
 * The handset is drawn in CSS (Dynamic Island, side buttons) and sits flush
 * on the section background — no card behind it.
 */
export function HeroShowcase({ dict }: { dict: Dictionary["hero"]["showcase"] }) {
  return (
    <div
      className="showcase absolute inset-0"
      style={{ "--n": dict.items.length } as CSSProperties}
      role="img"
      aria-label={dict.ariaLabel}
    >
      <div className="showcase-phone" aria-hidden>
        <div className="showcase-screen">
          {dict.items.map((item, index) => (
            <div key={item.name} className="showcase-site" style={{ "--i": index } as CSSProperties}>
              <div className="showcase-nav">
                <span className="font-serif">{item.name}</span>
                <span className="showcase-menu" />
              </div>
              <div className="showcase-photo">
                <Image src={PHOTOS[index]} alt="" fill sizes="300px" priority={index === 0} className="object-cover" />
              </div>
              <p className="showcase-tagline font-serif">{item.tagline}</p>
              <span className="showcase-cta">{item.cta}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="showcase-toasts" aria-hidden>
        {dict.items.map((item, index) => {
          const Icon = ICONS[index]
          return (
            <div key={item.name} className="showcase-toast" style={{ "--i": index } as CSSProperties}>
              <span className="showcase-toast-icon">
                <Icon strokeWidth={1.75} />
              </span>
              <span className="showcase-toast-text">
                <strong>{item.notifTitle}</strong>
                {item.notifDetail}
              </span>
            </div>
          )
        })}
      </div>

      <div className="showcase-stat" aria-hidden>
        <div className="showcase-stack">
          {dict.items.map((item, index) => (
            <span key={item.name} style={{ "--i": index } as CSSProperties}>
              <span className="showcase-stat-label">{item.statLabel}</span>
              <span className="showcase-stat-value font-serif">{item.statValue}</span>
            </span>
          ))}
        </div>
        <div className="showcase-bars">
          {BARS.map((height, index) => (
            <i key={index} style={{ "--h": height, "--d": index } as CSSProperties} />
          ))}
        </div>
      </div>
    </div>
  )
}
