# Architecture - DuaDua Interior

Dokumen ini menjelaskan keputusan arsitektur utama yang digunakan dalam proyek.

## Rendering Strategy

### Server Components (Default)
Semua komponen adalah server component kecuali ditandai `"use client"`. Server components tidak mengirim JavaScript ke browser, mengurangi bundle size.

**Server components dalam proyek:**
- `hero.tsx` — konten statis dengan LinkButton (tidak perlu state)
- `about.tsx` — konten statis
- `services.tsx` — konten statis dengan Link
- `footer.tsx` — konten statis

**Client components (ditandai `"use client"`):**
- `navigation.tsx` — useState untuk mobile menu
- `portfolio.tsx` — useState untuk filter
- `contact.tsx` — useState untuk form, useMemo untuk WhatsApp message
- `faq.tsx` — useState untuk accordion
- `material-swatches.tsx` — useState untuk kategori aktif
- `quote-estimator.tsx` — useState untuk pilihan estimator
- `whatsapp-fab.tsx` — useState untuk visibility & expanded state
- `before-after-slider.tsx` — useRef untuk drag tracking
- `gallery-lightbox.tsx` — useState untuk open state & index
- `scroll-reveal-script.tsx` — useEffect untuk IntersectionObserver

## Data Architecture

### Current: Data-in-Code
Data proyek disimpan langsung di `lib/projects-data.ts` sebagai TypeScript constant.

**Keuntungan:**
- Zero database dependency
- Full TypeScript type safety
- Instant build & deployment
- No API calls, no loading states

**Migrasi ke CMS (future):**
PRD tersedia di `docs/prd-cms-duaduainterior.md`. Rencana migrasi ke PostgreSQL + Prisma + Dashboard admin.

### Data Flow
```
lib/projects-data.ts (PROJECTS constant)
  ├── app/page.tsx → PortfolioSection (featured filter)
  ├── app/projects/page.tsx → ProjectsPageClient (full filter)
  ├── app/projects/[slug]/page.tsx → ProjectDetailPage (single project)
  └── app/sitemap.ts → Sitemap generation
```

## Scroll Animation Architecture

### Pattern: IntersectionObserver + Data Attributes
Scroll animations menggunakan polen ringan tanpa library animasi tambahan.

```
components/ui/scroll-reveal.tsx
  └── Render wrapper dengan data-[scroll-reveal] attribute

components/ui/scroll-reveal-script.tsx (client)
  └── useEffect → IntersectionObserver
      └── Tambah class "revealed" saat element visible
          └── CSS transition handles animation
```

**Kenapa bukan Framer Motion:**
- Bundle size impact minimal (zero dependency)
- CSS transitions lebih performant daripada JS-based animations
- IntersectionObserver native browser API, tidak perlu polyfill

## Font Loading Strategy

### Next.js `next/font/google`
Fonts dimuat menggunakan `next/font/google` yang menghasilkan:
- Self-hosted font files (tidak request ke Google CDN)
- Automatic `font-display: swap`
- Zero layout shift (font metrics dikalkulasi saat build)

```
Instrument Sans → --font-instrument → --nav-font-display
Manrope → --font-manrope → --nav-font-sans
```

## Image Optimization Pipeline

### Next.js Image Component
```
User upload image → public/images/projects/<category>/
  └── next/image component
      ├── Automatic WebP/AVIF conversion (next.config.ts)
      ├── Responsive sizes (srcset generation)
      ├── Lazy loading (below the fold)
      ├── Priority loading (above the fold: hero, about)
      └── Aspect ratio preservation (CLS prevention)
```

### Konfigurasi di `next.config.ts`
- Format output: AVIF, WebP
- Remote patterns: Unsplash (placeholder images)

## Contact Strategy: WhatsApp-First

### Alasan
- 90%+ pengguna internet Indonesia aktif di WhatsApp
- Respon instan lebih disukai daripada email
- Tidak perlu backend email server
- User sudah familiar dengan WhatsApp

### Implementasi
1. **Contact Form** → generate WhatsApp message → `window.open(wa.me/...)`
2. **WhatsApp FAB** → floating button persistent → quick chat
3. **Direct WhatsApp** → link langsung di footer & contact info

## SEO Architecture

### Structured Data (JSON-LD)
```
LocalBusiness schema (app/layout.tsx)
  ├── name, description, url, telephone
  ├── address (Semarang, Indonesia)
  ├── sameAs (Instagram, Facebook)
  └── priceRange

FAQPage schema (app/layout.tsx)
  └── 6 Q&A entries → rich snippets di Google
```

### Metadata Strategy
- Root: OpenGraph + Twitter Card + robots config
- Per-project: generateMetadata() dengan unique title, description, og:image
- Sitemap: auto-generated dari PROJECTS array
- Robots: allow all crawlers

## Component Hierarchy

```
RootLayout (layout.tsx)
├── Skip Navigation Link (a11y)
├── JSON-LD Scripts (SEO)
└── SmoothScroll (Lenis wrapper)
    └── children (page content)

Homepage (page.tsx)
├── Navigation (client)
├── main#main-content
│   ├── HeroSection (server)
│   ├── AboutSection (server)
│   ├── ServicesSection (server)
│   ├── MaterialSwatches (client)
│   ├── PortfolioSection (client)
│   ├── QuoteEstimator (client)
│   ├── FaqSection (client)
│   └── ContactSection (client)
├── Footer (server)
├── WhatsAppFab (client)
└── ScrollRevealScript (client)
```

## Styling Architecture

### Tailwind v4 Theme System
```
globals.css
├── @import "tailwindcss"
├── :root → CSS custom properties (fonts)
├── @theme inline → background, foreground, font aliases
└── @theme → design tokens
    ├── --color-primary-* (10 shades)
    ├── --color-accent-* (gold, copper, rose)
    ├── --color-success-* (light, default, dark)
    ├── --color-background-* (light, cream, beige, dark)
    ├── --shadow-* (soft, soft-lg, soft-xl, premium)
    └── --animate-* (fade-in, slide-up, slide-down)
```

### Class Merging Utility
`cn()` dari `lib/utils.ts` menggunakan `clsx` + `tailwind-merge` untuk:
1. Conditional class names (clsx)
2. Deduplikasi Tailwind classes (tailwind-merge)
