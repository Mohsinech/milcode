// Content for /studio. Keep [bracketed] placeholders until real copy exists.

// `value` counts up when it starts with a number ("12+", "3"); placeholders like "[X]+" stay static
export interface StudioNumber {
  value: string;
  label: string;
}

// No `href` = plain text, until a real URL exists
export interface StudioLink {
  label: string;
  href?: string;
}

export interface Partner {
  role: string;
  name: string;
}

export interface HouseRule {
  title: string;
  text: string;
}

export interface WorkingDetail {
  label: string;
  text: string;
}

export interface Recognition {
  title: string;
  detail?: string;
  href?: string;
}

export const studioMeta = {
  location: "Independent — Casablanca, MA",
  established: "Est. [2025]",
};

export const story = {
  lead: "Milcode started with a simple observation: the best restaurants we knew had the worst websites. So we picked a lane — food and hospitality — and decided to get very good at it.",
  paragraphs: [
    "[Where it began — e.g. years building e-commerce and brand sites, then noticing restaurants were stuck with PDF menus and DM bookings.]",
    "[Why it matters to you — e.g. a love of food, Casablanca’s restaurant scene, and the belief that a small place deserves the same craft as a luxury brand.]",
  ],
};

export const numbers: StudioNumber[] = [
  { value: "[X]+", label: "Years designing & building for the web" },
  { value: "[X]", label: "Websites launched" },
  { value: "3", label: "Languages we work in — AR, FR, EN" },
  { value: "1", label: "Focus: hospitality" },
];

export const founder = {
  name: "[Your name]",
  role: "Founder — Design & development",
  bio: "[Short bio: background, what you do on every project, something human — favourite dish, neighbourhood spot, what you cook on Sundays.] You talk to the person who designs and builds your site. No account managers, no hand-offs.",
  portrait: "[ Founder portrait ]",
  links: [
    // LinkedIn URL is still a placeholder in the design
    { label: "LinkedIn" },
    { label: "Instagram", href: "https://instagram.com/milcodestudio" },
  ] as StudioLink[],
};

export const partnersIntro =
  "For bigger projects we bring in a trusted network of specialists.";

export const partners: Partner[] = [
  { role: "Food photography", name: "[Partner name]" },
  { role: "Copywriting", name: "AR · FR · EN" },
  { role: "Branding", name: "[Partner name]" },
  { role: "Video & motion", name: "[Partner name]" },
];

export const houseRules: HouseRule[] = [
  {
    title: "One lane",
    text: "We only do hospitality. We know what a menu page needs, and what guests skip.",
  },
  {
    title: "Phone first",
    text: "Most guests find you on a phone, in a hurry. We design for that moment first.",
  },
  {
    title: "You own it",
    text: "Your domain, your content, your menu — editable by you, no lock-in.",
  },
  {
    title: "Few tables",
    text: "We take on [2–3] projects at a time, so yours gets real attention.",
  },
  {
    title: "Clear prices",
    text: "A fixed quote before we start. No surprise invoices.",
  },
  {
    title: "Fast replies",
    text: "One working day, by email or WhatsApp. Usually sooner.",
  },
];

export const workingDetails: WorkingDetail[] = [
  {
    label: "Where",
    text: "On site in Casablanca, remote everywhere else. Video calls in Morocco, Europe and beyond.",
  },
  { label: "Languages", text: "Darija, Arabic, French and English." },
  {
    label: "Hours",
    text: "[Mon–Fri, 9:00–19:00] GMT+1 — we know restaurants work late, so evening calls are fine.",
  },
  {
    label: "Payment",
    text: "[50% to start, 50% at launch.] Bank transfer, MAD or EUR.",
  },
];

// Drives the "Open now — Casablanca 16:08" status on /contact.
// Mirrors the [Mon–Fri, 9:00–19:00] placeholder above — update both together.
export const openHours = {
  timeZone: "Africa/Casablanca",
  // 0 = Sunday … 6 = Saturday
  days: [1, 2, 3, 4, 5],
  // minutes since midnight, local studio time
  open: 9 * 60,
  close: 19 * 60,
};

export const tools: string[] = [
  "Figma",
  "Next.js",
  "GSAP",
  "Framer Motion",
  "Lenis",
  "Vercel",
  "[CMS]",
];

// Awards, features or mentions (e.g. Awwwards, CSS Design Awards).
// The block stays hidden until this has at least one item.
export const recognition: Recognition[] = [];

export const joinKitchen = {
  title: "Photographer, copywriter or developer who loves food? Say hello.",
  cta: "Send your work ↗",
  href: "/contact?topic=collab",
};
