# Testing Guide - DuaDua Interior

Panduan testing untuk proyek menggunakan Vitest.

## Quick Start

```bash
# Run tests in watch mode (development)
npm run test

# Run tests once (CI/pre-commit)
npm run test:run
```

## Test Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Vitest | ^4.1.2 | Test runner |
| @testing-library/react | ^16.3.2 | React component testing |
| @testing-library/jest-dom | ^6.9.1 | DOM assertion matchers |
| jsdom | ^29.0.1 | Browser environment for tests |
| @vitejs/plugin-react | ^6.0.1 | React plugin for Vitest |

## Konfigurasi

### vitest.config.ts
- Environment: `jsdom` (simulasi browser)
- Setup file: `setup-tests.ts` (loads jest-dom matchers)
- Path alias: `@/` → project root
- Globals: enabled (describe, it, expect tersedia tanpa import)

### setup-tests.ts
Hanya mengimport `@testing-library/jest-dom/vitest` untuk menambah custom matchers (toBeInTheDocument, toHaveTextContent, dll).

## Test File Conventions

### Lokasi
```
lib/__tests__/
├── utils.test.ts
└── brand.test.ts
```

### Naming
- File test: `<nama-file-yang-ditest>.test.ts`
- Contoh: `utils.ts` → `lib/__tests__/utils.test.ts`

### Struktur Test
```typescript
import { describe, it, expect } from "vitest";

describe("Nama fungsi/komponen", () => {
  it("should melakukan sesuatu yang diharapkan", () => {
    expect(actual).toBe(expected);
  });

  it("should handle edge case", () => {
    // ...
  });
});
```

## Test Coverage Saat Ini

### lib/utils.ts (4 tests)
- `cn()` — merge class names
- `cn()` — handle conditional classes
- `cn()` — handle falsy values
- `cn()` — tailwind-merge deduplication

### lib/brand.ts (6 tests)
- `BRAND.name` — correct value
- `BRAND.phoneDigits` — pure digits format
- `getWhatsAppUrl()` — without message
- `getWhatsAppUrl()` — with encoded message
- `BRAND_META.defaultTitle` — includes brand name
- `BRAND_META.titleTemplate` — has %s placeholder

## Cara Menambah Test Baru

### 1. Test Utility Function

```typescript
// lib/__tests__/projects-data.test.ts
import { describe, it, expect } from "vitest";
import { getProjectBySlug, getProjectsByFilter, PROJECTS } from "../projects-data";

describe("projects-data", () => {
  describe("getProjectBySlug", () => {
    it("should return project for valid slug", () => {
      const project = getProjectBySlug("suite-warm-walnut");
      expect(project).toBeDefined();
      expect(project?.title).toBe("Suite Warm Walnut");
    });

    it("should return undefined for invalid slug", () => {
      expect(getProjectBySlug("non-existent")).toBeUndefined();
    });
  });

  describe("getProjectsByFilter", () => {
    it("should return all projects for 'all' filter", () => {
      expect(getProjectsByFilter("all")).toHaveLength(PROJECTS.length);
    });

    it("should filter by category", () => {
      const bedrooms = getProjectsByFilter("bedroom");
      expect(bedrooms.every((p) => p.category === "bedroom")).toBe(true);
    });
  });
});
```

### 2. Test React Component

```typescript
// lib/__tests__/button.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "../../components/ui/button";

describe("Button", () => {
  it("should render children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("should apply variant classes", () => {
    const { container } = render(<Button variant="outline">Test</Button>);
    expect(container.firstChild).toHaveClass("border-2");
  });
});
```

## Testing Strategy

### Yang Perlu Ditest
- [x] Utility functions (`cn()`, `getWhatsAppUrl()`, `getProjectBySlug()`)
- [x] Data constants (`BRAND`, `BRAND_META`)
- [ ] Data transformation functions (`normalizeProjectFilter`, `getProjectsByFilter`)
- [ ] Component rendering (basic smoke tests)
- [ ] Form validation logic

### Yang Tidak Perlu Ditest
- Next.js internal behavior
- Third-party library internals
- CSS styling (visual regression lebih cocok)
- Server component rendering (integration test)

## Pre-commit Checklist

Sebelum commit:
```bash
npm run test:run   # Pastikan semua test passing
npm run lint       # Pastikan lint bersih
npm run build      # Pastikan build berhasil
```

## Troubleshooting

### Test gagal setelah install dependency baru
```bash
rm -rf node_modules/.cache
npm run test:run
```

### "Cannot find module" error
Pastikan path alias `@/` dikonfigurasi di `vitest.config.ts`:
```typescript
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./"),
  },
},
```

### Component test gagal karena "document is not defined"
Pastikan `environment: "jsdom"` di `vitest.config.ts`.
