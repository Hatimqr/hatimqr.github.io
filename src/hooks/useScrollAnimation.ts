import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'

interface ScrollAnimationOptions {
  start?: string
  end?: string
  scrub?: boolean | number
  pin?: boolean
  markers?: boolean
}

/**
 * Hook for common scroll-triggered entrance animations.
 * Attach `containerRef` to the wrapping element and `triggerRef` to the trigger element.
 */
export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const {
    start = 'top 80%',
    end = 'bottom 20%',
    scrub = false,
    pin = false,
    markers = false,
  } = options

  useGSAP(
    () => {
      if (!containerRef.current) return

      const trigger = triggerRef.current ?? containerRef.current

      ScrollTrigger.create({
        trigger,
        start,
        end,
        scrub,
        pin,
        markers,
      })
    },
    { scope: containerRef },
  )

  return { containerRef, triggerRef, gsap, ScrollTrigger }
}
