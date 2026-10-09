interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" },
];

// Routes whose top section is light (paper or lime), so the header switches to ink
export const lightHeaderRoutes = [
  "/work",
  "/studio",
  "/contact",
  "/terms",
  "/privacy",
];
