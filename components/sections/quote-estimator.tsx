"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { Calculator, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "wardrobe", label: "Lemari & Wardrobe", priceRange: "8 - 25" },
  { id: "bedroom", label: "Set Kamar Tidur", priceRange: "15 - 45" },
  { id: "kitchen", label: "Kitchen Set", priceRange: "12 - 35" },
  { id: "full", label: "Paket Lengkap", priceRange: "35 - 100+" },
];

const sizes = [
  { id: "kecil", label: "Kecil (< 2m)", multiplier: 0.7 },
  { id: "sedang", label: "Sedang (2-4m)", multiplier: 1 },
  { id: "besar", label: "Besar (> 4m)", multiplier: 1.4 },
];

const materials = [
  { id: "standard", label: "MDF/HPL", multiplier: 1 },
  { id: "premium", label: "Plywood + HPL", multiplier: 1.3 },
  { id: "luxury", label: "Kayu Solid", multiplier: 2 },
];

export function QuoteEstimator() {
  const [selectedCategory, setSelectedCategory] = useState("wardrobe");
  const [selectedSize, setSelectedSize] = useState("sedang");
  const [selectedMaterial, setSelectedMaterial] = useState("standard");

  const category = categories.find((c) => c.id === selectedCategory);
  const size = sizes.find((s) => s.id === selectedSize);
  const material = materials.find((m) => m.id === selectedMaterial);

  if (!category || !size || !material) return null;

  const [minStr, maxStr] = category.priceRange.split(" - ");
  const baseMin = parseFloat(minStr);
  const baseMax = parseFloat(maxStr.replace("+", ""));

  const estMin = Math.round(baseMin * size.multiplier * material.multiplier);
  const estMax = Math.round(baseMax * size.multiplier * material.multiplier);

  return (
    <section className="py-20 lg:py-28 bg-[linear-gradient(180deg,#f4f1ed_0%,#f7f4ef_55%,#ffffff_100%)]">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200/80 bg-white/70 shadow-soft">
              <Calculator className="w-4 h-4 text-accent-gold" />
              <span className="text-xs font-semibold text-neutral-700 uppercase tracking-[0.2em]">
                Estimasi Cepat
              </span>
            </div>
            <h2 className="font-[var(--nav-font-display)] text-3xl lg:text-4xl font-semibold text-neutral-900">
              Kira-Kira Berapa Biayanya?
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Dapatkan estimasi kasar untuk perencanaan anggaran Anda.
              Harga final ditentukan setelah konsultasi desain detail.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-soft-xl p-8 lg:p-10 space-y-8">
            {/* Category Selection */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-3">
                Kategori Furniture
              </label>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "rounded-xl border-2 px-4 py-3 text-sm font-medium transition-all duration-200",
                      selectedCategory === cat.id
                        ? "border-primary-500 bg-primary-50 text-primary-700"
                        : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300",
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-3">
                Ukuran
              </label>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map((sz) => (
                  <button
                    key={sz.id}
                    onClick={() => setSelectedSize(sz.id)}
                    className={cn(
                      "rounded-xl border-2 px-4 py-3 text-sm font-medium transition-all duration-200",
                      selectedSize === sz.id
                        ? "border-primary-500 bg-primary-50 text-primary-700"
                        : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300",
                    )}
                  >
                    {sz.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Selection */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-3">
                Material
              </label>
              <div className="grid grid-cols-3 gap-3">
                {materials.map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => setSelectedMaterial(mat.id)}
                    className={cn(
                      "rounded-xl border-2 px-4 py-3 text-sm font-medium transition-all duration-200",
                      selectedMaterial === mat.id
                        ? "border-primary-500 bg-primary-50 text-primary-700"
                        : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300",
                    )}
                  >
                    {mat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Result */}
            <div className="rounded-2xl bg-neutral-950 text-white p-6 lg:p-8">
              <div className="text-center space-y-4">
                <p className="text-neutral-400 text-sm">Estimasi biaya untuk:</p>
                <p className="text-neutral-200 font-medium">
                  {category.label} &middot; Ukuran {size.label} &middot; Material {material.label}
                </p>
                <div className="font-[var(--nav-font-display)] text-4xl lg:text-5xl font-semibold text-accent-gold">
                  Rp {estMin} - {estMax}jt
                </div>
                <p className="text-neutral-500 text-sm">
                  *Harga estimasi, bukan harga final. Harga akurat setelah konsultasi.
                </p>
                <LinkButton
                  href="/#contact"
                  size="lg"
                  className="mt-4 bg-white text-neutral-900 hover:bg-neutral-100"
                >
                  Konsultasi Gratis untuk Harga Pasti
                  <ArrowRight className="w-5 h-5 ml-2" />
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
