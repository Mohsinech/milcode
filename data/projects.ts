// Single source for project data: /work, /archive and the home "Selected work" list

export type ProjectCategory = "restaurant" | "cafe" | "hotel";

// Grey placeholder until real covers exist; set `src` when an image is ready
export interface Cover {
  label: string;
  tone: "light" | "dark" | "green";
  src?: string;
}

// Every field is optional: the case study page hides any section without data
export interface CaseStudy {
  tagline?: string;
  intro?: string;
  heroMedia?: Cover;
  client?: string;
  // one entry per line
  scope?: string[];
  stack?: string[];
  liveUrl?: string;
  challenge?: string;
  approach?: string;
  gallery?: (Cover & { size: "wide" | "tall" })[];
  typography?: { sample: string; fonts: string };
  palette?: { colors: string[]; note?: string };
  results?: { value: string; label: string }[];
  quote?: { text: string; name: string; role: string };
}

export interface ClientProject {
  no: string; // M001, M002…
  name: string;
  type: string;
  category: ProjectCategory;
  location: string;
  scope: string;
  year: string;
  // set when the project has a case study at /work/[slug]
  slug?: string;
  cover: Cover;
  caseStudy?: CaseStudy;
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
    slug: "monch",
    cover: { label: "[ Monch — cover image / hover video ]", tone: "dark" },
    caseStudy: {
      tagline: "A table, unhurried.",
      intro:
        "A website as calm and considered as the food — slow-paced, seasonal and built to turn visits into bookings.",
      heroMedia: {
        label: "[ Monch homepage — full-bleed hero video ]",
        tone: "dark",
      },
      client: "Monch — [City, Country]",
      scope: ["Art direction, UI design,", "development, online menu"],
      stack: ["Next.js, GSAP, Lenis,", "[CMS]"],
      liveUrl: "[monch-domain.com]",
      challenge:
        "[What Monch had before — e.g. an Instagram page and a PDF menu. What wasn’t working: hard to find on Google, bookings by DM, menu out of date.]",
      approach:
        "[Your idea in two sentences — e.g. slow, editorial pacing to match the dining room; serif headlines, warm imagery and one clear “Book a table” action on every screen.]",
      gallery: [
        { label: "[ Full homepage scroll — desktop ]", tone: "light", size: "wide" },
        { label: "[ Mobile — home ]", tone: "dark", size: "tall" },
        { label: "[ Mobile — menu ]", tone: "green", size: "tall" },
        { label: "[ Mobile — reservations ]", tone: "dark", size: "tall" },
      ],
      typography: { sample: "Aa", fonts: "[Monch display font] / [body font]" },
      palette: {
        colors: ["#3A2A22", "#F2EBDD", "#8E2A1E", "#C9B79A"],
        note: "[Replace with Monch colors]",
      },
      results: [
        { value: "[+XX%]", label: "Online reservations" },
        { value: "[X.Xs]", label: "Load time on mobile" },
        { value: "[X]", label: "Menu languages" },
      ],
      quote: {
        text: "[A real quote from the Monch owner, once you have it.]",
        name: "[Name]",
        role: "[Role]",
      },
    },
  },
];

// Case study page if there is one, otherwise the work index
export const projectHref = (p: ClientProject) =>
  p.slug ? `/work/${p.slug}` : "/work";

export const getProject = (slug: string) =>
  clientProjects.find((p) => p.slug === slug);

// The next project with a case study, or undefined after the last one
export const getNextProject = (slug: string) => {
  const withCase = clientProjects.filter((p) => p.slug);
  const i = withCase.findIndex((p) => p.slug === slug);
  return i === -1 ? undefined : withCase[i + 1];
};

export const nextProjectNo = `M${String(clientProjects.length + 1).padStart(3, "0")}`;

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
