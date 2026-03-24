import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

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
          y: 16,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.7,
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

        <div
          data-animate="feature"
          className="mx-auto mt-8 max-w-md overflow-hidden rounded-lg border border-border md:mt-10"
        >
          <img
            src="/finance.png"
            alt="Personal finance dashboard — double-entry bookkeeping, reconciliation, P&L reports"
            className="w-full"
          />
          <p className="py-2 text-center font-mono text-xs italic text-text-muted">
            (yes, this actually is a terminal — and no, these are definitely not my actual finances)
          </p>
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
