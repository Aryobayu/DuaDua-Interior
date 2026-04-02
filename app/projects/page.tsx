import { ProjectsPageClient } from "@/components/projects/projects-page-client";
import { Footer } from "@/components/sections/footer";
import { Navigation } from "@/components/sections/navigation";
import { normalizeProjectFilter } from "@/lib/projects-data";
import { BRAND } from "@/lib/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyek Interior | " + BRAND.name,
  description: "Lihat portfolio proyek interior custom kami — bedroom, kitchen set, dan wardrobe dengan kualitas premium.",
  openGraph: {
    title: "Proyek Interior | " + BRAND.name,
    description: "Lihat portfolio proyek interior custom kami — bedroom, kitchen set, dan wardrobe dengan kualitas premium.",
    type: "website",
  },
};

type ProjectsPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;
  const initialCategory = normalizeProjectFilter(params.category);

  return (
    <>
      <Navigation />
      <ProjectsPageClient initialCategory={initialCategory} />
      <Footer />
    </>
  );
}
