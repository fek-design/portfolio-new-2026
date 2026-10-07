# Proposal

## Why

The current interactions and transitions feel brisk and computerized rather than natural and tactile. Introducing physical momentum, gravitational easing curves, and subtle bounce gives the portfolio a refined, high-end creative studio feel. Concurrently, making the top navigation transparent over the hero ensures an unobstructed visual entry that transitions seamlessly into luminous frosted glass on scroll, while scroll-driven ease-up reveals and strict 8-point bento grid alignment unify the spatial architecture.

## What Changes

- **Physics-Weighted Motion & Gravitational Easing**:
  - Replace fast/abrupt transition durations with weighted physical timings (0.6s to 1.2s) using natural gravitational deceleration curves (`cubic-bezier(0.16, 1, 0.3, 1)` and spring-elastic settle with subtle bounce `cubic-bezier(0.34, 1.3, 0.64, 1)` on interactive hover states).
  - Slow down the boot launch sequence, hero reveal choreography, card hover elevation, and iris reveals so movements convey weight, inertia, and mass.
- **Scroll-Aware Dynamic Navigation**:
  - Start the fixed header with a completely transparent background (`bg-transparent`, no border, no shadow) while resting over the hero composite.
  - Dynamically transition the header to frosted glass (`bg-white/80`, `backdrop-blur-xl`, `border-black/[0.08]`, `shadow-sm`) as the user scrolls past the hero viewport threshold.
- **Scroll-Driven Section Ease-Up Reveals**:
  - Implement a scroll-reveal choreography system across all sections (`#about`, `#projects`, `#logs`, `#contact`).
  - Content blocks ease upwards with gravitational deceleration as they enter the viewport.
- **Strict 8-Point Spatial Rhythm & Bento Grid Alignment**:
  - Enforce consistent 8/12/16 column bento grid constraints and 8pt-divisible spacing tokens (8px, 16px, 24px, 32px, 48px, 64px, 96px) across all card layouts, gaps, and section containers.

## Capabilities

### New Capabilities
- `physics-motion-scroll-system`: Defines standards for physics-weighted motion, realistic easing curves, dynamic scroll-reactive navigation, scroll-driven ease-up reveals, and strict 8-point bento grid alignments.

### Modified Capabilities
*(None - durable specs will be synced upon archiving.)*

## Impact

- `src/styles/global.css`: Updates animation keyframes, physical easing custom properties, and grid utilities.
- `src/pages/index.astro`: Integrates scroll-reactive navbar controller, scroll-driven ease-up triggers for all sections, and tuned physical durations.
- `src/components/`: Adjusts hover and elevation timings across `GlassCard.astro`, `PillButton.astro`, and `MotionCard.tsx`.
