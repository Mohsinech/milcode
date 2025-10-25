interface Service {
  id: number;
  animatedIcon: string;
  title: string;
  description: string;
}

export const servicesData: Service[] = [
  {
    id: 1,
    animatedIcon: "/assets/icons/sym.svg",
    title: "Strategy",
    description:
      "Digital + content strategy [:icon] brand positioning  discoverability tuned for growth.",
  },
  {
    id: 2,
    animatedIcon: "/assets/icons/sym.svg",
    title: "Design",
    description:
      "Interfaces in Figma [:icon] motion-led visuals Penopt details that feel alive.",
  },
  {
    id: 3,
    animatedIcon: "/assets/icons/sym.svg",
    title: "Technology",
    description:
      "Fast frontends dependable [:icon]  backends  motion pipelines  headless CMS builds.",
  },
  {
    id: 4,
    animatedIcon: "/assets/icons/sym.svg",
    title: "Performance",
    description:
      "SEO Core Web Vitals [:icon] ongoing tuning keeps experiences quick and visible.",
  },
];

export default servicesData;
