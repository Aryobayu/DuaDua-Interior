# DuaDuaInterior

Marketing website for an interior design and custom furniture studio based in Semarang, Indonesia.

## Prerequisites

- **Node.js** >= 20.9.0
- **npm** >= 10.x

## Tech Stack

- [Next.js](https://nextjs.org/) 16.1.6 (App Router, Turbopack)
- React 19
- TypeScript 5
- Tailwind CSS 4
- Lenis (smooth scroll)
- Lucide React (icons)

## Getting Started
```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command           | Description                        |
|-------------------|------------------------------------|
| `npm run dev`     | Start development server           |
| `npm run build`   | Create optimized production build  |
| `npm run start`   | Start production server            |
| `npm run lint`    | Run ESLint checks                  |

## Environment Variables

This project does not require any environment variables for local development.

## Project Structure
```
├── app/
│   ├── fonts/           # Local font files (woff2)
│   ├── privacy/         # Privacy policy page
│   ├── projects/        # Projects listing & detail pages
│   ├── terms/           # Terms & conditions page
│   ├── globals.css      # Global styles & Tailwind theme tokens
│   └── layout.tsx       # Root layout
├── components/
│   ├── projects/        # Projects page client components
│   ├── sections/        # Page sections (hero, about, services, etc.)
│   ├── ui/              # Reusable UI primitives (Button, Container)
│   └── smooth-scroll.tsx
├── lib/
│   ├── brand.ts         # Brand constants & WhatsApp URL helper
│   ├── projects-data.ts # Project data & filter utilities
│   └── utils.ts         # cn() utility (clsx + tailwind-merge)
└── public/
    └── images/          # Static image assets
```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/).