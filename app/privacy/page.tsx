import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan Privasi DuaDuaInterior menjelaskan data yang kami kumpulkan, tujuan penggunaannya, dan hak pengguna atas data pribadi.",
};

const lastUpdated = "15 Februari 2026";

const privacySections = [
  {
    title: "1. Informasi yang Kami Kumpulkan",
    body: "Kami dapat mengumpulkan data yang Anda kirimkan secara langsung, seperti nama, nomor telepon, email, alamat proyek, dan detail kebutuhan interior.",
  },
  {
    title: "2. Cara Kami Menggunakan Informasi",
    body: "Data digunakan untuk merespons konsultasi, menyiapkan penawaran, koordinasi pengerjaan proyek, peningkatan kualitas layanan, dan komunikasi terkait proyek Anda.",
  },
  {
    title: "3. Pembagian Informasi ke Pihak Ketiga",
    body: "Kami tidak menjual data pribadi Anda. Data hanya dibagikan jika diperlukan untuk operasional proyek (misalnya vendor logistik/material) atau kewajiban hukum.",
  },
  {
    title: "4. Keamanan Data",
    body: "Kami menerapkan langkah perlindungan yang wajar untuk mencegah akses, penggunaan, atau perubahan data tanpa izin. Namun, tidak ada sistem digital yang 100% bebas risiko.",
  },
  {
    title: "5. Hak Anda sebagai Pengguna",
    body: "Anda berhak meminta akses, koreksi, atau penghapusan data pribadi yang Anda berikan kepada kami, sepanjang tidak bertentangan dengan kewajiban hukum dan operasional proyek.",
  },
  {
    title: "6. Cookie dan Analitik",
    body: "Website dapat menggunakan cookie dasar untuk pengalaman penggunaan dan analitik trafik. Anda dapat mengatur preferensi cookie melalui browser Anda.",
  },
  {
    title: "7. Perubahan Kebijakan",
    body: "Kebijakan ini dapat diperbarui sewaktu-waktu. Tanggal pembaruan terbaru ditampilkan di halaman ini agar Anda mudah memantau perubahan.",
  },
];

export default function PrivacyPage() {
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
              Kebijakan Privasi
            </h1>
            <p className="text-sm text-neutral-500">
              Terakhir diperbarui: {lastUpdated}
            </p>
            <p className="text-base leading-relaxed text-neutral-700">
              Halaman ini adalah placeholder kebijakan privasi untuk
              DuaDuaInterior. Dokumen ini menjelaskan bagaimana informasi Anda
              dikumpulkan, digunakan, dan dilindungi selama proses komunikasi
              maupun pengerjaan proyek.
            </p>
          </header>

          <section className="space-y-6">
            {privacySections.map((item) => (
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
              Kontak Privasi
            </h2>
            <p className="mt-2 text-neutral-700 leading-relaxed">
              Jika Anda memiliki pertanyaan terkait kebijakan privasi ini, Anda
              dapat menghubungi tim kami melalui email{" "}
              <a
                href={`mailto:${BRAND.email}`}
                className="font-medium text-neutral-900 underline underline-offset-2"
              >
                {BRAND.email}
              </a>{" "}
              atau WhatsApp di nomor {BRAND.phoneDisplay}.
            </p>
          </section>
        </article>
      </Container>
    </main>
  );
}
