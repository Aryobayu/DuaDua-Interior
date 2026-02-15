import type { MetadataRoute } from "next";
import { getAllProjects } from "@/features/projects/repository";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://duaduainterior.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getAllProjects();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/projects`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/privacy`,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/terms`,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
