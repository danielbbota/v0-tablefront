import { User } from "lucide-react"

const leaders = [
  {
    name: "Daniel Bota",
    role: "CEO & LEAD DEVELOPER",
    bio: "Daniel spent 10+ years working in hospitality before building TableFront — he knows firsthand what a broken website costs a business.",
  },
  {
    name: "Devin Kabay",
    role: "SALES MANAGER",
    bio: "With a Hotel Management degree and 7+ years on the floor, Devin brings real hospitality instinct to every client conversation — making sure the right businesses find TableFront.",
  },
]

export function Leaders() {
  return (
    <section id="leaders" className="bg-background-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-secondary">
            THE PEOPLE BEHIND IT
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground-dark md:text-4xl lg:text-5xl text-balance">
            Led by people who&apos;ve worked the floor.
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-foreground-dark/70">
            We didn&apos;t come from agencies. We came from hospitality.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-sm md:flex-row md:items-start md:text-left"
            >
              {/* Photo Placeholder */}
              {/* Replace the gradient div below with an <img> tag when photos are available */}
              {/* Example: <img src="/images/team/alex-chen.jpg" alt={leader.name} className="h-32 w-32 rounded-full object-cover" /> */}
              <div className="mb-6 flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 md:mb-0 md:mr-6">
                <User className="h-16 w-16 text-primary/50" />
              </div>

              {/* Info */}
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground-dark">
                  {leader.name}
                </h3>
                <p className="mt-1 font-mono text-sm uppercase tracking-wider text-secondary">
                  {leader.role}
                </p>
                <p className="mt-4 font-sans leading-relaxed text-foreground-dark/70">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
