# Content Guide - DuaDua Interior

Panduan manajemen konten: menambah proyek, gambar, dan copy.

## Menambah Proyek Baru

### Step 1: Siapkan Gambar

```bash
# Letakkan gambar di direktori yang sesuai
public/images/projects/<category>/<category>-<number>.jpg

# Contoh:
public/images/projects/kitchen-set/kitchen-set-07.jpg
```

**Requirement:**
- Format: JPG (atau WebP)
- Resolusi minimum: 1200x800px
- Aspect ratio: 4:3 (grid card), 16:11 (detail page)
- Ukuran: maksimal 500KB (kompres dengan TinyPNG/Squoosh)
- Nama file: `<category>-<nomor>.jpg` (nomor harus unik per kategori)

### Step 2: Tambah Data

Buka `lib/projects-data.ts`, tambahkan entry baru ke array `PROJECTS`:

```typescript
{
  id: "kitchen-set-07",                 // Format: <category>-<nomor>
  slug: "modern-island-kitchen",        // URL-friendly, unique
  category: "kitchen",                  // "bedroom" | "kitchen" | "wardrobe"
  image: "/images/projects/kitchen-set/kitchen-set-07.jpg",
  title: "Modern Island Kitchen",
  teaser: "Satu kalimat deskripsi singkat untuk card preview.",
  description: "2-3 kalimat deskripsi detail untuk halaman proyek.",
  concept: "Open-plan island layout",
  functionValue: "Cooking + dining interaction",
  visualTone: "Warm, bright, contemporary",
  location: "Semarang",
  featured: false,                      // true = tampil di homepage
},
```

### Step 3: Verifikasi

```bash
npm run dev
# Cek:
# 1. /projects → proyek baru muncil di grid
# 2. /projects/<slug> → halaman detail bisa diakses
# 3. Jika featured: true → muncul di homepage portfolio section
# 4. npm run test:run → tidak ada test yang gagal
```

## Format Kategori

| Category | Label | Deskripsi |
|----------|-------|-----------|
| `bedroom` | Bedroom | Kamar tidur, wardrobe built-in, vanity |
| `kitchen` | Kitchen Set | Dapur, island, kabinet modular |
| `wardrobe` | Wardrobe | Lemari pakaian, walk-in closet |

## Penamaan Proyek

### Judul (title)
- Maksimal 3 kata
- Deskriptif dan memorable
- Contoh: "Suite Warm Walnut", "Compact Smart Bedroom"

### Teaser
- 1 kalimat, maksimal 100 karakter
- Fokus pada keunikan proyek
- Contoh: "Panel vertikal dan cove lighting membangun kamar tidur yang hangat."

### Description
- 2-3 kalimat detail
- Jelaskan material, konsep, dan hasil akhir
- Contoh: "Komposisi panel vertikal dan pencahayaan cove menciptakan suasana hangat yang eksklusif."

### Concept
- 2-4 kata
- Contoh: "Modern warm minimal", "Compact multifunction room"

### Visual Tone
- 3 kata koma-separated
- Contoh: "Elegant, cozy, clean", "Rich, warm, balanced"

## Guidelines Gambar

### Komposisi yang Baik
- Tampilkan furniture utama sebagai focal point
- Pencahayaan natural atau studio yang rata
- Background bersih dan minimal
- Sudut 3/4 (bukan frontal/depan)

### Yang Harus Dihindari
- Gambar blur atau noisy
- Pencahayaan terlalu gelap/terang
- Background berantakan
- Watermark dari platform lain

### Optimasi
```bash
# Gunakan Squoosh untuk kompres: https://squoosh.app/
# Target: < 500KB per gambar
# Format output: JPG quality 80-85%
```

## Brand Voice

### Tone
- **Profesional** tetapi **hangat**
- **Percaya diri** tetapi **tidak arogan**
- **Detail-oriented** tetapi **tidak teknis berlebihan**

### Bahasa
- Semua UI text dalam **Bahasa Indonesia**
- Istilah teknis (HPL, duco, melamine) tetap dalam bahasa aslinya
- Hindari kata-kata yang terlalu pemasaran ("terbaik", "nomor satu")

### Contoh Copy

**Baik:**
> "Furniture custom premium yang dirancang khusus untuk gaya hidup Anda."

**Kurang baik:**
> "Kami adalah perusahaan furniture terbaik #1 di Semarang dengan kualitas nomor satu."

## Meta Description Guidelines

### Per Halaman
- Maksimal 155 karakter
- Include keyword utama
- Include brand name atau lokasi

**Homepage:**
> "DuaDuaInterior — studio interior dan furniture custom premium di Semarang. Lemari, kitchen set, dan bedroom set berkualitas ekspor."

**Project Page:**
> "[Judul proyek] — [teaser]. Lihat detail desain, material, dan hasil akhir oleh DuaDuaInterior."

## Image Alt Text

### Format
Desktipsi deskriptif dalam Bahasa Indonesia:
```
"Desain [kategori] [gaya] oleh DuaDuaInterior"
```

### Contoh
- ✅ `"Desain kitchen set L-shape dengan under-cabinet lighting oleh DuaDuaInterior"`
- ✅ `"Kamar tidur minimalis dengan wardrobe built-in oleh DuaDuaInterior"`
- ❌ `"Gambar 1"` (terlalu generik)
- ❌ `"photo.jpg"` (filename, bukan deskripsi)
