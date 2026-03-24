import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export function Pattern() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      })

      tl.from('[data-animate="headline"]', {
        y: 28,
        opacity: 0,
        filter: 'blur(6px)',
        duration: 0.9,
      })

      // Evidence blocks accumulate with increasing speed
      tl.from(
        '[data-animate="evidence"]',
        {
          y: 20,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.7,
          stagger: 0.18,
        },
        '-=0.35',
      )

      // The "Helped." beat — slight extra delay to let it land
      tl.from(
        '[data-animate="beat"]',
        {
          y: 16,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.7,
        },
        '+=0.1',
      )

      tl.from(
        '[data-animate="closing"]',
        {
          y: 16,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.8,
        },
        '-=0.2',
      )
    },
    { scope: containerRef },
  )

  return (
    <section ref={containerRef} id="pattern" className="frame">
      <div className="mx-auto w-full max-w-2xl">
        <h2
          data-animate="headline"
          className="font-display text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.12] tracking-[-0.02em]"
        >
          Then I kept finding them.
        </h2>

        <div className="mt-10 space-y-8 md:mt-12">
          {/* Evidence block 1 */}
          <div data-animate="evidence" className="border-l border-border pl-5">
            <p className="font-mono text-sm tracking-wide uppercase text-text-muted">
              Community finance office
            </p>
            <p className="mt-2 text-text-secondary">
              Bank reconciliations? Automated in five minutes. Days of work done
              before lunch.
            </p>
          </div>

          {/* Evidence block 2 */}
          <div data-animate="evidence" className="border-l border-border pl-5">
            <p className="font-mono text-sm tracking-wide uppercase text-text-muted">
              OCTAVE, Colombo
            </p>
            <p className="mt-2 text-text-secondary">
              Customer analysis? Built it independently, handed it in, moved on.
            </p>
          </div>

          {/* The beat — "Helped." */}
          <div data-animate="beat" className="border-l-2 border-accent/40 pl-5">
            <p className="text-text-secondary">
              Weeks later, a client told my manager my report actually helped
              them make a decision.
            </p>
            <p className="mt-4 font-display text-xl italic leading-snug tracking-[-0.01em] text-text-primary md:text-2xl">
              Not &ldquo;looked professional.&rdquo; Not &ldquo;was
              thorough.&rdquo;{' '}
              <span className="text-accent">Helped.</span>
            </p>
          </div>
        </div>

        <p
          data-animate="closing"
          className="mt-10 text-text-secondary md:mt-12"
        >
          I wasn&rsquo;t chasing impressive titles. I was chasing that
          feeling&mdash;building something someone actually uses.
        </p>
      </div>
    </section>
  )
}
