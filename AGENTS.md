# AGENTS.md - DuaDua Interior

## Project Overview
A Next.js 16 interior design and custom furniture studio website based in Semarang, Indonesia. Built with React 19, TypeScript, and Tailwind CSS v4.

## Build Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Create production build
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint

# Testing
npm run test         # Run tests in watch mode (Vitest)
npm run test:run     # Run tests once and exit
```

## Project Structure

```
├── app/
│   ├── layout.tsx            # Root layout: fonts, metadata, JSON-LD, skip-nav
│   ├── page.tsx              # Homepage: composes all sections
│   ├── globals.css           # Tailwind v4 theme, CSS variables, animations
│   ├── loading.tsx           # Loading spinner
│   ├── error.tsx             # Client-side error boundary
│   ├── not-found.tsx         # Custom 404 page
│   ├── sitemap.ts            # Auto-generated sitemap from PROJECTS
│   ├── robots.ts             # Robots.txt generator
│   ├── projects/
│   │   ├── page.tsx          # Projects listing (server component)
│   │   └── [slug]/
│   │       └── page.tsx      # Project detail (dynamic route, generateMetadata)
│   ├── privacy/page.tsx      # Privacy policy
│   └── terms/page.tsx        # Terms & conditions
├── components/
│   ├── ui/                   # Reusable primitives
│   │   ├── button.tsx        # Button + LinkButton (forwardRef, variants)
│   │   ├── container.tsx     # Responsive width container (forwardRef)
│   │   ├── before-after-slider.tsx   # Image comparison slider (touch + keyboard)
│   │   ├── gallery-lightbox.tsx      # Fullscreen image lightbox
│   │   ├── scroll-reveal.tsx         # IntersectionObserver reveal wrapper
│   │   ├── scroll-reveal-script.tsx  # Script handler for scroll reveals
│   │   └── whatsapp-fab.tsx          # Floating WhatsApp chat button
│   ├── sections/             # Page sections
│   │   ├── hero.tsx          # Hero section (server component)
│   │   ├── about.tsx         # About section with features
│   │   ├── services.tsx      # Service cards (wardrobe, bedroom, kitchen)
│   │   ├── material-swatches.tsx     # Material color swatches browser
│   │   ├── portfolio.tsx     # Portfolio grid with category filter
│   │   ├── quote-estimator.tsx       # Interactive price calculator
│   │   ├── faq.tsx           # FAQ accordion
│   │   ├── contact.tsx       # Contact form with WhatsApp integration
│   │   ├── navigation.tsx    # Fixed glassmorphism navbar
│   │   └── footer.tsx        # Footer with links & contact
│   ├── projects/
│   │   └── projects-page-client.tsx  # Projects listing client component
│   └── smooth-scroll.tsx     # Lenis smooth scroll wrapper
├── lib/
│   ├── brand.ts              # Brand constants, JSON-LD schemas, WhatsApp URL
│   ├── projects-data.ts      # Project types, data, filter/query helpers
│   ├── filter-styles.ts      # Shared filter button CSS classes
│   ├── utils.ts              # cn() utility (clsx + tailwind-merge)
│   └── __tests__/
│       ├── brand.test.ts     # Brand constants & WhatsApp URL tests
│       └── utils.test.ts     # cn() utility tests
├── docs/                     # Project documentation
│   ├── ARCHITECTURE.md       # Architecture decisions & patterns
│   ├── DEVELOPMENT.md        # Development workflow guide
│   ├── DEPLOYMENT.md         # Deployment instructions
│   ├── TESTING.md            # Testing guide
│   └── CONTENT-GUIDE.md      # Content management guide
├── public/
│   └── images/               # Static image assets
├── setup-tests.ts            # Vitest setup (jest-dom matchers)
└── vitest.config.ts          # Vitest configuration
```

## Code Style Guidelines

### TypeScript

- **Strict mode enabled** - no implicit any, strict null checks
- Use `import type` for type-only imports
- Define prop interfaces separately with `export interface ComponentNameProps`
- Use `ReactNode` for children prop types

### Imports

```typescript
// Good
import type { Metadata } from "next";
import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Bad
import { Metadata } from "next";
import { Button } from "./button";
```

- Use `@/` path alias for internal imports (configured in tsconfig)
- Group imports: external → internal → relative
- Type imports should be on separate lines

### Component Patterns

```typescript
// Server component (default - no "use client" directive)
export function HeroSection() {
  return <section>...</section>;
}

