# AGENTS.md - DuaDua Interior

## Project Overview
A Next.js 16 interior design website with React 19, TypeScript, and Tailwind CSS v4.

## Build Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Create production build
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

## Project Structure

```
├── app/              # Next.js App Router (pages, layouts, routes)
├── components/
│   ├── ui/           # Reusable primitives (Button, Container)
│   ├── sections/     # Page sections (Hero, About, Footer, etc.)
│   └── projects/     # Project-specific components
├── lib/              # Utilities, constants, data (utils.ts, brand.ts)
├── public/           # Static assets
└── globals.css       # Tailwind theme and CSS variables
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
// Component with refs
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
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

// Simple component (no refs)
export function HeroSection() {
  return <section>...</section>;
}
```

- Use named exports (not default) for all components
- Add `displayName` for components using forwardRef
- Use `"use client"` directive only when needed (for hooks, event handlers)
- Server components are the default

### CSS/Tailwind

- **Tailwind v4** uses `@import "tailwindcss"` in globals.css
- Theme tokens (colors, shadows, animations) defined in `@theme` block
- Use `cn()` utility from `lib/utils.ts` to merge classes
- Custom shadow tokens: `shadow-soft`, `shadow-soft-lg`, `shadow-soft-xl`, `shadow-premium`

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `HeroSection`, `ContactForm` |
| Functions | camelCase | `scrollToPortfolio`, `getWhatsAppUrl` |
| Variables | camelCase | `isLoading`, `userName` |
| Constants | PascalCase | `BRAND`, `BRAND_META` |
| File names | kebab-case | `hero-section.tsx`, `utils.ts` |
| CSS classes | kebab-case | `text-neutral-700`, `gap-4` |
| Type/Interface | PascalCase | `ButtonProps`, `ContainerProps` |

### Functions

```typescript
// Simple utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Factory/creator function
export const getWhatsAppUrl = (message?: string) =>
  `https://wa.me/${BRAND.phoneDigits}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
```

### Error Handling

- No try/catch patterns visible in codebase
- TypeScript strict mode handles most errors at compile time
- Document expected null states in component props

### Linting

ESLint is configured with:
- `eslint-config-next/core-web-vitals`
- `eslint-config-next/typescript`

Ignored directories: `.next/`, `out/`, `build/`, `node_modules/`

Run linting before committing:
```bash
npm run lint
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

### Key Dependencies
- `next` 16.1.6 - App Router framework
- `react` 19.2.3 - UI library
- `tailwindcss` v4 - Styling
- `lucide-react` - Icons
- `lenis` - Smooth scrolling
- `clsx` + `tailwind-merge` - Class merging utility
