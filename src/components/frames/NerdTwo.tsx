import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export function NerdTwo() {
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

      tl.from(
        '[data-animate="paragraph"]',
        {
          y: 18,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.7,
          stagger: 0.12,
        },
        '-=0.35',
      )

      tl.from(
        '[data-animate="question"]',
        {
          y: 16,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.7,
        },
        '-=0.15',
      )

      // The aside — extra delay, the mic-drop needs room
      tl.from(
        '[data-animate="aside"]',
        {
          y: 10,
          opacity: 0,
          filter: 'blur(3px)',
          duration: 0.8,
        },
        '+=0.25',
      )

      tl.from(
        '[data-animate="viz"]',
        {
          y: 16,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.7,
        },
        '-=0.3',
      )
    },
    { scope: containerRef },
  )

  return (
    <section ref={containerRef} id="nerd-two" className="frame">
      <div className="mx-auto w-full max-w-2xl">
        <h2
          data-animate="headline"
          className="font-display text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.12] tracking-[-0.02em]"
        >
          I also over-analyze my hobbies.
        </h2>

        <div className="mt-8 space-y-5 md:mt-10">
          <p data-animate="paragraph" className="text-text-secondary">
            Scraped 1,000+ F1 car setups and lap times across 24 tracks.
            Applied{' '}
            <span className="font-mono text-[0.9em] text-secondary">PCA</span>{' '}
            and{' '}
            <span className="font-mono text-[0.9em] text-secondary">
              K-Means
            </span>{' '}
            clustering to identify &ldquo;setup philosophies.&rdquo;
          </p>

          <p data-animate="paragraph" className="text-text-secondary">
            Built{' '}
            <span className="font-mono text-[0.9em] text-secondary">
              Random Forest
            </span>{' '}
            models to quantify setup parameter sensitivity. Calculated exact lap
            time deltas per adjustment.
          </p>
        </div>

        <p
          data-animate="question"
          className="mt-8 text-text-secondary md:mt-10"
        >
          Because why just <em>watch</em> the race when you can prove whether
          front wing angle actually matters as much as the commentators claim it
          does?
        </p>

        {/* Showcase: aside + visualization as cohesive unit */}
        <div className="mt-10 md:mt-12">
          <p
            data-animate="aside"
            className="pl-5 font-display text-lg italic text-text-muted md:text-xl"
          >
            (It does, but only at specific tracks—like Spain:)
          </p>

          <div
            data-animate="viz"
            className="mt-6 rounded-lg border border-border bg-surface p-4 md:p-5"
          >
            <img
              src="/visualization.png"
              alt="Spain setup clusters - PCA visualization showing F1 car setup philosophies"
              className="w-full rounded"
            />
            <p className="mt-3 text-center font-mono text-xs tracking-wide uppercase text-text-muted">
              Setup Philosophy Clusters — Spain Circuit
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
