import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";
import { clientProjects, projectHref } from "@/data/projects";

const routes = [
  "/",
  "/work",
  "/archive",
  "/services",
  "/studio",
  "/contact",
  "/terms",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = clientProjects
    .filter((p) => p.slug)
    .map((p) => projectHref(p));

  return [...routes, ...caseStudies].map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/work/") ? 0.7 : 0.8,
  }));
}
