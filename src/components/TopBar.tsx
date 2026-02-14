import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export function TopBar() {
  const barRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.set(barRef.current, { opacity: 0 })

    gsap.to(barRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#origin',
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
    })
  })

  return (
    <nav
      ref={barRef}
      className="fixed top-0 left-0 right-0 z-40 border-b border-border/30 bg-bg/70 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2.5">
        <div className="font-mono text-xs leading-relaxed">
          <span className="text-accent">Hatim Rehmanjee</span>
          <br />
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
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1">
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
