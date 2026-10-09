import React from "react";
import styles from "./work.module.css";
import section from "../section.module.css";
import { Link } from "next-view-transitions";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { RevealLines, FadeIn } from "@/components/Reveal/Reveal";
import { TransitionLink } from "@/utils";
import { clientProjects } from "@/data/projects";

const nextNo = `M${String(clientProjects.length + 1).padStart(3, "0")}`;

const Arrow = () => (
  <svg
    className={styles.arrow}
    width="20"
    height="20"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    aria-hidden="true"
  >
    <path d="M2 12L12 2M4 2h8v8" />
  </svg>
);

const SelectedWork = () => {
  return (
    <section id="work" className={styles.work}>
      <RevealLines
        as="h2"
        className={styles.title}
        ariaLabel="Work"
        lines={[
          <span className={styles.titleInner} aria-hidden="true" key="w">
            W
            <svg
              className={styles.titleStar}
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="9"
              strokeLinecap="round"
            >
              <path d="M50 6v88M6 50h88M19 19l62 62M81 19L19 81" />
            </svg>
            rk
          </span>,
        ]}
      />

      <div className={styles.meta}>
        <SectionLabel index="02" label="Selected work" />
        <span>Every project gets a number. Ours started at M001.</span>
      </div>

      <FadeIn className={styles.shots}>
        <Link
          href="/work/monch"
          className={`${section.placeholder} ${styles.shotDesktop}`}
        >
          [ Monch — homepage, desktop ]
        </Link>
        <Link
          href="/work/monch"
          className={`${section.placeholder} ${styles.shotMobile}`}
        >
          [ Monch — menu page, mobile ]
        </Link>
      </FadeIn>

      <FadeIn className={styles.list}>
        {clientProjects.map((p) => (
          <Link key={p.no} href={p.href} className={styles.row}>
            <span className={styles.number}>{p.no}</span>
            <span className={styles.name}>{p.name}</span>
            <span className={styles.cell}>
              {p.type} — {p.location}
            </span>
            <span className={styles.cellWide}>{p.scope}</span>
            <span className={styles.year}>{p.year}</span>
            <Arrow />
          </Link>
        ))}
        <Link href="/contact" className={`${styles.row} ${styles.rowOpen}`}>
          <span className={styles.number}>{nextNo}</span>
          <span className={`${styles.name} ${section.serif}`}>
            Your restaurant?
          </span>
          <span className={styles.cell}>This spot is open</span>
          <span className={`${styles.cellWide} ${styles.ink}`}>
            Let’s talk about your place
          </span>
          <span className={styles.year}>2027</span>
          <Arrow />
        </Link>
      </FadeIn>

      <div className={styles.all}>
        <TransitionLink
          label="All projects"
          href="/work"
          className={section.textLink}
        />
      </div>
    </section>
  );
};

export default SelectedWork;
