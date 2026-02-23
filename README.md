# Villani Sports Group — Next.js Website

A modern, responsive marketing website built with **Next.js 14 + TypeScript + Tailwind CSS**, based on the VSG pitch deck.

## Pages
- `/` — Home (hero, opportunity stats, why aggregation works, sponsor demands)
- `/about` — Founder bio, mission, VSG solution snapshot, what VSG does NOT do, next steps
- `/solution` — VSG model, aggregation strategy, Year 1 rollout timeline, revenue model, go-to-market
- `/sponsors` — Sponsor demands, aggregated framework, target categories & priority companies
- `/leagues` — Current commercial reality, why aggregation works, governance table, target partner profile
- `/contact` — Lead capture form + process recap sidebar

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS with custom VSG brand colors
- Google Fonts: Barlow + Barlow Condensed

## Brand Colors
- **Navy:** `#021b3b`
- **Orange:** `#f36b21`
- **Light background:** `#f5f5f7`

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Customization

### Adding Real Images
Replace placeholder image URLs in:
- `app/about/page.tsx` — founder portrait
- `app/globals.css` — rink background in `.rink-bg`

### Adding a Real Form Backend
The contact form in `app/contact/page.tsx` is currently front-end only. 
Integrate with your preferred service (Formspree, Resend, SendGrid, etc.) in the `handleSubmit` function.

### Updating Content
All content is in the page files under `app/`. Each page file has comments indicating which slide it maps to.
