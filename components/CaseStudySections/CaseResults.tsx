import React from "react";
import styles from "./case.module.css";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { FadeIn } from "@/components/Reveal/Reveal";
import type { CaseStudy } from "@/data/projects";

interface CaseResultsProps {
  index: string;
  client: string;
  results?: CaseStudy["results"];
  quote?: CaseStudy["quote"];
}

const CaseResults = ({ index, client, results, quote }: CaseResultsProps) => {
  return (
    <section className={styles.results}>
      {!!results?.length && (
        <>
          <SectionLabel
            index={index}
            label="What changed"
            surface="dark"
            className={styles.resultsLabel}
          />
          <FadeIn className={styles.stats}>
            {results.map((r) => (
              <div key={r.label} className={styles.stat}>
                <div className={styles.statValue}>{r.value}</div>
                <div className={styles.statLabel}>{r.label}</div>
              </div>
            ))}
          </FadeIn>
        </>
      )}

      {quote && (
        <FadeIn>
          <blockquote
            className={`${styles.quote} ${results?.length ? styles.quoteSpaced : ""}`}
          >
            <p>“{quote.text}”</p>
            <footer>
              — {quote.name}, {quote.role}, {client}
            </footer>
          </blockquote>
        </FadeIn>
      )}
    </section>
  );
};

export default CaseResults;
