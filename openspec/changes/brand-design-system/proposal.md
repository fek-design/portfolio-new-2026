# Proposal

## Why

The `fekdesign` portfolio requires a distinct, future-facing visual identity that balances Google/Big Tech minimalism and whitespace with edgy avant-garde liquid glassmorphism. Creating this formal design system establishes the tokens, 8/12/16 grid structures, component sizing rules, and aesthetic hierarchy required to build a fast, capable creative developer showcase.

## What Changes

- Establish an overpowering Big Tech minimalism baseline (dominant whitespace, clean typography, refined pill controls).
- Introduce an avant-garde liquid glassmorphism material scheme: pure white `#ffffff`, obsidian `#1c1c1c`, and electric blue gradient `#3186ff`.
- Enforce a strict 8-point spatial system where all margins, paddings, gaps, and dimensions are strictly divisible by 8.
- Implement responsive 8 / 12 / 16 column grid layouts supporting both stacked components and scaled components.
- Define reusable component primitives: Google-inspired pill buttons, glassmorphic bento cards, and edgy cyber/avant-garde visual accents (chrome sparkles, HUD metadata tags, iridescent flares).

## Capabilities

### New Capabilities
- `design-system-tokens`: Defines color tokens (#ffffff, #1c1c1c, #3186ff gradient), liquid transparent glassmorphism formulas (backdrop-blur, specular highlight, subtle borders), and typography tokens adhering to modern web guidance.
- `grid-and-layout`: Defines the 8-point spatial rhythm, 8 / 12 / 16 responsive column grids, and the rules governing stacked versus scaled components.
- `component-primitives`: Defines the core UI building blocks: Big Tech pill buttons, liquid glass bento cards, and avant-garde accents (chrome 3D sparkles, HUD status badges).

### Modified Capabilities
*(None - this is the foundational design system for the repository.)*

## Impact

- `src/styles/global.css`: Will be updated with the design system tokens, glassmorphism utilities, and 8-point grid variables.
- `src/layouts/Layout.astro`: Updated with typography imports and foundational canvas styling.
- `src/components/`: Reusable components (buttons, cards, bento grids, badges) will adhere to these specs.
- Astro, Tailwind v4, Motion/Framer Motion, and GSAP integrations will consume these tokens and sizing rules.
