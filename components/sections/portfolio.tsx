"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  PORTFOLIO_FILTER_TABS,
  PROJECT_CATEGORY_LABELS,
  ProjectFilter,
  getFeaturedProjectsByFilter,
} from "@/lib/projects-data";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectFilter>("all");

  const filteredItems = useMemo(
    () => getFeaturedProjectsByFilter(activeCategory),
    [activeCategory],
  );
  const filterBase =
    "min-w-[120px] rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 font-[var(--nav-font-sans)]";
  const filterActive =
    "border-accent-gold/70 bg-accent-gold/15 text-accent-gold hover:border-accent-gold/80 hover:bg-accent-gold/25 active:bg-accent-gold/30";
  const filterInactive =
    "border-neutral-700 bg-neutral-900/60 text-neutral-200 hover:border-neutral-500 hover:bg-neutral-800/90 active:bg-neutral-800 active:border-neutral-400";

  return (
    <section
      id="portfolio"
      className="relative py-24 lg:py-32 bg-neutral-900 text-neutral-100"
    >
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/60 shadow-soft backdrop-blur">
            <div className="w-2 h-2 rounded-full bg-accent-gold" />
            <span className="text-xs font-semibold text-neutral-300 uppercase tracking-[0.2em] font-[var(--nav-font-sans)]">
              Portfolio Pilihan
            </span>
          </div>

          <h2 className="font-[var(--nav-font-display)] text-4xl lg:text-5xl font-semibold text-neutral-100">
            Narasi Karya yang Terukur
          </h2>

          <p className="text-lg text-neutral-400 font-[var(--nav-font-sans)]">
            Cuplikan proyek ini dirancang sebagai pembuka cerita. Masuk ke
            halaman projects untuk melihat narasi lengkap konsep, fungsi ruang,
            dan kualitas pengerjaan.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PORTFOLIO_FILTER_TABS.map((tab) => (
            <Button
              key={tab.value}
              variant="ghost"
              size="md"
              onClick={() => setActiveCategory(tab.value)}
              className={cn(
                filterBase,
                activeCategory === tab.value ? filterActive : filterInactive,
              )}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <Link
              key={item.id}
              href={`/projects/${item.slug}`}
              className="group relative bg-neutral-900/70 border border-neutral-800 rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="absolute top-4 left-4 px-3 py-1 bg-neutral-900/80 border border-neutral-700 rounded-full shadow-soft backdrop-blur-sm">
                <span className="text-xs font-semibold text-accent-gold font-[var(--nav-font-sans)]">
                  {PROJECT_CATEGORY_LABELS[item.category]}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="font-[var(--nav-font-display)] text-white text-lg">
                  {item.title}
                </h3>
                <p className="mt-1 text-white/80 text-sm leading-relaxed font-[var(--nav-font-sans)]">
                  {item.teaser}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-accent-gold text-sm font-semibold font-[var(--nav-font-sans)]">
                  Lihat detail proyek
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900 px-6 py-3 text-neutral-200 hover:bg-neutral-800 transition-colors font-[var(--nav-font-sans)]"
          >
            Lihat Semua Projects
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
