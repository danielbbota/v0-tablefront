"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

const CALENDLY_URL = "https://calendly.com/daniel-tablesfront/30min"

export function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const video = videoRef.current
    if (!wrapper || !video) return

    const handleScroll = () => {
      const rect = wrapper.getBoundingClientRect()
      const scrolled = -rect.top
      const total = rect.height - window.innerHeight
      const progress = Math.min(Math.max(scrolled / total, 0), 1)

      if (video.duration && !isNaN(video.duration)) {
        video.currentTime = progress * video.duration
      }
    }

    const handleLoadedMetadata = () => {
      handleScroll()
    }

    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
    }
  }, [])

  return (
    <section 
      ref={wrapperRef}
      className="relative"
      style={{ height: "200vh" }}
    >
      {/* Sticky Container - pinned to viewport while scrolling through wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Full Screen Video */}
        {/* DROP tablefront-hero-keyframes.mp4 HERE */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/tablefront-hero-keyframes.mp4" type="video/mp4" />
        </video>

        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        {/* Content Overlay - Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-4xl px-6 text-center">
            {/* Eyebrow */}
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.2em] text-primary">
              HOSPITALITY WEBSITE SPECIALISTS
            </p>

            {/* Headline */}
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              Your guests&apos; first impression,
              <br />
              <span className="text-primary">rebuilt in 7 days.</span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mb-10 max-w-2xl font-sans text-lg leading-relaxed text-white/80 md:text-xl text-pretty">
              Websites built for hospitality. By people who lived it.
            </p>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="bg-primary px-8 py-6 font-mono text-base uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                BOOK A FREE CALL
              </a>
            </Button>

            {/* Small Text Below Button */}
            <p className="mb-24 mt-4 font-sans text-sm text-white/60 md:mb-0">
              7-day delivery · No long contracts · Built for hospitality
            </p>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-white/60">Scroll to explore</span>
            <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
