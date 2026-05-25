"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

const CALENDLY_URL = "https://calendly.com/tablefront"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const video = videoRef.current
    if (!container || !video) return

    let animationId: number

    const handleScroll = () => {
      animationId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect()
        const containerTop = window.scrollY + rect.top
        const containerHeight = container.offsetHeight
        const viewportHeight = window.innerHeight
        
        // Calculate scroll progress within the container (0 to 1)
        const scrollPosition = window.scrollY - containerTop
        const scrollableDistance = containerHeight - viewportHeight
        const scrollProgress = Math.min(Math.max(scrollPosition / scrollableDistance, 0), 1)
        
        // Map scroll progress to video time
        if (video.duration && !isNaN(video.duration)) {
          video.currentTime = scrollProgress * video.duration
        }
      })
    }

    // Wait for video metadata to load
    const handleLoadedMetadata = () => {
      handleScroll()
    }

    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    // Initial call
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative h-[300vh]"
    >
      {/* Sticky Video Container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
        {/* Video with 16:9 ratio, dark border, rounded corners */}
        <div className="relative w-full max-w-5xl px-6">
          <div className="relative aspect-video overflow-hidden rounded-2xl border-4 border-foreground/20 bg-foreground/10">
            {/* DROP tablefront-hero.mp4 HERE */}
            <video
              ref={videoRef}
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            >
              <source src="/videos/tablefront-hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="mx-auto max-w-4xl px-6 text-center pointer-events-auto">
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
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-foreground/60">Scroll to explore</span>
            <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
