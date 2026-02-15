export type {
  ProjectCategory,
  ProjectCategoryNarrative,
  ProjectFilter,
  ProjectItem,
} from "@/features/projects/types";

export {
  PORTFOLIO_FILTER_TABS,
  PROJECT_CATEGORY_LABELS,
  PROJECT_CATEGORY_NARRATIVES,
} from "@/features/projects/constants";

export { PROJECTS } from "@/features/projects/data/static-projects";

export {
  getFeaturedProjects,
  getFeaturedProjectsByFilter,
  getProjectBySlug,
  getProjectsByFilter,
  getRelatedProjects,
  normalizeProjectFilter,
} from "@/features/projects/selectors";
