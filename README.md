# Intellect Techcon Solutions

A multi-page marketing website for Intellect Techcon Solutions, built with React, React Router DOM, Tailwind CSS, and lucide-react.

## Features

- Client-side routing with React Router DOM
- Reusable components for Navbar, Footer, hero sections, cards, and CTAs
- Dynamic solution pages powered by a central data file (`src/data/solutions.js`)
- Responsive mobile navigation with drawer menu
- Intersection Observer fade-in animations for page sections
- Minimalist premium B2B design system matching the provided color palette

## Available Scripts

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

- `src/App.jsx` — main application and route configuration
- `src/components/` — shared UI components
- `src/pages/` — page views for Home, Solutions, About, Contact, and dynamic solution detail pages
- `src/data/solutions.js` — central data source for all solution information
- `src/index.css` — Tailwind CSS setup and global styles

## Contact

- **Email:** sales@intellecttechcon.com
- **Phone:** +971 50 6930558
- **Address:** P.O.Box 88878, Dubai, United Arab Emirates

## Notes

- The contact form uses controlled React state and a button-based submit flow (no HTML `<form>` element).
- Individual solution pages are rendered from a single template using route parameters.
