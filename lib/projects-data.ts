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

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  bedroom: "Bedroom",
  kitchen: "Kitchen Set",
  wardrobe: "Wardrobe",
};

export const PROJECT_CATEGORY_NARRATIVES: Record<
  ProjectCategory,
  { headline: string; body: string }
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

export const PROJECTS: ProjectItem[] = [
  {
    id: "bedroom-01",
    slug: "suite-warm-walnut",
    category: "bedroom",
    image: "/images/projects/bedroom/bedroom-01.jpg",
    title: "Suite Warm Walnut",
    teaser:
      "Panel vertikal dan cove lighting membangun kamar tidur yang hangat, terukur, dan premium.",
    description:
      "Komposisi panel vertikal dan pencahayaan cove menciptakan suasana hangat yang eksklusif.",
    concept: "Modern warm minimal",
    functionValue: "Area tidur + side storage",
    visualTone: "Elegant, cozy, clean",
    location: "Jakarta Selatan",
    featured: true,
  },
  {
    id: "bedroom-02",
    slug: "compact-smart-bedroom",
    category: "bedroom",
    image: "/images/projects/bedroom/bedroom-02.jpg",
    title: "Compact Smart Bedroom",
    teaser:
      "Integrasi area tidur, panel TV, dan workspace untuk ruang kecil yang tetap rapi.",
    description:
      "Integrasi meja kerja, panel TV, dan wardrobe membuat ruang kecil tetap efisien dan rapi.",
    concept: "Compact multifunction room",
    functionValue: "Tidur + kerja harian",
    visualTone: "Neat, bright, practical",
    location: "Tangerang",
    featured: false,
  },
  {
    id: "bedroom-03",
    slug: "classic-accent-wall",
    category: "bedroom",
    image: "/images/projects/bedroom/bedroom-03.jpg",
    title: "Classic Accent Wall",
    teaser:
      "Aksen kayu gelap dan dekor terkurasi memberi karakter berkelas tanpa terasa berlebihan.",
    description:
      "Aksen kayu gelap dan dekor dinding terkurasi memberi karakter kuat tanpa terasa berat.",
    concept: "Classic contemporary",
    functionValue: "Master bedroom setup",
    visualTone: "Rich, warm, balanced",
    location: "BSD City",
    featured: false,
  },
  {
    id: "bedroom-04",
    slug: "minimal-built-in-bedroom",
    category: "bedroom",
    image: "/images/projects/bedroom/bedroom-04.jpg",
    title: "Minimal Built-In",
    teaser:
      "Wardrobe built-in penuh memperkuat kesan lapang dengan garis desain yang bersih.",
    description:
      "Pendekatan minimalis dengan wardrobe built-in berukuran penuh untuk kesan lapang dan teratur.",
    concept: "Minimal functional",
    functionValue: "Storage optimization",
    visualTone: "Simple, calm, spacious",
    location: "Semarang",
    featured: false,
  },
  {
    id: "bedroom-05",
    slug: "mirror-edge-bedroom",
    category: "bedroom",
    image: "/images/projects/bedroom/bedroom-05.jpg",
    title: "Mirror Edge Bedroom",
    teaser:
      "Layer panel dan elemen kaca menambah depth visual serta memperhalus ambience kamar.",
    description:
      "Permainan panel dan elemen kaca menambah kedalaman visual sekaligus memperluas persepsi ruang.",
    concept: "Contemporary detailing",
    functionValue: "Comfort + visual expansion",
    visualTone: "Refined, modern, airy",
    location: "Semarang",
    featured: false,
  },
  {
    id: "bedroom-06",
    slug: "soft-neutral-room",
    category: "bedroom",
    image: "/images/projects/bedroom/bedroom-06.jpg",
    title: "Soft Neutral Room",
    teaser:
      "Palet netral terang dan simetri furnitur menghadirkan ritme visual yang menenangkan.",
    description:
      "Palet netral terang dan penataan furnitur simetris menghadirkan ritme visual yang lembut.",
    concept: "Soft modern bedroom",
    functionValue: "Daily comfort",
    visualTone: "Light, smooth, inviting",
    location: "Semarang",
    featured: false,
  },
  {
    id: "bedroom-07",
    slug: "youth-sports-theme",
    category: "bedroom",
    image: "/images/projects/bedroom/bedroom-07.jpg",
    title: "Youth Sports Theme",
    teaser:
      "Kamar personal bertema sporty dengan storage modular dan lighting yang tetap terkontrol.",
    description:
      "Tema kamar remaja dengan aksen playful, storage modular, dan pencahayaan yang tetap terkontrol.",
    concept: "Thematic personalized room",
    functionValue: "Tidur + belajar + simpan",
    visualTone: "Playful, tidy, dynamic",
    location: "Jakarta Timur",
    featured: false,
  },
  {
    id: "bedroom-08",
    slug: "pastel-vanity-room",
    category: "bedroom",
    image: "/images/projects/bedroom/bedroom-08.jpg",
    title: "Pastel Vanity Room",
    teaser:
      "Vanity terintegrasi dan palet pastel menciptakan ruang personal yang elegan dan lembut.",
    description:
      "Vanity terintegrasi dan palet pastel menciptakan ruang personal yang lembut namun tetap premium.",
    concept: "Feminine modern",
    functionValue: "Rest + personal grooming",
    visualTone: "Soft, elegant, curated",
    location: "Depok",
    featured: true,
  },
  {
    id: "bedroom-09",
    slug: "executive-master-suite",
    category: "bedroom",
    image: "/images/projects/bedroom/bedroom-09.jpg",
    title: "Executive Master Suite",
    teaser:
      "Komposisi art wall dan panel kayu berlapis membangun atmosfer hotel-class yang matang.",
    description:
      "Highlight art wall dan panel kayu berlapis memberikan nuansa hotel-class yang berkelas.",
    concept: "Executive modern classic",
    functionValue: "Master bedroom ambiance",
    visualTone: "Luxurious, mature, warm",
    location: "Jakarta Pusat",
    featured: true,
  },
  {
    id: "bedroom-10",
    slug: "gallery-lighting-bedroom",
    category: "bedroom",
    image: "/images/projects/bedroom/bedroom-10.jpg",
    title: "Gallery Lighting Bedroom",
    teaser:
      "Pencahayaan display terintegrasi mempertegas detail pengerjaan dengan rasa visual yang mewah.",
    description:
      "Pencahayaan built-in pada kabinet menciptakan efek galeri yang mempertegas detail pengerjaan.",
    concept: "Display-integrated bedroom",
    functionValue: "Storage + decorative display",
    visualTone: "Premium, polished, layered",
    location: "Semarang",
    featured: false,
  },
  {
    id: "bedroom-11",
    slug: "refined-wooden-retreat",
    category: "bedroom",
    image: "/images/projects/bedroom/bedroom-11.jpg",
    title: "Refined Wooden Retreat",
    teaser:
      "Komposisi kayu dan cahaya linear dirancang untuk suasana istirahat yang intim.",
    description:
      "Komposisi kayu dan pencahayaan linear dirancang untuk pengalaman istirahat yang tenang dan hangat.",
    concept: "Refined wooden modern",
    functionValue: "Deep-rest setup",
    visualTone: "Cozy, intimate, timeless",
    location: "Semarang",
    featured: false,
  },
  {
    id: "kitchen-set-01",
    slug: "linear-compact-kitchen",
    category: "kitchen",
    image: "/images/projects/kitchen-set/kitchen-set-01.jpg",
    title: "Linear Compact Kitchen",
    teaser:
      "Layout linear yang ringkas memastikan alur kerja dapur efisien di ruang terbatas.",
    description:
      "Desain linear yang ringkas untuk memaksimalkan workflow di ruang dapur berukuran terbatas.",
    concept: "Compact clean kitchen",
    functionValue: "Efficient cooking flow",
    visualTone: "Minimal, clear, functional",
    location: "Tangerang",
    featured: false,
  },
  {
    id: "kitchen-set-02",
    slug: "island-preparation-zone",
    category: "kitchen",
    image: "/images/projects/kitchen-set/kitchen-set-02.jpg",
    title: "Island Preparation Zone",
    teaser:
      "Pulau kerja dan kabinet presisi menyatukan estetika modern dan sirkulasi yang lega.",
    description:
      "Pulau kerja dan kabinet bawah yang presisi menghadirkan dapur modern dengan sirkulasi lega.",
    concept: "Modern island kitchen",
    functionValue: "Prep-focused workflow",
    visualTone: "Open, premium, balanced",
    location: "Bekasi",
    featured: true,
  },
  {
    id: "kitchen-set-03",
    slug: "hospitality-counter",
    category: "kitchen",
    image: "/images/projects/kitchen-set/kitchen-set-03.jpg",
    title: "Hospitality Counter",
    teaser:
      "Counter bergaya hospitality memperkuat kesan profesional untuk area servis modern.",
    description:
      "Counter bergaya hospitality dengan pencahayaan perimeter untuk kesan profesional dan elegan.",
    concept: "Hospitality inspired counter",
    functionValue: "Serving + branding point",
    visualTone: "Sleek, polished, upscale",
    location: "Semarang",
    featured: false,
  },
  {
    id: "kitchen-set-04",
    slug: "open-plan-kitchen",
    category: "kitchen",
    image: "/images/projects/kitchen-set/kitchen-set-04.jpg",
    title: "Open Plan Kitchen",
    teaser:
      "Rancangan open-plan yang menghubungkan area memasak dan interaksi sosial secara natural.",
    description:
      "Pendekatan open-plan yang menghubungkan area kerja dan area sosial secara harmonis.",
    concept: "Open living kitchen",
    functionValue: "Cook + interact",
    visualTone: "Warm, bright, contemporary",
    location: "Semarang",
    featured: false,
  },
  {
    id: "kitchen-set-05",
    slug: "pass-through-service",
    category: "kitchen",
    image: "/images/projects/kitchen-set/kitchen-set-05.jpg",
    title: "Pass-Through Service",
    teaser:
      "Counter pass-through meningkatkan konektivitas ruang tanpa mengorbankan efisiensi kerja.",
    description:
      "Counter pass-through meningkatkan konektivitas ruang sekaligus menjaga workflow tetap efisien.",
    concept: "Semi-open service counter",
    functionValue: "Service visibility",
    visualTone: "Practical, neat, modern",
    location: "Semarang",
    featured: false,
  },
  {
    id: "kitchen-set-06",
    slug: "modern-l-shape-kitchen",
    category: "kitchen",
    image: "/images/projects/kitchen-set/kitchen-set-06.jpg",
    title: "Modern L-Shape Kitchen",
    teaser:
      "Kabinet L-shape dan under-cabinet lighting menciptakan dapur yang rapi dan ergonomis.",
    description:
      "Kabinet L-shape dengan lighting under-cabinet untuk kenyamanan visual dan akses kerja optimal.",
    concept: "L-shape ergonomic layout",
    functionValue: "Work triangle efficiency",
    visualTone: "Calm, structured, premium",
    location: "Jakarta Barat",
    featured: true,
  },
  {
    id: "wardrobe-01",
    slug: "walk-in-wardrobe-studio",
    category: "wardrobe",
    image: "/images/projects/wardrobe/wardrobe-01.jpg",
    title: "Walk-In Wardrobe Studio",
    teaser:
      "Modul terbuka yang tertata rapi untuk kapasitas simpan maksimal dengan nuansa premium.",
    description:
      "Walk-in wardrobe dengan modul terbuka yang tertata rapi untuk kapasitas simpan maksimal.",
    concept: "Wardrobe-first interior",
    functionValue: "Smart organization",
    visualTone: "Tailored, clean, luxurious",
    location: "Jakarta Selatan",
    featured: true,
  },
];

