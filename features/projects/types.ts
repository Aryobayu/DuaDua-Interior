export type ProjectCategory = "bedroom" | "kitchen" | "wardrobe";
export type ProjectFilter = "all" | ProjectCategory;

export type ProjectItem = {
  id: string;
  slug: string;
  category: ProjectCategory;
  image: string;
  title: string;
  teaser: string;
  description: string;
  concept: string;
  functionValue: string;
  visualTone: string;
  location: string;
  featured: boolean;
};

export type ProjectCategoryNarrative = {
  headline: string;
  body: string;
};
