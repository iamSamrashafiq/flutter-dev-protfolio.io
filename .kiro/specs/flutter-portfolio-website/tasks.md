# Implementation Plan: Flutter Portfolio Website

## Overview

Build a three-file static portfolio site (`index.html`, `styles.css`, `script.js`) for Samra. Tasks are ordered so each step produces runnable, integrated output — no orphaned code. Pure functions are extracted early so property tests can be written alongside them.

## Tasks

- [x] 1. Set up project files and CSS design tokens
  - Create `index.html` with semantic HTML boilerplate: `<html lang="en">`, `<meta charset>`, `<meta name="viewport">`, CDN `<link>` tags for Google Fonts (Poppins/Inter) and Remix Icons, `<link rel="stylesheet" href="styles.css">`, and `<script defer src="script.js">`
  - Create `styles.css` with all CSS custom properties on `:root` (colors, typography, spacing, shape, effects tokens as specified in the design)
  - Add global reset/base styles: `box-sizing: border-box`, `scroll-behavior: smooth` on `<html>`, body background `var(--color-bg)`, font family `var(--font-primary)`, color `var(--color-text)`
  - Create `script.js` as an empty module stub with a `DOMContentLoaded` listener
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 11.1, 11.2, 11.6_

- [x] 2. Implement pure utility functions and property tests
  - [x] 2.1 Implement `isScrolled(scrollY, threshold)` in `script.js`
    - Export (or expose for testing) the function: returns `true` if `scrollY > threshold`, `false` otherwise; never throws
    - _Requirements: 2.4, 10.2, 10.3_

  - [ ]* 2.2 Write property test for `isScrolled` — Property 1: scroll threshold is a total function
    - Set up Vitest + fast-check (`npm init -y && npm i -D vitest fast-check`)
    - Create `tests/utils.test.js`
    - **Property 1: Scroll threshold is a total function**
    - **Validates: Requirements 2.4, 10.2, 10.3**

  - [x] 2.3 Implement `getModalContent(projectId, projectData)` in `script.js`
    - Returns the data object for a known slug; returns `null` for unknown slugs; never throws
    - Define the full `PROJECT_DATA` constant (all 8 projects: ityrecare, sushi-guide, lama, junction, expatio, getfit, selectnelect, asas) with `name`, `description`, `features`, `techStack`, `youtubeId` fields
    - _Requirements: 7.1, 7.2_

  - [ ]* 2.4 Write property test for `getModalContent` — Property 2: modal content lookup round-trip
    - **Property 2: Modal content lookup round-trip**
    - **Validates: Requirements 7.2**

  - [ ]* 2.5 Write property test for `getModalContent` — Property 3: unknown project slug returns null safely
    - **Property 3: Unknown project slug returns null/undefined safely**
    - **Validates: Requirements 7.1**

- [x] 3. Build the Navbar
  - [x] 3.1 Add Navbar markup to `index.html`
    - `<nav id="navbar">` with logo/name text, `<ul>` of `<a href="#section-id">` anchor links (Hero, About, Skills, Projects, Contact), and `<button class="hamburger" aria-label="Toggle menu">`
    - _Requirements: 2.1, 2.2_

  - [x] 3.2 Style the Navbar in `styles.css`
    - `position: fixed; top: 0; width: 100%; z-index: 1000`
    - Default: transparent background
    - `.navbar--scrolled`: `backdrop-filter: var(--blur-glass)` + semi-transparent dark background; `@supports` fallback with solid semi-transparent background
    - Hamburger button hidden on viewports ≥ 768 px; visible below 768 px
    - `.nav-menu--open` shows vertical dropdown on mobile
    - _Requirements: 2.1, 2.4, 2.5, 2.6, 11.4_

  - [x] 3.3 Wire Navbar scroll and hamburger behaviour in `script.js`
    - Scroll listener: call `isScrolled(window.scrollY, 50)` → toggle `navbar--scrolled` on `#navbar`
    - Hamburger click: toggle `nav-menu--open` on the `<ul>` menu
    - Menu link click: remove `nav-menu--open`
    - _Requirements: 2.3, 2.4, 2.6, 2.7_

