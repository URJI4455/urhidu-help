# URHIDU Company Docs
## Website Development Questionnaire Guide v1.0

A complete, production-ready documentation website built with pure HTML5, CSS3, and Vanilla JavaScript. No frameworks, no build tools, and no bloat. Designed to guide clients professionally through the URHIDU website development questionnaire process.

---

## 🚀 Features Implemented

### User Experience & Layout
- **Live Search (New!):** Vanilla JS powered, real-time search with a dropdown UI. Instantly filters through documentation pages. Includes `⌘K` / `Ctrl+K` keyboard shortcut.
- **Sticky Navigation:** Left sidebar with nested navigation, collapsible sections, and an active page gold-accent highlight.
- **Top Header:** Fixed top header with a responsive search bar, brand logo, and call-to-action buttons.
- **Mobile First:** Fully responsive. The sidebar tucks into a smooth hamburger drawer on mobile devices.
- **Breadcrumbs:** Clear path navigation on every page to prevent user disorientation.

### Custom UI Components
- Information, Warning, and Tip boxes
- Gold Note Cards for premium styling
- Numbered Progress Steps
- FAQ Accordions (click to expand/collapse)
- Clean, structured Data Tables
- Option Select Cards for visual multiple-choice

### Branding & Tech
- **Zero Dependencies:** No React, no Tailwind, no jQuery. Just clean, semantic HTML and CSS. Loads instantly.
- **Custom 3D Logo Integration:** Features the URHIDU golden 3D orbit logo across the favicon, header, sidebar, and footer.
- **Accessibility:** ARIA labels, semantic landmark tags (`<nav>`, `<aside>`, `<main>`, `<footer>`), and screen-reader safe.
- **SEO Ready:** Open Graph tags, semantic heading hierarchy, and meta descriptions included.

---

## 📁 Project Structure

```text
/urhidu-docs
│
├── index.html                        ← Documentation homepage (Overview)
│
├── /css
│   ├── style.css                     ← CSS variables, reset, base styles
│   ├── layout.css                    ← Header, sidebar, main content, footer layout
│   ├── components.css                ← All reusable UI components
│   ├── typography.css                ← Heading, body, list, and text styles
│   └── responsive.css                ← Tablet, mobile, print breakpoints
│
├── /js
│   └── search.js                     ← Vanilla JS live search logic
│
├── /assets
│   └── /logo
│       └── logo.png                  ← URHIDU 3D Golden Logo (Favicon & Site Logo)
│
└── /pages
    ├── organization-profile.html     ← Section 01: Organizational Profile
    ├── contact-information.html      ← Section 02: Contact Information
    ├── website-purpose.html          ← Section 03: Website Purpose & Payment
    ├── target-audience.html          ← Section 04: Target Audience
    ├── branding-identity.html        ← Section 05: Branding & Identity
    └── required-questions.html       ← Section 06: General Requirements
