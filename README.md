# DuaDua-Interior

Marketing website for an interior design and custom furniture studio.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide icons
- Payload CMS 3
- PostgreSQL

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Scripts

- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run start` - start production server
- `npm run lint` - run lint checks
- `npm run test` - run unit tests
- `npm run payload` - run Payload CLI
- `npm run payload:generate:types` - regenerate Payload types
- `npm run payload:generate:importmap` - regenerate Payload admin import map
- `npm run db:up` - start local PostgreSQL via Docker
- `npm run db:down` - stop local PostgreSQL containers
- `npm run db:logs` - view PostgreSQL logs
- `npm run db:psql` - open psql shell to local PostgreSQL

## CMS Admin

- Dashboard URL: `/admin`
- API URL base: `/api/*`
- Collection login: `users`
- Database target: PostgreSQL (`DATABASE_URI`)
- Setup detail: `docs/cms-admin-foundation.md`
- Database setup guide: `docs/postgresql-setup.md`

Copy `.env.example` to `.env.local` before running locally.

## Project Structure

- `app/` - Next.js routes and layout
- `components/sections/` - page sections (hero, about, services, contact, footer)
- `components/ui/` - reusable UI primitives
- `payload/` - Payload collections and CMS domain configuration
- `lib/` - shared utilities
- `public/` - static assets
