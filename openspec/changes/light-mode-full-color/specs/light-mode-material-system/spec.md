# Spec Delta

## Purpose

Specifies the light mode interface theme tokens, luminous liquid glassmorphism surfaces, dark typography contrast, and full-color imagery standards.

## ADDED Requirements

### Requirement: Light Mode Palette and Typography Contrast
The design system SHALL use a luminous light canvas (`#F8FAFC` to `#FFFFFF`) paired with high-contrast obsidian dark typography (`#1C1C1C`) for primary headings, slate (`#334155`) for body text, and muted slate (`#64748B`) for technical metadata.

#### Scenario: Element color rendering in light mode
- **WHEN** text and headings render on the canvas
- **THEN** all copy maintains a minimum 4.5:1 contrast ratio against the light background without eye fatigue

### Requirement: Light Mode Liquid Glassmorphic Surfaces
Card and navigation surfaces SHALL render luminous frosted glass panels using `backdrop-filter: blur(24px) saturate(180%)`, light semi-transparent backgrounds (`rgba(255, 255, 255, 0.75)` to `0.9`), crisp 1px light border strokes (`rgba(0, 0, 0, 0.08)` or `rgba(255, 255, 255, 0.8)`), and soft natural depth shadows without colored glow.

#### Scenario: Glass panel visual appearance
- **WHEN** cards or navigation bars render over content
- **THEN** the background diffusion softens underlaying elements while displaying clean 1px borders and specular surface highlights

### Requirement: Removal of Grayscale and Color Filters
All photography, project thumbnails, and 3D visual assets across the portfolio SHALL render in their true, vibrant original color space without grayscale, sepia, or color-burn filters.

#### Scenario: Viewing images across portfolio sections
- **WHEN** users view the hero model, about visual, project cards, and journal photos
- **THEN** images display in natural, unconstrained full color with crisp contrast and no grayscale desaturation
