import { PROJECTS } from "@/features/projects/data/static-projects";
import { ProjectFilter, ProjectItem } from "@/features/projects/types";

export const normalizeProjectFilter = (value?: string): ProjectFilter => {
  if (!value) return "all";
  const normalized = value.toLowerCase();

  if (normalized === "bedroom") return "bedroom";
  if (normalized === "wardrobe") return "wardrobe";
  if (normalized === "kitchen" || normalized === "kitchen-set") return "kitchen";

  return "all";
};

export const getProjectsByFilter = (
  filter: ProjectFilter,
  projects: ProjectItem[] = PROJECTS,
): ProjectItem[] => {
  if (filter === "all") return projects;
  return projects.filter((project) => project.category === filter);
};

export const getFeaturedProjects = (
  projects: ProjectItem[] = PROJECTS,
): ProjectItem[] => projects.filter((project) => project.featured);

export const getFeaturedProjectsByFilter = (
  filter: ProjectFilter,
  projects: ProjectItem[] = PROJECTS,
): ProjectItem[] => {
  const featured = getFeaturedProjects(projects);
  if (filter === "all") return featured;
  return featured.filter((project) => project.category === filter);
};

export const getProjectBySlug = (
  slug: string,
  projects: ProjectItem[] = PROJECTS,
): ProjectItem | undefined =>
  projects.find((project) => project.slug === slug);

export const getRelatedProjects = (
  current: ProjectItem,
  limit = 3,
  projects: ProjectItem[] = PROJECTS,
): ProjectItem[] =>
  projects
    .filter(
      (project) =>
        project.slug !== current.slug && project.category === current.category,
    )
    .slice(0, limit);
