# Design

## Context

See `proposal.md` for background. The current portfolio implementation uses a dark `#1C1C1C` background with desaturated/grayscale imagery. The user requested switching to a light mode theme inspired by the Nova Glass aesthetic and removing all grayscale effects so visual media appears in vibrant, natural full color.

## Goals / Non-Goals

**Goals:**
- Transition the canvas tokens to light mode: `--bg-canvas: #F8FAFC`, `--text-main: #1C1C1C`, `--text-muted: #475569`.
- Adapt liquid glassmorphism classes to luminous frosted surfaces: `background: rgba(255, 255, 255, 0.75)`, 1px border `rgba(0, 0, 0, 0.08)`, and subtle soft depth shadows `rgba(0, 0, 0, 0.04)`.
- Strip all `filter: grayscale(...)` and `filter: sepia(...)` from all `<img>` tags and CSS rules.
- Retain the strict monochromatic `#3186FF` electric blue gradient and the 8-point spatial grid.

**Non-Goals:**
- Introducing a runtime client-side theme switcher button (the site converts directly to light mode as its primary design language).
- Altering the section content, copy, or structural layout.

## Decisions

### 1. Canvas and Text Contrast Values
- **Decision**: Use `#F8FAFC` (Slate 50) / `#FFFFFF` for backgrounds and `#1C1C1C` for headlines.
- **Rationale**: Pure `#FFFFFF` cards resting on a subtle `#F8FAFC` canvas establish clear visual layering while maintaining high contrast (>10:1) for readability.
- **Alternatives Considered**: Beige/cream background (rejected: user previously transitioned away from warm studio tones).

### 2. Light Mode Glassmorphism Formulation
- **Decision**: Combine `backdrop-filter: blur(24px) saturate(180%)`, a luminous light background (`rgba(255, 255, 255, 0.8)`), a fine border stroke (`rgba(0, 0, 0, 0.08)`), and an inset highlight (`inset 0 1px 0 rgba(255, 255, 255, 0.9)`).
- **Rationale**: Achieves the pristine frosted glass look of the Nova Glass reference image without muddying text contrast.

### 3. Removal of All Grayscale Filters
- **Decision**: Remove all instances of `filter grayscale`, `contrast-125`, and `sepia` from all image tags in `src/pages/index.astro` and `src/styles/global.css`.
- **Rationale**: Restores the true, rich visual identity of Felix Koesgaard's photography and web design projects.

## Risks / Trade-offs

- **[Risk] Parallax hero dual-text visibility on light background** → Mitigation: Solid layer uses `#1C1C1C` and outline layer uses `-webkit-text-stroke: 2px #1C1C1C` ensuring crisp definition over `/hero-object.png`.
- **[Risk] Light glass panels blending into white canvas** → Mitigation: Use subtle border `rgba(0, 0, 0, 0.08)` and soft natural shadow `0 20px 40px -15px rgba(0, 0, 0, 0.05)`.
