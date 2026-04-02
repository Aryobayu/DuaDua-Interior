# Development Guide - DuaDua Interior

Panduan lengkap untuk setup lokal, workflow development, dan konvensi proyek.

## Setup Lokal

### Prerequisites
- Node.js >= 20.9.0
- npm >= 10.x
- Git

### Langkah Setup

```bash
# 1. Clone repository
git clone <repository-url>
cd DuaDua-Interior

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev

# 4. Buka di browser
# http://localhost:3000
```

### Verifikasi Setup

```bash
# Pastikan build berhasil
npm run build

# Pastikan lint bersih
npm run lint

# Pastikan tests passing
npm run test:run
```

## Branch Strategy

```
main          ← Production-ready code
├── develop   ← Development integration
│   ├── feature/<nama>    ← Fitur baru
│   ├── fix/<nama>        ← Bug fix
│   └── refactor/<nama>   ← Refactoring
```

### Aturan Branch
- `main` — hanya merge dari `develop` yang sudah stable
- `develop` — integrasi fitur sebelum merge ke main
- Feature branch — satu fitur per branch

## Cara Menambah Project Entry

### 1. Tambah Data di `lib/projects-data.ts`

```typescript
{
  id: "bedroom-12",                    // Unik, format: <category>-<number>
  slug: "new-project-name",            // URL-friendly, lowercase, dash separator
  category: "bedroom",                 // "bedroom" | "kitchen" | "wardrobe"
  image: "/images/projects/bedroom/bedroom-12.jpg",
  title: "Nama Proyek",
  teaser: "Deskripsi singkat 1 kalimat untuk card preview.",
  description: "Deskripsi detail 2-3 kalimat untuk halaman detail.",
  concept: "Nama konsep desain",
  functionValue: "Fungsi utama ruangan",
  visualTone: "Kesan visual (e.g., Elegant, cozy, clean)",
  location: "Nama Kota",
  featured: true,                      // true = tampil di homepage portfolio
},
```

### 2. Tambah Gambar

```bash
# Nama file harus sesuai dengan image path di data
public/images/projects/<category>/<category>-<number>.jpg

# Contoh:
public/images/projects/bedroom/bedroom-12.jpg
```

**Requirement gambar:**
- Format: JPG (atau WebP untuk optimasi)
- Resolusi minimum: 1200x800px
- Aspect ratio: 4:3 (untuk card grid) atau 16:11 (untuk detail)
- Ukuran file: maksimal 500KB (kompres dengan tool seperti TinyPNG)

### 3. Verifikasi

```bash
# Jalankan dev server dan cek:
# - Gambar muncul di /projects
# - Halaman detail bisa diakses di /projects/<slug>
# - Sitemap mengandung URL baru (cek /sitemap.xml)
```

## Cara Menambah Komponen Baru

### Primitives → `components/ui/`
Untuk komponen reusable (Button, Card, Modal, dll):
1. Buat file `kebab-case-name.tsx`
2. Export interface props dengan `export interface NameProps`
3. Gunakan `cn()` untuk className merging
4. Export named export

### Sections → `components/sections/`
Untuk section halaman (Hero, About, dll):
1. Buat file `kebab-case-name.tsx`
2. Export function component dengan nama `NameSection`
3. Gunakan `"use client"` hanya jika perlu hooks/state
4. Import dan gunakan di `app/page.tsx`

### Client Components
Jika komponen membutuhkan:
- `useState`, `useEffect`, `useRef`, `useMemo`
- Event handlers (`onClick`, `onChange`)
- Browser APIs (`window`, `document`)

Tambahkan `"use client"` di baris pertama file.

## Workflow Development

### 1. Buat Branch
```bash
git checkout develop
git pull origin develop
git checkout -b feature/nama-fitur
```

### 2. Develop & Test
```bash
# Jalankan dev server
npm run dev

# Di terminal lain, jalankan test watch
npm run test
```

### 3. Pre-commit Checks
```bash
# Pastikan semua passing
npm run lint        # Lint check
npm run test:run    # Test check
npm run build       # Build check
```

### 4. Commit & Push
```bash
# Stage per kategori
git add lib/projects-data.ts
git commit -feat(projects): tambah entry proyek baru

git add public/images/
git commit -chore(assets): tambah gambar proyek

# Push
git push origin feature/nama-fitur
```

### 5. Pull Request
- Buat PR ke `develop`
- Pastikan build CI passing
- Request review

## Pre-commit Checklist

Sebelum setiap commit:
- [ ] `npm run lint` lulus
- [ ] `npm run test:run` lulus (10/10)
- [ ] `npm run build` lulus
- [ ] Commit message sesuai Conventional Commits
- [ ] Tidak ada perubahan yang tidak terkait tujuan commit
- [ ] Tidak commit file sensitif (`.env`, credentials)

## Troubleshooting

### ChunkLoadError di Development
```bash
# Clear cache dan restart
rm -rf .next node_modules/.cache
npm run dev
```

### Port 3000 sudah digunakan
```bash
# Gunakan port lain
PORT=3001 npm run dev
```

### Test gagal setelah update dependencies
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run test:run
```

## Tech Stack Reference

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 16.1.6 | App Router, Turbopack |
| React | 19.2.3 | UI library |
| TypeScript | ^5 | Type checking (strict) |
| Tailwind CSS | v4 | Styling |
| Vitest | ^4.1.2 | Test runner |
| ESLint | ^9 | Linting |
| Lucide React | ^0.563.0 | Icons |
| Lenis | ^1.3.17 | Smooth scrolling |
