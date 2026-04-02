"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "Berapa lama waktu pengerjaan furniture custom?",
    answer: "Waktu pengerjaan bervariasi antara 3-8 minggu tergantung kompleksitas desain. Lemari & wardrobe biasanya 3-5 minggu, kitchen set 4-6 minggu, dan paket lengkap 6-8 minggu. Kami selalu memberikan estimasi timeline yang akurat sebelum produksi dimulai.",
  },
  {
    question: "Apakah ada garansi untuk furniture yang dibuat?",
    answer: "Ya, semua furniture kami bergaransi 2 tahun untuk struktur kayu dan 1 tahun untuk hardware & finishing. Garansi mencakup perbaikan atau penggantian jika terjadi cacat produksi. Tim after-sales kami siap membantu.",
  },
  {
    question: "Jenis material apa saja yang tersedia?",
    answer: "Kami menyediakan berbagai material premium: kayu solid (jati, mahoni, sungkai), MDF dengan HPL, plywood marine grade, dan bahan finishing melamine, duco, dan lacquer. Semua material dipilih sesuai kebutuhan dan anggaran Anda.",
  },
  {
    question: "Apakah bisa konsultasi desain sebelum memutuskan?",
    answer: "Tentu! Kami menyediakan konsultasi desain gratis. Tim designer kami akan membantu merancang furniture yang sesuai dengan ukuran ruang, kebutuhan fungsional, dan gaya yang Anda inginkan.",
  },
  {
    question: "Apakah ada batas minimum pesanan?",
    answer: "Tidak ada batas minimum. Kami mengerjakan dari satu lemari hingga paket interior lengkap. Setiap proyek diperlakukan dengan standar kualitas yang sama, besar atau kecil.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer: "Pembayaran dilakukan bertahap: DP 50% saat konfirmasi desain, 30% saat proses produksi dimulai, dan 20% saat instalasi selesai. Kami menerima transfer bank dan pembayaran tunai.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200/80 bg-white/70 shadow-soft">
              <div className="w-2 h-2 rounded-full bg-accent-gold" />
              <span className="text-xs font-semibold text-neutral-700 uppercase tracking-[0.2em]">
                Pertanyaan Umum
              </span>
            </div>
            <h2 className="font-[var(--nav-font-display)] text-3xl lg:text-4xl font-semibold text-neutral-900">
              Yang Sering Ditanyakan
            </h2>
          </div>

          <div className="space-y-3">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-neutral-200/70 bg-white shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium text-neutral-900">{item.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform duration-300",
                      openIndex === index && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-neutral-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
