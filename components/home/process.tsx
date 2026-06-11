import type { CSSProperties } from "react"
import { CALENDLY_URL } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/dictionaries/en"

export function Process({ dict }: { dict: Dictionary["process"] }) {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className="mt-5 font-serif text-h1 font-medium text-heading text-balance">{dict.headline}</h2>
          <span className="draw-rule mt-8 w-24" aria-hidden />
        </div>

        <ol className="reveal-trigger relative mt-16 grid gap-12 md:grid-cols-4 md:gap-8">
          {/* Brass line that draws across the four steps while an arrowhead
              travels from step 1 to step 4 (desktop only) */}
          <div className="process-track absolute inset-x-0 top-0 hidden md:block" aria-hidden>
            <span className="process-track-line" />
            <span className="process-track-arrow" />
          </div>

          {dict.steps.map((step, index) => (
            <li
              key={step.title}
              className="reveal relative border-t border-brass/40 pt-6 md:border-t-0"
              style={{ "--reveal-delay": `${index * 120}ms` } as CSSProperties}
            >
              <span className="font-mono text-label tracking-[0.16em] text-brass" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif text-h3 font-medium text-heading">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-foreground/75">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="reveal mt-16 flex justify-center">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {dict.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
