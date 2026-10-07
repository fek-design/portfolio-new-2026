# Spec Delta

## Purpose

Defines the core design system tokens for color, liquid glassmorphism materials, and typography for the fekdesign portfolio, fusing Big Tech minimalism with avant-garde aesthetics.

## ADDED Requirements

### Requirement: Color Palette Tokens
The design system SHALL provide standardized color tokens for Pure White (`#FFFFFF`), Obsidian Dark (`#1C1C1C`), and Electric Blue (`#3186FF`), along with an iridescent multi-stop accent gradient interpolated in the OKLCH color space.

#### Scenario: Token resolution in dark mode
- **WHEN** components render on the dark canvas
- **THEN** surfaces default to `#1C1C1C`, high-contrast text resolves to `#FFFFFF`, and focal accents utilize `#3186FF` or the OKLCH iridescent gradient

### Requirement: Liquid Glassmorphic Surface Styling
The design system SHALL provide liquid glassmorphism utility classes utilizing hardware-accelerated background blur, high saturation, subtle alpha borders, and specular inner highlights.

#### Scenario: Card glass rendering
- **WHEN** a glassmorphic card component is rendered over media or backgrounds
- **THEN** the element applies `backdrop-filter: blur(24px) saturate(180%)`, a 1px border at `rgba(255,255,255,0.12)`, and an inset specular rim highlight

### Requirement: Typographic Hierarchy and Sizing
The design system SHALL establish a high-contrast typographic hierarchy featuring clean geometric sans-serif for content and headlines, paired with technical monospace labels for HUD tags and metadata.

#### Scenario: Heading and label formatting
- **WHEN** a headline is displayed
- **THEN** it renders in clean sans-serif with `text-wrap: balance` and unitless line heights, while technical metadata renders in uppercase monospace with expanded tracking
