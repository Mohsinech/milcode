import React from "react";
import styles from "./statement.module.css";
import section from "../section.module.css";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { FadeIn } from "@/components/Reveal/Reveal";
import { TransitionLink } from "@/utils";

const Statement = () => {
  return (
    <section className={`${section.section} ${styles.statement}`}>
      <div className={section.labelCol}>
        <SectionLabel index="01" label="Studio" />
      </div>

      <div className={section.mainCol}>
        <FadeIn>
          <p className={styles.text}>
            Good food deserves better than a PDF menu and a broken link in bio.
            We design websites with the care your kitchen puts on a plate — and
            build them to load fast on a phone, at 8pm, on a busy street.
          </p>
        </FadeIn>

        <FadeIn className={styles.facts} delay={0.1}>
          <div className={styles.fact}>
            <span className={styles.factLabel}>Who we work with</span>
            Restaurants, cafés, bakeries, rooftop bars and boutique hotels.
          </div>
          <div className={styles.fact}>
            <span className={styles.factLabel}>Where</span>
            Based in Casablanca, working with clients worldwide.
          </div>
          <div className={styles.fact}>
            <TransitionLink
              label="More about the studio"
              href="/studio"
              className={section.textLink}
            >
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
            </TransitionLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Statement;
