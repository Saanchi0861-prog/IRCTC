# 🚆 IRCTC Next Generation e-Ticketing — Frontend Replica

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-2ea44f?style=for-the-badge)
![Status](https://img.shields.io/badge/Build-Complete-success?style=for-the-badge)

A multi-page, responsive frontend clone of the **Indian Railway Catering and Tourism Corporation (IRCTC)** Next Generation e-Ticketing web portal, engineered from the ground up using **HTML5, CSS3, and Vanilla JavaScript**.

This project replicates the information architecture, high-density booking widgets, multi-step reservation flows, and utility dashboards of India's primary railway ticketing platform—built entirely without third-party UI libraries or CSS frameworks to demonstrate core frontend engineering fundamentals.

---

## 📖 Table of Contents

- [Overview & Motivation](#-overview--motivation)
- [End-to-End User Journey](#-end-to-end-user-journey)
- [Key Features](#-key-features)
- [Page-by-Page Architecture](#-page-by-page-architecture)
- [JavaScript & DOM Logic Breakdown](#-javascript--dom-logic-breakdown)
- [UI/UX Design System & Responsiveness](#-uiux-design-system--responsiveness)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Manual QA & Testing Checklist](#-manual-qa--testing-checklist)
- [Roadmap & Future Enhancements](#-roadmap--future-enhancements)
- [Contributing](#-contributing)
- [Disclaimer](#-disclaimer)
- [Author](#-author)

---

## 🎯 Overview & Motivation

Enterprise-scale public utility portals like IRCTC balance an extraordinary density of information—station codes, travel quotas, coach classes, PNR tracking, live alerts, and tourism packages—while needing to remain navigable for millions of daily users. Rebuilding this interface served as a deep-dive exercise in:

- **Information Hierarchy & Density Management:** Organizing complex booking controls, service icons, and promotional cards without visual clutter.
- **Stateful Multi-Page Flows:** Passing search parameters and simulating realistic booking interactions across linked static pages.
- **Pure Vanilla JavaScript Engineering:** Managing event delegation, dynamic DOM updates, form validation, and modal states cleanly without framework abstractions.
- **Responsive Layout Engineering:** Translating a desktop-heavy portal into a touch-friendly mobile experience using CSS Grid and Flexbox.

---

## 🧭 End-to-End User Journey

1. **Discovery & Route Input (`index.html`):** Users enter their **Origin** and **Destination** stations (with a one-click swap toggle), pick a valid travel date, and filter by **Class** and **Quota**.
2. **Train Selection & Availability Check (`trains.html`):** Users compare matching trains by departure/arrival windows, running days (`M T W T F S S`), and click across class tabs (`SL`, `3A`, `2A`, `1A`) to inspect seat availability (`AVL`, `RAC`, `WL`) and base fares.
3. **PNR Verification (`pnr.html`):** Users enter a 10-digit PNR number to view simulated booking confirmation statuses, coach/berth allocations, and charting updates.
4. **Account Access (`login.html`):** Users can sign in or register through a structured authentication flow featuring inline validation and interactive security prompts.

---

## ✨ Key Features

- **Interactive Train Search & Booking Widget:**
  - Source-to-destination inputs with an animated **station swap button**.
  - Date picker restricted against past dates.
  - Full class selector (`All Classes`, `Anubhuti Class (EA)`, `AC First Class (1A)`, `Vistadome AC (EV)`, `Exec. Chair Car (EC)`, `AC 2 Tier (2A)`, `First Class (FC)`, `AC 3 Tier (3A)`, `AC 3 Economy (3E)`, `AC Chair Car (CC)`, `Sleeper (SL)`, `Second Sitting (2S)`).
  - Quota filters (`General`, `Ladies`, `Lower Berth/Sr. Citizen`, `Person With Disability`, `Duty Pass`, `Tatkal`, `Premium Tatkal`).
  - Quick checkbox options for *Person With Disability Concession*, *Flexible With Date*, *Train with Available Berth*, and *Railway Pass Concession*.
- **Dynamic Train Listings & Fare Cards:**
  - Structured train schedule headers displaying train name, number, origin/destination stations, and total journey duration.
  - Interactive class cards that dynamically reveal seat counts, waitlist statuses, and updated ticket pricing on click.
- **10-Digit PNR Status Enquiry:**
  - Real-time input validation ensuring numeric 10-digit formatting before triggering status lookups.
- **Authentication & User Onboarding:**
  - Clean Login and Registration views with password show/hide toggles, captcha refresh simulation, and clear error feedback states.
- **IRCTC Ecosystem & Holiday Packages Grid:**
  - Dedicated quick-launch icon grid for *Flights*, *Hotels*, *Rail Drishti*, *E-Catering*, *Bus*, *Holiday Packages*, *Tourist Train*, *Hill Railways*, and *Charter Train*.
  - Curated tourism cards highlighting *Maharajas' Express*, *International Packages*, *Domestic Air Packages*, and *Bharat Gaurav Tourist Trains*.

---

## 🖥️ Page-by-Page Architecture

| Page / View | File | Core Components & Functionality |
| :--- | :--- | :--- |
| **Home / Booking Portal** | `index.html` | Top navigation bar with live IST clock, hero booking card, service quick-links grid, holiday showcase cards, and multi-column footer. |
| **Train Search Results** | `trains.html` | Modify-search top bar, sidebar filters (class, quota, departure time), train result cards, and interactive seat availability drawers. |
| **PNR Status Enquiry** | `pnr.html` | Centered 10-digit PNR lookup card, input sanitization, and tabular passenger status output. |
| **Login & Registration** | `login.html` | Tabbed or dedicated sign-in/sign-up forms, password visibility toggle, and client-side validation alerts. |

---

## ⚙️ JavaScript & DOM Logic Breakdown

The client-side JavaScript layer (`js/script.js`) is structured around modular, single-responsibility functions:

- **Station Swap Handler:** Captures `From` and `To` input values, swaps their strings, and toggles a CSS rotation class on the swap icon for tactile visual feedback.
- **Date Validation & Live Clock:** Initializes the journey date input's `min` attribute to today's date (`YYYY-MM-DD`) and updates the header timestamp every second.
- **Form & PNR Validation:** Intercepts form submissions to check for empty station fields, identical origin/destination inputs, or invalid PNR lengths, displaying non-intrusive inline validation messages.
- **Dynamic Availability & Fare Toggling:** Listens for clicks on coach class cards (`SL`, `3A`, `2A`, `1A`) to highlight active selections and update displayed fare summaries.
- **Mobile Navigation Drawer:** Toggles responsive hamburger menu states and accordion dropdowns on smaller viewports.

---

## 🎨 UI/UX Design System & Responsiveness

### Color Palette
| Token | Hex | Usage |
| :--- | :--- | :--- |
| **Primary Navy** | `#213D77` | Headers, primary buttons, active tabs, and structural anchors |
| **Accent Orange** | `#FB792B` | Primary CTAs (`Search`, `Book Now`), highlights, and hover indicators |
| **Confirmed Green** | `#2E7D32` | `AVAILABLE` seat indicators and positive status badges |
| **Alert Amber / Red** | `#D32F2F` | `WL` / `RAC` notices, validation errors, and important railway alerts |
| **Surface Light** | `#F4F6F9` | Page backgrounds and card containers for clean visual separation |

### Responsive Breakpoints
- **Desktop (`> 1024px`):** Multi-column booking grid, full horizontal navbar, and side-by-side filter + result layouts.
- **Tablet (`768px – 1024px`):** 2-column service grids, condensed navigation links, and stacked form rows.
- **Mobile (`< 768px`):** Single-column card stacking, full-width touch targets (`min-height: 44px`), collapsible navigation drawer, and horizontally scrollable class tabs.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), accessible form `<label>` associations, and ARIA attributes.
- **CSS3:** CSS Custom Properties (`:root` variables), Flexbox, CSS Grid, smooth keyframe/transition animations, and mobile-first media queries.
- **JavaScript (ES6+):** Strict-mode scripts utilizing `querySelector`, `addEventListener`, template literals, and `URLSearchParams` / `localStorage` for state continuity.

---

## 📂 Project Structure

```text
IRCTC/
├── index.html          # Main landing page with Book Ticket widget & service highlights
├── trains.html         # Train search results & class/seat availability view
├── pnr.html            # PNR status check page
├── login.html          # User authentication / registration interface
├── css/
│   └── style.css       # Core stylesheet, design tokens, component styles & media queries
├── js/
│   └── script.js       # Interactive UI logic, station swap, validation & dynamic rendering
└── assets/             # Logos, railway service icons, and promotional banner imagery
