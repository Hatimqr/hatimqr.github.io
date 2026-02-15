import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

const features = [
  { flag: '--ledger', desc: 'Double-entry bookkeeping' },
  { flag: '--reconcile', desc: 'Automated reconciliation' },
  { flag: '--report', desc: 'P&L and balance sheet generation' },
  { flag: '--local', desc: 'SQLite on my machine. No cloud.' },
]

export function NerdOne() {
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
        '[data-animate="desc"]',
        {
          y: 18,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.7,
        },
        '-=0.35',
      )

      tl.from(
        '[data-animate="feature"]',
        {
          y: 12,
          opacity: 0,
          filter: 'blur(3px)',
          duration: 0.5,
          stagger: 0.08,
        },
        '-=0.2',
      )

      // "Overkill?" — extra breathing room
      tl.from(
        '[data-animate="shrug"]',
        {
          y: 14,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.7,
        },
        '+=0.2',
      )

      tl.from(
        '[data-animate="closing"]',
        {
          y: 14,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.7,
        },
        '-=0.25',
      )
    },
    { scope: containerRef },
  )

  return (
    <section ref={containerRef} id="nerd-one" className="frame">
      <div className="mx-auto w-full max-w-2xl">
        <h2
          data-animate="headline"
          className="font-display text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.12] tracking-[-0.02em]"
        >
          Nobody has ever ruined a terminal.
        </h2>

        <p data-animate="desc" className="mt-8 text-text-secondary md:mt-10">
          GUIs get redesigned every few years. Sometimes for the
          worse (Windows&nbsp;8). So when I needed a
          personal finance tool, I built a terminal application in Python.
        </p>

        {/* Feature list — tight, structured, CLI-flavored */}
        <div className="mt-8 rounded-lg border border-border bg-bg-elevated p-5 md:mt-10 md:p-6">
          <div className="grid gap-2.5">
            {features.map((f) => (
              <div
                key={f.flag}
                data-animate="feature"
                className="flex items-baseline gap-3"
              >
                <span className="shrink-0 font-mono text-sm text-secondary">
                  {f.flag}
                </span>
                <span className="text-text-secondary">
                  {f.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* The shrug */}
        <p
          data-animate="shrug"
          className="mt-12 font-display text-2xl italic tracking-[-0.01em] md:mt-16 md:text-3xl"
        >
          Overkill? Absolutely.
        </p>

        <p
          data-animate="closing"
          className="mt-8 text-text-secondary md:mt-10"
        >
          The backend is{' '}
          <span className="font-mono text-[0.9em] text-secondary">Python</span>
          . The end goal is a PS5 racing rig. The finance app is just
          infrastructure.
        </p>
      </div>
    </section>
  )
}
