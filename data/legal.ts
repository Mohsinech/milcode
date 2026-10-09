// Content for /terms and /privacy. Keep [bracketed] placeholders until a lawyer signs off.

import { email, type SiteLink } from "./site";

// A paragraph is plain text, or a run of text and links
export type LegalParagraph = string | (string | SiteLink)[];

export interface LegalSection {
  id: string;
  title: string;
  body: LegalParagraph[];
}

export interface LegalSummaryCard {
  label: string;
  text: string;
  dark?: boolean;
}

export interface LegalPageData {
  slug: "terms" | "privacy";
  href: string;
  // short name for the Terms / Privacy switch
  navLabel: string;
  docNo: string;
  updated: string;
  title: string;
  titleSerif: string;
  lead: string;
  summary?: LegalSummaryCard[];
  sections: LegalSection[];
}

export const terms: LegalPageData = {
  slug: "terms",
  href: "/terms",
  navLabel: "Terms",
  docNo: "01",
  updated: "[DD Month 2026]",
  title: "Terms",
  titleSerif: " of use",
  lead: "The short version: be fair with us, we’ll be fair with you. The longer version is below.",
  sections: [
    {
      id: "t1",
      title: "Who we are",
      body: [
        "This website is operated by Milcode Studio ([legal entity name], [registration number / ICE]), based in Casablanca, Morocco. “We”, “us” and “Milcode” refer to the studio.",
      ],
    },
    {
      id: "t2",
      title: "Using this website",
      body: [
        "You may browse this site for personal and business information. Please don’t copy, scrape or reuse its design, code or content without written permission, or use it in any way that could damage or disrupt it.",
      ],
    },
    {
      id: "t3",
      title: "Quotes & projects",
      body: [
        "Every project starts with a written quote describing scope, timeline and price. Work begins once the quote is accepted and the first payment is received. Changes to scope are quoted separately before we do them.",
        "Quotes are valid for [30] days.",
      ],
    },
    {
      id: "t4",
      title: "Payment",
      body: [
        "[50%] is due at the start of a project and [50%] at launch, unless the quote says otherwise. Monthly Care plans are billed in advance and can be cancelled with [30] days’ notice.",
      ],
    },
    {
      id: "t5",
      title: "Intellectual property",
      body: [
        "Once a project is paid in full, you own the final design and content of your website. We keep the right to show the project in our portfolio and on social media, unless agreed otherwise in writing. Third-party fonts, libraries and stock images stay under their own licences.",
      ],
    },
    {
      id: "t6",
      title: "Client content",
      body: [
        "You’re responsible for the menus, prices, photos and text you give us, and for having the right to use them. Please keep menus, allergens and prices accurate.",
      ],
    },
    {
      id: "t7",
      title: "Liability",
      body: [
        "We work carefully, but we can’t guarantee the website will be free of every error or interruption, or guarantee a specific number of bookings or search rankings. Our total liability is limited to the amount paid for the project concerned.",
      ],
    },
    {
      id: "t8",
      title: "Governing law",
      body: [
        "These terms are governed by the laws of the Kingdom of Morocco. Any dispute will first be resolved amicably, then by the competent courts of Casablanca.",
      ],
    },
    {
      id: "t9",
      title: "Contact",
      body: [["Questions about these terms? Write to ", email, "."]],
    },
  ],
};

export const privacy: LegalPageData = {
  slug: "privacy",
  href: "/privacy",
  navLabel: "Privacy policy",
  docNo: "02",
  updated: "[DD Month 2026]",
  title: "Privacy",
  titleSerif: " policy",
  lead: "We collect as little as we can, use it only to reply to you, and never sell it. Here are the details.",
  summary: [
    { label: "We collect", text: "What you type in the contact form" },
    { label: "We use it to", text: "Answer you and send a quote" },
    { label: "We never", text: "Sell or rent your data", dark: true },
  ],
  sections: [
    {
      id: "p1",
      title: "What we collect",
      body: [
        "When you use our contact form: your name, email or WhatsApp number, restaurant name, website or Instagram link, budget range and your message. When you browse: basic, anonymous usage data such as pages visited and device type.",
      ],
    },
    {
      id: "p2",
      title: "Why we collect it",
      body: [
        "To reply to your request, prepare a quote, and run a project with you if we work together. Anonymous usage data helps us understand which pages are useful.",
      ],
    },
    {
      id: "p3",
      title: "Cookies & analytics",
      body: [
        "We use [no cookies / only essential cookies] and [analytics tool, e.g. Vercel Analytics], which [does not use cookies and does not identify you personally].",
      ],
    },
    {
      id: "p4",
      title: "Who we share it with",
      body: [
        "Only the services needed to run this site: our hosting provider ([Vercel]), our form service ([form provider]) and our email provider ([email provider]). They process data on our behalf and not for their own purposes.",
      ],
    },
    {
      id: "p5",
      title: "How long we keep it",
      body: [
        "Enquiries that don’t become projects are deleted after [12] months. Client records are kept as long as required for accounting and legal purposes.",
      ],
    },
    {
      id: "p6",
      title: "Your rights",
      body: [
        "You can ask to access, correct or delete your personal data, or object to its use, at any time. In Morocco, personal data is protected under Law 09-08 and overseen by the CNDP. [CNDP declaration / authorisation number, if applicable.]",
      ],
    },
    {
      id: "p7",
      title: "Contact",
      body: [
        [
          "For anything privacy-related, write to ",
          email,
          ". We reply within [5] working days.",
        ],
      ],
    },
  ],
};

// Order of the Terms / Privacy switch
export const legalPages: LegalPageData[] = [terms, privacy];
