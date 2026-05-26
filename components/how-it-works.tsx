import { Button } from "@/components/ui/button"

const CALENDLY_URL = "https://calendly.com/daniel-tablesfront/30min"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn your business, your guests, and exactly what your current online presence is costing you.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We build a custom design that matches your brand and converts browsers into direct bookings.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We put it all together — menu, reservations, local SEO, fully mobile-first.",
  },
  {
    number: "04",
    title: "Handover",
    description:
      "Your site goes live in 7 days. We train your team and stay on for 30 days of support.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">
            THE PROCESS
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            From outdated to fully live in 7 days.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Connecting Line - Desktop */}
          <div className="absolute left-0 right-0 top-6 hidden h-0.5 bg-primary/30 md:block" />

          {/* Steps */}
          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number Circle */}
                <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-mono text-sm font-bold text-primary-foreground">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p 
                  className="font-sans leading-relaxed text-foreground/70"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary px-8 py-6 font-mono text-base uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              BOOK A FREE CALL
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
