import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export function NerdTwo() {
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

      // The aside — extra delay, the mic-drop needs room
      tl.from(
        '[data-animate="aside"]',
        {
          y: 10,
          opacity: 0,
          filter: 'blur(3px)',
          duration: 0.8,
        },
        '+=0.25',
      )

      tl.from(
        '[data-animate="viz"]',
        {
          y: 16,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.7,
        },
        '-=0.3',
      )
    },
    { scope: containerRef },
  )

  return (
    <section ref={containerRef} id="nerd-two" className="frame">
      <div className="mx-auto w-full max-w-2xl">
        <h2
          data-animate="headline"
          className="font-display text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.12] tracking-[-0.02em]"
        >
          I also over-analyze my hobbies.
        </h2>

        <div className="mt-8 space-y-5 md:mt-10">
          <p data-animate="paragraph" className="text-text-secondary">
            Remember the PS5 racing rig? I needed to get faster. So I built a
            real-time telemetry dashboard that parses live{' '}
            <span className="font-mono text-[0.9em] text-secondary">UDP</span>{' '}
            data from the console at{' '}
            <span className="font-mono text-[0.9em] text-secondary">20Hz</span>
            .
          </p>

          <p data-animate="paragraph" className="text-text-secondary">
            Speed, throttle, brake, steering&mdash;all plotted in a sliding{' '}
            <span className="font-mono text-[0.9em] text-secondary">
              &plusmn;300m
            </span>{' '}
            window, overlaid against my best lap. A live{' '}
            <span className="font-mono text-[0.9em] text-secondary">
              delta
            </span>{' '}
            trace shows exactly where I&rsquo;m gaining or losing time. It flags
            lock-ups and oversteer by reading{' '}
            <span className="font-mono text-[0.9em] text-secondary">
              wheel slip
            </span>{' '}
            data in real time.
          </p>
        </div>

        {/* Showcase: aside + telemetry visualization */}
        <div className="mt-10 md:mt-12">
          <div
            data-animate="viz"
            className="mx-auto max-w-md overflow-hidden rounded-lg border border-border"
          >
            <img
              src="/telemetry.png"
              alt="Real-time F1 telemetry dashboard showing speed, delta, throttle, brake, and steering traces"
              className="w-full"
            />
            <p
              data-animate="aside"
              className="py-2 text-center font-mono text-xs italic text-text-muted"
            >
              (top 8% globally at Spa and Suzuka — the dashboard helped)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
