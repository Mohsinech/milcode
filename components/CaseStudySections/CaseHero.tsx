import React from "react";
import styles from "./case.module.css";
import section from "@/components/HomeSections/section.module.css";
import { RevealLines, FadeIn } from "@/components/Reveal/Reveal";
import { TransitionLink } from "@/utils";
import type { ClientProject } from "@/data/projects";

const CaseHero = ({ project }: { project: ClientProject }) => {
  const { tagline, intro, heroMedia } = project.caseStudy ?? {};

  return (
    <section className={styles.hero}>
      <FadeIn onMount delay={0.5}>
        <TransitionLink label="All projects" href="/work" className={styles.back}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="M13 7H1M6 2L1 7l5 5" />
          </svg>
        </TransitionLink>
      </FadeIn>

      <FadeIn className={styles.meta} onMount delay={0.6}>
        <span>Case study — {project.no}</span>
        <span>{project.type} website</span>
        <span>{project.year}</span>
      </FadeIn>

      <RevealLines
        as="h1"
        className={styles.heroTitle}
        onMount
        delay={0.3}
        lines={[
          <>
            {project.name}
            <span className={styles.accent}>.</span>
          </>,
        ]}
      />

      {(tagline || intro) && (
        <FadeIn onMount delay={0.7}>
          <p className={styles.intro}>
            {tagline && <>“{tagline}” </>}
            {intro}
          </p>
        </FadeIn>
      )}

      {heroMedia && (
        <FadeIn onMount delay={0.8}>
          <div className={`${section.placeholder} ${styles.heroMedia}`}>
            {heroMedia.label}
          </div>
        </FadeIn>
      )}
    </section>
  );
};

export default CaseHero;
