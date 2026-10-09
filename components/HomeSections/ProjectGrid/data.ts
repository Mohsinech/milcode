interface InitialData {
  id: number;
  projectTitle: string;
  projectImage: string;
  projectUrl: string;
}

export const initialData: InitialData[] = [
  {
    id: 1,
    projectTitle: "Ayourluxe",
    projectImage: "/assets/initialTemplates/ayourluxe.webp",
    projectUrl: "/ayourluxe",
  },
  {
    id: 2,
    projectTitle: "Hyne",
    projectImage: "/assets/initialTemplates/hyne.webp",
    projectUrl: "/hyne",
  },
  {
    id: 3,
    projectTitle: "25 Portfolio",
    projectImage: "/assets/initialTemplates/portfolio.webp",
    projectUrl: "/portfolio",
  },
];
