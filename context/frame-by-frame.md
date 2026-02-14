# Frame-by-Frame Build Guide

## Frame 1: The Hook — BUILT

**Content:**
"I'm drawn to problems that hurt a little.
The kind where the obvious approach breaks, the solution is hidden, and most reasonable people would just close the laptop."

**Type:** Statement Frame
**Design:** Wide max-width (max-w-4xl). Headline in Instrument Serif, copper accent. Subtext in DM Sans, secondary gray. Maximum negative space. Scroll cue at bottom.
**Animation:** Page-load timeline (0.3s delay). Headline focus-pulls from blur(8px) + y:32 over 1.0s. Subtext follows at -0.5s offset. Scroll cue fades last.

---

## Frame 2: The Origin Story — BUILT

**Content:**
"It started with my dad's spreadsheet.
Winter break, first year. He spent an hour every week doing the same calculations. I'd just learned Python.
Automated it in a weekend. Not because I was good yet—because I couldn't stand watching him do it manually.
That's when I realized: the best problems aren't the cleverest ones. They're the ones that save someone an hour of their life."

**Type:** Narrative Frame
**Design:** Narrower max-width (max-w-2xl) — viewport closes in for intimacy. Headline in Instrument Serif, warm white (NOT copper — signals shift from statement to story). Thin 64px rule draws in at top to mark the transition. Closing realization in italic Instrument Serif with copper-tinted left border — the emotional punchline, visually distinct from narration.
**Animation:** ScrollTrigger at top 70%. Headline → paragraphs (stagger 0.12s) → closing quote → rule scaleX draws left-to-right.

---

## Frame 3: The Pattern Emerges — BUILT

**Content:**
"Then I kept finding them.
Bank reconciliations at a community finance office? Automated in five minutes. Days of work done before lunch.
Customer analysis at OCTAVE in Colombo? Built it independently, handed it in, moved on.
Weeks later, a client told my manager my report actually helped them make a decision. Not 'looked professional.' Not 'was thorough.' Helped.
I wasn't chasing impressive titles. I was chasing that feeling—building something someone actually uses."

**Type:** Narrative Frame (with evidence accumulation)
**Design:** Same max-w-2xl. Two examples as left-bordered evidence blocks with monospace location labels — they look like log entries accumulating. Third block escalates: border shifts from gray to copper accent. "Helped." is the only copper word in the frame — single-word accent, maximum impact. Closing line in plain secondary text, no decoration.
**Animation:** ScrollTrigger at top 70%. Headline → evidence blocks stagger at 0.18s (wider gap so each registers) → extra 0.1s pause before "Helped." beat → closing fades in.

---

## Frame 4: The Corporate Tour

**Content:**
"So I tested the limits.
M&A feasibility at KPMG. Supply chain optimization at OCTAVE. Quantitative trading strategies at Acuity. Economics research processing 8TB of German Stock Exchange data.
I learned two things:
1. I really hate the word 'synergy.'
2. It's not the industry—it's the complexity of the data.
Whether it's forecasting supermarket demand or building portfolio optimization models, I just want the math to be hard."

**Type:** Evidence Frame
**Design:** The companies are NOT styled to look impressive — they're listed flat, monospace, matter-of-fact. Like evidence in an argument, not a brag sheet. The indifference to making them look corporate IS the subversion. The numbered list carries the dry humor — "synergy" could be in mono/secondary to feel like a dirty word being quarantined. Closing line is the thesis: "I just want the math to be hard" gets slight emphasis (primary white, or italic serif) as a callback to the "problems that hurt" thread.
**Animation:** ScrollTrigger. Headline → company items stagger in quickly (0.1s, rapid accumulation — he moved fast through these) → numbered list with a beat → closing.

---

## Frame 5: The Nerd Stuff (Part 1)

**Content:**
"I don't trust GUIs.
So I built a terminal-based personal finance planner in Python. Double-entry bookkeeping, automated reconciliation, P&L and balance sheet generation—all from the command line.
Overkill? Absolutely.
But now my financial data lives in SQLite on my machine, not in some company's cloud getting scraped for ad targeting."

**Type:** Showcase Frame
**Design:** The obsessiveness comes through in layout structure, not decorative terminal aesthetics. No green-on-black cliches. Instead: tighter spacing, denser text, a slightly more compact layout that mirrors CLI efficiency. The feature list (double-entry, reconciliation, P&L, balance sheet) could be rendered as tight, monospace-labeled items — structured like a --help output without literally being one. "Overkill? Absolutely." MUST have breathing room — it's a standalone beat, a shrug. Isolate it with generous margin. Let the silence around it do the work.
**Animation:** ScrollTrigger. Headline → description → feature items stagger → "Overkill?" beat (with slight extra delay) → closing justification.

---

## Frame 6: The Nerd Stuff (Part 2)

