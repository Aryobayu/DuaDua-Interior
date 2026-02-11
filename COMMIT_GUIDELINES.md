# Commit Guidelines

Dokumen ini adalah standar commit untuk proyek DuaDuaInterior agar histori tetap rapi, bisa diaudit, dan mudah ditelusuri.

## Tujuan
- Menjaga setiap commit berisi satu maksud perubahan yang jelas.
- Memudahkan review, rollback selektif, dan analisis progres.
- Menyamakan format pesan commit antar sesi dan antar kontributor.

## Format Pesan
Gunakan Conventional Commits:

`<type>(<scope>): <summary>`

Contoh:
- `feat(projects): add dynamic projects listing and detail pages`
- `fix(projects): prevent cascading renders in filter sync`
- `refactor(home): extract hero CTA variants`
- `docs(workflow): add commit guidelines`
- `chore(assets): add project reference images`

## Daftar Type
- `feat`: penambahan fitur baru.
- `fix`: perbaikan bug/regresi.
- `refactor`: perubahan struktur kode tanpa ubah perilaku.
- `docs`: perubahan dokumentasi.
- `style`: perubahan format/whitespace tanpa ubah logika.
- `test`: penambahan/perubahan test.
- `chore`: tugas non-fitur/non-fix (aset, tooling, maintenance).
- `perf`: optimasi performa yang terukur.

## Aturan Scope
Gunakan scope yang stabil dan dekat dengan domain kode:
- `projects`, `home`, `navigation`, `services`, `portfolio`, `about`, `footer`
- `assets`, `workflow`, `build`, `lint`, `fonts`

Jika satu commit menyentuh dua domain berbeda, pecah menjadi beberapa commit.

## Aturan Penyusunan Commit
- Satu commit = satu tujuan utama.
- Pisahkan `feat`, `fix`, `refactor`, `docs`, dan `assets`.
- Jangan campur perubahan logic dengan bulk asset bila tidak wajib.
- Gunakan summary singkat, aktif, dan spesifik (maks. 72 karakter disarankan).
- Untuk perubahan besar, tambah body commit dengan daftar file/impact.

## Checklist Sebelum Commit
- `npm run lint` lulus.
- Tidak ada perubahan yang tidak terkait tujuan commit.
- Diff mudah dipahami reviewer dalam sekali baca.
- Pesan commit sudah sesuai format dan konteks file.

## Workflow Disarankan
1. Cek kondisi awal: `git status`.
2. Kelompokkan perubahan per kategori.
3. Stage terarah per kategori (`git add <file...>`).
4. Commit per kategori dengan pesan Conventional Commits.
5. Validasi akhir: `git status` dan `git log --oneline -n 5`.

## Contoh Pengelompokan Praktis
- `feat(projects)`: route baru, komponen baru, data model proyek.
- `fix(projects)`: bug state sync/filter/query params.
- `feat(ui)`: copy dan styling section homepage.
- `chore(assets)`: font dan image referensi.
- `docs(workflow)`: pembaruan panduan proses.

## Larangan Umum
- Commit "misc update", "fix", atau "update" tanpa konteks.
- Commit terlalu besar yang mencampur banyak tujuan.
- Commit file generated atau artefak yang tidak dibutuhkan repo.

