# Mergex Design System

## Overview
This document outlines the core design language, typography, color palette, and utility classes used across the Mergex platform to maintain a consistent, modern, and premium User Interface (UI). The design system relies heavily on Tailwind CSS v4 alongside custom CSS variables to provide seamless theming (Light and Dark modes).

---

## 1. Typography

Mergex utilizes a rich stack of web fonts to create hierarchy, evoke emotion, and separate distinct thematic sections (e.g., technical details vs. human-centric sections).

### Primary Fonts
- **Manrope / Geist Sans** (`--font-display`, `--font-body`)
  - The standard typographic foundation for the site. Used for most body copy and general layout text for a clean, modern aesthetic.
- **Playfair Display** (`--font-serif`)
  - A serif font to provide contrast and elegance where a more traditional or editorial look is needed.

### Specialized Fonts (Section-Specific)
- **Clash Display** (`.font-clash`)
  - A bold, semi-bold font used for prominent, impactful headings and display text.
- **Space Grotesk**
  - Distinctive modern geometric sans-serif.
- **DM Sans**
  - Clean geometric sans-serif, widely used in informational sections (e.g., *How We Work*).
- **Outfit**
  - Geometric sans-serif, utilized in specific modules like the *Engagement Model*.
- **Urbanist**
  - Modern sans-serif, primarily used for dynamic UI elements like the *Tech Stack marquee*.

### Monospace & Technical Fonts
- **JetBrains Mono** & **IBM Plex Mono**
  - Technical monospace fonts used for small labels, code snippets, buttons, and precise technical data presentation.

### Script & Decorative Fonts
- **Great Vibes** & **Alex Brush**
  - Elegant script fonts used sparingly for signatures, decorative text, or division label initials (e.g., the "Sara" text).

### Iconography
- **Material Symbols Outlined**
  - The primary source for crisp, scalable line icons.

---

## 2. Color Palette

The Mergex color system is driven by OKLCH variables (allowing wide color gamut support) alongside specifically hex-defined accent colors to support a "Light" and "Dark" mode gracefully.

### Base Colors (Light Theme Defaults)
- **Background Base:** `oklch(1 0 0)` (White)
- **Background Soft:** `#f8f7fc`
- **Background Subtle:** `#f3f2f7`
- **Foreground (Text):** `oklch(0.145 0 0)` (Dark gray/black)
- **Foreground Muted:** `#64607d`

### The "Purple Accent" (USD Bloom Inspired)
The brand leans heavily into purple for interactive outlines, highlights, and gradients to inject energy into the clinical tech aesthetic.
- **Primary Base:** `oklch(0.205 0 0)`
- **Primary Hover:** `#7c3aed` (Vivid Purple)
- **Primary Light:** `#a78bfa` (Soft Purple)
- **Text Gradient:** `#8b5cf6` to `#c4b5fd`

### Dark Theme (`html.dark`)
Activated automatically via the `.dark` class (often tied to scroll position or system preference).
- **Background:** `#070b18` (Deep, rich navy/black) interspersed with OKLCH foreground modifiers to invert layouts (`--background: oklch(0.145 0 0); --foreground: oklch(0.985 0 0)`).
- **Text:** `#e5e7eb` (Off-white reading text)

### Functional Colors
- **Border:** `oklch(0.922 0 0)` (Light Mode) / `oklch(1 0 0 / 10%)` (Dark Mode)
- **Border Light:** `#f3f2f7`
- **Destructive (Error):** `oklch(0.577 0.245 27.325)` (Red scale)
- **Input & Ring:** Soft standard borders for form boundaries (`--input`, `--ring`).

---

## 3. Radii & Sizing

Corner radii help define the "feel" of UI components. Mergex uses a scalable `--radius` logic.
- **Base Radius:** `0.625rem` (10px - used as `--radius`)
- **Radius Sm:** `calc(var(--radius) - 4px)` (6px)
- **Radius Md:** `calc(var(--radius) - 2px)` (8px)
- **Radius Lg:** `var(--radius)` (10px)
- **Radius Xl:** `calc(var(--radius) + 4px)` (14px)
- **Radius 2xl & Up:** Broad rounding up to `calc(var(--radius) + 16px)` (26px) for major cards and containers.
- **Cards Base:** 1.5rem (24px) border radius by default.

---

## 4. Visual Effects & Layers

Mergex prioritizes a spatial, "glassy" user experience via backdrops, blurs, and careful shadowing.

### Glassmorphism Classes
- `.glass`: Soft frosted glass UI.
  - Background: `rgba(255, 255, 255, 0.7)` | Blur: `20px`
- `.glass-strong`: Heavier glass treatment for higher contrast.
  - Background: `rgba(255, 255, 255, 0.9)` | Blur: `30px`

### Shadows
Shadows lift elements off the page using alpha-transparency black.
- `--shadow-sm`: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- `--shadow-md`: `0 4px 6px -1px rgba(0, 0, 0, 0.1)`
- `--shadow-lg`: `0 10px 15px -3px rgba(0, 0, 0, 0.1)`

### Glows (Purple Ambient Glows)
- `.glow-purple`: `box-shadow: 0 0 30px rgba(139, 92, 246, 0.15)`
- `.glow-purple-sm`: `box-shadow: 0 0 15px rgba(139, 92, 246, 0.1)`

---

## 5. Animation & Motion
Animations are configured to be buttery-smooth with standard Tailwind timing or custom keyframes.

### Custom Keyframe Classes
- **`.animate-fade-in-up` / `.animate-fadeIn`**: Used for staging elements as they enter the viewport.
- **`.animate-float`**: A continuous levitation effect simulating gravity (`6s ease-in-out infinite`).
- **`.animate-pulse-glow`**: A breathing box-shadow effect highlighting critical CTAs or premium features.
- **`.animate-infinite-scroll`**: Used for marquees (like the Tech Stack or client logos).

### Transitions
- All major color changes (background, text color, border color) are smoothed using an `0.8s cubic-bezier(0.4, 0, 0.2, 1)` transition function, ensuring that changing from light to dark mode is fluid and elegant.

---

## 6. Utilities & Overrides
- **Custom Scrollbars:** Scrollbars are completely hidden relying instead on inline visual progress indicators for a cleaner "app-like" aesthetic. (`::-webkit-scrollbar { display: none; }`, `.hide-scrollbar`)
- **Container Overflow:** The html and body leverage `overflow-x: clip;` instead of `hidden` to ensure elements like `position: sticky` remain fully functional across the layout.
