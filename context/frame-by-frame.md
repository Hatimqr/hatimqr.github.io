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
The backend is Python. The end goal is a PS5 racing rig. The finance app is just infrastructure."

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
And I think philosophy is really cool too—especially Buddhism.
But if I'm being honest, the rowing is still the thing I'm most proud of. Everything else I can attribute to caffeine."

**Type:** Evidence Frame (staccato variant)
**Design:** Rowing and ACCA as left-bordered evidence blocks with monospace labels. Bridge paragraph connects physical and technical discipline. Route as monospace metadata. "Seemed fine at the time." rendered as a muted italic aside. Family line gets its own beat — echoes Frame 2's dad. Buddhism line as plain secondary text. Closing in italic Crimson Pro, secondary color — caffeine quip.
**Animation:** ScrollTrigger. Headline → rowing block → bridge → ACCA block → "seemed fine" aside (delay for comedic timing) → family line → route → metaphysics → rowing closer (final beat).

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
It's [open source](https://huda-lab.github.io/packdb/index.html). It's my capstone. It hurts a little.
I love it."

**Type:** Showcase Frame (active project)
**Design:** "Current work" monospace label at top as temporal signal. Technical details as compact grid (monospace label → description). PaQL code block in a faux-editor with traffic-light dots and "query.sql" tab — syntax highlighted with secondary blue for keywords, green for PaQL-specific keywords, copper for values. "It hurts a little." in plain secondary text, then "I love it." standalone in italic Crimson Pro, copper accent — the emotional peak.
**Animation:** ScrollTrigger. Label → headline → description paragraphs → technical details stagger (0.08s) → code block → pause → "It hurts a little." → "I love it." enters last with its own beat.

**Paired with Frame 9:** Both share "Current work" monospace label and matching layout structure.

---

## Frame 9: The Current Headache (Part 2) — BUILT

**Content:**
"I created the hardest class I've taken at university.
A friend and I went to one of our professors and asked to do a directed study on reasoning in LLMs. We proposed the syllabus. We take turns every week presenting the topics to each other, supervised by a professor. We cover:
Transformer architecture · Mechanistic interpretability · DQNs · Policy gradients · RLHF · DPO · Chain of thought · Tree of thought · DeepSeek R1 · PAL · Lean
And honestly? An AI tool helped me build this website. It's the single most useful thing I've ever worked with. It surprises me. It teaches me. I want to know how on earth it does what it does.
If I'm going to use it every day, I should probably understand it."

**Type:** Showcase Frame (active project)
**Design:** Visually paired with Frame 8 — same "Current work" label, same max-w-2xl. Different energy: intellectual hunger, not passion. Description flows into curriculum card (bordered bg-elevated container, all topics as middot-separated monospace text). The "And honestly?" paragraph is the punch — larger text (text-lg/text-xl), "how on earth it does what it does" in italic Crimson Pro primary white. Landing in italic serif — the "probably" does the tonal work.
**Animation:** ScrollTrigger. Label → headline → description → curriculum card → punch (+=0.2 delay, needs room) → landing (+=0.15 delay).

---

## Frame 10: The Reality Check — BUILT

**Content:**
"Look, I'm not going to pretend I have it all figured out.
I'm still learning. Still making mistakes. Still spending too much time debugging things that shouldn't be broken.
But I've built enough things that work to know I can figure out the next one.
Just: does this solve a real problem? Does it make someone's work better?"

**Type:** Narrative Frame (stripped)
**Design:** The quietest frame visually. Narrowest max-width (max-w-lg), plainest typography, most negative space. After all the proof and escalation, the visual reduction mirrors the honesty. NO accent colors. NO serif flourishes. Just DM Sans in secondary gray throughout. One exception: "does this solve a real problem? Does it make someone's work better?" in primary white — the single moment of clarity in a deliberately muted frame. Everything else recedes.
**Animation:** ScrollTrigger at top 70%. Headline (y:20, blur 4px, 0.9s) → paragraphs (y:14, blur 3px, 0.8s, stagger 0.15s) → clarity line (y:12, blur 3px, 0.9s). Gentle, understated. Less blur, less travel than other frames. The restraint in animation matches the restraint in design.

---

## Frame 11: The Closing (CTA + Footer) — BUILT

**Content (CTA):**
"That's the story so far.
I graduate in May 2026. I'm looking for the next problem that'll keep me up at night."

**Content (Footer):**
Hatim Rehmanjee (with photo placeholder)
CS @ NYU Abu Dhabi | 3.95 GPA | 100% Scholarship
[View CV] · [hrehmanjee@icloud.com] · [LinkedIn] · [GitHub]
Currently: Building PackDB and studying LLM reasoning.
Previously: OCTAVE, Acuity, KPMG, PwC.
Languages: English, Gujarati, Sinhala · Hindi, Urdu, French

**Type:** Narrative close (bookend to Frame 1) + Contact Footer
**Design:** "That's the story so far." in italic Crimson Pro, copper accent — the fourth and final copper beat, bookending Frame 1. Smaller than Frame 1's headline (clamp 1.75rem–2.75rem vs 2.5rem–4.5rem) — it's a quiet conclusion, not a declaration. Context line in secondary text beneath. The selling is indirect: the story itself is the pitch; this frame just signs off. Footer separated by border-t with generous margin (mt-16/mt-20). Two-column layout on desktop: left column has photo placeholder + name + credentials + action links (View CV border-button, email, LinkedIn, GitHub). Right column has 3-col metadata grid (Currently, Previously, Languages). Full viewport height (100dvh) — no `!min-h-0` override, prevents previous frame text from bleeding through.
**Animation:** ScrollTrigger at top 70%. Headline (y:20, blur 4px, 0.9s) → context (y:14, blur 3px, 0.7s) → footer items stagger in gently (y:10, blur 2px, 0.5s, stagger 0.06s). Dialed down to match Reality frame's restraint — no dramatic focus-pull.

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
9. Intellectual hunger (Frame 9) — paired with 8, curiosity-driven, meta-punchline about AI building the site
10. Honest quiet (Frame 10) — stripped, muted, the most space
11. Quiet sign-off + clean exit (Frame 11) — copper bookend to Frame 1, story closes itself, footer handles the details

**Transition principles:**
- Tone shifts are supported by layout changes (width, density, typography)
- No visible dividers between frames except Frame 2's thin rule (marking abstract → personal)
- Accent color (copper) appears only at key moments: Frame 1 headline, Frame 3 "Helped.", Frame 8 "I love it.", Frame 11 "That's the story so far." — four beats across the whole site
- Frame heights: all 100dvh
