interface Service {
  id: number;
  title: string;
  description: string;
  options: string[];
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Website design",
    description:
      "Art direction, layout and motion that feel like your place — not a template. Designed in Figma and reviewed with you on real phones.",
    options: ["Art direction", "UI / UX", "Motion", "Photo direction"],
  },
  {
    id: 2,
    title: "Development",
    description:
      "Fast sites built with Next.js, set up with hosting, domain and analytics — and simple enough for your team to update.",
    options: ["Next.js", "Headless CMS", "Hosting & domain", "Analytics"],
  },
  {
    id: 3,
    title: "Menus & reservations",
    description:
      "Menus you can edit in minutes, in every language your guests speak — connected to your booking tool, WhatsApp or phone.",
    options: [
      "Digital menu",
      "Multilingual menus",
      "QR codes",
      "Booking integration",
    ],
  },
  {
    id: 4,
    title: "Visibility",
    description:
      "Google Business Profile, local SEO and a proper link in bio — so hungry people nearby actually find you.",
    options: [
      "Local SEO",
      "Google Business Profile",
      "Google Maps",
      "Core Web Vitals",
    ],
  },
];

export default servicesData;
