const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn about your business, your brand, and your goals. No jargon, no pressure — just a conversation.",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description:
      "We craft a custom strategy and design mockups tailored to your unique identity and target audience.",
  },
  {
    number: "03",
    title: "Build & Refine",
    description:
      "Our team builds your site with your feedback at every step. You&apos;ll never be left in the dark.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We launch your new site and provide ongoing support to ensure it keeps performing at its best.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">
            The Process
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            How it works
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
      </div>
    </section>
  )
}
