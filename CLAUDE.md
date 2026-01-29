# Pelican Forecasting Group Website

## Overview
Marketing website for Pelican Forecasting Group, a construction data analytics consultancy. Built with React + TypeScript + Vite.

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (port 8080)
npm run dev

# Production build
npm run build

# Lint
npm run lint
```

## Tech Stack
- **Framework:** React 18.3 + TypeScript
- **Build:** Vite 5.4
- **Styling:** Tailwind CSS 3.4 with custom theme
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Routing:** React Router DOM 6

## Project Structure

```
src/
├── components/
│   ├── landing/          # Landing page components
│   │   ├── LandingHero.tsx       # Hero with logo + main CTA
│   │   ├── WhatWeDo.tsx          # Services overview (3 cards)
│   │   ├── Differentiator.tsx    # "Enterprise Capabilities" card
│   │   ├── Credibility.tsx       # "I've Been in Your Shoes" card
│   │   ├── ConsultationForm.tsx  # Lead capture form
│   │   ├── FloatingCard.tsx      # Reusable card with accent borders
│   │   ├── FixedVideoBackground.tsx
│   │   └── SimpleFooter.tsx
│   ├── navigation/       # Navbar components
│   ├── sections/         # Reusable page sections
│   ├── estimating-maturity/  # Assessment tool
│   ├── ui/              # shadcn/ui components
│   └── layout/          # Layout wrappers
├── pages/               # Route pages
│   ├── Index.tsx        # Landing page (/)
│   ├── About.tsx        # About page (/about)
│   ├── Services.tsx     # Services (/services)
│   ├── Contact.tsx      # Contact (/contact)
│   ├── Resources.tsx    # Resources (/resources)
│   ├── EstimatingMaturity.tsx  # Assessment (/estimating-maturity)
│   └── NotFound.tsx     # 404
├── styles/              # Global CSS
├── hooks/               # Custom React hooks
└── lib/                 # Utilities
```

## Brand Colors

```
pelican-navy:   #1a2e4a (Primary / Footer)
pelican-teal:   #3fa9b8 (Secondary)
pelican-orange: #ff8f1c (Accent / CTA buttons)
pelican-cream:  #f8fafb (Background)
```

## Card Styling Pattern

All landing page cards use `FloatingCard` component with:
- `accentBorder="top"` - Gold/orange top border
- `bottomBorder` - Navy bottom border (matches footer)

## Forms

Consultation form submits to Formspree:
- **Endpoint:** `https://formspree.io/f/xvgkqbke`
- **File:** `src/components/landing/ConsultationForm.tsx`
- **Status:** Needs email configuration (see Next Steps)

## Assets

- **Logo:** `/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png`
- **Background video:** `/public/videos/dither-bg.webm`
- **Favicon:** Same as logo (configured in `index.html`)

## Image Placeholders (Need Content)

| Card | Aspect Ratio | Suggested Content |
|------|--------------|-------------------|
| "Enterprise Capabilities" | 16:9 (video) | Intro video, whiteboard explanation, or data viz |
| "I've Been in Your Shoes" | 4:3 (image) | Professional photo at job site or with equipment |

## Development Notes

- Dev server runs on port 8080
- Uses path alias `@/` → `src/`
- TypeScript configured with relaxed strict mode
- Tailwind dark mode enabled (class-based)

## Deployment

Built with Lovable platform. Deploy via:
1. Push to GitHub
2. Lovable auto-deploys, or
3. Manual deploy to Netlify/Vercel

Custom domain: `pelicanforecasting.com` (configured via CNAME)

---

## Next Steps

### 1. Domain Email Setup
- Set up Google Workspace for @pelicanforecasting.com
- Configure MX records for domain

### 2. Form Backend Configuration
- Update Formspree account email to @pelicanforecasting.com
- Test form submission delivery

### 3. Content Additions
- Add video/image to "Enterprise Capabilities" card
- Add image to "I've Been in Your Shoes" card

### 4. Mobile Optimization (Low Priority)
- Improve logo/title layout on mobile (stack or center)
