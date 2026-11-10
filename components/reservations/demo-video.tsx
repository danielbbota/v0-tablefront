import type { Dictionary } from "@/lib/dictionaries/en"

type VideoDict = Dictionary["reservations"]["video"]

/**
 * The 47-second presentation video ("A noite de sexta"). Two renders of the
 * same cut: 16:9 for desktop, 9:16 for phones, switched with CSS only so the
 * server and client markup match. Neither autoplays — the video has a voice
 * track — and both load nothing until pressed (poster frames carry the look).
 */
export function DemoVideo({ dict }: { dict: VideoDict }) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 pb-16 lg:px-8">
      <div className="reveal">
        <p className="eyebrow">{dict.eyebrow}</p>
        <h2 className="mt-4 font-serif text-h1 font-medium text-heading text-balance">{dict.headline}</h2>
        <p className="mt-4 max-w-3xl text-body-lg text-muted-foreground">{dict.sub}</p>
      </div>

      {/* Desktop — 16:9 in the editorial image card */}
      <div className="reveal mt-10 hidden md:block" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
        <video
          className="image-card aspect-video w-full bg-espresso"
          controls
          playsInline
          preload="none"
          poster="/videos/apresentacao-16x9-poster.jpg"
          aria-label={dict.label}
        >
          <source src="/videos/apresentacao-16x9.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Phone — the vertical cut, framed like a phone */}
      <div className="reveal mt-8 md:hidden" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
        <video
          className="image-card mx-auto aspect-[9/16] w-full max-w-[340px] bg-espresso"
          controls
          playsInline
          preload="none"
          poster="/videos/apresentacao-9x16-poster.jpg"
          aria-label={dict.label}
        >
          <source src="/videos/apresentacao-9x16.mp4" type="video/mp4" />
        </video>
      </div>

      {dict.note && (
        <p className="mt-4 text-center font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground md:text-left">
          {dict.note}
        </p>
      )}
    </section>
  )
}
