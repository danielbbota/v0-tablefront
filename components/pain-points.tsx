import { Clock, DollarSign, Globe, Users } from "lucide-react"

const painPoints = [
  {
    icon: Users,
    title: "Reputation",
    description:
      "Your website is your first impression. An outdated or slow site makes guests choose a competitor before they ever experience what you offer.",
  },
  {
    icon: DollarSign,
    title: "Revenue",
    description:
      "Every missed direct reservation is full-margin revenue gone. High bounce rates and third-party commissions are quietly bleeding your business every month.",
  },
  {
    icon: Clock,
    title: "Time",
    description:
      "Manually updating menus, fixing broken links, and handling phone bookings costs you hours every week. Time you should be spending on your guests, not your inbox.",
  },
  {
    icon: Globe,
    title: "Risk",
    description:
      "Poor Google visibility and outdated platforms leave you exposed. One stronger competitor online can cause a sudden drop in bookings and foot traffic overnight.",
  },
]

export function PainPoints() {
  return (
    <section id="pain-points" className="bg-background-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-secondary">
            WHY YOUR WEBSITE IS COSTING YOU
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground-dark md:text-4xl lg:text-5xl text-balance">
            The silent problems hurting your business every day.
          </h2>
        </div>

        {/* Pain Points Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="rounded-lg border border-secondary/20 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                <point.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 
                className="mb-3 font-serif text-xl font-semibold text-foreground-dark"
                dangerouslySetInnerHTML={{ __html: point.title }}
              />
              <p 
                className="font-sans leading-relaxed text-foreground-dark/70"
                dangerouslySetInnerHTML={{ __html: point.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
