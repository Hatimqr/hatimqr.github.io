import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export function Hook() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.5 })

      tl.from('[data-animate="headline"]', {
        y: 32,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 1,
        ease: 'power3.out',
      })
        .from(
          '[data-animate="subtext"]',
          {
            y: 24,
            opacity: 0,
            filter: 'blur(6px)',
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5',
        )
        .from(
          '[data-animate="scroll-cue"]',
          {
            opacity: 0,
            duration: 1.2,
            ease: 'power2.out',
          },
          '-=0.2',
        )
    },
    { scope: containerRef },
  )

  return (
    <section ref={containerRef} id="hook" className="frame">
      <div className="mx-auto w-full max-w-4xl">
        <h1
          data-animate="headline"
          className="font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.08] tracking-[-0.03em] text-accent"
        >
          I'm drawn to problems
          <br />
          that hurt a little.
        </h1>

        <p
          data-animate="subtext"
          className="mt-8 max-w-xl text-lg leading-relaxed text-text-secondary md:mt-10 md:text-xl"
        >
          The kind where the obvious approach breaks, the solution is hidden,
          and most reasonable people would just close the laptop.
        </p>
      </div>

      {/* Scroll cue */}
      <div
        data-animate="scroll-cue"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-12"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-text-muted">
            Scroll
          </span>
          <div className="h-8 w-px animate-pulse bg-text-muted/40" />
        </div>
      </div>
    </section>
  )
}
