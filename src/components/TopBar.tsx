import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export function TopBar() {
  const headerRef = useRef<HTMLElement>(null)
  const nameRef = useRef<HTMLSpanElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Entrance animation — name + equation fade in before the headline
    gsap.from(headerRef.current, {
      opacity: 0,
      duration: 0.6,
      delay: 0.1,
      ease: 'power2.out',
    })

    // Scroll-driven shrink: large hero → compact bar
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#hook',
        start: 'top top',
        end: '35% top',
        scrub: 0.3,
      },
    })

    // Name shrinks to match equation
    tl.to(
      nameRef.current,
      { fontSize: '1.1rem', duration: 1 },
      0,
    )

    // Padding compresses
    tl.to(
      '[data-header-inner]',
      { paddingTop: '0.625rem', paddingBottom: '0.625rem', duration: 1 },
      0,
    )

    // Background solidifies
    tl.to(
      '[data-header-bg]',
      { opacity: 1, duration: 1 },
      0,
    )

    // Contact info fades in during second half
    tl.to(
      contactRef.current,
      { opacity: 1, duration: 0.5 },
      0.5,
    )

    // Hide header when footer is visible
    gsap.to(headerRef.current, {
      opacity: 0,
      pointerEvents: 'none',
      duration: 0.3,
      scrollTrigger: {
        trigger: '#closing footer',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })
  })

  return (
    <nav
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-40"
    >
      {/* Background layer — starts transparent, solidifies on scroll */}
      <div
        data-header-bg
        className="absolute inset-0 border-b border-border/30 bg-bg/70 backdrop-blur-md"
        style={{ opacity: 0 }}
      />

      <div
        data-header-inner
        className="relative mx-auto flex max-w-5xl items-center justify-between px-4"
        style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}
      >
        <div className="font-mono leading-relaxed">
          <span
            ref={nameRef}
            className="font-display text-accent"
            style={{ fontSize: '2rem' }}
          >
            Hatim Rehmanjee
          </span>
          <br />
          <span data-header-equation style={{ fontSize: '0.75rem' }}>
          <span className="text-text-muted">= </span>
          <span className="text-text-muted">(</span>
          <span className="text-text-secondary">CS</span>
          <span className="text-text-muted"> + </span>
          <span className="text-text-secondary">Math</span>
          <span className="text-text-muted"> + </span>
          <span className="text-text-secondary">Econ</span>
          <span className="text-text-muted">)</span>
          <span className="text-secondary">@NYU</span>
          <span className="text-text-muted"> + (</span>
          <span className="text-text-secondary">KPMG</span>
          <span className="text-text-muted"> + </span>
          <span className="text-text-secondary">PwC</span>
          <span className="text-text-muted"> + </span>
          <span className="text-text-secondary">Acuity</span>
          <span className="text-text-muted"> + </span>
          <span className="text-text-secondary">OCTAVE</span>
          <span className="text-text-muted">)</span>
          <span className="text-secondary">@Work</span>
          <span className="text-text-muted"> + (</span>
          <span className="text-text-secondary">Database Optimization</span>
          <span className="text-text-muted"> + </span>
          <span className="text-text-secondary">Liquidity</span>
          <span className="text-text-muted"> + </span>
          <span className="text-text-secondary">LLMs</span>
          <span className="text-text-muted">)</span>
          <span className="text-secondary">@Research</span>
          </span>
        </div>

        <div
          ref={contactRef}
          className="flex shrink-0 flex-col items-end gap-1"
          style={{ opacity: 0 }}
        >
          <a
            href="mailto:hrehmanjee@icloud.com"
            className="font-mono text-xs text-text-muted transition-colors duration-300 hover:text-text-secondary"
          >
            hrehmanjee@icloud.com
          </a>
          <a
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-accent/70 transition-colors duration-300 hover:text-accent"
          >
            CV
          </a>
        </div>
      </div>
    </nav>
  )
}
