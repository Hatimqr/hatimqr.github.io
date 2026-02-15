# Hatim Rehmanjee — Personal Website

## Project
Scroll-driven narrative personal website. 11 frames telling a story about someone who loves hard problems.

## Stack
- React + TypeScript + Vite
- GSAP ScrollTrigger for scroll animations
- Tailwind CSS v4 (`@theme` tokens, `@import "tailwindcss"`)
- Path alias: `@/` → `src/`

## Voice & Tone
Sarcastic, dry, competent. "High-performance minimalist."
Core message: "I make my life difficult on purpose because I like hard problems."
- Confident but not arrogant
- Self-aware but not self-deprecating
- Technical but not exclusionary
- Never corporate, never buzzwordy

## Design System — "Controlled Burn"

### Color Palette
```
Backgrounds (ink / blue-black):
  --bg:            #0b0d11
  --bg-elevated:   #111318
  --surface:       #181b22
  --border:        #252830

Text (warm whites, cool grays):
  --text-primary:  #e4e2df
  --text-secondary:#7d818c
  --text-muted:    #44474f

Accent — Burnished Copper (used sparingly — headlines, CTA, links):
  --accent:        #c2865a
  --accent-hover:  #d4975e
  --accent-subtle: #1e1714

Secondary — Muted Steel (technical terms, code, data):
  --secondary:     #5e7f9e
  --secondary-subtle: #121820
```

### Typography
- Display: **Crimson Pro** (headlines, bold statements). Tight tracking (-0.02em), line-height 1.1
- Body: **DM Sans** (narrative text). 18-20px, line-height 1.65
- Mono: **JetBrains Mono** (inline code, technical terms). Colored with --secondary

### Animation — "Focus Pull" Signature
Text entrance: simultaneous opacity 0→1, translateY 24px→0, blur 6px→0
- Easing: cubic-bezier(0.16, 1, 0.3, 1) (expo out)
- Headlines: 0.8-1.0s duration
- Body: 0.6-0.8s, stagger 0.08-0.12s
- ScrollTrigger start: `top 75%`

### Frame Types
1. **Statement** (Frames 1, 11): Single headline, max negative space
2. **Narrative** (Frames 2, 3, 10): Headline + paragraphs, max-w 640px
3. **Evidence** (Frames 4, 7): Headline + structured list items
4. **Showcase** (Frames 5, 6, 8, 9): Headline + description + technical detail
5. **Contact** (Frame 12): Compact grid, 60-70vh, clean exit

### Subtle Details
- Grain overlay: noise texture at 0.03-0.04 opacity
- Selection: copper on dark
- No visible frame dividers — negative space only
- Thin styled scrollbar matching --border
- Technical texture on showcase frames (faint grid dots)

## Content
Full content plan in `context/plan.md`. Aesthetic brief in `context/aesthetic.md`. frame by frame in `context/frame-by-frame.md`.

## Commands
- `npm run dev` — dev server
- `npm run build` — production build
- `npx tsc --noEmit` — type check

## Architecture
- `src/lib/gsap.ts` — GSAP + ScrollTrigger registration (always import from here)
- `src/components/Frame.tsx` — Full-viewport scroll section wrapper
- `src/hooks/useScrollAnimation.ts` — Reusable ScrollTrigger hook
- Frame components go in `src/components/frames/`
