import type { CSSProperties } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { PROJECTS } from "@/lib/projects-data"
import type { Dictionary } from "@/lib/dictionaries/en"

/**
 * Featured work. With a single project it renders as a wide editorial
 * feature (screenshot left, copy right); add a second entry to
 * `lib/projects-data.ts` and it becomes a two-column grid.
 */
export function LatestProject({ dict }: { dict: Dictionary["latestProject"] }) {
  const isGrid = PROJECTS.length > 1

  return (
    <section id="work" className="scroll-mt-24 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">{isGrid ? dict.eyebrowPlural : dict.eyebrow}</p>
          <h2 className="mt-5 font-serif text-h1 font-medium text-heading text-balance">{dict.headline}</h2>
          <p className="mt-5 text-body-lg text-muted-foreground">{dict.sub}</p>
          <span className="draw-rule mt-8 w-24" aria-hidden />
        </div>

        <div className={isGrid ? "mt-16 grid gap-10 md:grid-cols-2" : "mt-16"}>
          {PROJECTS.map((project, index) => {
            const copy = dict.projects[project.id]
            return (
              <article
                key={project.id}
                className={`reveal ${isGrid ? "" : "grid items-center gap-10 md:grid-cols-[7fr_5fr] md:gap-14"}`}
                style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} — ${dict.visit}`}
                  className="image-card group block bg-surface"
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} — ${copy.tags.join(", ")}`}
                    width={project.width}
                    height={project.height}
                    sizes={isGrid ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 58vw, 100vw"}
                    className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </a>

                <div className={isGrid ? "mt-6" : ""}>
                  <ul className="flex flex-wrap gap-2">
                    {copy.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <h3 className="mt-5 font-serif text-h2 font-medium text-heading">{project.name}</h3>
                  <p className="mt-4 text-body-lg leading-relaxed text-foreground/80">{copy.blurb}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-brass mt-7 inline-flex items-center gap-2 font-mono text-label uppercase text-heading"
                  >
                    {dict.visit}
                    <ArrowUpRight className="h-4 w-4 text-brass" aria-hidden />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
