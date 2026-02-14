import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'

export function Origin() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const headline = containerRef.current!.querySelector('[data-animate="headline"]')
      const paragraphs = containerRef.current!.querySelectorAll('[data-animate="paragraph"]')
      const closing = containerRef.current!.querySelector('[data-animate="closing"]')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'center center',
          toggleActions: 'play none none none',
        },
      })

      tl.from(headline, {
        y: 28,
        opacity: 0,
        filter: 'blur(6px)',
        duration: 0.9,
      })

      tl.from(
        paragraphs,
        {
          y: 20,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.7,
          stagger: 0.12,
        },
        '-=0.4',
      )

      tl.from(
        closing,
        {
          y: 16,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.8,
        },
        '-=0.15',
      )

      // Subtle separator line draws in
      tl.from(
        '[data-animate="rule"]',
        {
          scaleX: 0,
          duration: 0.6,
          ease: 'power2.inOut',
        },
        '-=0.6',
      )
    },
    { scope: containerRef },
  )

  return (
    <section ref={containerRef} id="origin" className="frame">
      <div className="mx-auto w-full max-w-2xl">
        {/* Thin rule to signal transition */}
        <div
          data-animate="rule"
          className="mb-12 h-px w-16 origin-left bg-text-muted/30 md:mb-16"
        />

        <h2
          data-animate="headline"
          className="font-display text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.12] tracking-[-0.02em]"
        >
          It started with my dad&rsquo;s spreadsheet.
        </h2>

        <div className="mt-8 space-y-6 md:mt-10">
          <p data-animate="paragraph" className="text-text-secondary">
            Winter break, first year. He spent an hour every week doing the same
            calculations. I&rsquo;d just learned Python.
          </p>

          <p data-animate="paragraph" className="text-text-secondary">
            Automated it in a weekend. Not because I was good
            yet&mdash;because I couldn&rsquo;t stand watching him do it
            manually.
          </p>
        </div>

        <p
          data-animate="closing"
          className="mt-10 border-l-2 border-accent/40 pl-5 font-display text-xl italic leading-snug tracking-[-0.01em] text-text-primary md:mt-12 md:text-2xl"
        >
          That&rsquo;s when I realized: the best problems aren&rsquo;t the
          cleverest ones. They&rsquo;re the ones that save someone an hour of
          their life.
        </p>
      </div>
    </section>
  )
}
