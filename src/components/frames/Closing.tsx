import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export function Closing() {
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

      // CTA — Frame 1-level presence
      tl.from('[data-animate="headline"]', {
        y: 32,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 1,
      })

      tl.from(
        '[data-animate="context"]',
        {
          y: 18,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.7,
        },
        '-=0.4',
      )

      tl.from(
        '[data-animate="condition"]',
        {
          y: 20,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.7,
          stagger: 0.15,
        },
        '-=0.2',
      )

      // "Let's talk." — the final copper beat
      tl.from(
        '[data-animate="ask"]',
        {
          y: 16,
          opacity: 0,
          filter: 'blur(6px)',
          duration: 0.9,
        },
        '+=0.2',
      )

      // Footer info resolves in after the ask
      tl.from(
        '[data-animate="footer"]',
        {
          y: 12,
          opacity: 0,
          duration: 0.6,
          stagger: 0.06,
        },
        '-=0.3',
      )
    },
    { scope: containerRef },
  )

  return (
    <section ref={containerRef} id="closing" className="frame !min-h-0">
      {/* CTA — full viewport statement */}
      <div className="mx-auto w-full max-w-4xl">
        <h2
          data-animate="headline"
          className="font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.08] tracking-[-0.03em] text-accent"
        >
          I want your hardest problems.
        </h2>

        <p
          data-animate="context"
          className="mt-6 text-text-secondary md:mt-8"
        >
          I&rsquo;m graduating May 2026.
        </p>

        <div className="mt-8 space-y-4 md:mt-10">
          <p data-animate="condition" className="text-text-secondary">
            If you have a complex dataset, a messy pipeline, or a problem that
            scares your current team&mdash;
          </p>
          <p data-animate="condition" className="text-text-primary/80">
            If you need someone who can move between business context and
            technical implementation without getting lost in either&mdash;
          </p>
          <p data-animate="condition" className="text-text-primary">
            If you&rsquo;re working on something where the solution isn&rsquo;t
            obvious and the stakes actually matter&mdash;
          </p>
        </div>

        <p
          data-animate="ask"
          className="mt-10 font-display text-[clamp(1.75rem,4vw,3rem)] italic tracking-[-0.02em] text-accent md:mt-14"
        >
          Let&rsquo;s talk.
        </p>
      </div>

      {/* Footer — contact & credentials */}
      <footer className="mx-auto mt-24 w-full max-w-4xl border-t border-border pt-10 md:mt-32 md:pt-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
          {/* Identity + actions */}
          <div className="shrink-0">
            <h3
              data-animate="footer"
              className="font-display text-2xl tracking-[-0.02em] md:text-3xl"
            >
              Hatim Rehmanjee
            </h3>
            <p
              data-animate="footer"
              className="mt-2 text-sm text-text-secondary"
            >
              CS @ NYU Abu Dhabi&ensp;|&ensp;3.95 GPA&ensp;|&ensp;100%
              Scholarship
            </p>

            <div
              data-animate="footer"
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3"
            >
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 rounded border border-accent/50 px-4 py-2 font-mono text-sm text-accent transition-colors duration-300 hover:border-accent hover:bg-accent-subtle"
              >
                Download CV
                <span className="text-text-muted">.pdf</span>
              </a>
              <a
                href="mailto:hrehmanjee@icloud.com"
                className="font-mono text-sm text-text-secondary transition-colors duration-300 hover:text-accent-hover"
              >
                hrehmanjee@icloud.com
              </a>
              <a
                href="https://linkedin.com/in/hatimqr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-text-muted transition-colors duration-300 hover:text-text-secondary"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/hatimqr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-text-muted transition-colors duration-300 hover:text-text-secondary"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Metadata */}
          <div className="grid gap-6 text-sm sm:grid-cols-3 md:gap-10">
            <div data-animate="footer">
              <p className="font-mono text-xs tracking-[0.1em] uppercase text-text-muted">
                Currently
              </p>
              <p className="mt-1.5 text-text-secondary">
                Building PackDB and researching LLM reasoning.
              </p>
            </div>
            <div data-animate="footer">
              <p className="font-mono text-xs tracking-[0.1em] uppercase text-text-muted">
                Previously
              </p>
              <p className="mt-1.5 text-text-secondary">
                OCTAVE, Acuity, KPMG, PwC.
              </p>
            </div>
            <div data-animate="footer">
              <p className="font-mono text-xs tracking-[0.1em] uppercase text-text-muted">
                Languages
              </p>
              <p className="mt-1.5 text-text-secondary">
                English, Gujarati, Sinhala
              </p>
              <p className="mt-0.5 text-text-muted">
                Hindi, Urdu, French
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
