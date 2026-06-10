import Image from "next/image"
import type { Dictionary } from "@/lib/dictionaries/en"

const TEAM_IMAGES = ["/images/team/daniel-bota.jpg", "/images/team/devin-kabay.jpg"]

export function Team({ dict }: { dict: Dictionary["team"] }) {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className="mt-5 font-serif text-h1 font-medium text-heading text-balance">{dict.headline}</h2>
          <p className="mt-5 text-body-lg text-muted-foreground">{dict.sub}</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
          {dict.members.map((member, index) => (
            <article
              key={member.name}
              className="reveal flex flex-col items-center gap-6 rounded-lg bg-background p-8 text-center sm:flex-row sm:items-start sm:text-left md:p-10"
            >
              <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={TEAM_IMAGES[index] ?? TEAM_IMAGES[0]}
                  alt={member.imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="144px"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-h3 font-medium text-heading">{member.name}</h3>
                <p className="mt-1 font-mono text-label uppercase text-primary-deep">{member.role}</p>
                <p className="mt-4 leading-relaxed text-foreground/75">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
