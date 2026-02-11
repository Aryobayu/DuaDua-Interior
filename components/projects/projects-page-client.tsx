"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import {
  PORTFOLIO_FILTER_TABS,
  PROJECT_CATEGORY_LABELS,
  PROJECT_CATEGORY_NARRATIVES,
  ProjectCategory,
  ProjectFilter,
  getProjectsByFilter,
  normalizeProjectFilter,
} from "@/lib/projects-data";

type ProjectsPageClientProps = {
  initialCategory: ProjectFilter;
};

export function ProjectsPageClient({ initialCategory }: ProjectsPageClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = useMemo(() => {
    const category = searchParams.get("category");
    if (!category) return initialCategory;
    return normalizeProjectFilter(category);
  }, [initialCategory, searchParams]);

  const filteredProjects = useMemo(
    () => getProjectsByFilter(activeCategory),
    [activeCategory],
  );

  const narrativeRef = useRef<HTMLDivElement | null>(null);
  const [narrativeMinHeight, setNarrativeMinHeight] = useState<number | null>(
    null,
  );

  const narrativeCards = useMemo(
    () =>
      activeCategory === "all"
        ? (Object.keys(PROJECT_CATEGORY_NARRATIVES) as ProjectCategory[]).map(
            (key) => PROJECT_CATEGORY_NARRATIVES[key],
          )
        : [PROJECT_CATEGORY_NARRATIVES[activeCategory]],
    [activeCategory],
  );

  useLayoutEffect(() => {
    if (!narrativeRef.current) return;
    const height = narrativeRef.current.getBoundingClientRect().height;
    setNarrativeMinHeight((prev) =>
      prev === null ? height : Math.max(prev, height),
    );
  }, [activeCategory]);

  const filterBase =
    "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 font-[var(--nav-font-sans)]";
  const filterActive =
    "border-accent-gold/70 bg-accent-gold/15 text-accent-gold hover:border-accent-gold/80 hover:bg-accent-gold/25 active:bg-accent-gold/30";
  const filterInactive =
    "border-neutral-700 bg-neutral-900/60 text-neutral-200 hover:border-neutral-500 hover:bg-neutral-800/90 active:bg-neutral-800 active:border-neutral-400";
  const ctaPrimary =
    "group inline-flex items-center gap-2 rounded-full border border-neutral-300/80 bg-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-[0_12px_28px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-white hover:border-neutral-200 hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)] active:translate-y-px focus-visible:ring-2 focus-visible:ring-neutral-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 font-[var(--nav-font-sans)]";

  const handleTabClick = (value: ProjectFilter) => {
    if (value === activeCategory) return;
    const href = value === "all" ? "/projects" : `/projects?category=${value}`;
    router.replace(href, { scroll: false });
  };

  return (
    <main className="relative min-h-screen bg-neutral-950 text-neutral-100">
      <div className="absolute inset-0 bg-[radial-gradient(65%_55%_at_12%_0%,rgba(212,175,55,0.16),transparent_68%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_88%_0%,rgba(255,255,255,0.08),transparent_70%)]" />

      <Container className="relative z-10 pt-32 pb-20 lg:pt-36 lg:pb-24">
        <section className="mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-4 py-2 text-xs uppercase tracking-[0.18em] text-neutral-300 font-[var(--nav-font-sans)]">
            <Sparkles className="h-3.5 w-3.5 text-accent-gold" />
            Project Showcase
          </div>
          <h1 className="font-[var(--nav-font-display)] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Cerita Karya, Detail Premium, dan Eksekusi Presisi
          </h1>
          <p className="mx-auto max-w-3xl text-base text-neutral-300/90 leading-relaxed font-[var(--nav-font-sans)] sm:text-lg">
            Halaman ini merangkum karakter setiap proyek berdasarkan
            dokumentasi visual aktual, dari konsep ruang, ketelitian pengerjaan,
            hingga kualitas estetika yang membangun pengalaman interior yang
            matang dan profesional.
          </p>
        </section>

        <section
          ref={narrativeRef}
          className="mt-10 grid gap-4 md:grid-cols-3"
          style={
            narrativeMinHeight
              ? { minHeight: `${narrativeMinHeight}px` }
              : undefined
          }
        >
          {narrativeCards.map((item) => (
            <article
              key={item.headline}
              className="rounded-3xl border border-neutral-800 bg-neutral-900/65 p-5 shadow-soft backdrop-blur"
            >
              <h2 className="font-[var(--nav-font-display)] text-xl text-white">
                {item.headline}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300 font-[var(--nav-font-sans)]">
                {item.body}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-10 flex flex-wrap gap-3">
          {PORTFOLIO_FILTER_TABS.map((tab) => {
            const active = tab.value === activeCategory;

            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => handleTabClick(tab.value)}
                aria-pressed={active}
                className={cn(filterBase, active ? filterActive : filterInactive)}
              >
                {tab.label}
              </button>
            );
          })}
        </section>

        <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/70 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="relative block aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-900/30 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-neutral-700 bg-neutral-950/75 px-3 py-1 text-xs font-semibold text-accent-gold font-[var(--nav-font-sans)]">
                  {PROJECT_CATEGORY_LABELS[project.category]}
                </span>
              </Link>

              <div className="space-y-4 p-5">
                <div>
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="font-[var(--nav-font-display)] text-xl text-white transition-colors hover:text-accent-gold">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-300 font-[var(--nav-font-sans)]">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-2 rounded-2xl border border-neutral-800 bg-neutral-950/65 p-3 text-xs text-neutral-300 font-[var(--nav-font-sans)]">
                  <p>
                    <span className="text-neutral-400">Konsep:</span>{" "}
                    {project.concept}
                  </p>
                  <p>
                    <span className="text-neutral-400">Fungsi:</span>{" "}
                    {project.functionValue}
                  </p>
                  <p>
                    <span className="text-neutral-400">Kesan Visual:</span>{" "}
                    {project.visualTone}
                  </p>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-accent-gold transition-colors hover:text-accent-gold/80 font-[var(--nav-font-sans)]"
                >
                  Baca narasi lengkap
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 text-center shadow-soft">
          <p className="text-sm text-neutral-300 leading-relaxed font-[var(--nav-font-sans)] sm:text-base">
            Setiap karya dirancang sebagai solusi ruang yang kuat secara fungsi
            dan matang secara visual, dengan standar detail yang konsisten dari
            tahap konsep hingga finishing akhir.
          </p>
          <Link href="/#contact" className={cn("mt-5", ctaPrimary)}>
            Konsultasikan Proyek Anda
            <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
          </Link>
        </section>
      </Container>
    </main>
  );
}
