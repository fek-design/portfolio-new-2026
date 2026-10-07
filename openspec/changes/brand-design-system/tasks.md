# Tasks

## 1. Design Tokens & Core Theme

- [ ] 1.1 Configure CSS variables and Tailwind tokens for `#FFFFFF`, `#1C1C1C`, `#3186FF`, and the OKLCH electric gradient in `src/styles/global.css` and verify classes build without errors
- [ ] 1.2 Implement liquid glassmorphism utility classes (`backdrop-filter`, 1px borders, specular rim highlights) and verify visual rendering in browser
- [ ] 1.3 Configure typography scale and font imports (Inter geometric sans + JetBrains Mono technical HUD) in `src/layouts/Layout.astro` and verify font inheritance

## 2. Grid & Spatial Layout Architecture

- [ ] 2.1 Implement strict 8-point spatial spacing utility classes (margins, paddings, gap tokens divisible by 8) and verify layout rhythm
- [ ] 2.2 Configure responsive 8-column, 12-column, and 16-column grid layouts with 8-pixel aligned gutters across mobile, tablet, desktop, and ultrawide breakpoints
- [ ] 2.3 Establish container primitives for stacked components (fixed vertical rhythm) and scaled components (fluid multi-column spans) and verify responsive alignment

## 3. Component Primitives

- [ ] 3.1 Build Big Tech Google-inspired pill button primitives (`rounded-full`, 32px/48px/56px heights, primary electric blue & glass secondary states) and verify hover micro-interactions
- [ ] 3.2 Build liquid glassmorphic bento card components with specular reflections and hover elevation transitions
- [ ] 3.3 Create avant-garde accent components (4-point chrome star sparkles, iridescent badges, technical monospace HUD metadata tags) and verify SVG rendering

## 4. Showcase & Verification

- [ ] 4.1 Update `src/pages/index.astro` to showcase the new design system (Hero with Big Tech whitespace + avant-garde accents, 12-col bento grid, pill buttons) and verify `npm run build` succeeds
- [ ] 4.2 Verify color contrast compliance (minimum 4.5:1 for body copy), hardware acceleration performance, and responsive behavior across viewports
