import { ProjectCategory, ProjectCategoryNarrative, ProjectFilter } from "@/features/projects/types";

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  bedroom: "Bedroom",
  kitchen: "Kitchen Set",
  wardrobe: "Wardrobe",
};

export const PROJECT_CATEGORY_NARRATIVES: Record<
  ProjectCategory,
  ProjectCategoryNarrative
> = {
  bedroom: {
    headline: "Bedroom Collection",
    body: "Koleksi kamar tidur menonjolkan perpaduan panel kayu, pencahayaan berlapis, dan tata letak terukur untuk menciptakan ruang istirahat yang tenang, mewah, dan ergonomis.",
  },
  kitchen: {
    headline: "Kitchen Collection",
    body: "Setiap kitchen set dirancang untuk alur kerja yang efisien, detail kabinet yang presisi, serta material yang tahan pakai agar dapur tampil bersih, modern, dan profesional.",
  },
  wardrobe: {
    headline: "Wardrobe Collection",
    body: "Proyek wardrobe menekankan organisasi ruang yang cermat, modul penyimpanan yang fungsional, dan finishing yang rapi untuk menghadirkan pengalaman penyimpanan premium.",
  },
};

export const PORTFOLIO_FILTER_TABS: Array<{
  label: string;
  value: ProjectFilter;
}> = [
  { label: "Semua", value: "all" },
  { label: "Wardrobe", value: "wardrobe" },
  { label: "Bedroom", value: "bedroom" },
  { label: "Kitchen Set", value: "kitchen" },
];
