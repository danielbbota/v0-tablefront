import Image from "next/image"
import type { CSSProperties } from "react"
import type { Dictionary } from "@/lib/dictionaries/en"

const TEAM_IMAGES = ["/images/team/daniel-bota.jpg", "/images/team/devin-kabay.jpg"]

/**
 * Who we are, told once and on one screen: the founder's story on the left,
 * his quote and the two people behind TableFront on the right.
 */
export function About({ founder, team }: { founder: Dictionary["founder"]; team: Dictionary["team"] }) {
  return (
    <section id="story" className="scroll-mt-24 bg-background py-16 md:py-[clamp(3rem,8svh,5rem)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div className="reveal">
            <p className="eyebrow">{founder.eyebrow}</p>
            <h2 className="mt-4 font-serif text-h1 font-medium text-heading text-balance">{founder.headline}</h2>
            <p className="mt-6 max-w-xl text-body-lg leading-relaxed text-foreground/85">{founder.p1}</p>
            <p className="mt-4 max-w-xl text-body-lg leading-relaxed text-foreground/85">{founder.p2}</p>

            <figure className="mt-8 max-w-xl border-l-2 border-brass pl-6">
              <blockquote className="font-serif text-h3 font-medium leading-snug text-heading">
                “{founder.quote}”
              </blockquote>
              <figcaption className="mt-3 font-mono text-label uppercase text-muted-foreground">
                — {founder.quoteAttribution}
              </figcaption>
            </figure>
          </div>

          <div>
            <p className="eyebrow reveal">{team.eyebrow}</p>
            <div className="mt-5 grid gap-4">
              {team.members.map((member, index) => (
                <article
                  key={member.name}
                  className="reveal flex items-start gap-5 rounded-lg bg-surface p-5 md:p-6"
                  style={{ "--reveal-delay": `${index * 120}ms` } as CSSProperties}
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={TEAM_IMAGES[index] ?? TEAM_IMAGES[0]}
                      alt={member.imageAlt}
                      fill
                      className="object-cover object-top"
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-h3 font-medium text-heading">{member.name}</h3>
                    <p className="mt-1 font-mono text-label uppercase text-primary-deep">{member.role}</p>
                    <p className="mt-2.5 text-sm leading-relaxed text-foreground/75">{member.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
