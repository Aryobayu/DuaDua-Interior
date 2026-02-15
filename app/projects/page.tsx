import type { Metadata } from "next";
import { ProjectsPageClient } from "@/components/projects/projects-page-client";
import { Footer } from "@/components/sections/footer";
import { Navigation } from "@/components/sections/navigation";
import { getAllProjects } from "@/features/projects/repository";
import { normalizeProjectFilter } from "@/lib/projects-data";

type ProjectsPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export const metadata: Metadata = {
  title: "Project Showcase",
  description:
    "Eksplorasi portofolio proyek DuaDuaInterior: wardrobe, bedroom set, dan kitchen set dengan pendekatan desain premium dan eksekusi presisi.",
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;
  const initialCategory = normalizeProjectFilter(params.category);
  const projects = await getAllProjects();

  return (
    <>
      <Navigation />
      <ProjectsPageClient
        initialCategory={initialCategory}
        projects={projects}
      />
      <Footer />
    </>
  );
}
