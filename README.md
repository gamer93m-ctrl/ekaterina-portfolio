# Ekaterina — Portfolio

A single-page portfolio for a product designer. Built as a lightweight static
site (HTML + CSS + a touch of JS), based on a Figma design.

## Sections
- **Hero** — name, role, intro, quick links
- **Work** — alternating project rows with phone mockups
- **About** — short narrative
- **Get in touch** — contact links

## Run locally
Any static server works, e.g.:

```bash
npx serve .
```

Then open the printed URL.

## Deploy (GitHub Pages)
This repo is set up to publish from the `main` branch root. Once Pages is
enabled, the site is live at the repository's Pages URL.

## Customize
- Edit copy and projects in `index.html`.
- Swap the placeholder `.phone` blocks for real screenshots (drop images in and
  set them as `background-image`, or replace with `<img>`).
- Update contact links in the footer.
- Colors and spacing live as CSS variables at the top of `styles.css`.
