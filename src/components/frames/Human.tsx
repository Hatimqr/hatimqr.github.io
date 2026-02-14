import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

const stats = [
  { value: '6', label: 'languages' },
  { value: '4', label: 'continents studied' },
  { value: '$500k', label: 'raised for Student Energy Summit' },
]

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

      // Staccato facts — rapid fire
      tl.from(
        '[data-animate="stat"]',
        {
          y: 10,
          opacity: 0,
          filter: 'blur(3px)',
          duration: 0.4,
          stagger: 0.07,
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
          thing broken is a single misplaced comma.
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

        {/* Staccato facts — tight grid */}
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 md:mt-10">
          {stats.map((s) => (
            <div key={s.label} data-animate="stat" className="flex items-baseline gap-2">
              <span className="font-mono text-lg text-text-primary">
                {s.value}
              </span>
              <span className="text-sm text-text-muted">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <p
          data-animate="metaphysics"
          className="mt-6 text-sm text-text-muted"
        >
          And I still think metaphysics is underrated.
        </p>

        {/* Dinner party closer */}
        <p
          data-animate="closer"
          className="mt-10 font-display text-xl italic leading-snug tracking-[-0.01em] text-text-secondary md:mt-12 md:text-2xl"
        >
          But sure, the rowing thing sounds more impressive at dinner parties.
        </p>
      </div>
    </section>
  )
}
