# Proposal

## Why

The portfolio aesthetic is shifting from a dark obsidian canvas to a bright, pristine light mode interface (reflecting the luminous Nova Glass design reference), while eliminating all grayscale and desaturation filters to let photography, UI previews, and 3D visual assets shine in their natural, vivid full color.

## What Changes

- **Light Mode Theme Conversion**:
  - Canvas background changes from `#1C1C1C` to crisp white `#FFFFFF` / luminous `#F8FAFC`.
  - Core typography shifts to deep obsidian `#1C1C1C` for maximum contrast and readability, with `#475569` for body copy and `#64748B` for technical metadata.
  - Liquid glassmorphism adapts to light mode: luminous frosted glass panels (`rgba(255, 255, 255, 0.75)` to `0.9`), subtle 1px border strokes (`rgba(0, 0, 0, 0.08)` / `rgba(255, 255, 255, 0.8)`), and soft natural depth shadows without colored glow.
- **Full Color Visuals (Remove Grayscale)**:
  - Strip all `filter: grayscale(...)`, `filter: sepia(...)`, and color-burn overlays across all images (`hero-object.png`, `ferris-wheel-splash.JPG`, `deso.webp`, `sotf.webp`, and journal photography).
  - All visual assets render in their true, vibrant original coloration.
- **Preserve Design Foundation**:
  - Maintain the pure monochromatic `#3186FF` electric blue gradient for buttons, active links, and brand sparkles.
  - Preserve the strict 8-point spatial system and responsive 8 / 12 / 16 column bento grid.

## Capabilities

### New Capabilities
- `light-mode-material-system`: Defines light mode color tokens, light liquid glassmorphic surfaces, high-contrast dark typography, and full-color unfiltered media standards.

### Modified Capabilities
*(None - durable specs will be synced upon archiving.)*

## Impact

- `src/styles/global.css`: Updates CSS variables (`--bg-canvas`, `--text-main`, `--glass-bg`, etc.) and adapts glassmorphism classes to light mode.
- `src/layouts/Layout.astro`: Updates canvas background and selection colors for light mode.
- `src/pages/index.astro`: Strips grayscale classes from all `<img>` tags, inverts contrast on headers/HUD tags, and applies light mode panel styling.
- `src/components/`: Adapts `GlassCard.astro`, `PillButton.astro`, `HudBadge.astro`, and `MotionCard.tsx` to light mode contrast standards.
