import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export function Reality() {
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

      // Gentler animation — less blur, less travel, slower
      tl.from('[data-animate="paragraph"]', {
        y: 14,
        opacity: 0,
        filter: 'blur(3px)',
        duration: 0.8,
        stagger: 0.15,
      })

      tl.from(
        '[data-animate="clarity"]',
        {
          y: 12,
          opacity: 0,
          filter: 'blur(3px)',
          duration: 0.9,
        },
        '-=0.25',
      )

      tl.from(
        '[data-animate="closing"]',
        {
          y: 10,
          opacity: 0,
          filter: 'blur(2px)',
          duration: 0.7,
        },
        '-=0.2',
      )
    },
    { scope: containerRef },
  )

  return (
    <section ref={containerRef} id="reality" className="frame">
      <div className="mx-auto w-full max-w-lg">
        <div className="space-y-6">
          <p data-animate="paragraph" className="text-text-secondary">
            Look, I&rsquo;m not going to pretend I have it all figured out.
          </p>

          <p data-animate="paragraph" className="text-text-secondary">
            I&rsquo;m still learning. Still making mistakes. Still spending too
            much time debugging things that shouldn&rsquo;t be broken.
          </p>

          <p data-animate="paragraph" className="text-text-secondary">
            But I&rsquo;ve built enough things that work to know I can figure
            out the next one.
          </p>

          <p data-animate="paragraph" className="text-text-secondary">
            And I care whether it helps. Not &ldquo;disruption&rdquo; for
            LinkedIn posts. Not &ldquo;innovation&rdquo; for investor decks.
          </p>
        </div>

        {/* The single moment of clarity */}
        <p
          data-animate="clarity"
          className="mt-8 text-text-primary md:mt-10"
        >
          Just: does this solve a real problem? Does it make someone&rsquo;s
          work better?
        </p>

        <p
          data-animate="closing"
          className="mt-6 text-text-secondary"
        >
          If the answer is no, I probably shouldn&rsquo;t be working on it.
        </p>
      </div>
    </section>
  )
}