**Content:**
"I also over-analyze my hobbies.
Scraped 1,000+ F1 car setups and lap times across 24 tracks. Applied PCA and K-Means clustering to identify 'setup philosophies.'
Built Random Forest models to quantify setup parameter sensitivity. Calculated exact lap time deltas per adjustment.
Because why just watch the race when you can prove whether front wing angle actually matters as much as the commentators claim it does?
(It does, but only at specific tracks. See? Told you.)"

**Type:** Showcase Frame
**Design:** NO racing imagery or abstracted F1 visuals — that would look like clip art on a site this refined. The technical terms ARE the texture: PCA, K-Means, Random Forest, lap time deltas. They're already impressive; let them sit in the prose. The parenthetical "(It does, but only at specific tracks. See? Told you.)" is the best line on the site — give it its own visual space. Render it as an aside: slightly indented, italic, maybe in a slightly smaller size or with a different text color. It should feel like a whispered addendum, the kind of thing said while walking away.
**Animation:** ScrollTrigger. Headline → technical paragraphs stagger → rhetorical question → parenthetical aside fades in last with extra delay (the punchline needs room).

---

## Frame 7: The Human Element

**Content:**
"I do touch grass.
National-level rower for Sri Lanka. 2 golds, 1 bronze. Vice-captain of the crew.
The discipline to suffer through a 2km race at maximum heart rate is the same discipline I use to debug SQL queries at 3 AM when the only thing broken is a single misplaced comma.
Oh, and during my gap year I passed the first 9 ACCA exams in 7 months while working full-time at KPMG. Didn't realize you could take study leave—just took the exam days off. Seemed fine at the time.
I'll finish the last 4 eventually. I promise. My whole family's full of accountants—it would be weird not to.
Also: I speak 6 languages. I've studied on 4 continents. I raised $500k for the Student Energy Summit. And I still think metaphysics is underrated.
But sure, the rowing thing sounds more impressive at dinner parties."

**Type:** Evidence Frame (staccato variant)
**Design:** The shift from technical frames should be in DENSITY, not energy. No sports-portfolio aesthetic. Instead: short facts, compact lines, data points. Present human facts with the same precision as technical ones — "2 golds, 1 bronze." "6 languages." "4 continents." "$500k." These could be rendered as tight inline items or a compact fact grid. Same voice, same person, just different data. The connecting paragraph (rowing discipline = debugging discipline) bridges the two worlds.

The ACCA story is a second evidence block after the bridge paragraph — same left-border treatment as rowing. Monospace label: "Gap year, KPMG". The 9-exams-in-7-months fact is the data. "Didn't realize you could take study leave—just took the exam days off. Seemed fine at the time." rendered as a muted aside — same treatment as Frame 6's parenthetical "(It does, but only at specific tracks. See? Told you.)". The family line ("whole family's full of accountants—it would be weird not to") gets its own beat with slightly warmer treatment — it's the only family mention since Frame 2's dad's spreadsheet. That echo matters.

Closing dinner-party line does all the tonal lifting — give it italic serif treatment.
**Animation:** ScrollTrigger. Headline → rowing facts (quick) → bridging paragraph → ACCA block → "seemed fine" aside (with delay) → family line → staccato human facts (rapid stagger) → dinner party closer.

---

## Frame 8: The Current Headache (Part 1)

**Content:**
"PackDB: Making databases solve impossible problems.
Right now I'm extending DuckDB to handle package queries—the 'give me the best combination of X items that satisfy these constraints' problem.
It's NP-hard, which is computer science speak for 'there's no perfect algorithm and you're going to suffer.'
We're integrating ILP solvers directly into SQL. Building new syntax based on the PaQL language. Implementing approximate algorithms because exact solutions take longer than the heat death of the universe.
It's open source. It's my capstone. It hurts a little.
I love it."

**Type:** Showcase Frame (active project)
**Design:** This is the most important technical frame — it's CURRENT, not retrospective. Needs a subtle temporal signal: a small "current" label or indicator in monospace/muted text to distinguish from past work. The content has natural escalation: NP-hard → suffer → heat death → "hurts a little" → "I love it." Those last two lines MUST be isolated. "It hurts a little." as a line, then "I love it." standalone — italic serif, the emotional mirror of Frame 2's closing realization. The arc connects: dad's spreadsheet awakening → "I love building hard things." Technical terms (ILP, PaQL, DuckDB) in secondary/mono treatment.
**Animation:** ScrollTrigger. Project label/headline → description builds → technical details stagger → pause → "It hurts a little." → "I love it." enters last with its own beat.

**Paired with Frame 9:** These two frames share a visual language as a "current work" unit. Consider a subtle shared indicator (e.g., both have the "current" label, matching layout structure).

---

## Frame 9: The Current Headache (Part 2)

**Content:**
"Reasoning in Large Language Models.
Independent research with Prof. Saurabh Ray investigating reinforcement learning approaches to improve LLM reasoning capabilities.
Started with RLHF fundamentals. Now exploring whether these techniques could help with formal theorem proving in Lean.
The goal isn't making models sound smart. It's making them actually be right.
There's a difference. A big one."

