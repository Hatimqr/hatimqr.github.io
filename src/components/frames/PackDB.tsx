import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export function PackDB() {
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

      tl.from(
        '[data-animate="detail"]',
        {
          y: 14,
          opacity: 0,
          filter: 'blur(3px)',
          duration: 0.6,
          stagger: 0.08,
        },
        '-=0.2',
      )

      tl.from(
        '[data-animate="code"]',
        {
          y: 16,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.7,
        },
        '-=0.15',
      )

      // The emotional landing — pause, then two beats
      tl.from(
        '[data-animate="hurts"]',
        {
          y: 14,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.7,
        },
        '+=0.2',
      )

      tl.from(
        '[data-animate="love"]',
        {
          y: 10,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.8,
        },
        '+=0.15',
      )
    },
    { scope: containerRef },
  )

  return (
    <section ref={containerRef} id="packdb" className="frame">
      <div className="mx-auto w-full max-w-2xl">
        {/* Temporal signal */}
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
          PackDB: Making databases solve impossible problems.
        </h2>

        <div className="mt-8 space-y-5 md:mt-10">
          <p data-animate="paragraph" className="text-text-secondary">
            Right now I&rsquo;m extending{' '}
            <span className="font-mono text-[0.9em] text-secondary">
              DuckDB
            </span>{' '}
            to handle package queries&mdash;the &ldquo;give me the best
            combination of X items that satisfy these constraints&rdquo;
            problem.
          </p>

          <p data-animate="paragraph" className="text-text-secondary">
            It&rsquo;s{' '}
            <span className="font-mono text-[0.9em] text-secondary">
              NP-hard
            </span>
            , which is computer science speak for &ldquo;there&rsquo;s no
            perfect algorithm and you&rsquo;re going to suffer.&rdquo;
          </p>
        </div>

        {/* Technical details — compact, stacking */}
        <div className="mt-8 grid gap-2.5 md:mt-10">
          <p data-animate="detail" className="flex items-baseline gap-3">
            <span className="shrink-0 font-mono text-sm text-secondary">
              ILP
            </span>
            <span className="text-text-secondary">
              Solvers integrated directly into SQL
            </span>
          </p>
          <p data-animate="detail" className="flex items-baseline gap-3">
            <span className="shrink-0 font-mono text-sm text-secondary">
              PaQL
            </span>
            <span className="text-text-secondary">
              New query syntax for package semantics
            </span>
          </p>
          <p data-animate="detail" className="flex items-baseline gap-3">
            <span className="shrink-0 font-mono text-sm text-secondary">
              Approx
            </span>
            <span className="text-text-secondary">
              Because exact solutions outlast the heat death of the universe
            </span>
          </p>
        </div>

        {/* PaQL code block */}
        <div
          data-animate="code"
          className="mt-8 overflow-hidden rounded-lg border border-border bg-[#0a0c10] md:mt-10"
        >
          {/* Editor top bar */}
          <div className="flex items-center bg-surface/50 px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57] opacity-50" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e] opacity-50" />
              <span className="h-2 w-2 rounded-full bg-[#28c840] opacity-50" />
            </div>
            <span className="ml-auto font-mono text-xs text-text-muted">
              query.sql
            </span>
          </div>
          {/* Code area */}
          <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed">
            <code>
              <span className="text-secondary">select</span>
              <span className="text-text-secondary">{' * '}</span>
              <span className="text-[#4ade80]">decide</span>
              <span className="text-text-secondary">{' new_hours('}</span>
              <span className="text-secondary">INT</span>
              <span className="text-text-secondary">{')'}</span>
              {'\n'}
              <span className="text-secondary">from</span>
              <span className="text-text-secondary">{' Employees E '}</span>
              <span className="text-secondary">join</span>
              <span className="text-text-secondary">{' WeeklyPlan P '}</span>
              <span className="text-secondary">on</span>
              <span className="text-text-secondary">{' E.empID = P.empID'}</span>
              {'\n'}
              <span className="text-[#4ade80]">such that</span>
              {'\n'}
              <span className="text-text-secondary">{'  sum(new_hours) <= '}</span>
              <span className="text-accent">40</span>
              <span className="text-text-secondary"> </span>
              <span className="text-[#4ade80]">per</span>
              <span className="text-text-secondary">{' P.empID '}</span>
              <span className="text-secondary">and</span>
              {'\n'}
              <span className="text-text-secondary">{'  sum(new_hours) <= '}</span>
              <span className="text-accent">30</span>
              <span className="text-text-secondary"> </span>
              <span className="text-[#4ade80]">when</span>
              <span className="text-text-secondary">{" E.title = "}</span>
              <span className="text-accent">{"'Director'"}</span>
              {'\n'}
              <span className="text-text-secondary">{'    '}</span>
              <span className="text-[#4ade80]">per</span>
              <span className="text-text-secondary">{' P.empID'}</span>
              {'\n'}
              <span className="text-[#4ade80]">minimize</span>
              <span className="text-text-secondary">{' sum(abs(new_hours \u2212 hours) '}</span>
              <span className="text-[#4ade80]">per</span>
              <span className="text-text-secondary">{' projectID);'}</span>
            </code>
          </pre>
        </div>

        {/* The emotional landing */}
        <p
          data-animate="hurts"
          className="mt-10 text-text-secondary md:mt-12"
        >
          It&rsquo;s open source. It&rsquo;s my capstone. It hurts a little.
        </p>

        <p
          data-animate="love"
          className="mt-4 font-display text-2xl italic tracking-[-0.01em] text-accent md:text-3xl"
        >
          I love it.
        </p>
      </div>
    </section>
  )
}
