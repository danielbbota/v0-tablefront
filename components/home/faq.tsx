import type { CSSProperties } from "react"
import type { Dictionary } from "@/lib/dictionaries/en"

export function Faq({ dict }: { dict: Dictionary["faq"] }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }

  return (
    <section id="faq" className="scroll-mt-24 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="reveal">
            <p className="eyebrow">{dict.eyebrow}</p>
            <h2 className="mt-5 font-serif text-h1 font-medium text-heading text-balance">{dict.headline}</h2>
            <span className="draw-rule mt-8 w-24" aria-hidden />
          </div>

          <div className="md:col-span-2">
            {dict.items.map((item, index) => (
              <details
                key={item.q}
                className="reveal group border-b border-border py-2"
                style={{ "--reveal-delay": `${Math.min(index * 60, 300)}ms` } as CSSProperties}
              >
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-4 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-serif text-subheading font-medium text-heading">{item.q}</h3>
                  <span
                    className="shrink-0 font-serif text-h3 leading-none text-brass transition-transform duration-200 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 leading-relaxed text-foreground/75">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  )
}
