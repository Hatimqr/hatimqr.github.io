Design System Requirements:

Voice: Sarcastic, dry, competent. High-performance minimalist.

Aesthetic: "Cinematic minimalism with a technical edge"
- Dark mode with depth (subtle gradients, not flat black)
- Smooth, organic animations (not mechanical)
- Sharp typography with generous spacing
- Technical elements abstracted into visual texture
- Everything flows - no rigid boxes

Visual references:
- Stripe's sophisticated dark mode
- Linear.app's smooth scroll animations  
- Apple product pages' fluidity
- But darker, grittier, with subtle technical details

Animation principles:
- Scroll-driven, user-controlled pacing
- Text floats in with subtle blur-to-focus
- Backgrounds fade/parallax smoothly
- Ease-out timing curves (0.6-1.2s transitions)
- Staggered element entrance (0.1-0.2s delays)

Color direction:
- Deep navy/charcoal backgrounds
- Warm accent (amber/copper) for highlights
- Cool secondary (steel blue) for technical elements
- Crisp white text

Typography (implemented):
- Display: **Crimson Pro** (serif) — headlines, bold statements, italic emotional beats. Tight tracking (-0.02em to -0.03em), line-height 1.08–1.12
- Body: **DM Sans** — narrative text, 18px base, line-height 1.65
- Code: **JetBrains Mono** — inline code, technical terms, labels. Colored with --secondary (muted steel)

Color palette (implemented):
- Backgrounds: #0b0d11 (bg), #111318 (elevated), #181b22 (surface), #252830 (border)
- Text: #e4e2df (primary), #7d818c (secondary), #44474f (muted)
- Accent — Burnished Copper: #c2865a (accent), #d4975e (hover), #1e1714 (subtle bg)
- Secondary — Muted Steel: #5e7f9e (secondary), #121820 (subtle bg)

Animation timing (implemented):
- Easing: cubic-bezier(0.16, 1, 0.3, 1) (expo out)
- Headlines: 0.8–1.0s, blur 6–8px, y: 28–32px
- Body: 0.6–0.8s, stagger 0.08–0.18s
- ScrollTrigger start: top 70%

Subtle details (implemented):
- Grain overlay: fractalNoise SVG texture at 0.035 opacity, fixed position
- Selection: copper bg on dark text
- Thin styled scrollbar matching --border
- No visible frame dividers — negative space only (except Frame 2 thin rule)