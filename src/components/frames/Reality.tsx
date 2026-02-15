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

      tl.from('[data-animate="headline"]', {
        y: 20,
        opacity: 0,
        filter: 'blur(4px)',
        duration: 0.9,
      })

      // Gentler animation — less blur, less travel, slower
      tl.from(
        '[data-animate="paragraph"]',
        {
          y: 14,
          opacity: 0,
          filter: 'blur(3px)',
          duration: 0.8,
          stagger: 0.15,
        },
        '-=0.3',
      )

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

    },
    { scope: containerRef },
  )

  return (
    <section ref={containerRef} id="reality" className="frame">
      <div className="mx-auto w-full max-w-lg">
        <h2
          data-animate="headline"
          className="font-display text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.2] tracking-[-0.02em] text-text-secondary"
        >
          Look, I&rsquo;m not going to pretend I have it all figured out.
        </h2>

        <div className="mt-8 space-y-6 md:mt-10">
          <p data-animate="paragraph" className="text-text-secondary">
            I&rsquo;m still learning. Still making mistakes. Still spending too
            much time debugging things that shouldn&rsquo;t be broken.
          </p>

          <p data-animate="paragraph" className="text-text-secondary">
            But I&rsquo;ve built enough things that work to know I can figure
            out the next one.
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
      </div>
    </section>
  )
}
