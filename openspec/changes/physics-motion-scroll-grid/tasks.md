# Tasks

## 1. Physics Motion Tokens and CSS Utilities

- [ ] 1.1 Add `--ease-physics` (`cubic-bezier(0.16, 1, 0.3, 1)`) and `--ease-elastic` (`cubic-bezier(0.34, 1.3, 0.64, 1)`) with physical duration tokens to `src/styles/global.css` and verify hover transitions utilize gravitational deceleration
- [ ] 1.2 Define `.reveal-on-scroll` CSS classes in `src/styles/global.css` with gravitational ease-up translation and staggered delay utilities (`reveal-delay-1`, `reveal-delay-2`, `reveal-delay-3`)
- [ ] 1.3 Update motion timings, physical elevation, and elastic settle on `GlassCard.astro`, `PillButton.astro`, `.skill-pill`, and `MotionCard.tsx`

## 2. Scroll-Reactive Navigation Header

- [ ] 2.1 Update `#navbar` in `src/pages/index.astro` and `src/styles/global.css` to default to completely transparent background, zero border stroke, and zero shadow when resting over the hero
- [ ] 2.2 Implement a passive scroll listener in `src/pages/index.astro` client script to dynamically toggle frosted glass styling (`nav-scrolled`) when scrolling past 60px and verify smooth visual transition

## 3. Scroll-Driven Section Reveal Choreography

- [ ] 3.1 Apply `.reveal-on-scroll` classes to headings, content blocks, and bento grid elements across `#about`, `#projects`, `#logs`, and `#contact` in `src/pages/index.astro`
- [ ] 3.2 Implement an `IntersectionObserver` in `src/pages/index.astro` client script to add `.is-visible` upon entering viewport and verify weighted ease-up choreography

## 4. 8-Point Spatial Grid and Bento Conformance

- [ ] 4.1 Audit and normalize all section container paddings (`py-24`, `py-32`), bento card heights (`h-[384px]`, `h-[480px]`), and gaps (`gap-6`, `gap-8`) to strict 8-point multiples across `src/pages/index.astro` and verify 4/8/12/16 column responsive snapping
- [ ] 4.2 Verify project build and test scroll interaction, weighted motion, and navbar state in the browser
