import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "../../app.module.css";
import {
  CaseHero,
  CaseFacts,
  CaseBrief,
  CaseGallery,
  CaseDetails,
  CaseResults,
  NextProject,
} from "@/components/CaseStudySections";
import { clientProjects, getProject, getNextProject } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return clientProjects
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug as string }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const { tagline, intro } = project.caseStudy ?? {};

  return {
    title: `${project.name} — Case study — Milcode Studio`,
    description:
      intro ??
      tagline ??
      `${project.name}: a ${project.type.toLowerCase()} website by Milcode Studio — ${project.scope.toLowerCase()}.`,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const cs = project.caseStudy ?? {};
  const hasBrief = !!(cs.challenge || cs.approach);
  const hasDetails = !!(cs.typography || cs.palette?.colors.length);
  const hasResults = !!(cs.results?.length || cs.quote);

  // number only the sections that render: ( 01 ), ( 02 )…
  let n = 0;
  const nextIndex = () => String(++n).padStart(2, "0");
  const briefIndex = hasBrief ? nextIndex() : "";
  const detailsIndex = hasDetails ? nextIndex() : "";
  const resultsIndex = cs.results?.length ? nextIndex() : "";

  return (
    <main className={styles.main}>
      <CaseHero project={project} />
      <CaseFacts data={cs} />
      {hasBrief && (
        <CaseBrief
          index={briefIndex}
          challenge={cs.challenge}
          approach={cs.approach}
        />
      )}
      {!!cs.gallery?.length && <CaseGallery gallery={cs.gallery} />}
      {hasDetails && (
        <CaseDetails
          index={detailsIndex}
          typography={cs.typography}
          palette={cs.palette}
        />
      )}
      {hasResults && (
        <CaseResults
          index={resultsIndex}
          client={project.name}
          results={cs.results}
          quote={cs.quote}
        />
      )}
      <NextProject next={getNextProject(slug)} />
    </main>
  );
}