**Type:** Showcase Frame (active project)
**Design:** Visually paired with Frame 8 — same layout structure, same "current" indicator. But the energy challenge is real: this follows Frame 8's emotional peak ("I love it."). The design solution: make the "sound smart vs. actually be right" distinction the SOLE visual focus. Everything else is setup. "There's a difference. A big one." should land as hard as "Helped." did in Frame 3 — isolated, emphasized, given room. Consider: "actually be right" in accent or italic serif to create the contrast with "sound smart" visually, not just textually.
**Animation:** ScrollTrigger. Matches Frame 8's rhythm. Project label/headline → research context → the distinction line enters with weight → "A big one." lands last.

---

## Frame 10: The Reality Check

**Content:**
"Look, I'm not going to pretend I have it all figured out.
I'm still learning. Still making mistakes. Still spending too much time debugging things that shouldn't be broken.
But I've built enough things that work to know I can figure out the next one.
And I care whether it helps. Not 'disruption' for LinkedIn posts. Not 'innovation' for investor decks.
Just: does this solve a real problem? Does it make someone's work better?
If the answer is no, I probably shouldn't be working on it."

**Type:** Narrative Frame (stripped)
**Design:** The quietest frame visually. Narrowest max-width, plainest typography, most negative space. After all the proof and escalation, the visual reduction mirrors the honesty. NO accent colors. NO serif flourishes. Just DM Sans in secondary gray throughout. One exception: "does this solve a real problem? Does it make someone's work better?" in primary white — the single moment of clarity in a deliberately muted frame. Everything else recedes.
**Animation:** ScrollTrigger. Gentle, understated. Simpler focus-pull (less blur, less travel). The restraint in animation matches the restraint in design.

---

## Frame 11: The Call to Action

**Content:**
"I want your hardest problems.
I'm graduating May 2026. If you have a complex dataset, a messy pipeline, or a problem that scares your current team—
If you need someone who can move between business context and technical implementation without getting lost in either—
If you're working on something where the solution isn't obvious and the stakes actually matter—
Let's talk."

**Type:** Statement Frame (bookend to Frame 1)
**Design:** Swings back to wide max-width, big serif headline, copper accent — the same visual scale as Frame 1. This creates a deliberate bookend: the site opens with "I'm drawn to problems that hurt" and closes with "I want your hardest problems." Same energy, same confidence. The three "If you..." lines build visually — staggered entrance with increasing presence (opacity, or slight size/weight progression). "Let's talk." is the final copper moment — isolated, definitive. Below it, minimal contact actions (email as primary).
**Animation:** ScrollTrigger. Headline enters with Frame 1-level presence → "If you..." lines stagger with escalating timing → "Let's talk." enters last with a beat.

---

## Frame 12: The Footer

**Content:**
Hatim Rehmanjee
CS @ NYU Abu Dhabi | 3.95 GPA | 100% Scholarship
Abu Dhabi, UAE

[Download CV (PDF)]
[hrehmanjee@icloud.com]
[LinkedIn]
[GitHub]

Currently building PackDB and researching LLM reasoning.
Previously: OCTAVE, Acuity, KPMG, PwC.

Native: English, Gujarati, Sinhala
Conversational: Hindi, Urdu, French

**Type:** Contact Frame
**Design:** NOT full-viewport — 60-70vh, anchored to bottom. Compact grid layout. Name large, credentials as secondary text. Action hierarchy: CV download is most prominent, email second, LinkedIn/GitHub as tertiary. Languages and current work as small metadata blocks. Clean, functional, no gimmicks. Professional but not stiff.
**Animation:** Gentle fade-in on scroll. No elaborate entrance — the information is the point, not the reveal.

---

## Overall Rhythm & Transitions

**Emotional arc:**
1. Opening intensity (Frame 1) — wide, copper, declarative
2. Warming up, getting personal (Frame 2) — narrowing, intimate, story
3. Building momentum (Frame 3) — accumulating evidence
4. Worldly cynicism (Frame 4) — flat, dry, indifferent to impressiveness
5. Playful obsession (Frame 5) — dense, compact, unapologetic
6. Self-aware absurdity (Frame 6) — technical texture, whispered punchline
7. Human precision (Frame 7) — staccato facts, same voice different data
8. Current passion (Frame 8) — alive, escalating, emotional peak
9. Current rigor (Frame 9) — paired with 8, focused on one sharp distinction
10. Honest quiet (Frame 10) — stripped, muted, the most space
11. Confident invitation (Frame 11) — returns to Frame 1's scale, bookend
12. Clean exit (Frame 12) — compact, functional, shorter than full viewport

**Transition principles:**
- Tone shifts are supported by layout changes (width, density, typography)
- No visible dividers between frames except Frame 2's thin rule (marking abstract → personal)
- Accent color (copper) appears only at key moments: Frame 1 headline, Frame 3 "Helped.", Frame 8 "I love it.", Frame 11 "Let's talk." — four beats across the whole site
- Frame heights: most are 100dvh, Frame 12 is 60-70vh. Consider whether Frame 7 (staccato) could be slightly shorter if content doesn't fill the space naturally.
