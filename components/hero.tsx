import { Button } from "@/components/ui/button"

const CALENDLY_URL = "https://calendly.com/tablefront"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/tablefront-hero.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Eyebrow */}
        <p className="mb-6 font-mono text-sm uppercase tracking-[0.2em] text-primary">
          Hospitality Website Agency
        </p>

        {/* Headline */}
        <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
          Websites built for hospitality.
          <br />
          <span className="text-primary">By people who lived it.</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-2xl font-sans text-lg leading-relaxed text-foreground/80 md:text-xl text-pretty">
          We create stunning, high-converting websites for restaurants, bars, cafes, hotels, and 
          independent hospitality businesses — because we know what it takes to fill seats and book rooms.
        </p>

        {/* CTA */}
        <Button
          asChild
          size="lg"
          className="bg-primary px-8 py-6 font-mono text-base uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
        >
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Book a Free Call
          </a>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-wider text-foreground/60">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  )
}
