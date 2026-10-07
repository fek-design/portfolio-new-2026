# Design

## Context

See `proposal.md` for background. The legacy portfolio was authored in `public/portfolio.html` using Tailwind CDN, beige tones (`#E8DCC4`), and legacy warm accents (`#E5B13A`). The new design system established in the project features an obsidian dark canvas (`#1C1C1C`), crisp white (`#FFFFFF`), pure monochromatic blue gradient (`#3186FF`), liquid transparent glassmorphism, strict 8-point spatial rhythm, and responsive 8/12/16 column grids with zero glow effects.

## Goals / Non-Goals

**Goals:**
- Port and structure all content from `public/portfolio.html` into `src/pages/index.astro`.
- Re-skin every component (Navbar, Parallax Hero, About, Selected Works Bento, The Synthesis Journal, Contact) to use liquid glassmorphism, `#1C1C1C`, `#FFFFFF`, and pure `#3186FF` accents.
- Enforce the 8-point grid rhythm across all card heights (e.g. 320px, 384px, 480px) and gutters (24px).
- Replace old square/harsh button styles with Big Tech Google-inspired pill buttons (`PillButton`).
- Integrate Motion and GSAP client-side animation choreography with clean performance.

**Non-Goals:**
- Creating a separate multi-page website (the portfolio remains a cohesive high-performance single-page application).
- Altering project case study content, external URLs, or personal copy.

## Decisions

### 1. Astro Componentization of Portfolio Sections
- **Decision**: Break the massive single HTML file into modular Astro sections or cleanly structured layout blocks while keeping the root route in `src/pages/index.astro`.
- **Rationale**: Keeps the codebase maintainable, leverages Astro's static build optimizations, and eliminates the legacy CDN scripts.
- **Alternatives Considered**: Keeping a single static HTML file (rejected: prevents component reuse, TypeScript safety, and Tailwind v4 compilation).

### 2. Selected Works Bento Grid Adaptation
- **Decision**: Map the 4 featured projects into an asymmetric 12-column grid:
  - Row 1: DESO (7 cols) + FREEZER-PAL (5 cols)
  - Row 2: Video Game Website (5 cols) + Timelogger (7 cols)
  Card heights snap to 384px (`h-96`, divisible by 8) with 24px gutters.
- **Rationale**: Provides dynamic visual rhythm while respecting the strict 8-point spatial constraints.

### 3. Motion Choreography Strategy
- **Decision**: Retain the dramatic hero reveal (clipped 3D statue layer, dual-layered typography outline and solid text) powered by native Motion/GSAP, styled in obsidian dark and liquid glass instead of beige.
- **Rationale**: Preserves the creator's artistic vision and brand personality while elevating it to modern Big Tech execution standards.

## Risks / Trade-offs

- **[Risk] Heavy image assets in hero and project cards affecting LCP** → Mitigation: Use modern image loading attributes (`loading="eager"` for hero, `loading="lazy"` for below-the-fold project cards) and optimized WebP formats where available.
- **[Risk] Parallax and dual-layer text alignment shifts on mobile** → Mitigation: Use fluid `clamp()` sizing and ensure mobile displays cleanly stacked text without awkward text overlapping.