export const PORTFOLIO_FILTER_TABS: Array<{
  label: string;
  value: ProjectFilter;
}> = [
  { label: "Semua", value: "all" },
  { label: "Wardrobe", value: "wardrobe" },
  { label: "Bedroom", value: "bedroom" },
  { label: "Kitchen Set", value: "kitchen" },
];

export const normalizeProjectFilter = (value?: string): ProjectFilter => {
  if (!value) return "all";
  const normalized = value.toLowerCase();

  if (normalized === "bedroom") return "bedroom";
  if (normalized === "wardrobe") return "wardrobe";
  if (normalized === "kitchen" || normalized === "kitchen-set") return "kitchen";

  return "all";
};

export const getProjectsByFilter = (filter: ProjectFilter): ProjectItem[] => {
  if (filter === "all") return PROJECTS;
  return PROJECTS.filter((project) => project.category === filter);
};

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);

export const getFeaturedProjectsByFilter = (filter: ProjectFilter): ProjectItem[] => {
  if (filter === "all") return FEATURED_PROJECTS;
  return FEATURED_PROJECTS.filter((project) => project.category === filter);
};

export const getProjectBySlug = (slug: string): ProjectItem | undefined =>
  PROJECTS.find((project) => project.slug === slug);

export const getRelatedProjects = (
  current: ProjectItem,
  limit = 3,
): ProjectItem[] =>
  PROJECTS.filter(
    (project) =>
      project.slug !== current.slug && project.category === current.category,
  ).slice(0, limit);
