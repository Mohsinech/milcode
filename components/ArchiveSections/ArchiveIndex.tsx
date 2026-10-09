"use client";

import React, { useState } from "react";
import { Link } from "next-view-transitions";
import styles from "./archive.module.css";
import section from "@/components/HomeSections/section.module.css";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { RevealLines, FadeIn } from "@/components/Reveal/Reveal";
import { archiveItems, type ArchiveItem } from "@/data/projects";

type View = "list" | "grid";

// Items without a page render as a plain block, never href="#"
const Item = ({
  item,
  className,
  children,
}: {
  item: ArchiveItem;
  className: string;
  children: React.ReactNode;
}) =>
  item.href ? (
    <Link href={item.href} className={`${className} ${styles.linked}`}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );

const ArchiveIndex = () => {
  const [view, setView] = useState<View>("list");

  return (
    <>
      <section className={styles.hero}>
        <FadeIn className={styles.meta} onMount delay={0.6}>
          <SectionLabel index="02.1" label="Archive" surface="dark" />
          <span>Before restaurants</span>
          <span>2023 — 2025</span>
        </FadeIn>

        <RevealLines
          as="h1"
          className={styles.heroTitle}
          onMount
          delay={0.3}
          lines={[
            <>
              Arch<span className={section.serif}>ive</span>
              <span className={styles.accent}>.</span>
            </>,
          ]}
        />

        <FadeIn onMount delay={0.7}>
          <p className={styles.lead}>
            E-commerce, brand sites, portfolios and experiments — the projects
            that taught us how to make things feel premium online. Numbered A,
            for archive.
          </p>
        </FadeIn>

        <FadeIn onMount delay={0.8}>
          <div role="group" aria-label="View" className={styles.toggle}>
            {(["list", "grid"] as const).map((v) => (
              <button
                key={v}
                type="button"
                aria-pressed={view === v}
                className={styles.pill}
                onClick={() => setView(v)}
              >
                {v === "list" ? "List" : "Grid"}
              </button>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className={styles.items}>
        {view === "list" ? (
          <FadeIn key="list" className={styles.list}>
            <div className={styles.listHead} aria-hidden="true">
              <span className={styles.colNo}>No.</span>
              <span className={styles.colName}>Project</span>
              <span className={styles.colType}>Type</span>
              <span className={styles.colRole}>Role</span>
              <span className={styles.colYear}>Year</span>
            </div>
            {archiveItems.map((it) => (
              <Item key={it.no} item={it} className={styles.row}>
                <span className={`${styles.colNo} ${styles.no}`}>{it.no}</span>
                <span className={`${styles.colName} ${styles.rowName}`}>
                  {it.name}
                </span>
                <span className={styles.colType}>{it.type}</span>
                <span className={`${styles.colRole} ${styles.role}`}>
                  {it.role}
                </span>
                <span className={styles.colYear}>{it.year}</span>
              </Item>
            ))}
          </FadeIn>
        ) : (
          <FadeIn key="grid" className={styles.grid}>
            {archiveItems.map((it) => (
              <Item key={it.no} item={it} className={styles.card}>
                <div
                  className={`${section.placeholder} ${styles.thumb} ${
                    styles[it.cover.tone]
                  }`}
                >
                  {it.cover.label}
                </div>
                <div className={styles.cardMeta}>
                  <span className={styles.cardName}>{it.name}</span>
                  <span className={styles.cardNo}>
                    {it.no} · {it.year}
                  </span>
                </div>
                <span className={styles.cardType}>{it.type}</span>
              </Item>
            ))}
          </FadeIn>
        )}
      </section>
    </>
  );
};

export default ArchiveIndex;
