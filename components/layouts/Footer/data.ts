interface FooterLink {
  label: string;
  href: string;
}

export const sitemap: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/studio" },
  { label: "Archive", href: "/archive" },
  { label: "Contact", href: "/contact" },
];

export const instagram: FooterLink = {
  label: "Instagram",
  href: "https://instagram.com/milcodestudio",
};

// LinkedIn, Behance and Dribbble URLs are still placeholders in the design
export const socials: FooterLink[] = [
  instagram,
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Dribbble", href: "#" },
];

export const contact: FooterLink[] = [
  { label: "info@milcode.com", href: "mailto:info@milcode.com" },
  { label: "+212 713 086 047", href: "tel:+212713086047" },
];

// Only these routes get the full footer; every other page gets the compact row
export const fullFooterRoutes = ["/"];
