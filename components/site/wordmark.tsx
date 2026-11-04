/**
 * The TableFront wordmark: the name set in DM Serif Display followed by a
 * short brass rule, the same lockup as the OpenGraph share images. Typeset
 * rather than an image so it stays crisp and carries no vertical tagline.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 font-serif leading-none tracking-[-0.01em] text-heading ${className}`}>
      <span>TableFront</span>
      <span aria-hidden className="h-[2px] w-[1em] bg-brass" />
    </span>
  )
}
