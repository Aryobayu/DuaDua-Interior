# PostgreSQL Setup Guide

Panduan ini menjelaskan dua skenario setup PostgreSQL:

1. Lokal (self-hosted via Docker)
2. Managed service (Neon, Supabase, Railway, RDS, atau setara)

## 1) Perbedaan Utama

| Aspek | Lokal (Self-hosted) | Managed Service |
|---|---|---|
| Biaya awal | Umumnya nol (jika jalan di laptop/dev machine) | Umumnya ada free tier, tapi production biasanya berbayar |
| Operasional | Anda kelola backup, patching, monitoring | Banyak dikelola provider |
| Skalabilitas | Manual | Lebih mudah scale |
| Koneksi | Biasanya tanpa SSL di localhost | Biasanya wajib SSL (`sslmode=require`) |

## 2) Environment Variables

Gunakan `.env.local` untuk development. Variabel yang digunakan proyek ini:

### Wajib

- `DATABASE_URI`:
  - Lokal: `postgresql://postgres:postgres@127.0.0.1:5432/duaduainterior`
  - Managed: `postgresql://USER:PASSWORD@HOST:5432/DBNAME?sslmode=require`
- `PAYLOAD_SECRET`:
  - Secret untuk auth/session Payload. Gunakan string panjang dan acak.
- `NEXT_PUBLIC_SITE_URL`:
  - Lokal: `http://localhost:3000`
  - Production: domain publik Anda.

### Opsional (jika frontend membaca Payload via REST endpoint eksternal)

- `PAYLOAD_API_URL` (contoh: `https://cms.domainanda.com`)
- `PAYLOAD_API_TOKEN` (token API/JWT dengan scope read sesuai kebutuhan)

## 3) Setup Lokal (Self-hosted)

### Langkah A - Siapkan env

1. Salin contoh env:

```bash
cp .env.example .env.local
```

2. Pastikan `.env.local` berisi:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
PAYLOAD_SECRET=replace-with-strong-secret
DATABASE_URI=postgresql://postgres:postgres@127.0.0.1:5432/duaduainterior
```

### Langkah B - Jalankan PostgreSQL

1. Start PostgreSQL:

```bash
npm run db:up
```

2. Cek log (opsional):

```bash
npm run db:logs
```

3. Masuk shell SQL (opsional):

```bash
npm run db:psql
```

4. Stop service jika perlu:

```bash
npm run db:down
```

### Langkah C - Jalankan aplikasi

```bash
npm run dev
```

Buka `http://localhost:3000/admin`, lalu buat akun admin pertama.

## 4) Setup Managed Service

### Langkah A - Provision database di provider

1. Buat instance PostgreSQL.
2. Buat user + password khusus aplikasi.
3. Aktifkan pengaturan jaringan (IP allowlist/VPC/private connection sesuai provider).
4. Ambil `connection string` dari dashboard provider.

### Langkah B - Konfigurasi env aplikasi

Set `.env.local` (atau env pada platform deploy):

```env
NEXT_PUBLIC_SITE_URL=https://domainanda.com
PAYLOAD_SECRET=replace-with-strong-secret
DATABASE_URI=postgresql://USER:PASSWORD@HOST:5432/DBNAME?sslmode=require
```

Jika frontend terpisah dari CMS:

```env
PAYLOAD_API_URL=https://cms.domainanda.com
PAYLOAD_API_TOKEN=token-read-only
```

### Langkah C - Verifikasi

1. Jalankan aplikasi.
2. Login ke `/admin`.
3. Buat satu data `projects` dan satu submit dari form contact.
4. Pastikan data lead tersimpan pada collection `leads`.

## 5) Catatan Biaya Managed

- Setup awal bisa gratis jika provider memberi free tier.
- Untuk workload production (uptime, storage, backup, throughput), umumnya berbayar.
- Komponen biaya yang paling sering muncul:
  - compute/instance,
  - storage,
  - backup/snapshot,
  - network egress.

## 6) Rekomendasi Praktis

1. Development: pakai lokal Docker agar murah dan cepat.
2. Staging/Production: pakai managed PostgreSQL untuk reliability, backup, dan scale.
3. Simpan secret hanya di environment manager (jangan hardcode ke source code).
