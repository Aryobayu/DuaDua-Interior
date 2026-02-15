import {
  getFeaturedProjectsByFilter,
  getProjectBySlug,
  getProjectsByFilter,
  normalizeProjectFilter,
} from "@/features/projects/selectors";
import { PROJECTS } from "@/features/projects/data/static-projects";

describe("project selectors", () => {
  it("normalizes filter values safely", () => {
    expect(normalizeProjectFilter(undefined)).toBe("all");
    expect(normalizeProjectFilter("Kitchen-Set")).toBe("kitchen");
    expect(normalizeProjectFilter("WARDROBE")).toBe("wardrobe");
    expect(normalizeProjectFilter("unknown")).toBe("all");
  });

  it("filters projects by category", () => {
    const bedroomProjects = getProjectsByFilter("bedroom", PROJECTS);
    expect(bedroomProjects.length).toBeGreaterThan(0);
    expect(bedroomProjects.every((item) => item.category === "bedroom")).toBe(
      true,
    );
  });

  it("returns featured projects by filter", () => {
    const featuredKitchen = getFeaturedProjectsByFilter("kitchen", PROJECTS);
    expect(featuredKitchen.length).toBeGreaterThan(0);
    expect(
      featuredKitchen.every(
        (item) => item.featured && item.category === "kitchen",
      ),
    ).toBe(true);
  });

  it("finds a project by slug", () => {
    const project = getProjectBySlug("suite-warm-walnut", PROJECTS);
    expect(project?.title).toBe("Suite Warm Walnut");
  });
});
