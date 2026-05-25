import { Clock, DollarSign, Globe, Users } from "lucide-react"

const painPoints = [
  {
    icon: Clock,
    title: "You&apos;re Too Busy Running the Business",
    description:
      "Between managing staff, inventory, and customers, who has time to build a website? We handle everything so you can focus on what you do best.",
  },
  {
    icon: DollarSign,
    title: "Generic Templates Don&apos;t Cut It",
    description:
      "Cookie-cutter websites don&apos;t capture the soul of your establishment. Your space has character — your website should too.",
  },
  {
    icon: Globe,
    title: "You&apos;re Losing Customers Online",
    description:
      "70% of diners check a restaurant&apos;s website before visiting. If yours is outdated or hard to navigate, you&apos;re leaving money on the table.",
  },
  {
    icon: Users,
    title: "Tech Agencies Don&apos;t Get Hospitality",
    description:
      "Most web developers have never worked a Friday night rush. We have. We understand the unique challenges and opportunities in your industry.",
  },
]

export function PainPoints() {
  return (
    <section id="pain-points" className="bg-background-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-secondary">
            The Problem
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground-dark md:text-4xl lg:text-5xl text-balance">
            Sound familiar?
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
