# Requirements Document

## Introduction

A modern, responsive single-page portfolio website for Samra, a senior Flutter developer with 4+ years of experience. The site is built using pure HTML, CSS, and minimal vanilla JavaScript (no frameworks). It features a dark theme, glassmorphism-style UI, smooth animations, and showcases 8 real-world Flutter projects with modal detail views. The site targets potential clients and employers on both mobile and desktop devices.

## Glossary

- **Portfolio_Site**: The single-page HTML/CSS/JS application described in this document
- **Navbar**: The sticky navigation bar fixed at the top of the viewport
- **Hero_Section**: The full-viewport introductory section with name, tagline, and CTA buttons
- **About_Section**: The section describing Samra's background and experience
- **Skills_Section**: The section displaying technology skills as visual tags or cards
- **Projects_Section**: The section displaying a grid of project cards
- **Project_Card**: A clickable card in the Projects_Section representing one project
- **Project_Modal**: An overlay dialog showing full project details when a Project_Card is activated
- **Contact_Section**: The section containing contact links and email placeholder
- **Scroll_Reveal**: An animation that fades/slides elements into view as the user scrolls
- **Back_To_Top_Button**: A floating button that scrolls the page back to the top
- **CTA_Button**: A call-to-action button in the Hero_Section
- **Viewport**: The visible area of the browser window

---

## Requirements

### Requirement 1: Single-Page Application Structure

**User Story:** As a visitor, I want a single cohesive page, so that I can browse all portfolio content without navigating away.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL be delivered as a single `index.html` file
2. THE Portfolio_Site SHALL include all styles in a linked `styles.css` file or an embedded `<style>` block within `index.html`
3. THE Portfolio_Site SHALL include all scripts in a linked `script.js` file or an embedded `<script>` block within `index.html`
4. THE Portfolio_Site SHALL NOT depend on any JavaScript framework or library (no React, Vue, Angular, jQuery, etc.)
5. THE Portfolio_Site SHALL load Google Fonts (Poppins or Inter) via CDN `<link>` tag
6. THE Portfolio_Site SHALL load an icon library (e.g., Font Awesome or Remix Icons) via CDN `<link>` tag

---

### Requirement 2: Sticky Navigation Bar

**User Story:** As a visitor, I want a navigation bar that stays visible while I scroll, so that I can jump to any section at any time.

#### Acceptance Criteria

1. THE Navbar SHALL remain fixed at the top of the Viewport at all scroll positions
2. THE Navbar SHALL contain anchor links to each section: Hero, About, Skills, Projects, and Contact
3. WHEN a Navbar anchor link is clicked, THE Portfolio_Site SHALL scroll smoothly to the target section using CSS `scroll-behavior: smooth` or equivalent JavaScript
4. WHEN the page scroll position exceeds 50px from the top, THE Navbar SHALL apply a background blur or semi-transparent dark background to remain legible over page content
5. THE Navbar SHALL display a hamburger menu icon on viewports narrower than 768px
6. WHEN the hamburger menu icon is clicked, THE Navbar SHALL toggle a vertical dropdown menu containing all section links
7. WHEN a dropdown menu link is clicked, THE Navbar SHALL close the dropdown menu

---

### Requirement 3: Hero Section

**User Story:** As a visitor, I want an impactful introduction, so that I immediately understand who Samra is and what she does.

#### Acceptance Criteria

1. THE Hero_Section SHALL occupy 100% of the initial Viewport height (`100vh`)
2. THE Hero_Section SHALL display the name "Samra" as the primary heading
3. THE Hero_Section SHALL display the title "Flutter Developer" beneath the name
4. THE Hero_Section SHALL display the tagline "Building scalable mobile apps with Flutter"
5. THE Hero_Section SHALL contain a "View Projects" CTA_Button that scrolls smoothly to the Projects_Section when clicked
6. THE Hero_Section SHALL contain a "Contact Me" CTA_Button that scrolls smoothly to the Contact_Section when clicked
7. WHEN the Hero_Section is first rendered, THE Portfolio_Site SHALL animate the heading, tagline, and CTA_Buttons with a fade-in effect

---

### Requirement 4: About Section

**User Story:** As a potential employer or client, I want to read about Samra's background, so that I can assess her experience and expertise.

#### Acceptance Criteria

1. THE About_Section SHALL state that Samra has 4+ years of Flutter development experience
2. THE About_Section SHALL mention experience with real-time systems, REST APIs, and scalable mobile applications
3. THE About_Section SHALL reference key technologies: Firebase, WebSockets, and Google Maps
4. THE About_Section SHALL be fully readable on viewports as narrow as 320px

---

### Requirement 5: Skills Section

**User Story:** As a visitor, I want to see Samra's technical skills at a glance, so that I can quickly evaluate her technology stack.

#### Acceptance Criteria

1. THE Skills_Section SHALL display each skill as a styled tag or card element
2. THE Skills_Section SHALL include the following skills: Flutter, Dart, GetX, Provider, Bloc, Firebase Analytics, Firebase Crashlytics, FCM, Firebase Remote Config, REST APIs, WebSockets, Google Maps API, Branch.io, HealthKit, Google Fit
3. WHEN a skill tag is hovered on a pointer device, THE Skills_Section SHALL apply a highlight or scale animation to that tag
4. THE Skills_Section SHALL arrange skill tags in a responsive wrapping layout that adapts from a single column on narrow viewports to multiple columns on wider viewports

