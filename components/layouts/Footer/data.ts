import { email, phone, type SiteLink } from "@/data/site";

export { instagram, socials, address } from "@/data/site";

export const sitemap: SiteLink[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/studio" },
  { label: "Archive", href: "/archive" },
  { label: "Contact", href: "/contact" },
];

export const contact: SiteLink[] = [email, phone];

// Only these routes get the full footer; every other page gets the compact row
export const fullFooterRoutes = ["/"];
