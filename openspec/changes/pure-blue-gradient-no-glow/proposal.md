# Proposal

## Why

The fekdesign visual language requires strict monochromatic discipline and Big Tech restraint. Mixing other color hues (such as purple, violet, or cyan) dilutes the signature `#3186FF` brand identity, while ambient glow and shadow blooms introduce visual noise that conflicts with crisp minimalism.

## What Changes

- Restrict all brand gradients exclusively to the monochromatic blue spectrum (`#1E40AF` deep blue, `#3186FF` electric blue, `#93C5FD` light ice blue) without any foreign color stops.
- Eliminate all glow effects across the application, including ambient background blur circles, button drop-shadow glows, card hover bloom effects, and SVG filter blurs.
- Retain clean, razor-sharp liquid glassmorphism surfaces relying solely on subtle 1px border strokes and specular rim highlights.

## Capabilities

### New Capabilities
- `pure-blue-tokens`: Defines monochromatic blue gradient tokens and specifies clean surface interaction standards without glow effects or multi-color mixing.

### Modified Capabilities
*(None - durable specs will be synced upon archiving.)*

## Impact

- `src/styles/global.css`: Standardizes `--accent-gradient` strictly to blues and strips all `--accent-glow` / drop-shadow filters.
- `src/layouts/Layout.astro`: Removes ambient background blur lighting layers.
- `src/components/ChromeSparkle.astro`: Replaces multi-color gradient with pure blue SVG stops and strips blur filters.
- `src/components/GlassCard.astro`: Removes hover glow shadows.
- `src/components/PillButton.astro`: Removes gradient button shadow glows.
- `src/components/HudBadge.astro`: Removes glowing status dot box-shadows.
- `src/pages/index.astro`: Removes remaining glow utility classes and script-driven glow animations.
