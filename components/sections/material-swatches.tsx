"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const materialCategories = [
  { id: "kayu", label: "Kayu Solid" },
  { id: "hpl", label: "HPL" },
  { id: "finishing", label: "Finishing" },
  { id: "countertop", label: "Countertop" },
];

const materials: Record<string, Array<{ name: string; color: string; description: string }>> = {
  kayu: [
    { name: "Jati", color: "#8B6914", description: "Kayu premium, serat indah, tahan lama" },
    { name: "Sungkai", color: "#C4A35A", description: "Warna terang, serat halus" },
    { name: "Mahoni", color: "#A0522D", description: "Warna merah hangat, mudah diolah" },
    { name: "Oak", color: "#D2B48C", description: "Serat jelas, kuat dan elegan" },
    { name: "Walnut", color: "#5C3317", description: "Warna gelap mewah, serat unik" },
    { name: "Mindi", color: "#C9A86C", description: "Ringan, cocok untuk furniture modern" },
  ],
  hpl: [
    { name: "White Marble", color: "#F5F5F5", description: "Motif marmer putih, elegan" },
    { name: "Nero Marquina", color: "#2D2D2D", description: "Motif marmer hitam" },
    { name: "Carrara", color: "#E8E8E8", description: "Motif marmer klasik Italia" },
    { name: "Concrete Grey", color: "#A8A8A8", description: "Motif beton modern" },
    { name: "Warm Walnut", color: "#6B4226", description: "Motif kayu walnut hangat" },
    { name: "Pine Light", color: "#E0C8A0", description: "Motif kayu pinus terang" },
  ],
  finishing: [
    { name: "Melamine Natural", color: "#C8A060", description: "Transparan, serat kayu terlihat" },
    { name: "Melamine Walnut", color: "#5A3A1A", description: "Warna coklat gelap" },
    { name: "Duco Putih", color: "#FAFAFA", description: "Cat putih glossy, modern" },
    { name: "Duco Hitam", color: "#1A1A1A", description: "Cat hitam matte, premium" },
    { name: "Lacquer Glossy", color: "#D4C4A8", description: "Mengkilap, reflektif" },
    { name: "Lacquer Matte", color: "#B8A080", description: "Halus tanpa pantulan" },
  ],
  countertop: [
    { name: "Granit Hitam", color: "#2D2D2D", description: "Tahan panas, kuat" },
    { name: "Granit Cream", color: "#D4C4A8", description: "Warna hangat, natural" },
    { name: "Solid Surface", color: "#E8E0D8", description: "Seamless, modern" },
    { name: "Keramik Putih", color: "#F0F0F0", description: "Tahan air, mudah dibersihkan" },
    { name: "Marmer White", color: "#F8F8F8", description: "Elegan, mewah" },
    { name: "Quartz Grey", color: "#9A9A9A", description: "Tahan gores, konsisten" },
  ],
};

export function MaterialSwatches() {
  const [activeCategory, setActiveCategory] = useState("kayu");

  return (
    <section className="py-20 lg:py-28 bg-neutral-950 text-neutral-100">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_20%,rgba(212,175,55,0.08),transparent_60%)]" />
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/60">
              <div className="w-2 h-2 rounded-full bg-accent-gold" />
              <span className="text-xs font-semibold text-neutral-300 uppercase tracking-[0.2em]">
                Pilihan Material
              </span>
            </div>
            <h2 className="font-[var(--nav-font-display)] text-3xl lg:text-4xl font-semibold text-neutral-100">
              Material & Finishing Premium
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Kami hanya menggunakan material berkualitas ekspor. Setiap pilihan
              disesuaikan dengan kebutuhan fungsi, estetika, dan anggaran Anda.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {materialCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border",
                  activeCategory === cat.id
                    ? "border-accent-gold/70 bg-accent-gold/15 text-accent-gold"
                    : "border-neutral-700 bg-neutral-900/60 text-neutral-300 hover:border-neutral-500",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {materials[activeCategory]?.map((mat) => (
              <div
                key={mat.name}
                className="group rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4 hover:border-neutral-600 transition-all duration-300 cursor-default"
              >
                <div
                  className="w-full aspect-square rounded-xl mb-3 ring-1 ring-white/10"
                  style={{ backgroundColor: mat.color }}
                />
                <h4 className="font-medium text-sm text-neutral-200 mb-1">{mat.name}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{mat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
