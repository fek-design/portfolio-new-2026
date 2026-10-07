# Spec Delta

## Purpose

Defines physics-weighted motion curves, dynamic scroll-reactive navigation, scroll-driven ease-up reveals, and strict 8-point bento grid alignments.

## ADDED Requirements

### Requirement: Physics-Weighted Easing and Inertia
The interface SHALL apply weighted physical momentum curves (`cubic-bezier(0.16, 1, 0.3, 1)` and subtle elastic bounce `cubic-bezier(0.34, 1.3, 0.64, 1)`) with deliberate durations (0.6s to 1.2s) across transitions and interactive states to convey natural mass and gravity.

#### Scenario: Hovering interactive cards or buttons
- **WHEN** user hovers over a glass card, project card, or pill button
- **THEN** the element elevates smoothly with natural physical deceleration and settles with tactile momentum

#### Scenario: Boot sequence and hero reveal
- **WHEN** the application initializes
- **THEN** progress loading and hero object wipe execute with deliberate physical ease rather than linear or abrupt motion

### Requirement: Scroll-Reactive Navigation Header
The fixed top navigation bar SHALL start completely transparent without border or background while the viewport remains within the hero section, and SHALL smoothly transition to luminous frosted glass once the user scrolls beyond the hero threshold.

#### Scenario: Navigation state at page top
- **WHEN** the scroll offset is near zero within the hero section
- **THEN** the header renders with a transparent background, no border line, and no drop shadow

#### Scenario: Navigation state on scroll down
- **WHEN** user scrolls past 60px into page content
- **THEN** the header transitions smoothly to frosted glass (`bg-white/80`, `backdrop-blur-xl`, fine border stroke, and elevation shadow)

### Requirement: Scroll-Driven Section Reveal Choreography
Section content blocks, headlines, and bento grid elements SHALL start slightly offset and ease upwards with gravitational deceleration as they enter the viewport during scrolling.

#### Scenario: Scrolling down to subsequent sections
- **WHEN** a section enters the browser viewport
- **THEN** its cards, text blocks, and media animate upward into position using weighted ease-up choreography

### Requirement: 8-Point Spatial Grid Conformance
All component dimensions, margins, paddings, and column gaps SHALL conform strictly to the 8-point spatial rhythm (divisible by 8: 8, 16, 24, 32, 48, 64, 96, 128px) and align with the responsive 8 / 12 / 16 column bento grid.

#### Scenario: Responsive grid layout verification
- **WHEN** the viewport scales between mobile (4 cols), tablet (8 cols), desktop (12 cols), and ultra-wide (16 cols)
- **THEN** all cards snap precisely to 8pt modular column tracks and gaps without arbitrary dimensional offsets
