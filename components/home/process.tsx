import { CALENDLY_URL } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/dictionaries/en"

export function Process({ dict }: { dict: Dictionary["process"] }) {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className="mt-5 font-serif text-h1 font-medium text-heading text-balance">{dict.headline}</h2>
        </div>

        <ol className="mt-16 grid gap-12 md:grid-cols-4 md:gap-8">
          {dict.steps.map((step, index) => (
            <li key={step.title} className="reveal relative border-t border-brass/50 pt-6">
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