---

### Requirement 6: Projects Section — Card Grid

**User Story:** As a visitor, I want to browse Samra's projects in a visual grid, so that I can quickly scan her work.

#### Acceptance Criteria

1. THE Projects_Section SHALL display all 8 projects as Project_Cards in a CSS grid layout
2. THE Projects_Section SHALL display the following projects: ItyreCare, Sushi Guide, Lama, Junction, Expatio, GetFit, SelectnElect, ASAS
3. EACH Project_Card SHALL display the project name, a short description, and a set of tech stack tags
4. EACH Project_Card SHALL contain a "View Details" button
5. WHEN a Project_Card is hovered on a pointer device, THE Project_Card SHALL scale up slightly (e.g., `transform: scale(1.03)`) with a smooth CSS transition
6. THE Projects_Section grid SHALL display 1 column on viewports narrower than 600px, 2 columns on viewports between 600px and 1024px, and 3 columns on viewports wider than 1024px

---

### Requirement 7: Project Modal

**User Story:** As a visitor, I want to view full project details in an overlay, so that I can learn more without leaving the page.

#### Acceptance Criteria

1. WHEN the "View Details" button on a Project_Card is clicked, THE Portfolio_Site SHALL display the corresponding Project_Modal as a full-screen overlay
2. THE Project_Modal SHALL display the project name, full description, a features list, the complete tech stack, and a YouTube iframe placeholder
3. THE Project_Modal SHALL contain a close button
4. WHEN the Project_Modal close button is clicked, THE Portfolio_Site SHALL hide the Project_Modal
5. WHEN a click event occurs on the Project_Modal overlay background (outside the modal content area), THE Portfolio_Site SHALL hide the Project_Modal
6. WHEN the Escape key is pressed while a Project_Modal is visible, THE Portfolio_Site SHALL hide the Project_Modal
7. WHEN a Project_Modal is displayed, THE Portfolio_Site SHALL prevent the page body from scrolling
8. WHEN a Project_Modal is hidden, THE Portfolio_Site SHALL restore page body scrolling
9. THE Project_Modal SHALL animate into view with a fade-in and slight scale-up transition
10. THE Project_Modal content area SHALL be independently scrollable when its content exceeds the Viewport height

---

### Requirement 8: Contact Section

**User Story:** As a potential employer or client, I want to find Samra's contact information, so that I can reach out to her.

#### Acceptance Criteria

1. THE Contact_Section SHALL display an email address placeholder (e.g., `samra@example.com`)
2. THE Contact_Section SHALL display a LinkedIn profile link
3. THE Contact_Section SHALL display a GitHub profile link
4. WHEN a contact link is clicked, THE Portfolio_Site SHALL open the link in a new browser tab

---

### Requirement 9: Scroll Reveal Animations

**User Story:** As a visitor, I want content to animate into view as I scroll, so that the page feels dynamic and polished.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL implement Scroll_Reveal animations using the Intersection Observer API (no external animation library required)
2. WHEN a section or card enters the Viewport during scrolling, THE Portfolio_Site SHALL animate it with a fade-in and upward translate effect
3. THE Portfolio_Site SHALL apply Scroll_Reveal animations to: About_Section content, Skills tags, Project_Cards, and Contact_Section content
4. IF a user's browser or OS has `prefers-reduced-motion: reduce` set, THEN THE Portfolio_Site SHALL disable or minimize all animations

---

### Requirement 10: Back to Top Button

**User Story:** As a visitor who has scrolled far down the page, I want a quick way to return to the top, so that I don't have to scroll manually.

#### Acceptance Criteria

1. THE Back_To_Top_Button SHALL be positioned fixed in the bottom-right corner of the Viewport
2. WHEN the page scroll position is less than 300px from the top, THE Back_To_Top_Button SHALL be hidden
3. WHEN the page scroll position exceeds 300px from the top, THE Back_To_Top_Button SHALL become visible with a fade-in transition
4. WHEN the Back_To_Top_Button is clicked, THE Portfolio_Site SHALL scroll smoothly to the top of the page

---

### Requirement 11: Responsive Design and Visual Theme

**User Story:** As a visitor on any device, I want the site to look polished and be fully usable, so that I have a consistent experience regardless of screen size.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL use a dark background color of `#0f172a` or a visually equivalent dark navy tone as the base background
2. THE Portfolio_Site SHALL use Poppins or Inter loaded from Google Fonts as the primary typeface
3. THE Portfolio_Site SHALL apply `border-radius` of at least 12px to all card and modal elements
4. THE Portfolio_Site SHALL apply glassmorphism styling (semi-transparent background with `backdrop-filter: blur`) or soft box-shadow styling to card and Navbar elements
5. THE Portfolio_Site SHALL be fully usable and visually correct on viewports from 320px to 1920px wide
6. THE Portfolio_Site SHALL use CSS custom properties (variables) for primary colors, font sizes, and spacing to enable consistent theming
7. THE Portfolio_Site SHALL include a placeholder image or gradient background for each Project_Card to represent a future screenshot or video thumbnail
