// Studio contact details — the single source for Footer, Home CTA and /contact

export interface SiteLink {
  label: string;
  href: string;
}

export const email: SiteLink = {
  label: "info@milcode.com",
  href: "mailto:info@milcode.com",
};

export const phone: SiteLink = {
  label: "+212 713 086 047",
  href: "tel:+212713086047",
};

export const instagram: SiteLink = {
  label: "Instagram",
  href: "https://instagram.com/milcodestudio",
};

// LinkedIn, Behance and Dribbble URLs are still placeholders in the design
export const socials: SiteLink[] = [
  instagram,
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Dribbble", href: "#" },
];

export const address = {
  city: "Casablanca, Morocco",
  note: "Working worldwide",
};

// FormSubmit AJAX endpoint with the random string from the activation email,
// so the inbox address never ships in the client bundle.
// Replace [random-string] with the real one.
export const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/chedganemouhssine@gmail.com";
