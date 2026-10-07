# Spec Delta

## Purpose

Defines requirements for the primary portfolio page structure, section choreography, bento project grid, and material styling for fekdesign.

## ADDED Requirements

### Requirement: Full Portfolio Page Structure
The system SHALL replace the temporary landing page with the full portfolio experience as the root index route (`/`), incorporating the Parallax Hero, About ("Form & Flow"), Selected Works, The Synthesis journal, and Contact sections.

#### Scenario: Navigating to root route
- **WHEN** a user visits the root URL `/`
- **THEN** the page renders the full portfolio sections with navbar navigation anchors linking directly to `#about`, `#projects`, `#logs`, and `#contact`

### Requirement: Material and Monochromatic Palette Application
All portfolio sections SHALL apply the established obsidian background (`#1C1C1C`), crisp white typography (`#FFFFFF`), pure monochromatic blue gradient accents (`#3186FF`), and liquid glassmorphic panel styling without colored glow or bloom effects.

#### Scenario: Visual styling verification
- **WHEN** portfolio cards, navigation bars, and section headers render
- **THEN** surfaces utilize `backdrop-filter` liquid glass with 1px borders, typography renders in pure white or muted white, and accents use pure blue with zero glow shadows

### Requirement: 8-Point Rhythm and Responsive 8/12/16 Bento Grid
The Selected Works and Synthesis sections SHALL organize project cards into a responsive 12-column bento grid snapping to the strict 8-point spatial rhythm (all card heights, paddings, and gutters divisible by 8).

#### Scenario: Viewing projects on desktop and mobile
- **WHEN** a user views the Selected Works section on desktop
- **THEN** projects render in an asymmetric 12-column bento grid (e.g. 7-column and 5-column spans) that stacks cleanly into full-width cards on mobile viewports

### Requirement: Interactive Motion Choreography
The portfolio page SHALL integrate smooth scroll behavior and hardware-accelerated entrance and hover micro-animations utilizing Motion and GSAP without visual lag or frame drops.

#### Scenario: User hovers over interactive portfolio items
- **WHEN** a user hovers over project cards or pill buttons
- **THEN** the target element smoothly scales and shifts specular highlight without rendering blur shadows
