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

      // Gentle — continues Reality's restraint
      tl.from('[data-animate="headline"]', {
        y: 20,
        opacity: 0,
        filter: 'blur(4px)',
        duration: 0.9,
      })

      tl.from(
        '[data-animate="context"]',
        {
          y: 14,
          opacity: 0,
          filter: 'blur(3px)',
          duration: 0.7,
        },
        '-=0.3',
      )

      // Footer resolves in quietly
      tl.from(
        '[data-animate="footer"]',
        {
          y: 12,
          opacity: 0,
          duration: 0.6,
          stagger: 0.06,
        },
        '-=0.1',
      )
    },
    { scope: containerRef },
  )

  return (
    <section ref={containerRef} id="closing" className="frame">
      <div className="mx-auto w-full max-w-4xl">
        <p
          data-animate="headline"
          className="font-display text-[clamp(1.75rem,4vw,2.75rem)] italic leading-[1.15] tracking-[-0.02em] text-accent"
        >
          That&rsquo;s the story so far.
        </p>

        <p
          data-animate="context"
          className="mt-6 text-text-secondary md:mt-8"
        >
          I graduate in May 2026. I&rsquo;m looking for the next
          problem that&rsquo;ll keep me up at night.
        </p>
      </div>

      {/* Footer — contact & credentials */}
      <footer className="mx-auto mt-24 w-full max-w-4xl border-t border-border pt-10 md:mt-32 md:pt-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
          {/* Identity + actions */}
          <div className="shrink-0">
            <div data-animate="footer" className="flex items-center gap-5">
              <img
                src="/me.jpg"
                alt="Hatim Rehmanjee"
                className="h-[72px] w-[72px] shrink-0 rounded-lg border border-border object-cover"
              />
              <h3 className="font-display text-2xl tracking-[-0.02em] md:text-3xl">
                Hatim Rehmanjee
              </h3>
            </div>
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
                href="/cv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded border border-accent/50 px-4 py-2 font-mono text-sm text-accent transition-colors duration-300 hover:border-accent hover:bg-accent-subtle"
              >
                View CV
              </a>
              <a
                href="mailto:hrehmanjee@icloud.com"
                className="font-mono text-sm text-text-secondary transition-colors duration-300 hover:text-accent-hover"
              >
                hrehmanjee@icloud.com
              </a>
              <a
                href="https://linkedin.com/in/hatimrehmanjee"
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
                Building PackDB and studying LLM reasoning.
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
