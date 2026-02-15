import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan",
  description:
    "Syarat dan Ketentuan DuaDuaInterior menjelaskan aturan penggunaan layanan, ruang lingkup pekerjaan, serta hak dan tanggung jawab kedua pihak.",
};

const lastUpdated = "15 Februari 2026";

const termsSections = [
  {
    title: "1. Ruang Lingkup Layanan",
    body: "DuaDuaInterior menyediakan layanan konsultasi, desain, produksi, dan instalasi interior/furniture custom sesuai kesepakatan proyek.",
  },
  {
    title: "2. Proses Pemesanan",
    body: "Pemesanan dianggap aktif setelah brief diterima, estimasi disetujui, dan pembayaran tahap awal (jika berlaku) dikonfirmasi sesuai proposal.",
  },
  {
    title: "3. Revisi dan Perubahan Scope",
    body: "Revisi minor pada fase desain dapat dilakukan sesuai batas yang disepakati. Perubahan scope besar dapat memengaruhi biaya, timeline, dan kebutuhan material.",
  },
  {
    title: "4. Pembayaran",
    body: "Skema pembayaran mengikuti proposal proyek. Keterlambatan pembayaran dapat memengaruhi jadwal pengerjaan, pengiriman, dan serah terima.",
  },
  {
    title: "5. Garansi dan Batas Tanggung Jawab",
    body: "Kami memberikan garansi sesuai ketentuan proyek untuk cacat pengerjaan tertentu. Garansi tidak berlaku untuk kerusakan akibat penggunaan yang tidak sesuai.",
  },
  {
    title: "6. Hak Kekayaan Intelektual",
    body: "Dokumen desain, visual, dan materi presentasi tetap menjadi hak DuaDuaInterior sampai kewajiban pembayaran terkait proyek diselesaikan sesuai kesepakatan.",
  },
  {
    title: "7. Hukum yang Berlaku",
    body: "Syarat dan ketentuan ini ditafsirkan berdasarkan hukum yang berlaku di Indonesia. Sengketa akan diutamakan diselesaikan melalui musyawarah terlebih dahulu.",
  },
];

export default function TermsPage() {
  return (
    <main className="bg-white text-neutral-900">
      <Container className="max-w-3xl py-14 sm:py-20">
        <article className="space-y-8">
          <header className="space-y-4">
            <Link
              href="/"
              className="inline-flex text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              ← Kembali ke Beranda
            </Link>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Syarat dan Ketentuan
            </h1>
            <p className="text-sm text-neutral-500">
              Terakhir diperbarui: {lastUpdated}
            </p>
            <p className="text-base leading-relaxed text-neutral-700">
              Halaman ini adalah placeholder syarat dan ketentuan untuk
              DuaDuaInterior. Dokumen ini menjelaskan aturan umum penggunaan
              layanan kami agar kerja sama dengan klien berjalan jelas,
              transparan, dan profesional.
            </p>
          </header>

          <section className="space-y-6">
            {termsSections.map((item) => (
              <section key={item.title} className="space-y-2">
                <h2 className="text-xl font-semibold text-neutral-900">
                  {item.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">{item.body}</p>
              </section>
            ))}
          </section>

          <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
            <h2 className="text-lg font-semibold text-neutral-900">
              Persetujuan
            </h2>
            <p className="mt-2 text-neutral-700 leading-relaxed">
              Dengan menggunakan website atau layanan kami, Anda dianggap telah
              membaca dan memahami syarat serta ketentuan ini. Untuk pertanyaan
              lebih lanjut, silakan hubungi tim kami di{" "}
              <a
                href={`mailto:${BRAND.email}`}
                className="font-medium text-neutral-900 underline underline-offset-2"
              >
                {BRAND.email}
              </a>
              .
            </p>
          </section>
        </article>
      </Container>
    </main>
  );
}
