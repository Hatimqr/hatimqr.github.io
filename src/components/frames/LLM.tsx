import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export function LLM() {
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

      tl.from('[data-animate="label"]', {
        y: 12,
        opacity: 0,
        duration: 0.5,
      })

      tl.from(
        '[data-animate="headline"]',
        {
          y: 28,
          opacity: 0,
          filter: 'blur(6px)',
          duration: 0.9,
        },
        '-=0.2',
      )

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

      // The distinction — the sole focus
      tl.from(
        '[data-animate="distinction"]',
        {
          y: 16,
          opacity: 0,
          filter: 'blur(5px)',
          duration: 0.8,
        },
        '+=0.15',
      )

      tl.from(
        '[data-animate="landing"]',
        {
          y: 10,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.7,
        },
        '+=0.2',
      )
    },
    { scope: containerRef },
  )

  return (
    <section ref={containerRef} id="llm" className="frame">
      <div className="mx-auto w-full max-w-2xl">
        {/* Paired temporal signal — matches Frame 8 */}
        <p
          data-animate="label"
          className="font-mono text-xs tracking-[0.15em] uppercase text-text-muted"
        >
          Current work
        </p>

        <h2
          data-animate="headline"
          className="mt-4 font-display text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.12] tracking-[-0.02em]"
        >
          Reasoning in Large Language Models.
        </h2>

        <div className="mt-8 space-y-5 md:mt-10">
          <p data-animate="paragraph" className="text-text-secondary">
            Independent research with Prof. Saurabh Ray investigating
            reinforcement learning approaches to improve LLM reasoning
            capabilities.
          </p>

          <p data-animate="paragraph" className="text-text-secondary">
            Started with{' '}
            <span className="font-mono text-[0.9em] text-secondary">
              RLHF
            </span>{' '}
            fundamentals. Now exploring whether these techniques could help with
            formal theorem proving in{' '}
            <span className="font-mono text-[0.9em] text-secondary">
              Lean
            </span>
            .
          </p>
        </div>

        {/* The distinction — everything above is setup for this */}
        <p
          data-animate="distinction"
          className="mt-10 text-lg text-text-secondary md:mt-12 md:text-xl"
        >
          The goal isn&rsquo;t making models{' '}
          <em className="text-text-muted">sound</em> smart. It&rsquo;s making
          them{' '}
          <span className="font-display italic text-text-primary">
            actually be right
          </span>
          .
        </p>

        <p
          data-animate="landing"
          className="mt-6 font-display text-xl italic tracking-[-0.01em] md:text-2xl"
        >
          There&rsquo;s a difference. A big one.
        </p>
      </div>
    </section>
  )
}
