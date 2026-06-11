import type { Dictionary } from "@/lib/dictionaries/en"

export function FounderStory({ dict }: { dict: Dictionary["founder"] }) {
  return (
    <section id="story" className="scroll-mt-24 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid gap-14 md:grid-cols-5 md:gap-12">
          <div className="reveal md:col-span-3">
            <p className="eyebrow">{dict.eyebrow}</p>
            <h2 className="mt-5 font-serif text-h1 font-medium text-heading text-balance">{dict.headline}</h2>
            <p className="mt-7 max-w-xl text-body-lg leading-relaxed text-foreground/85">{dict.p1}</p>
            <p className="mt-5 max-w-xl text-body-lg leading-relaxed text-foreground/85">{dict.p2}</p>
          </div>

          <figure className="reveal flex flex-col justify-center border-l-2 border-brass pl-8 md:col-span-2">
            <blockquote className="font-serif text-h2 font-medium leading-snug text-heading">
              “{dict.quote}”
            </blockquote>
            <figcaption className="mt-6 font-mono text-label uppercase text-muted-foreground">
              — {dict.quoteAttribution}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
