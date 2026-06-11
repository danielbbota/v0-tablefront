"use client"

import { useEffect, useRef, useState } from "react"
import { Pause, Play } from "lucide-react"

/**
 * Desktop-only ambient loop inside the hero image card. The poster image
 * underneath stays the LCP element: the video has preload="none", gets its
 * src only on desktop after the page has settled, and fades in over the
 * still once it is actually playing. On mobile (or reduced motion) the src
 * is never set, so nothing downloads. The video is decorative (the poster's
 * alt carries the description), and a pause control satisfies WCAG 2.2.2
 * for the auto-playing loop.
 */
export function HeroAmbience({
  src,
  pauseLabel,
  playLabel,
}: {
  src: string
  pauseLabel: string
  playLabel: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const userPausedRef = useRef(false)
  const [started, setStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (!window.matchMedia("(min-width: 768px)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const handlePlaying = () => setStarted(true)
    video.addEventListener("playing", handlePlaying, { once: true })

    // If autoplay is refused (battery saver, strict settings), retry on the
    // first interaction; otherwise the still image simply stays.
    const retry = () => {
      if (userPausedRef.current) return
      video.play().then(handlePlaying).catch(() => {})
    }
    const attachRetry = () => {
      window.addEventListener("scroll", retry, { once: true, passive: true })
      window.addEventListener("pointerdown", retry, { once: true })
    }

    // Defer past the hero's LCP and entrance animation. The play() promise
    // doubles as the fade-in trigger ("playing" doesn't fire reliably in
    // hidden documents).
    const timer = window.setTimeout(() => {
      video.src = src
      video.play().then(handlePlaying).catch(attachRetry)
    }, 1500)

    // Chrome's Energy Saver pauses muted loops in hidden tabs — resume when
    // the visitor comes back, unless they paused it themselves.
    const handleVisibility = () => {
      if (
        document.visibilityState === "visible" &&
        video.src &&
        video.paused &&
        !video.ended &&
        !userPausedRef.current
      ) {
        video.play().then(handlePlaying).catch(() => {})
      }
    }
    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      window.clearTimeout(timer)
      video.removeEventListener("playing", handlePlaying)
      window.removeEventListener("scroll", retry)
      window.removeEventListener("pointerdown", retry)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [src])

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      userPausedRef.current = false
      video.play().catch(() => {})
      setIsPaused(false)
    } else {
      userPausedRef.current = true
      video.pause()
      setIsPaused(true)
    }
  }

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        className={`absolute inset-0 hidden h-full w-full object-cover transition-opacity duration-1000 md:block ${
          started ? "opacity-100" : "opacity-0"
        }`}
      />
      {started && (
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPaused ? playLabel : pauseLabel}
          className="absolute bottom-5 right-5 z-10 hidden h-9 w-9 items-center justify-center rounded-full border border-cream/30 bg-espresso/50 text-cream backdrop-blur-sm transition-colors hover:border-brass hover:text-brass md:flex"
        >
          {isPaused ? <Play className="h-3.5 w-3.5" aria-hidden /> : <Pause className="h-3.5 w-3.5" aria-hidden />}
        </button>
      )}
    </>
  )
}
