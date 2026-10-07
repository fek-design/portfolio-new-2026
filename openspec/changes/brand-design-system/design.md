# Design

## Context

See `proposal.md` for the core motivation. The `fekdesign` portfolio is built with Astro, Tailwind CSS, Motion/Framer Motion, and GSAP. The goal is to construct a design system that feels like a flagship Big Tech product (immense whitespace, geometric clarity, clean pill buttons) while injecting avant-garde visual accents (liquid glassmorphism, iridescent gradients, chrome stars, and technical HUD tags).

## Goals / Non-Goals

**Goals:**
- Implement a comprehensive token system in CSS variables and Tailwind utility mapping for `#FFFFFF`, `#1C1C1C`, `#3186FF`, and OKLCH gradients.
- Enforce an 8-point spatial rhythm where every margin, padding, gap, and component dimension is strictly divisible by 8.
- Provide responsive 8, 12, and 16 column layout grids.
- Implement reusable Big Tech pill buttons, glassmorphic bento cards, and avant-garde accents.
- Comply with modern web guidance on color contrast, typography, and hardware-accelerated visual effects.

**Non-Goals:**
- Creating custom backend CMS schemas or complex database models.
- Building non-portfolio features (e.g. ecommerce checkout, user authentication).

## Decisions

### 1. Color Interpolation Space: OKLCH
- **Decision**: Gradients and color blending will use OKLCH (`linear-gradient(135deg in oklch, #3186FF 0%, #60A5FA 50%, #C084FC 100%)`).
- **Rationale**: OKLCH preserves chroma and avoids muddy gray transitions common in standard sRGB interpolation.
- **Alternatives Considered**: sRGB (produces desaturated midtones) and OKLAB (can wash out vibrant blues).

### 2. Glassmorphism Architecture: Layered CSS Backdrops
- **Decision**: Combine `backdrop-filter: blur(24px) saturate(180%)`, a 1px border (`rgba(255,255,255,0.12)`), and an inset box-shadow (`inset 0 1px 0 rgba(255,255,255,0.2)`).
- **Rationale**: Provides genuine optical depth and edge refraction without requiring heavyweight WebGL canvas overlays.
- **Alternatives Considered**: Three.js refraction shaders (too heavy for general layout cards; reserved only for 3D accent assets).

### 3. Grid Architecture: Strict 8-Point Spatial System
- **Decision**: Use Tailwind 8-pixel intervals (`gap-2` = 8px, `gap-4` = 16px, `gap-6` = 24px, `gap-8` = 32px, `gap-12` = 48px). All component heights (e.g., buttons `h-8` = 32px, `h-12` = 48px, cards `min-h-[256px]`, `min-h-[384px]`) must be multiples of 8.
- **Rationale**: Guarantees visual stability, harmonious proportions, and seamless alignment between stacked and scaled elements.

### 4. Typography Split: Clean Sans Content + Monospace HUD
- **Decision**: Primary headings and copy utilize geometric sans-serif (Inter / System Sans) with `text-wrap: balance` for headlines. Accent metadata, coordinates, and system status tags use monospace (`JetBrains Mono`).
- **Rationale**: Balances Big Tech clarity and accessibility with futuristic avant-garde character.

## Risks / Trade-offs

- **[Risk] High backdrop-filter GPU consumption on low-end mobile devices** → Mitigation: Limit blurs to top-level cards, use `isolation: isolate` and `will-change: transform` only during active hover animations.
- **[Risk] Low contrast on translucent glass backgrounds** → Mitigation: Ensure text overlays default to high-contrast `#FFFFFF` or `#F5F5F5` and test minimum 4.5:1 contrast against dark background tones.
- **[Risk] Strict 8pt grid rigidity on fluid mobile screens** → Mitigation: Mobile containers use 100% width with 16px horizontal margins (divisible by 8) while desktop snaps to 8/12/16 column tracks.
