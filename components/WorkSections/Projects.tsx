"use client";

import React, { useState } from "react";
import { Link } from "next-view-transitions";
import styles from "./work.module.css";
import section from "@/components/HomeSections/section.module.css";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { RevealLines, FadeIn } from "@/components/Reveal/Reveal";
import {
  clientProjects,
  projectFilters,
  type ProjectCategory,
} from "@/data/projects";

type Filter = ProjectCategory | "all";

const count = String(clientProjects.length).padStart(2, "0");
const nextNo = `M${String(clientProjects.length + 1).padStart(3, "0")}`;

const Projects = () => {
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all"
      ? clientProjects
      : clientProjects.filter((p) => p.category === filter);

  const comingSoon = (
    <p className={styles.empty} role="status">
      More coming soon.
    </p>
  );

  return (
    <>
      <section className={styles.hero}>
        <FadeIn onMount delay={0.6}>
          <SectionLabel
            index="02"
            label={`Work — ${count} project${
              clientProjects.length === 1 ? "" : "s"
            }, more cooking`}
          />
        </FadeIn>

        <RevealLines
          as="h1"
          className={styles.heroTitle}
          onMount
          delay={0.3}
          lines={["Projects"]}
        />

        <div className={styles.heroBottom}>
          <FadeIn onMount delay={0.7}>
            <p className={styles.lead}>
              Each project is numbered — M001, M002, and so on. Small studio,
              one table at a time.
            </p>
          </FadeIn>
          <FadeIn onMount delay={0.8}>
            <div
              role="group"
              aria-label="Filter projects"
              className={styles.filters}
            >
              {projectFilters.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  aria-pressed={filter === f.value}
                  className={styles.filter}
                  onClick={() => setFilter(f.value)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className={styles.projects}>
        <FadeIn className={styles.cards}>
          {visible.map((p) => (
            <Link key={p.no} href={p.href} className={styles.card}>
              <div
                className={`${section.placeholder} ${styles.cover} ${
                  styles[p.cover.tone]
                }`}
              >
                {p.cover.label}
                <span className={`${styles.tag} ${styles.tagAccent}`}>
                  {p.no}
                </span>
              </div>
              <div className={styles.cardMeta}>
                <span className={styles.cardName}>{p.name}</span>
                <span className={styles.cardInfo}>
                  {p.type} · {p.scope} · {p.year}
                </span>
              </div>
            </Link>
          ))}

          {visible.length === 0 && comingSoon}

          <Link href="/contact" className={styles.card}>
            <div className={`${styles.cover} ${styles.reserved}`}>
              <span className={styles.tag}>{nextNo}</span>
              <span className={`${section.serif} ${styles.reservedTitle}`}>
                Reserved
                <br />
                for you.
              </span>
              <span className={styles.reservedText}>
                Your restaurant could be the next number.
              </span>
            </div>
            <div className={styles.cardMeta}>
              <span className={`${styles.cardName} ${styles.muted}`}>
                Next project
              </span>
              <span className={styles.underline}>Start a project</span>
            </div>
          </Link>
        </FadeIn>

        <FadeIn className={styles.table}>
          <div className={styles.tableHead} aria-hidden="true">
            <span className={styles.colNo}>No.</span>
            <span className={styles.colName}>Client</span>
            <span className={styles.colType}>Type</span>
            <span className={styles.colScope}>Scope</span>
            <span className={styles.colYear}>Year</span>
          </div>
          {visible.map((p) => (
            <Link key={p.no} href={p.href} className={styles.tableRow}>
              <span className={styles.colNo}>{p.no}</span>
              <span className={`${styles.colName} ${styles.rowName}`}>
                {p.name}
              </span>
              <span className={styles.colType}>{p.type}</span>
              <span className={styles.colScope}>{p.scope}</span>
              <span className={styles.colYear}>{p.year}</span>
            </Link>
          ))}
          {visible.length === 0 && (
            <div className={styles.tableRow}>
              <p className={styles.empty}>More coming soon.</p>
            </div>
          )}
        </FadeIn>
      </section>
    </>
  );
};

export default Projects;