- [x] 4. Build the Hero Section
  - [x] 4.1 Add Hero markup to `index.html`
    - `<section id="hero">` with `<h1>Samra</h1>`, `<p class="title">Flutter Developer</p>`, `<p class="tagline">Building scalable mobile apps with Flutter</p>`, `<a href="#projects" class="btn btn--primary">View Projects</a>`, `<a href="#contact" class="btn btn--outline">Contact Me</a>`
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

  - [x] 4.2 Style the Hero Section in `styles.css`
    - `min-height: 100vh`, centered flex layout
    - `@keyframes fadeInUp` with staggered `animation-delay` on heading, title, tagline, and buttons
    - Button styles using `--radius-btn`, `--color-accent`, `--color-accent-alt`
    - `@media (prefers-reduced-motion: reduce)` disables all `@keyframes` animations
    - _Requirements: 3.1, 3.7, 9.4, 11.3_

- [x] 5. Build the About Section
  - [x] 5.1 Add About markup to `index.html`
    - `<section id="about">` with `<div class="about-content">` containing a two-column flex layout: avatar/illustration placeholder on the left, text block on the right
    - Text must mention 4+ years Flutter experience, real-time systems, REST APIs, scalable mobile apps, Firebase, WebSockets, Google Maps
    - Add `class="reveal"` to `.about-content`
    - _Requirements: 4.1, 4.2, 4.3_

  - [x] 5.2 Style the About Section in `styles.css`
    - Two-column flex on desktop (≥ 768 px), stacked single column on mobile
    - Fully readable at 320 px viewport width
    - _Requirements: 4.4, 11.5_

- [ ] 6. Build the Skills Section
  - [ ] 6.1 Add Skills markup to `index.html`
    - `<section id="skills">` with `<div class="skills-grid">` containing one `<span class="skill-tag reveal">` per skill (all 15 skills from Requirement 5.2)
    - _Requirements: 5.1, 5.2_

  - [ ] 6.2 Style the Skills Section in `styles.css`
    - Glassmorphism tag style: `background: var(--color-surface)`, `border: 1px solid var(--color-border)`, `border-radius: var(--radius-card)`, `backdrop-filter: var(--blur-glass)`
    - `@media (hover: hover)` `:hover` rule: `transform: scale(1.08)` + accent highlight color, `transition: var(--transition-base)`
    - Responsive wrapping flex/grid layout
    - _Requirements: 5.1, 5.3, 5.4, 11.4_

- [ ] 7. Build the Projects Section and cards
  - [ ] 7.1 Add Projects markup to `index.html`
    - `<section id="projects">` with `<div class="projects-grid">` containing 8 `<article class="project-card reveal" data-project="{slug}">` elements
    - Each card: `<div class="card-thumbnail">` (gradient placeholder), `<div class="card-body">` with `<h3>`, `<p class="card-desc">`, `<div class="card-tags">` (tech stack tags), `<button class="btn-details" data-project="{slug}">View Details</button>`
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 11.7_

  - [ ] 7.2 Style the Projects Section in `styles.css`
    - CSS grid: 1 col < 600 px, 2 col 600–1024 px, 3 col > 1024 px
    - Card: `background: var(--color-surface)`, `border-radius: var(--radius-card)`, `box-shadow: var(--shadow-card)`, glassmorphism border
    - `@media (hover: hover)` `:hover` rule: `transform: scale(1.03)`, `transition: var(--transition-base)`
    - Gradient placeholder for `.card-thumbnail`
    - _Requirements: 6.5, 6.6, 11.3, 11.4, 11.7_

