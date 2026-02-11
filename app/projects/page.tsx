import { ProjectsPageClient } from "@/components/projects/projects-page-client";
import { Footer } from "@/components/sections/footer";
import { Navigation } from "@/components/sections/navigation";
import { normalizeProjectFilter } from "@/lib/projects-data";

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
