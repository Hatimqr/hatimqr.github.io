# Frame-by-Frame Build Guide

## Frame 1: The Hook — BUILT

**Content:**
"I'm drawn to problems that hurt a little.
The kind where the obvious approach breaks, the solution is hidden, and most reasonable people would just close the laptop."

**Type:** Statement Frame
**Design:** Wide max-width (max-w-4xl). Headline in Crimson Pro, copper accent. Subtext in DM Sans, secondary gray. Maximum negative space. Scroll cue at bottom.
**Animation:** Page-load timeline (0.3s delay). Headline focus-pulls from blur(8px) + y:32 over 1.0s. Subtext follows at -0.5s offset. Scroll cue fades last.

---

## Frame 2: The Origin Story — BUILT

**Content:**
"It started with my dad's spreadsheet.
Winter break, first year. He spent an hour every week doing the same calculations. I'd just learned Python.
Automated it in a weekend. Not because I was good yet—because I couldn't stand watching him do it manually.
That's when I realized: the best problems aren't the cleverest ones. They're the ones that save someone an hour of their life."

**Type:** Narrative Frame
**Design:** Narrower max-width (max-w-2xl) — viewport closes in for intimacy. Headline in Crimson Pro, warm white (NOT copper — signals shift from statement to story). Thin 64px rule draws in at top to mark the transition. Closing realization in italic Crimson Pro with copper-tinted left border — the emotional punchline, visually distinct from narration.
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

## Frame 4: The Corporate Tour — BUILT

**Content:**
"So I tested the limits.
KPMG — M&A feasibility
PwC — Productivity analysis & AI research
Acuity — Quantitative trading strategies
OCTAVE — Supply chain optimization
NYUAD — 8TB of German Stock Exchange data
I learned two things:
1. I really hate the word 'synergy.'
2. It's not the industry—it's the complexity of the data.
Whether it's forecasting supermarket demand or building portfolio optimization models, I just want the math to be hard."

**Type:** Evidence Frame
**Design:** Companies listed as a flat grid — monospace company name, dotted separator line, work description. Matter-of-fact, not a brag sheet. The indifference to making them look corporate IS the subversion. "synergy" in mono/secondary — quarantined. Closing thesis in italic Crimson Pro with secondary-colored lead-in, primary white for "I just want the math to be hard."
**Animation:** ScrollTrigger. Headline → company items stagger in quickly (0.1s, rapid accumulation — he moved fast through these) → numbered list with a beat → closing.

---

## Frame 5: The Nerd Stuff (Part 1) — BUILT

**Content:**
"Nobody has ever ruined a terminal.
GUIs get redesigned every few years. Sometimes for the worse (Windows 8). So when I needed a personal finance tool, I built a terminal application in Python.
--ledger: Double-entry bookkeeping
--reconcile: Automated reconciliation
--report: P&L and balance sheet generation
--local: SQLite on my machine. No cloud.
Overkill? Absolutely.
The backend is Python, so I can plug in any library I want. Next up: investment analytics—portfolio tracking, return attribution, the works. The end goal is a PS5 racing rig. The finance app is just infrastructure."

**Type:** Showcase Frame
**Design:** Features rendered as CLI flags (--flag → description) inside a bordered, elevated card — structured like --help output. No green-on-black cliches. "Overkill? Absolutely." MUST have breathing room — it's a standalone beat, a shrug. Isolate it with generous margin (mt-12/mt-16). Let the silence around it do the work. Closing reveals the real motivation: PS5 racing rig.
**Animation:** ScrollTrigger. Headline → description → feature items stagger (0.08s, tight) → "Overkill?" beat (with slight extra delay) → closing.

---

## Frame 6: The Nerd Stuff (Part 2) — BUILT

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

## Frame 7: The Human Element — BUILT

**Content:**
"I do touch grass.
National-level rower, Sri Lanka. 2 golds, 1 bronze. Vice-captain of the crew.
The discipline to suffer through a 2km race at maximum heart rate is the same discipline I use to debug SQL queries at 3 AM when the only thing broken is a single misplaced semicolon.
Gap year, KPMG: Passed the first 9 ACCA exams in 7 months while working full-time.
Didn't realize you could take study leave—just took the exam days off. Seemed fine at the time.
I'll finish the last 4 eventually. I promise. My whole family's full of accountants—it would be weird not to.
Route: Colombo → Abu Dhabi → Nairobi → Paris → New York → Buenos Aires (studied) + 23 other countries
Languages: English, Sinhala (native) · Gujarati (speak) · Hindi/Urdu (understand) · French (5 months in Paris)
Student Energy Summit 2023: 50+ countries · $500k raised · Abu Dhabi
And I think philosophy is really cool too—especially Buddhism.
But if I'm being honest, the rowing is still the thing I'm most proud of. Everything else I can attribute to caffeine."

