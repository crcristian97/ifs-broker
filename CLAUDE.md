# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (http://localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

No tests configured.

## Architecture

**Next.js 16 App Router** with full i18n via `next-intl`. All user-facing routes live under `app/[locale]/`.

### i18n

- Supported locales: `es` (default), `en`
- Translations: `messages/es.json` and `messages/en.json`
- Routing config: `i18n/routing.ts`
- Navigation helpers (locale-aware `Link`, `useRouter`, `usePathname`): import from `@/i18n/navigation`, NOT from `next/navigation` or `next/link`
- Server components: `getTranslations()` / `getMessages()` from `next-intl/server`
- Client components: `useTranslations()` / `useLocale()` from `next-intl`

### Content sourcing

Content has two layers — **Prismic CMS** (primary) with **translation file fallback**:

- `prismicio.ts` — Prismic client config, route resolvers, `localeToLang()` / `langToLocale()` helpers (maps `es` ↔ `es-ar`, `en` ↔ `en-us`)
- `lib/prismic-helpers.ts` — typed fetch helpers: `getHomepage()`, `getServicePage()`, `getBlogPost()`, `getAllBlogPosts()`, `getNavigation()`
- `lib/prismic-to-messages.ts` — maps Prismic documents to the same shape as translation files for drop-in use
- `messages/es.json` and `messages/en.json` — static fallback; editing these is still the way to add/change content when Prismic data is absent
- `NEXT_PUBLIC_PRISMIC_ENVIRONMENT` env var overrides the Prismic repo name (defaults to `"ifs-broker"`)
- In production, Prismic responses are `force-cache` tagged `"prismic"`; in dev, `revalidate: 5`

### Route structure

```
app/
  layout.tsx                      # Root layout (html/body, fonts, global metadata)
  globals.css                     # Global styles (Tailwind v4)
  not-found.tsx                   # Root 404
  sitemap.ts / robots.ts          # SEO files (driven by NEXT_PUBLIC_SITE_URL)
  qr/page.tsx                     # QR code redirect page (no locale)
  slice-simulator/page.tsx        # Prismic slice simulator
  api/preview/route.ts            # Prismic draft/preview enable
  api/exit-preview/route.ts       # Prismic draft/preview disable
  [locale]/
    layout.tsx                    # Locale layout (NextIntlClientProvider + JSON-LD org schema)
    page.tsx                      # Home page
    seguros-de-vida/
    salud-internacional/
    fondos-de-retiro/
    servicios-complementarios/
    trabaja-con-nosotros/
    blog/[slug]/page.tsx          # Blog articles — slugs statically mapped to translation keys
```

### Components

Organized by domain in `components/`:

- `layout/` — `Navbar`, `Footer`, `hero-section`, `hero-subsection`
- `home/` — sections for the home page
- `segurovida/` — life insurance page components
- `saludinternacional/` — international health page components
- `servicioscomplementarios/` — complementary services components
- `ui/` — shared primitives (buttons, timeline, carousel, sliders, animations)

### Key conventions

- Path alias `@/*` maps to the project root
- All page/layout components are `async` and must `await params` (`params` is typed as `Promise<{locale: string}>`)
- `lib/utils.ts` provides `cn()` for className composition. **Note:** the `twMerge` is a no-op fallback — conflicting Tailwind utilities concatenate, not deduplicate
- `lib/site-layout.ts` exports `sitePaddingX`, `siteContainer`, and `heroVideoOffsetBelowNavbar` — use these constants for consistent horizontal gutters/max-width across layouts
- **Smooth scroll**: `lib/lenis.ts` exports `initLenis()` / `teardownLenis()` / `getLenis()`. Lenis is wired into the GSAP ticker and `ScrollTrigger`. Always call `initLenis()` client-side only (it guards against SSR)
- **Animations**: GSAP (with `ScrollTrigger`) for scroll-driven entry animations; Framer Motion for component-level motion
- `Navbar` accepts a `forceBlue` prop to switch from dark to blue styling (used on blog pages and servicios-complementarios)
- Background components (`particles-sky-background.tsx`) load particles.js from CDN — include `typeof window` guards, never call in SSR-only contexts
- Custom fonts: CSS variables `--font-heading` (Adagietto) / `--font-body` (Engravers Gothic BT) in `globals.css`; Tailwind v4 uses `@import "tailwindcss"` with no `tailwind.config.js`
- `NEXT_PUBLIC_SITE_URL` controls canonical URLs, JSON-LD schema, `sitemap.ts`, `robots.ts`; defaults to `https://ifsbroker.com`
- Remote image hostnames allowed: `images.unsplash.com`, `images.prismic.io`, `broker-ifs.cdn.prismic.io`, `advisorlinks.olelife.com`
