# CMS Admin Foundation (Payload)

Dokumen ini menjelaskan fondasi CMS yang sudah ditambahkan pada proyek.

## Scope

- Dashboard admin Payload di `/admin`
- Login admin berbasis collection `users`
- Collection dasar: `users`, `media`, `projects`, `leads`
- API Payload aktif di `/api/*` (tetap kompatibel dengan `/api/leads`)

## Konfigurasi Environment

Gunakan `.env.example` sebagai acuan:

- `NEXT_PUBLIC_SITE_URL`
- `PAYLOAD_SECRET`
- `DATABASE_URI`

Gunakan PostgreSQL untuk `DATABASE_URI`:

- `postgresql://postgres:postgres@127.0.0.1:5432/duaduainterior`

## Setup Lokal

1. Install dependency: `npm install`
2. Jalankan server: `npm run dev`
3. Buka `http://localhost:3000/admin`
4. Buat akun admin pertama pada layar bootstrap Payload

## Catatan Integrasi

- Frontend publik tetap membaca data `projects` via repository dengan fallback static.
- Setelah admin menambah konten `projects` dan publish, frontend akan mengambil data dari Payload sesuai revalidate repository.
- Endpoint `POST /api/leads` sekarang menyimpan data ke collection `leads` (bukan in-memory).