**Type:** Evidence Frame (staccato variant)
**Design:** Rowing and ACCA as left-bordered evidence blocks with monospace labels. Bridge paragraph connects physical and technical discipline. Passport section uses monospace metadata layout (Route, Languages, Summit as labeled blocks). "Seemed fine at the time." rendered as a muted italic aside. Family line gets its own beat — echoes Frame 2's dad. Buddhism line as plain secondary text. Closing in italic Crimson Pro, secondary color — caffeine quip replaces the dinner party line.
**Animation:** ScrollTrigger. Headline → rowing block → bridge → ACCA block → "seemed fine" aside (delay for comedic timing) → family line → passport block → metaphysics → rowing closer (final beat).

---

## Frame 8: The Current Headache (Part 1) — BUILT

**Content:**
"Current work
PackDB: Making databases solve impossible problems.
Right now I'm extending DuckDB to handle package queries—the 'give me the best combination of X items that satisfy these constraints' problem.
It's NP-hard, which is computer science speak for 'there's no perfect algorithm and you're going to suffer.'
ILP — Solvers integrated directly into SQL
PaQL — New query syntax for package semantics
Approx — Because exact solutions outlast the heat death of the universe
[PaQL code block with syntax highlighting]
It's open source. It's my capstone. It hurts a little.
I love it."

**Type:** Showcase Frame (active project)
**Design:** "Current work" monospace label at top as temporal signal. Technical details as compact grid (monospace label → description). PaQL code block in a faux-editor with traffic-light dots and "query.sql" tab — syntax highlighted with secondary blue for keywords, green for PaQL-specific keywords, copper for values. "It hurts a little." in plain secondary text, then "I love it." standalone in italic Crimson Pro, copper accent — the emotional peak.
**Animation:** ScrollTrigger. Label → headline → description paragraphs → technical details stagger (0.08s) → code block → pause → "It hurts a little." → "I love it." enters last with its own beat.

**Paired with Frame 9:** Both share "Current work" monospace label and matching layout structure.

---

## Frame 9: The Current Headache (Part 2) — BUILT

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

## Frame 10: The Reality Check — BUILT

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

## Frame 11: The Closing (CTA + Footer) — BUILT

**Content (CTA):**
"I want your hardest problems.
I'm graduating May 2026.
If you have a complex dataset, a messy pipeline, or a problem that scares your current team—
If you need someone who can move between business context and technical implementation without getting lost in either—
If you're working on something where the solution isn't obvious and the stakes actually matter—
Let's talk."

**Content (Footer):**
Hatim Rehmanjee (with photo placeholder)
CS @ NYU Abu Dhabi | 3.95 GPA | 100% Scholarship
[View CV] · [hrehmanjee@icloud.com] · [LinkedIn] · [GitHub]
Currently: Building PackDB and researching LLM reasoning.
Previously: OCTAVE, Acuity, KPMG, PwC.
Languages: English, Gujarati, Sinhala · Hindi, Urdu, French

**Type:** Statement Frame (bookend to Frame 1) + Contact Footer
**Design:** CTA section swings back to wide max-width (max-w-4xl), big serif headline, copper accent — bookends Frame 1. Three "If you..." conditions build with escalating text presence (secondary → primary/80 → primary). "Let's talk." in italic Crimson Pro copper — the final copper beat. Footer separated by border-t with generous margin (mt-24/mt-32). Two-column layout on desktop: left column has photo placeholder + name + credentials + action links (View CV border-button, email, LinkedIn, GitHub). Right column has 3-col metadata grid (Currently, Previously, Languages). Uses `!min-h-0` to override the standard full-viewport frame height.
**Animation:** ScrollTrigger. Headline with Frame 1-level presence (blur 8px, y:32, 1s) → context → conditions stagger (0.15s) → "Let's talk." enters last with beat → footer info fades in gently (0.06s stagger).

---

## Overall Rhythm & Transitions

**Emotional arc (11 frames):**
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
11. Confident invitation + clean exit (Frame 11) — returns to Frame 1's scale, bookend CTA then compact footer

**Transition principles:**
- Tone shifts are supported by layout changes (width, density, typography)
- No visible dividers between frames except Frame 2's thin rule (marking abstract → personal)
- Accent color (copper) appears only at key moments: Frame 1 headline, Frame 3 "Helped.", Frame 8 "I love it.", Frame 11 "Let's talk." — four beats across the whole site
- Frame heights: most are 100dvh, Frame 11 (Closing) uses `!min-h-0` for natural content height
