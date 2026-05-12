# KIQ Labs Global — Landing

Modern landing for KIQ Labs Global, an international B2B distributor of vitamins and dietary supplements.

## Stack

- **Next.js 15** (App Router, React 19)
- **TypeScript**
- **Tailwind CSS v4** (CSS-first config via `@theme`)
- **Motion** (formerly Framer Motion) — animations
- **Lenis** — smooth scroll
- **Lucide React** — icons
- **Fraunces** (variable serif) · **Geist** · **JetBrains Mono** — typography

## Run

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Project structure

```
app/
  layout.tsx        # fonts, metadata, Lenis provider
  page.tsx          # section composition
  globals.css       # Tailwind v4 theme + design tokens
components/
  ui/
    media-placeholder.tsx
    lenis-provider.tsx
  sections/
    navigation.tsx
    hero.tsx
    about.tsx
    services.tsx
    brands.tsx
    markets.tsx
    advantages.tsx
    contact.tsx
    footer.tsx
lib/
  utils.ts
public/
  media/            # drop replacement media here
```

## Media placeholders

Visual slots use `<MediaPlaceholder />`. Replace any of them with `<Image />` from `next/image` once final assets are dropped into `public/media/`.

Example replacement:

```tsx
import Image from "next/image";

<Image
  src="/media/hero-a.jpg"
  alt="Lab scene"
  fill
  className="object-cover"
/>
```

## Design tokens

All colors and font tokens live in `app/globals.css` under `@theme`. Edit values there and they propagate site-wide.