// Client component (when hooks, event handlers, or state are needed)
"use client";
import { useState } from "react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return <section>...</section>;
}

// Component with refs
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(/*...*/)} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export { Button };
```

- Use named exports (not default) for all components
- Add `displayName` for components using forwardRef
- Use `"use client"` directive only when needed (for hooks, event handlers)
- Server components are the default
- Use `cn()` for className merging with Tailwind

### CSS/Tailwind

- **Tailwind v4** uses `@import "tailwindcss"` in globals.css
- Theme tokens (colors, shadows, animations) defined in `@theme` block
- Use `cn()` utility from `lib/utils.ts` to merge classes
- Custom shadow tokens: `shadow-soft`, `shadow-soft-lg`, `shadow-soft-xl`, `shadow-premium`
- Custom color tokens: `primary-50` through `primary-950`, `accent-gold`, `accent-copper`, `accent-rose`

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `HeroSection`, `ContactForm` |
| Functions | camelCase | `scrollToPortfolio`, `getWhatsAppUrl` |
| Variables | camelCase | `isLoading`, `userName` |
| Constants | PascalCase | `BRAND`, `BRAND_META`, `PROJECTS` |
| File names | kebab-case | `hero-section.tsx`, `utils.ts` |
| CSS classes | kebab-case | `text-neutral-700`, `gap-4` |
| Type/Interface | PascalCase | `ButtonProps`, `ContainerProps`, `ProjectItem` |

### Functions

```typescript
// Simple utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Factory/creator function
export const getWhatsAppUrl = (message?: string) =>
  `https://wa.me/${BRAND.phoneDigits}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

// Data query helper
export const getProjectBySlug = (slug: string): ProjectItem | undefined =>
  PROJECTS.find((project) => project.slug === slug);
```

### Error Handling

- TypeScript strict mode handles most errors at compile time
- Document expected null states in component props
- Use `notFound()` from `next/navigation` for missing resources
- Use error boundary pages (`app/error.tsx`) for client-side errors

### Linting

ESLint is configured with:
- `eslint-config-next/core-web-vitals`
- `eslint-config-next/typescript`

Ignored directories: `.next/`, `out/`, `build/`, `node_modules/`

Run linting before committing:
```bash
npm run lint
```

## Testing Conventions

- Test framework: **Vitest** with jsdom environment
- Test utilities: **@testing-library/react**, **@testing-library/jest-dom**
- Test file location: `lib/__tests__/` directory
- Test file naming: `<filename>.test.ts`
- Setup file: `setup-tests.ts` (loads jest-dom matchers)

```typescript
import { describe, it, expect } from "vitest";
import { cn } from "../utils";

describe("cn utility", () => {
  it("should merge class names correctly", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });
});
```

## Quick Reference

### Adding New Tailwind Colors
Add to `app/globals.css` under `@theme {}`:
```css
--color-primary-500: #b8844d;
```

### Adding New Components
1. Create in `components/ui/` for primitives or `components/sections/` for page sections
2. Use `cn()` for className merging
3. Export as named export with props interface
4. Use `"use client"` only if component needs hooks or event handlers

### Adding New Project Entries
1. Add entry to `PROJECTS` array in `lib/projects-data.ts`
2. Add images to `public/images/projects/<category>/`
3. Follow existing image naming: `<category>-<number>.jpg`

### Key Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 16.1.6 | App Router framework |
| `react` | 19.2.3 | UI library |
| `tailwindcss` | v4 | Styling |
| `lucide-react` | ^0.563.0 | Icons |
| `lenis` | ^1.3.17 | Smooth scrolling |
| `clsx` | ^2.1.1 | Conditional classes |
| `tailwind-merge` | ^3.4.0 | Tailwind class deduplication |

### Key Dev Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| `vitest` | ^4.1.2 | Test runner |
| `@testing-library/react` | ^16.3.2 | React component testing |
| `@testing-library/jest-dom` | ^6.9.1 | DOM assertion matchers |
| `jsdom` | ^29.0.1 | Browser environment for tests |
| `@vitejs/plugin-react` | ^6.0.1 | React plugin for Vitest |
| `eslint` | ^9 | Linting |
| `eslint-config-next` | 16.1.6 | Next.js ESLint rules |
| `typescript` | ^5 | Type checking |
