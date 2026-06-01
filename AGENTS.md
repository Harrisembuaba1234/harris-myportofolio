# Agent Notes

## Quick start
- Use `npm install` (repo uses `package-lock.json`).
- Dev server: `npm run dev` (Vite).
- Build: `npm run build`.
- Lint: `npm run lint` (ESLint flat config in `eslint.config.js`, ignores `dist`).
- Preview build: `npm run preview`.

## App structure
- Entry point is `src/main.jsx`; it imports global styles and initializes AOS before rendering.
- Routes are defined in `src/App.jsx`; home is a single-page composition, project detail is `"/project/:id"`.
- Tailwind is wired via `@tailwindcss/vite` and `@import "tailwindcss";` in `src/index.css`.

## Styling/assets
- Global styles live in `src/index.css`; component styles in `src/App.css`.
- Icon/animation CSS is imported in `src/main.jsx` (tippy, devicon, boxicons, aos).
