import { Footer } from "@/components/sections/footer";
import { Navigation } from "@/components/sections/navigation";
import { Container } from "@/components/ui/container";
import {
  PROJECT_CATEGORY_LABELS,
  getProjectBySlug,
  getRelatedProjects,
} from "@/lib/projects-data";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project, 3);
  const categoryHref = `/projects?category=${project.category}`;
  const secondaryPill =
    "inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/60 px-5 py-2.5 text-sm font-semibold text-neutral-200 transition-all duration-300 hover:border-neutral-500 hover:bg-neutral-800/90 active:bg-neutral-800 active:border-neutral-400 font-[var(--nav-font-sans)]";
  const primaryCta =
    "group inline-flex items-center gap-2 rounded-full border border-neutral-300/80 bg-neutral-200 px-5 py-2.5 text-sm font-semibold text-neutral-950 shadow-[0_12px_28px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-white hover:border-neutral-200 hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)] active:translate-y-px focus-visible:ring-2 focus-visible:ring-neutral-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 font-[var(--nav-font-sans)]";

  return (
    <>
      <Navigation />
      <main className="relative min-h-screen bg-neutral-950 text-neutral-100">
        <div className="absolute inset-0 bg-[radial-gradient(65%_55%_at_12%_0%,rgba(212,175,55,0.14),transparent_68%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_88%_0%,rgba(255,255,255,0.08),transparent_70%)]" />

        <Container className="relative z-10 pt-32 pb-20 lg:pt-36 lg:pb-24">
          <section className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-sm font-[var(--nav-font-sans)]">
              <Link
                href="/projects"
                className="inline-flex items-center gap-1 text-neutral-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Kembali ke semua projects
              </Link>
              <span className="text-neutral-600">/</span>
              <Link
                href={categoryHref}
                className="text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                {PROJECT_CATEGORY_LABELS[project.category]}
              </Link>
            </div>

            <span className="inline-flex rounded-full border border-neutral-700 bg-neutral-900/70 px-3 py-1 text-xs font-semibold text-accent-gold font-[var(--nav-font-sans)]">
              {PROJECT_CATEGORY_LABELS[project.category]}
            </span>

            <h1 className="font-[var(--nav-font-display)] text-4xl font-semibold text-white sm:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-3xl text-base text-neutral-300 leading-relaxed font-[var(--nav-font-sans)] sm:text-lg">
              {project.description}
            </p>
          </section>

          <section className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/60">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-900/15 to-transparent" />
            </div>

            <aside className="space-y-4">
              <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-5">
                <h2 className="font-[var(--nav-font-display)] text-xl text-white">
                  Konsep Desain
                </h2>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed font-[var(--nav-font-sans)]">
                  {project.concept}
                </p>
              </article>

              <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-5">
                <h2 className="font-[var(--nav-font-display)] text-xl text-white">
                  Fungsi Ruang
                </h2>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed font-[var(--nav-font-sans)]">
                  {project.functionValue}
                </p>
              </article>

              <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-5">
                <h2 className="font-[var(--nav-font-display)] text-xl text-white">
                  Kesan Visual
                </h2>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed font-[var(--nav-font-sans)]">
                  {project.visualTone}
                </p>
              </article>
            </aside>
          </section>

          <section className="mt-8 rounded-3xl border border-neutral-800 bg-neutral-900/65 p-6">
            <h2 className="font-[var(--nav-font-display)] text-2xl text-white">
              Narasi Proyek
            </h2>
            <p className="mt-3 text-neutral-300 leading-relaxed font-[var(--nav-font-sans)]">
              Proyek ini dikembangkan dengan fokus pada keseimbangan antara
              estetika dan fungsi. Setiap keputusan desain diarahkan untuk
              memperkuat karakter ruang, menyederhanakan aktivitas harian, dan
              menjaga kualitas visual tetap konsisten dari sudut ke sudut.
              Pendekatan eksekusi menekankan ketelitian detail, ketepatan
              proporsi, serta pemilihan material yang mendukung ketahanan
              jangka panjang.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={categoryHref}
                className={secondaryPill}
              >
                Lihat kategori {PROJECT_CATEGORY_LABELS[project.category]}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#contact"
                className={primaryCta}
              >
                Konsultasikan kebutuhan Anda
                <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </Link>
            </div>
          </section>

          {relatedProjects.length > 0 ? (
            <section className="mt-10">
              <div className="mb-5 flex items-end justify-between gap-4">
                <h2 className="font-[var(--nav-font-display)] text-2xl text-white sm:text-3xl">
                  Proyek Sejenis
                </h2>
                <Link
                  href={categoryHref}
                  className="text-sm text-accent-gold hover:text-accent-gold/80 font-[var(--nav-font-sans)]"
                >
                  Lihat semua
                </Link>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((item) => (
                  <Link
                    key={item.id}
                    href={`/projects/${item.slug}`}
                    className="group overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-[var(--nav-font-display)] text-lg text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-300 font-[var(--nav-font-sans)]">
                        {item.teaser}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </Container>
      </main>
      <Footer />
    </>
  );
}
