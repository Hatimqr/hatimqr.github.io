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
        '[data-animate="curriculum"]',
        {
          y: 14,
          opacity: 0,
          filter: 'blur(3px)',
          duration: 0.7,
        },
        '-=0.2',
      )

      // The punch — needs room to land
      tl.from(
        '[data-animate="punch"]',
        {
          y: 14,
          opacity: 0,
          filter: 'blur(5px)',
          duration: 0.8,
        },
        '+=0.2',
      )

      tl.from(
        '[data-animate="landing"]',
        {
          y: 10,
          opacity: 0,
          filter: 'blur(3px)',
          duration: 0.7,
        },
        '+=0.15',
      )
    },
    { scope: containerRef },
  )

  return (
    <section ref={containerRef} id="llm" className="frame">
      <div className="mx-auto w-full max-w-2xl">
        {/* Paired temporal signal — matches PackDB */}
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
          I created the hardest class I&rsquo;ve taken at university.
        </h2>

        <p
          data-animate="desc"
          className="mt-8 text-text-secondary md:mt-10"
        >
          A friend and I went to one of our professors and asked to do
          a directed study on reasoning in LLMs. We proposed the
          syllabus. We take turns every week presenting the topics to
          each other, supervised by a professor. We cover:
        </p>

        {/* Curriculum — single block, all topics */}
        <div
          data-animate="curriculum"
          className="mt-5 rounded-lg border border-border bg-bg-elevated p-5 md:p-6"
        >
          <p className="font-mono text-sm leading-relaxed text-text-secondary">
            Transformer architecture &middot; Mechanistic
            interpretability &middot; DQNs &middot; Policy
            gradients &middot; RLHF &middot; DPO &middot; Chain of
            thought &middot; Tree of thought &middot; DeepSeek
            R1 &middot; PAL &middot; Lean
          </p>
        </div>

        {/* The punch — isolated, given room */}
        <p
          data-animate="punch"
          className="mt-10 text-lg text-text-secondary md:mt-12 md:text-xl"
        >
          And honestly? An AI tool helped me build this website.
          It&rsquo;s the single most useful thing I&rsquo;ve ever
          worked with. It surprises me. It teaches me. I want to
          know{' '}
          <span className="font-display text-[1.1em] italic text-text-primary">
            how on earth it does what it does
          </span>
          .
        </p>

        <p
          data-animate="landing"
          className="mt-6 font-display text-xl italic tracking-[-0.01em] md:text-2xl"
        >
          If I&rsquo;m going to use it every day, I should probably
          understand it.
        </p>
      </div>
    </section>
  )
}
