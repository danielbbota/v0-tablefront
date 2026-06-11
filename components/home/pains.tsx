import type { CSSProperties } from "react"
import type { Dictionary } from "@/lib/dictionaries/en"

export function Pains({ dict }: { dict: Dictionary["pains"] }) {
  return (
    <section id="why" className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className="mt-5 font-serif text-h1 font-medium text-heading text-balance">{dict.headline}</h2>
          <p className="mt-5 text-body-lg text-muted-foreground">{dict.sub}</p>
          <span className="draw-rule mt-8 w-24" aria-hidden />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {dict.items.map((item, index) => (
            <article
              key={item.title}
              className="reveal rounded-lg border border-transparent bg-background p-8 transition-colors duration-300 hover:border-brass/60 md:p-10"
              style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-h3 font-medium text-heading">{item.title}</h3>
                <span className="font-mono text-label tracking-[0.16em] text-brass" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-foreground/80">{item.body}</p>
              <p className="mt-5 border-l-2 border-brass pl-4 text-sm italic text-muted-foreground">{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
