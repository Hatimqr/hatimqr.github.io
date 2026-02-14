import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export function Human() {
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
        '[data-animate="rowing"]',
        {
          y: 16,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.6,
        },
        '-=0.3',
      )

      tl.from(
        '[data-animate="bridge"]',
        {
          y: 18,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.7,
        },
        '-=0.15',
      )

      // ACCA block
      tl.from(
        '[data-animate="acca"]',
        {
          y: 16,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.6,
        },
        '-=0.15',
      )

      // "Seemed fine" aside — delay for comedic timing
      tl.from(
        '[data-animate="aside"]',
        {
          y: 10,
          opacity: 0,
          filter: 'blur(3px)',
          duration: 0.7,
        },
        '+=0.15',
      )

      // Family line — its own beat
      tl.from(
        '[data-animate="family"]',
        {
          y: 12,
          opacity: 0,
          filter: 'blur(3px)',
          duration: 0.7,
        },
        '-=0.2',
      )

      // Passport block
      tl.from(
        '[data-animate="passport"]',
        {
          y: 14,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.7,
        },
        '-=0.2',
      )

      tl.from(
        '[data-animate="metaphysics"]',
        {
          y: 10,
          opacity: 0,
          filter: 'blur(3px)',
          duration: 0.5,
        },
        '-=0.05',
      )

      tl.from(
        '[data-animate="closer"]',
        {
          y: 12,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.8,
        },
        '+=0.15',
      )
    },
    { scope: containerRef },
  )

  return (
    <section ref={containerRef} id="human" className="frame">
      <div className="mx-auto w-full max-w-2xl">
        <h2
          data-animate="headline"
          className="font-display text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.12] tracking-[-0.02em]"
        >
          I do touch grass.
        </h2>

        {/* Rowing — compact, same precision as technical data */}
        <div data-animate="rowing" className="mt-8 border-l border-border pl-5 md:mt-10">
          <p className="font-mono text-sm tracking-wide uppercase text-text-muted">
            National-level rower, Sri Lanka
          </p>
          <p className="mt-2 text-text-secondary">
            2 golds, 1 bronze. Vice-captain of the crew.
          </p>
        </div>

        {/* Bridge — connects physical and technical */}
        <p data-animate="bridge" className="mt-8 text-text-secondary md:mt-10">
          The discipline to suffer through a 2km race at maximum heart rate is
          the same discipline I use to debug SQL queries at 3 AM when the only
          thing broken is a single misplaced semicolon.
        </p>

        {/* ACCA — second evidence block */}
        <div data-animate="acca" className="mt-8 border-l border-border pl-5 md:mt-10">
          <p className="font-mono text-sm tracking-wide uppercase text-text-muted">
            Gap year, KPMG
          </p>
          <p className="mt-2 text-text-secondary">
            Passed the first 9 ACCA exams in 7 months while working full-time.
          </p>
        </div>

        {/* The aside — "seemed fine" */}
        <p
          data-animate="aside"
          className="mt-4 pl-5 font-display text-base italic text-text-muted"
        >
          Didn&rsquo;t realize you could take study leave&mdash;just took the
          exam days off. Seemed fine at the time.
        </p>

        {/* Family line — echoes Frame 2's dad */}
        <p
          data-animate="family"
          className="mt-6 text-text-secondary"
        >
          I&rsquo;ll finish the last 4 eventually. I promise. My whole
          family&rsquo;s full of accountants&mdash;it would be weird not to.
        </p>

        {/* Passport block */}
        <div data-animate="passport" className="mt-8 space-y-5 md:mt-10">
          <div>
            <p className="font-mono text-xs tracking-[0.1em] uppercase text-text-muted">
              Route
            </p>
            <p className="mt-1.5 font-mono text-sm text-text-secondary">
              Colombo <span className="text-text-primary">&rarr;</span> Abu
              Dhabi <span className="text-text-primary">&rarr;</span> Nairobi{' '}
              <span className="text-text-primary">&rarr;</span> Paris{' '}
              <span className="text-text-primary">&rarr;</span> New York{' '}
              <span className="text-text-primary">&rarr;</span> Buenos Aires{' '}
              <span className="text-text-muted">(studied)</span>
            </p>
            <p className="mt-1 font-mono text-sm text-text-muted">
              + 23 other countries{' '}
              <span className="italic">(yeah, I like to travel)</span>
            </p>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.1em] uppercase text-text-muted">
              Languages
            </p>
            <p className="mt-1.5 font-mono text-sm text-text-secondary">
              English, Sinhala{' '}
              <span className="text-text-muted">(native)</span>{' '}
              &middot; Gujarati{' '}
              <span className="text-text-muted">(speak)</span>{' '}
              &middot; Hindi/Urdu{' '}
              <span className="text-text-muted">(understand)</span>{' '}
              &middot; French{' '}
              <span className="text-text-muted">(5 months in Paris)</span>
            </p>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.1em] uppercase text-text-muted">
              Student Energy Summit 2023
            </p>
            <p className="mt-1.5 font-mono text-sm text-text-secondary">
              50+ countries &middot; $500k raised &middot; Abu Dhabi
            </p>
            <p className="mt-0.5 font-mono text-sm text-text-muted">
              Largest student-led energy conference in the world
            </p>
          </div>
        </div>

        <p
          data-animate="metaphysics"
          className="mt-6 text-text-secondary"
        >
          And I think philosophy is really cool too&mdash;especially Buddhism.
        </p>

        {/* Dinner party closer */}
        <p
          data-animate="closer"
          className="mt-10 font-display text-xl italic leading-snug tracking-[-0.01em] text-text-secondary md:mt-12 md:text-2xl"
        >
          But if I&rsquo;m being honest, the rowing is still the thing
          I&rsquo;m most proud of. Everything else I can attribute to
          caffeine.
        </p>
      </div>
    </section>
  )
}
