# Spec Delta

## Purpose

Enforces monochromatic blue gradient tokens and eliminates all glow, blur shadow, and bloom effects across the design system for pure Big Tech minimalism.

## ADDED Requirements

### Requirement: Monochromatic Blue Gradient
The design system SHALL restrict all gradient tokens and visual fills strictly to shades and tints of the blue spectrum (`#1E40AF`, `#3186FF`, `#93C5FD`), without mixing secondary hues such as purple, magenta, or cyan.

#### Scenario: Gradient rendering on text and backgrounds
- **WHEN** a component renders a gradient text or background element
- **THEN** all color stops interpolate exclusively between dark blue, electric blue, and light blue

### Requirement: Elimination of Glow and Bloom Effects
The design system SHALL forbid colored glow shadows, ambient blur light halos, and filter-based bloom effects across all buttons, cards, status indicators, and SVG icons.

#### Scenario: Interactive state styling
- **WHEN** a user hovers over a button, card, or badge
- **THEN** the component adjusts elevation, scale, or border contrast without rendering colored drop-shadow glows or box-shadow blooms
