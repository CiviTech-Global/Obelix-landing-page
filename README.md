# Obélix — French Restaurant Landing Page

A modern, immersive landing page for **Obélix**, a contemporary French restaurant in Chicago's River North neighborhood.

## Live Site

> Deployed via GitHub Pages: `https://<your-username>.github.io/Obelix-landing-page/`

## About

This project reimagines the original Obélix Squarespace site with:

- **Editorial luxury aesthetic** — burgundy, cream, gold, and charcoal palette
- **Advanced animations** — GSAP ScrollTrigger, parallax, image mask reveals, magnetic buttons, smooth Lenis scroll
- **Mobile-first responsive design** — optimized for the 60–80% of restaurant traffic that comes from mobile
- **Conversion-focused UX** — prominent OpenTable reservations, menus, private events, and contact info
- **SEO & accessibility** — semantic HTML, meta tags, focus states, reduced-motion support

## Tech Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/)
- [Lenis](https://lenis.studiofreight.com/) smooth scroll
- [Lucide React](https://lucide.dev/) icons

## Sections

1. **Hero** — full-screen crossfading imagery with call-to-action
2. **Our Story** — Poilevey family legacy and chef pedigree
3. **The Experience** — signature dishes and dining highlights
4. **Menus** — interactive tabs with sample dishes and PDF links
5. **Private Events** — full buyouts and large parties
6. **Reservations** — hours, address, phone, and embedded map
7. **Footer** — links, social, and contact

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## GitHub Pages Deployment

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Use the included workflow (`.github/workflows/deploy.yml`) to build and deploy automatically on every push to `main`.

## Assets

Food and interior photography sourced from the owner's downloaded Google Maps image collection, used for demonstration purposes.

## Credits

- Design & development: AI-assisted rebuild for Obélix Chicago
- Original content: [obelixchicago.com](https://www.obelixchicago.com/)
