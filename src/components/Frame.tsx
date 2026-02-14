import type { ReactNode } from 'react'

interface FrameProps {
  id: string
  children: ReactNode
  className?: string
}

/**
 * A full-viewport scroll section. Each narrative "frame" is one of these.
 */
export function Frame({ id, children, className = '' }: FrameProps) {
  return (
    <section
      id={id}
      className={`frame ${className}`}
    >
      <div className="mx-auto w-full max-w-3xl">
        {children}
      </div>
    </section>
  )
}
