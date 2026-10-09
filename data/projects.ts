// Single source for project data: /work, /archive and the home "Selected work" list

export type ProjectCategory = "restaurant" | "cafe" | "hotel";

// Grey placeholder until real covers exist; set `src` when an image is ready
export interface Cover {
  label: string;
  tone: "light" | "dark" | "green";
  src?: string;
}

export interface ClientProject {
  no: string; // M001, M002…
  name: string;
  type: string;
  category: ProjectCategory;
  location: string;
  scope: string;
  year: string;
  href: string;
  cover: Cover;
}

export interface ArchiveItem {
  no: string; // A01, A02…
  name: string;
  type: string;
  role: string;
  year: string;
  // no detail pages yet — null renders the item as non-clickable
  href: string | null;
  cover: Cover;
}

export const clientProjects: ClientProject[] = [
  {
    no: "M001",
    name: "Monch",
    type: "Restaurant",
    category: "restaurant",
    location: "[City]",
    scope: "Design, development, menu",
    year: "2026",
    href: "/work/monch",
    cover: { label: "[ Monch — cover image / hover video ]", tone: "dark" },
  },
];

export const archiveItems: ArchiveItem[] = [
  {
    no: "A01",
    name: "HYNE",
    type: "Perfume e-commerce",
    role: "Design, development",
    year: "[2025]",
    href: null,
    cover: { label: "[ HYNE — cover ]", tone: "light" },
  },
  {
    no: "A02",
    name: "Watch boutique",
    type: "Jewelry & watches store",
    role: "Design, development",
    year: "[2025]",
    href: null,
    cover: { label: "[ Watch boutique — cover ]", tone: "dark" },
  },
  {
    no: "A03",
    name: "Creative Developer",
    type: "Personal portfolio",
    role: "Design, development",
    year: "[2024]",
    href: null,
    cover: { label: "[ Creative Developer — cover ]", tone: "green" },
  },
  {
    no: "A04",
    name: "[Project name]",
    type: "[Type]",
    role: "[Role]",
    year: "[Year]",
    href: null,
    cover: { label: "[ [Project name] — cover ]", tone: "dark" },
  },
];

export const projectFilters: { label: string; value: ProjectCategory | "all" }[] =
  [
    { label: "All", value: "all" },
    { label: "Restaurants", value: "restaurant" },
    { label: "Cafés", value: "cafe" },
    { label: "Hotels", value: "hotel" },
  ];
