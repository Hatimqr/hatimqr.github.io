import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

const roles = [
  { company: 'KPMG', work: 'M&A feasibility' },
  { company: 'PwC', work: 'Productivity analysis & AI research' },
  { company: 'OCTAVE', work: 'Supply chain optimization' },
  { company: 'Acuity', work: 'Quantitative trading strategies' },
  { company: 'NYUAD', work: '8TB of German Stock Exchange data' },
]

export function Corporate() {
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

      // Roles stagger in fast — he moved through these quickly
      tl.from(
        '[data-animate="role"]',
        {
          y: 14,
          opacity: 0,
          filter: 'blur(3px)',
          duration: 0.5,
          stagger: 0.1,
        },
        '-=0.3',
      )

      // Numbered list with a beat
      tl.from(
        '[data-animate="lessons"]',
        {
          y: 16,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.7,
        },
        '+=0.15',
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
    <section ref={containerRef} id="corporate" className="frame">
      <div className="mx-auto w-full max-w-2xl">
        <h2
          data-animate="headline"
          className="font-display text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.12] tracking-[-0.02em]"
        >
          So I tested the limits.
        </h2>

        {/* Roles — flat, monospace, indifferent */}
        <div className="mt-10 grid gap-3 md:mt-12">
          {roles.map((r) => (
            <div
              key={r.company}
              data-animate="role"
              className="flex items-baseline gap-3"
            >
              <span className="shrink-0 font-mono text-sm tracking-wide text-text-muted">
                {r.company}
              </span>
              <span className="h-px flex-1 bg-border" />
              <span className="text-text-secondary">
                {r.work}
              </span>
            </div>
          ))}
        </div>

        {/* Lessons */}
        <div data-animate="lessons" className="mt-10 md:mt-12">
          <p className="text-text-secondary">
            I learned two things:
          </p>
          <ol className="mt-4 space-y-2 pl-5 list-decimal marker:text-text-muted">
            <li className="text-text-secondary pl-1">
              I really hate the word{' '}
              <span className="font-mono text-[0.9em] text-secondary">
                &ldquo;synergy.&rdquo;
              </span>
            </li>
            <li className="text-text-secondary pl-1">
              It&rsquo;s not the industry&mdash;it&rsquo;s the complexity of
              the data.
            </li>
          </ol>
        </div>

        <p
          data-animate="closing"
          className="mt-10 font-display text-xl italic leading-snug tracking-[-0.01em] md:mt-12 md:text-2xl"
        >
          <span className="text-text-secondary">
            Whether it&rsquo;s forecasting supermarket demand or building
            portfolio optimization models,
          </span>{' '}
          I just want the math to be hard.
        </p>
      </div>
    </section>
  )
}