- [ ] 8. Build the Project Modal
  - [ ] 8.1 Add Modal markup to `index.html`
    - Single `<div id="modal-overlay" class="modal-overlay" role="dialog" aria-modal="true">` containing `<div class="modal-content">` with a `<button class="modal-close" aria-label="Close">` and a `<div class="modal-body">` placeholder
    - _Requirements: 7.1, 7.3_

  - [ ] 8.2 Style the Modal in `styles.css`
    - Overlay: `position: fixed; inset: 0; background: rgba(0,0,0,0.7); display: none` (shown via `.modal--open`)
    - `.modal--open`: `display: flex` (centered)
    - `.modal-content`: `max-height: 90vh; overflow-y: auto`, `border-radius: var(--radius-card)`, glassmorphism background, `transform: scale(0.95)` → `scale(1)` + `opacity` transition
    - _Requirements: 7.9, 7.10, 11.3, 11.4_

  - [ ] 8.3 Implement `openModal` and `closeModal` in `script.js`
    - `openModal(projectId)`: call `getModalContent(projectId, PROJECT_DATA)`, guard null result with `console.warn`, populate `.modal-body` with name/description/features/techStack/YouTube iframe, add `modal--open` to overlay, set `document.body.style.overflow = 'hidden'`
    - `closeModal()`: remove `modal--open`, restore `document.body.style.overflow = ''`
    - Attach `click` on `.btn-details` buttons → `openModal(dataset.project)`
    - Attach `click` on `#modal-overlay` → close if `event.target === overlay`
    - Attach `click` on `.modal-close` → `closeModal()`
    - Attach `keydown` on `document` → `closeModal()` on `Escape`
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8_

- [ ] 9. Checkpoint — core sections complete
  - Ensure all tests pass, ask the user if questions arise.
  - Verify in browser: navbar, hero, about, skills, projects grid, and modal all render and function correctly before proceeding.

- [ ] 10. Build the Contact Section
  - Add `<section id="contact">` with `<div class="contact-content reveal">` containing icon+link rows for email (`samra@example.com`), LinkedIn, and GitHub
  - All links: `target="_blank" rel="noopener noreferrer"`
  - Style with flex column layout, icon sizing, hover accent color
  - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [ ] 11. Implement Scroll-Reveal system
  - [ ] 11.1 Add Intersection Observer logic to `script.js`
    - Feature-detect `IntersectionObserver`; if unsupported, remove `reveal` class from all elements so they remain visible
    - Check `window.matchMedia('(prefers-reduced-motion: reduce)').matches`; if true, skip observer setup and make all `.reveal` elements immediately visible
    - Otherwise, create one `IntersectionObserver` with `threshold: 0.15`; on intersection add `reveal--visible` to entry target and unobserve it
    - Observe all `.reveal` elements: `.about-content`, `.skill-tag`, `.project-card`, `.contact-content`
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

  - [ ] 11.2 Add reveal CSS to `styles.css`
    - `.reveal`: `opacity: 0; transform: translateY(30px)`
    - `.reveal--visible`: `opacity: 1; transform: translateY(0); transition: opacity 0.6s ease, transform 0.6s ease`
    - `@media (prefers-reduced-motion: reduce)`: override `.reveal` and `.reveal--visible` to remove transitions and set opacity 1
    - _Requirements: 9.2, 9.4_

- [ ] 12. Implement Back-to-Top button
  - Add `<button id="back-to-top" aria-label="Back to top">` markup to `index.html`
  - Style in `styles.css`: `position: fixed; bottom: 2rem; right: 2rem`, hidden state `opacity: 0; pointer-events: none`, visible state `opacity: 1; pointer-events: auto`, `transition: opacity var(--transition-base)`
  - In `script.js` scroll listener: call `isScrolled(window.scrollY, 300)` → toggle visible class on `#back-to-top`
  - Click handler: `window.scrollTo({ top: 0, behavior: 'smooth' })`
  - _Requirements: 10.1, 10.2, 10.3, 10.4_

- [ ] 13. Responsive polish and visual theme pass
  - Audit all sections at 320 px, 600 px, 768 px, 1024 px, and 1920 px viewport widths; fix any overflow or layout issues
  - Confirm `border-radius` ≥ 12 px on all cards and modals
  - Confirm glassmorphism (`backdrop-filter: blur`) applied to Navbar and cards with `@supports` fallback
  - Confirm CSS custom properties cover all primary colors, font sizes, and spacing
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6_

- [ ] 14. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests (tasks 2.2, 2.4, 2.5) validate the two pure functions extracted from `script.js`
- Unit tests and property tests use Vitest + fast-check; run with `npx vitest --run`
