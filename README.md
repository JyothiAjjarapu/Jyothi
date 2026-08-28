# Jyothi Ajjarapu — Portfolio

My personal portfolio site — built with React and Vite. It's where I put my projects, experience, and a bit of my non-coding side (sketches, clay models, all that).

**Live site:** https://jyothiajjarapu.netlify.app/

## What's in it

- Home page with about, skills, projects, education, experience, and a contact form
- A separate `/hobbies` page for sketches and clay models
- Light/dark theme toggle (remembers your choice)
- Fully responsive, works down to small phone screens

## Built with

React · React Router · Vite · CSS (no framework) · Formspree (contact form) · FontAwesome

## Concepts I used

A quick glimpse under the hood, for anyone browsing the code:

- **React Hooks & Context API** — `useState`/`useEffect` for local state, a custom `useTheme()` hook + Context for the light/dark toggle that persists via `localStorage`
- **Component reuse** — one `Timeline` component powers both Education and Experience; one `ProjectsCard` renders every project from a plain data array
- **Client-side routing** — React Router for the `/hobbies` page, plain anchor links + `scroll-behavior: smooth` for in-page sections
- **CSS variables for theming** — every color is a custom property (`--accent-color`, `--bg-color`, etc.), so both themes are defined once in one file instead of scattered inline styles
- **Responsive design** — Flexbox layouts with deliberate breakpoints (not just "wrap and hope"), tested down to 320px wide
- **Third-party API integration** — Formspree handles the contact form without needing my own backend

## Running it locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Deploying

Pushing to `main` auto-deploys via Netlify.

---

Feel free to poke around the code. If something looks off, open an issue.
