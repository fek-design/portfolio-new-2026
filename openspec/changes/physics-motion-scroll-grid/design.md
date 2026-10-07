# Design

## Context

See `proposal.md` for motivation. The current portfolio interactions are fast and computerized (e.g. 0.2s–0.3s transitions) without mass or momentum. The user requested:
1. Slow down all movement to convey real-life weight and gravity with physical easing curves and subtle bounce where applicable.
2. Transparent navigation bar background while over the hero section, dynamically acquiring frosted glass upon scrolling down.
3. Scroll-driven ease-up entrance reveals for all subsequent sections.
4. Conformance to the strict 8-point spatial rhythm and 8/12/16 column bento grid system.

## Goals / Non-Goals

**Goals:**
- Implement physical easing tokens (`--ease-physics`, `--ease-elastic`) with deliberate durations (0.6s–1.2s) across hover states, card elevation, and iris reveals.
- Implement an optimized scroll listener / IntersectionObserver for the `#navbar` to toggle between transparent and luminous frosted glass smoothly.
- Implement `.reveal-on-scroll` choreography with gravitational deceleration for section headings, copy, and bento cards.
- Enforce strict 8-point spatial rhythm (divisible by 8: 8, 16, 24, 32, 48, 64, 96, 128px) across layout containers, margins, gaps, and component dimensions.

**Non-Goals:**
- Heavy runtime physics physics engine dependencies (e.g. Matter.js or complex 3D physics engines); standard CSS bezier physics and Motion/Framer-motion spring configurations provide zero-overhead performance.
- Changing content text or visual color palette established in `light-mode-full-color`.

## Decisions

### 1. Motion Tuning: Heavy Mass Deceleration and Elastic Settle
- **Decision**: Define CSS variables `--ease-physics: cubic-bezier(0.16, 1, 0.3, 1)` (inertia deceleration) and `--ease-elastic: cubic-bezier(0.34, 1.3, 0.64, 1)` (subtle tactile bounce) with timings between 0.6s and 1.2s.
- **Rationale**: Replaces mechanical linear transitions with authentic gravitational weight, giving elements tactile presence and natural settling momentum.
- **Alternatives Considered**: Linear transitions (rejected: too robotic); bouncy cartoony springs (rejected: inappropriate for big tech minimalism).

### 2. Navbar Scroll Observer Architecture
- **Decision**: Use a passive scroll listener with `requestAnimationFrame` debouncing to toggle class `nav-scrolled` on `#navbar` when `window.scrollY > 60`.
- **Rationale**: Zero layout thrashing, immediate response, and seamless CSS transitions between transparent and frosted glass states.
- **Alternatives Considered**: Direct inline style manipulation on scroll (rejected: less performant and clutters DOM).

### 3. Scroll Reveal via IntersectionObserver
- **Decision**: Attach an `IntersectionObserver` with a `threshold: 0.15` and `rootMargin: "0px 0px -50px 0px"` to trigger class `.is-visible` on `.reveal-on-scroll` elements.
- **Rationale**: Highly performant native browser API that renders smoothly without blocking the main thread.
- **Alternatives Considered**: Scroll event calculations for every element (rejected: causes scroll jank).

### 4. Grid & Spatial Rhythm Standardization
- **Decision**: Enforce 8pt spatial tokens across all sections (`gap-6` [24px], `gap-8` [32px], `py-24` [96px], `py-32` [128px], card heights `h-[384px]` [48*8px], `h-[448px]` [56*8px]).
- **Rationale**: Aligns directly with Big Tech design systems (Google Material, Apple Human Interface) where whitespace is disciplined and mathematically cohesive.

## Risks / Trade-offs

- **[Risk] Slower animations feeling unresponsive on repeated interactions** → Mitigation: Keep micro-interactions (e.g. button click state) snappy (0.2s) while applying weighted physical inertia (0.6s–0.8s) to hovers, scroll entrances, and reveals.
- **[Risk] Navbar transparency reducing legibility over hero elements** → Mitigation: High-contrast dark obsidian typography (`#1C1C1C`) and positioning outside dense image focal points guarantee crisp contrast.
