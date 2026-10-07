# Proposal

## Why

The current `src/pages/index.astro` is a temporary showcase created to validate design tokens and component primitives. The actual, comprehensive portfolio content from `public/portfolio.html` (featuring Felix Koesgaard's hero parallax, about narrative, selected works, synthesis journal, and contact flow) needs to become the primary index page, fully transformed using the new design system, liquid glassmorphism, 8/12/16 grid, and monochromatic blue palette without glow effects.

## What Changes

- Replace the temporary landing page with the full portfolio experience as the root page (`src/pages/index.astro`).
- Convert the legacy beige color scheme (`#E8DCC4`, `#1C1A17`, `#E5B13A`) to the modern obsidian canvas (`#1C1C1C`), crisp white (`#FFFFFF`), and pure monochromatic blue gradient (`#3186FF`).
- Re-architect all portfolio sections onto the strict 8-point spatial system and responsive 8 / 12 / 16 column grid:
  - **Parallax Hero**: Dual-layer typography, 3D object mask, and Big Tech pill action controls.
  - **About Section ("Form & Flow")**: Expanded whitespace, liquid glass cards, and technical skill pills.
  - **Selected Works**: Responsive 12-column bento grid featuring DESO, Freezer-Pal, Video Game Website, and Timelogger with liquid glass cards and clean interactive hover states.
  - **The Synthesis**: Journal cards for Technology, Photography, and The Gym transformed into liquid glass panels.
  - **Contact & Footer**: Minimalist Big Tech call-to-action with pill button and clean monochromatic social links.
- Eliminate all legacy glow or shadow bloom effects in favor of clean 1px specular reflections and crisp border strokes.
- Integrate native Astro component architecture, Motion/GSAP choreography, and Lenis smooth scrolling.

## Capabilities

### New Capabilities
- `main-portfolio-layout`: Governs the primary portfolio page structure, section hierarchy (Hero, About, Selected Works, Synthesis, Contact), responsive 8/12/16 column layout integration, and interactive choreography under the new design tokens.

### Modified Capabilities
*(None - durable specs will be synced upon archiving.)*

## Impact

- `src/pages/index.astro`: Completely replaced with the full portfolio page implementation.
- `public/portfolio.html`: Serves as the design and content reference for migration.
- `src/components/`: Reusable primitives (`GlassCard`, `PillButton`, `ChromeSparkle`, `HudBadge`) will power the portfolio sections.
