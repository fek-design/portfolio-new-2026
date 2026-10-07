# Tasks

## 1. Global Styles & Token Refinement

- [ ] 1.1 Refine `--accent-gradient` in `src/styles/global.css` strictly to shades of blue and remove `--accent-glow` and drop-shadow glow filters
- [ ] 1.2 Remove background glow divs from `src/layouts/Layout.astro`

## 2. Component Primitives Cleanup

- [ ] 2.1 Update `src/components/ChromeSparkle.astro` to use pure blue SVG gradient and remove blur filter
- [ ] 2.2 Update `src/components/HudBadge.astro` to remove box-shadow glow from status dot
- [ ] 2.3 Update `src/components/GlassCard.astro` and `src/components/PillButton.astro` to remove all glow shadows

## 3. Showcase Verification

- [ ] 3.1 Update `src/pages/index.astro` to remove all remaining glow styles and script animations
- [ ] 3.2 Verify visual appearance in browser with crisp edges, pure blue gradient, and zero glow artifacts
