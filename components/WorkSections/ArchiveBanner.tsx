import React from "react";
import { Link } from "next-view-transitions";
import styles from "./work.module.css";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { FadeIn } from "@/components/Reveal/Reveal";
import { archiveItems } from "@/data/projects";

const range = `${archiveItems[0].no} — ${archiveItems[archiveItems.length - 1].no}`;

const ArchiveBanner = () => {
  return (
    <section className={styles.bannerWrap}>
      <FadeIn>
        <Link href="/archive" className={styles.banner}>
          <div className={styles.bannerMeta}>
            <SectionLabel index="02.1" label="Archive" surface="dark" />
            <span>Earlier work, concepts &amp; experiments</span>
            <span>{range}</span>
          </div>

          <div className={styles.bannerMain}>
            <span className={styles.bannerTitle}>
              Archive<span className={styles.accent}>.</span>
            </span>
            <div className={styles.thumbs} aria-hidden="true">
              <span className={`${styles.thumb} ${styles.thumbDark}`} />
              <span className={`${styles.thumb} ${styles.thumbLight}`} />
              <span className={`${styles.thumb} ${styles.thumbDark}`} />
            </div>
          </div>

          <div className={styles.bannerBottom}>
            <span className={styles.bannerText}>
              Before restaurants: e-commerce, brand sites and personal
              projects.
            </span>
            <span className={styles.bannerCta}>
              Browse the archive
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M2 12L12 2M4 2h8v8" />
              </svg>
            </span>
          </div>
        </Link>
      </FadeIn>
    </section>
  );
};

export default ArchiveBanner;
