# Venediktova Ekaterina — Portfolio

A single-page portfolio for a product designer, built pixel-by-pixel from the
Figma frames as a lightweight static site (HTML + CSS).

## Structure
- **Hero** — name (160px), role (48px), 2-line description, CV / Telegram / HH.RU chips
- **Cases** — info column (436px) + three phone screens, repeated
- **About** — narrative with real inline images from the frames
- **Footer** — `GET IN TOUCH` (200px) on black, contacts + arrow

All real image assets (phone screens, about images) are exported from the
Figma file and live in `img/`.

## Fonts
The design uses **Neue Montreal** (commercial — not redistributable here).
Drop `NeueMontreal-Regular.woff2` and `NeueMontreal-Medium.woff2` into `fonts/`
and the `@font-face` rules pick them up automatically. Until then the site
falls back to a neutral grotesk (Inter) so the layout stays intact.

## Run locally
```bash
npx serve .
```

## Deploy
Published via GitHub Pages from the `main` branch root:
https://gamer93m-ctrl.github.io/ekaterina-portfolio/
