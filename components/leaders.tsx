import { User } from "lucide-react"

const leaders = [
  {
    name: "Alex Chen",
    role: "Co-Founder & Creative Director",
    bio: "Former restaurant manager turned designer. Spent 8 years in the trenches of NYC hospitality before discovering a passion for web design. Knows firsthand why a 3-click reservation matters at 7pm on a Saturday.",
  },
  {
    name: "Jordan Rivera",
    role: "Co-Founder & Lead Developer",
    bio: "Started as a barista, became a full-stack developer. Built websites for over 50 hospitality businesses while understanding what actually drives customers through the door — and keeps them coming back.",
  },
]

export function Leaders() {
  return (
    <section id="leaders" className="bg-background-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-secondary">
            The Team
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground-dark md:text-4xl lg:text-5xl text-balance">
            Who we are
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-foreground-dark/70">
            We&apos;re not just developers — we&apos;re hospitality veterans who traded aprons for keyboards.
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
