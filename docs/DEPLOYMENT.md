# Deployment Guide - DuaDua Interior

Panduan deployment untuk Vercel dan production.

## Prerequisites

- Vercel account
- Git repository (GitHub/GitLab/Bitbucket)

## Deploy ke Vercel

### 1. Import Project

1. Buka [vercel.com](https://vercel.com/) → **Add New** → **Project**
2. Import repository dari Git provider
3. Vercel akan otomatis deteksi Next.js dan konfigurasi build

### 2. Konfigurasi

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Build Command | `npm run build` |
| Output Directory | `.next` |
| Install Command | `npm install` |
| Node.js Version | 20.x |

### 3. Environment Variables

Tidak ada environment variables yang dibutuhkan untuk production saat ini.

### 4. Custom Domain

1. Di Vercel Dashboard → **Settings** → **Domains**
2. Tambahkan domain (e.g., `duaduainteriors.com`)
3. Konfigurasi DNS sesuai instruksi Vercel

## Build & Deploy Workflow

### Automatic Deployment

```
Push to main → Vercel builds → Production deploy
Push to develop → Vercel builds → Preview deploy
```

### Manual Deploy (CLI)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy ke preview
vercel

# Deploy ke production
vercel --prod
```

## Preview Deployments

Setiap PR akan mendapat URL preview otomatis:
- Format: `<project>-<branch>-<hash>.vercel.app`
- Berguna untuk review sebelum merge

## Rollback

### Via Dashboard
1. Buka Vercel Dashboard → **Deployments**
2. Pilih deployment sebelumnya yang stable
3. Klik **⋯** → **Promote to Production**

### Via CLI
```bash
# List deployments
vercel ls

# Rollback ke deployment spesifik
vercel rollback <deployment-url>
```

## Performance Monitoring

### Vercel Analytics
1. Di Dashboard → **Analytics** → **Enable**
2. Real User Monitoring (RUM) akan otomatis terkumpul
3. Monitor Core Web Vitals: LCP, FID, CLS

### Lighthouse Targets
| Metric | Target | Current |
|--------|--------|---------|
| Performance | >= 85 | - |
| Accessibility | >= 90 | - |
| Best Practices | >= 90 | - |
| SEO | >= 95 | - |
| LCP | < 2.5s | - |
| CLS | < 0.1 | - |

## SEO Verification (Post-Deploy)

Setelah deploy pertama, verifikasi:

```bash
# Cek sitemap
curl https://duaduainteriors.com/sitemap.xml

# Cek robots.txt
curl https://duaduainteriors.com/robots.txt

# Cek JSON-LD (lihat source page, cari application/ld+json)
# - LocalBusiness schema harus ada
# - FAQPage schema harus ada

# Cek Open Graph
# Buka https://opengraph.xyz dan masukkan URL
```

## Image Optimization

### Current Setup (next.config.ts)
- Output formats: AVIF, WebP
- Remote patterns: Unsplash untuk placeholder

### Production Checklist
- [ ] Semua gambar menggunakan `next/image` (bukan `<img>`)
- [ ] Hero image menggunakan `priority` prop
- [ ] Below-fold images menggunakan lazy loading (default)
- [ ] `sizes` prop diset untuk responsive images

## Troubleshooting

### Build Timeout
```bash
# Cek build log di Vercel Dashboard → Deployments → [deployment] → Build Logs
# Jika timeout, coba:
# 1. Optimize image sizes
# 2. Reduce dependency count
# 3. Enable Vercel Pro untuk longer build timeout
```

### 404 on Dynamic Routes
Pastikan `app/projects/[slug]/page.tsx` memiliki `generateStaticParams` jika ingin static generation untuk semua slug.

### Cache Issues
```bash
# Purge Vercel cache
vercel --force

# Atau via Dashboard → Settings → Advanced → Purge Cache
```
