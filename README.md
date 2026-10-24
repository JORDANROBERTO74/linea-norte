# Línea Norte

Honest furniture and objects, designed in Madrid and made in small batches across Spain. This is the storefront for **Línea Norte** — a bilingual (English / Spanish) furniture site built with Next.js.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4**
- **TypeScript** (strict)
- **pnpm**

## Features

- **Bilingual** — English (default) and Spanish, with automatic browser-language detection and a persisted language cookie.
- **Catalog** — filterable collection of seating, tables, lighting and storage.
- **Product pages** — details, materials and dimensions with `Product` structured data.
- **Cart** — client-side cart persisted to `localStorage` (no payment is processed; it is a demonstration cart).
- **Journal** — editorial articles with `Article` structured data.
- **SEO** — per-route metadata, canonical + `hreflang`, Open Graph image, sitemap and robots.
- **Accessible & responsive** — skip link, focus-visible states, keyboard-friendly navigation and reduced-motion support.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The root path redirects to your preferred locale (`/en` by default).

### Useful scripts

```bash
pnpm build       # production build
pnpm start       # serve the production build
pnpm lint        # run ESLint
pnpm typecheck   # run TypeScript
```

## Environment

| Variable               | Purpose                                              |
| ---------------------- | ---------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for metadata, sitemap and hreflang. |

Copy `.env.example` to `.env.local` when deploying to a custom domain. Without it, the site falls back to the Vercel production domain.

## Project structure

```
src/
  app/            # App Router: [locale] routes, sitemap, robots, OG image
  components/     # UI, layout, product, cart, home and journal components
  config/         # site and region (currency, shipping) settings
  data/           # products and articles (localized content)
  i18n/           # locales, dictionaries and the dictionary loader
  lib/            # cart, formatting, SEO and utility helpers
  providers/      # cart context (localStorage)
  proxy.ts        # locale detection and redirect middleware
```

## License

MIT
