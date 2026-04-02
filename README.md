# DuaDuaInterior

Website marketing untuk studio interior design dan furniture custom premium berbasis di Semarang, Indonesia.

## Prerequisites

- **Node.js** >= 20.9.0
- **npm** >= 10.x

## Tech Stack

- [Next.js](https://nextjs.org/) 16.1.6 (App Router, Turbopack)
- React 19
- TypeScript 5 (strict mode)
- Tailwind CSS 4
- Vitest (testing)
- Lucide React (icons)
- Lenis (smooth scroll)

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command             | Description                        |
|---------------------|------------------------------------|
| `npm run dev`       | Start development server           |
| `npm run build`     | Create optimized production build  |
| `npm run start`     | Start production server            |
| `npm run lint`      | Run ESLint checks                  |
| `npm run test`      | Run tests in watch mode            |
| `npm run test:run`  | Run tests once and exit            |

## Testing

Project menggunakan [Vitest](https://vitest.dev/) dengan jsdom environment.

```bash
# Run tests in watch mode
npm run test

# Run tests once
npm run test:run
```

Test files berada di `lib/__tests__/`. Gunakan `@testing-library/react` untuk component testing.

## Environment Variables

This project does not require any environment variables for local development.

## Project Structure

```
├── app/
│   ├── layout.tsx            # Root layout: fonts, metadata, JSON-LD
│   ├── page.tsx              # Homepage: composes all sections
│   ├── globals.css           # Tailwind v4 theme, CSS variables
│   ├── loading.tsx           # Loading spinner
│   ├── error.tsx             # Client-side error boundary
│   ├── not-found.tsx         # Custom 404 page
│   ├── sitemap.ts            # Auto-generated sitemap
│   ├── robots.ts             # Robots.txt generator
│   ├── projects/
│   │   ├── page.tsx          # Projects listing
│   │   └── [slug]/page.tsx   # Project detail (dynamic)
│   ├── privacy/page.tsx      # Privacy policy
│   └── terms/page.tsx        # Terms & conditions
├── components/
│   ├── ui/                   # Reusable primitives
│   │   ├── button.tsx        # Button + LinkButton
│   │   ├── container.tsx     # Responsive container
│   │   ├── before-after-slider.tsx   # Image comparison slider
│   │   ├── gallery-lightbox.tsx      # Fullscreen image lightbox
│   │   ├── scroll-reveal.tsx         # Scroll animation wrapper
│   │   ├── scroll-reveal-script.tsx  # IntersectionObserver handler
│   │   └── whatsapp-fab.tsx          # Floating WhatsApp button
│   ├── sections/             # Page sections
│   │   ├── hero.tsx          # Hero section
│   │   ├── about.tsx         # About section
│   │   ├── services.tsx      # Service cards
│   │   ├── material-swatches.tsx     # Material swatches gallery
│   │   ├── portfolio.tsx     # Portfolio grid
│   │   ├── quote-estimator.tsx       # Price estimator
│   │   ├── faq.tsx           # FAQ accordion
│   │   ├── contact.tsx       # Contact form
│   │   ├── navigation.tsx    # Fixed navbar
│   │   └── footer.tsx        # Footer
│   ├── projects/
│   │   └── projects-page-client.tsx  # Projects client component
│   └── smooth-scroll.tsx     # Lenis wrapper
├── lib/
│   ├── brand.ts              # Brand constants, JSON-LD schemas
│   ├── projects-data.ts      # Project types, data, helpers
│   ├── filter-styles.ts      # Shared filter button classes
│   ├── utils.ts              # cn() utility
│   └── __tests__/            # Unit tests
├── docs/                     # Project documentation
│   ├── ARCHITECTURE.md
│   ├── DEVELOPMENT.md
│   ├── DEPLOYMENT.md
│   ├── TESTING.md
│   └── CONTENT-GUIDE.md
├── public/
│   └── images/               # Static image assets
├── setup-tests.ts            # Vitest setup
└── vitest.config.ts          # Vitest configuration
```

## Deployment

Project dioptimasi untuk deployment di [Vercel](https://vercel.com/).

```bash
# Build untuk production
npm run build

# Start production server
npm run start
```

Lihat [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) untuk panduan lengkap.

## Documentation

| File | Deskripsi |
|------|-----------|
| [AGENTS.md](AGENTS.md) | Instruksi untuk AI coding agents |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Keputusan arsitektur & pola desain |
| [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) | Panduan workflow development |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | Instruksi deployment |
| [docs/TESTING.md](docs/TESTING.md) | Panduan testing |
| [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md) | Panduan manajemen konten |
| [COMMIT_GUIDELINES.md](COMMIT_GUIDELINES.md) | Standar commit Conventional Commits |

## License

Private project - DuaDuaInterior © 2026
