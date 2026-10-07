# Design

## Context

See `proposal.md` for background. Following the initial design system implementation, user feedback requires tightening the color palette to be strictly monochromatic blue (no purple or alternate hue mixing) and completely removing all glow, halo, and bloom effects to maximize clarity, restraint, and Google-style minimalism.

## Goals / Non-Goals

**Goals:**
- Update CSS variables in `src/styles/global.css` to define `--accent-gradient` strictly with `#1E40AF`, `#3186FF`, and `#93C5FD`.
- Strip `--accent-glow` and all colored `box-shadow` properties from buttons, cards, status dots, and badges.
- Remove all ambient background blur orbs from `src/layouts/Layout.astro`.
- Update `ChromeSparkle.astro` SVG gradient to pure blue and remove `filter="url(#sparkleBlur)"`.
- Remove all remaining glow utility classes and script-based glow animations in `src/pages/index.astro`.

**Non-Goals:**
- Altering the 8-point spatial grid or responsive 8/12/16 layout column structure.
- Changing font families or core typography scale.

## Decisions

### 1. Monochromatic Blue Spectrum Definition
- **Decision**: Define the gradient stops as `#1E40AF` (deep royal blue) at 0%, `#3186FF` (signature electric blue) at 50%, and `#93C5FD` (ice blue highlight) at 100%.
- **Rationale**: Keeps the visual identity unified around `#3186FF` without purple/magenta contamination.
- **Alternatives Considered**: Dual-stop gradient (less depth) or OKLCH interpolation through purple (rejected per requirement).

### 2. Complete Elimination of Glow Shadows
- **Decision**: Replace all colored glow `box-shadow` styles with clean state transitions (subtle border contrast changes, scale adjustments, or clean neutral elevation).
- **Rationale**: Eliminates visual fuzziness, aligns with Big Tech minimalism, and improves mobile GPU performance.
- **Alternatives Considered**: Low-opacity glows (rejected: user requested complete removal of all glow effects).

## Risks / Trade-offs

- **[Risk] Reduced visual prominence for interactive buttons without glow** → Mitigation: Use high-contrast background fill (`#3186FF` hovering to `#2563EB`) and subtle scale/translation (`translateY(-1px)`).
- **[Risk] Dark canvas appearing too stark without ambient glow orbs** → Mitigation: Liquid glassmorphic panels provide necessary depth through 1px border highlights and backdrop blur over content.
