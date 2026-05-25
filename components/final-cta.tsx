import { Button } from "@/components/ui/button"

const CALENDLY_URL = "https://calendly.com/tablefront"

export function FinalCTA() {
  return (
    <section className="bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl text-balance">
          Ready to transform your online presence?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-primary-foreground/80">
          Let&apos;s talk about your business and how we can help you attract more customers, 
          fill more tables, and book more rooms.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-10 bg-background px-8 py-6 font-mono text-base uppercase tracking-wider text-foreground hover:bg-background/90"
        >
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Book a Free Call
          </a>
        </Button>
      </div>
    </section>
  )
}
