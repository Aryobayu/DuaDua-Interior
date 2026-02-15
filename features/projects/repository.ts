import { unstable_cache } from "next/cache";
import { PROJECTS } from "@/features/projects/data/static-projects";
import {
  getProjectBySlug,
  getProjectsByFilter,
  getRelatedProjects,
} from "@/features/projects/selectors";
import { ProjectCategory, ProjectFilter, ProjectItem } from "@/features/projects/types";

type PayloadProjectDoc = {
  id?: string | number;
  slug?: unknown;
  category?: unknown;
  image?: unknown;
  title?: unknown;
  teaser?: unknown;
  description?: unknown;
  concept?: unknown;
  functionValue?: unknown;
  visualTone?: unknown;
  location?: unknown;
  featured?: unknown;
};

type PayloadListResponse = {
  docs?: PayloadProjectDoc[];
};

const PAYLOAD_API_URL = process.env.PAYLOAD_API_URL;
const PAYLOAD_API_TOKEN = process.env.PAYLOAD_API_TOKEN;

const toStringSafe = (value: unknown): string =>
  typeof value === "string" ? value.trim() : "";

const toBooleanSafe = (value: unknown): boolean =>
  typeof value === "boolean" ? value : false;

const parseCategory = (value: unknown): ProjectCategory | null => {
  if (typeof value !== "string") return null;
  if (value === "bedroom" || value === "kitchen" || value === "wardrobe") {
    return value;
  }
  return null;
};

const parseImage = (value: unknown): string => {
  if (typeof value === "string" && value.trim()) {
    return value.trim();
  }

  if (typeof value === "object" && value !== null) {
    const candidate = (value as { url?: unknown }).url;
    if (typeof candidate === "string" && candidate.trim()) {
      return candidate.trim();
    }
  }

  return "";
};

const mapPayloadProject = (doc: PayloadProjectDoc): ProjectItem | null => {
  const slug = toStringSafe(doc.slug);
  const title = toStringSafe(doc.title);
  const category = parseCategory(doc.category);

  if (!slug || !title || !category) {
    return null;
  }

  const image = parseImage(doc.image);

  return {
    id: String(doc.id ?? slug),
    slug,
    category,
    image,
    title,
    teaser: toStringSafe(doc.teaser),
    description: toStringSafe(doc.description),
    concept: toStringSafe(doc.concept),
    functionValue: toStringSafe(doc.functionValue),
    visualTone: toStringSafe(doc.visualTone),
    location: toStringSafe(doc.location),
    featured: toBooleanSafe(doc.featured),
  };
};

const fetchPayloadProjects = async (): Promise<ProjectItem[] | null> => {
  if (!PAYLOAD_API_URL) return null;

  try {
    const url = new URL("/api/projects", PAYLOAD_API_URL);
    url.searchParams.set("depth", "1");
    url.searchParams.set("limit", "200");
    url.searchParams.set("where[_status][equals]", "published");

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (PAYLOAD_API_TOKEN) {
      headers.Authorization = `JWT ${PAYLOAD_API_TOKEN}`;
    }

    const response = await fetch(url.toString(), {
      headers,
      next: { revalidate: 120 },
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as PayloadListResponse;
    const docs = Array.isArray(data.docs) ? data.docs : [];

    const mapped = docs
      .map(mapPayloadProject)
      .filter((project): project is ProjectItem => Boolean(project));

    if (!mapped.length) {
      return null;
    }

    return mapped;
  } catch {
    return null;
  }
};

const getCachedPayloadProjects = unstable_cache(
  async () => fetchPayloadProjects(),
  ["projects-payload-list"],
  {
    revalidate: 120,
  },
);

export const getProjectsDataSource = async (): Promise<"payload" | "static"> => {
  const payloadProjects = await getCachedPayloadProjects();
  return payloadProjects ? "payload" : "static";
};

export const getAllProjects = async (): Promise<ProjectItem[]> => {
  const payloadProjects = await getCachedPayloadProjects();
  return payloadProjects ?? PROJECTS;
};

export const getProjectsByFilterFromRepository = async (
  filter: ProjectFilter,
): Promise<ProjectItem[]> => {
  const projects = await getAllProjects();
  return getProjectsByFilter(filter, projects);
};

export const getProjectBySlugFromRepository = async (
  slug: string,
): Promise<ProjectItem | undefined> => {
  const projects = await getAllProjects();
  return getProjectBySlug(slug, projects);
};

export const getRelatedProjectsFromRepository = async (
  current: ProjectItem,
  limit = 3,
): Promise<ProjectItem[]> => {
  const projects = await getAllProjects();
  return getRelatedProjects(current, limit, projects);
};
