# Nucleus Client Deck — Slides Web App

This is a React app that turns the 15 HTML slides into a single web app with keyboard navigation.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173 and use **←** and **→** arrow keys (or the on-screen buttons) to move between slides.

## Build for production

```bash
npm run build
```

Output is in `dist/`. Serve that folder with any static host (Vercel, Netlify, GitHub Pages, or your own server) to host on a domain.

## Deploy examples

- **Vercel:** `npx vercel` in this directory (or connect the repo in the Vercel dashboard).
- **Netlify:** Drag the `dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop) or connect the repo.
- **Any static host:** Upload the contents of `dist/` to your server’s web root.

## Regenerating slide data

If you change the original `1.html`–`15.html` files in the parent folder, regenerate the slide data:

```bash
cd ..   # to client_deck
node extract-slides.js
```

Then rebuild the app with `npm run build`.
