import React from "react";
import styles from "./case.module.css";
import section from "@/components/HomeSections/section.module.css";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { FadeIn } from "@/components/Reveal/Reveal";
import type { CaseStudy } from "@/data/projects";

interface CaseDetailsProps {
  index: string;
  typography?: CaseStudy["typography"];
  palette?: CaseStudy["palette"];
}

const CaseDetails = ({ index, typography, palette }: CaseDetailsProps) => {
  return (
    <section className={`${section.section} ${styles.split}`}>
      <div className={section.labelCol}>
        <SectionLabel index={index} label="Details" />
      </div>
      <FadeIn className={`${section.mainCol} ${styles.detailGrid}`}>
        {typography && (
          <div className={styles.detailCard}>
            <div className={styles.factLabel}>Typography</div>
            <div className={styles.sample}>
              {typography.sample}
            </div>
            <div className={styles.detailNote}>{typography.fonts}</div>
          </div>
        )}
        {!!palette?.colors.length && (
          <div className={styles.detailCard}>
            <div className={styles.factLabel}>Palette</div>
            <div className={styles.swatches}>
              {palette.colors.map((c) => (
                <span
                  key={c}
                  className={styles.swatch}
                  style={{ background: c }}
                  title={c}
                />
              ))}
            </div>
            <div className={styles.detailNote}>
              {palette.note ?? palette.colors.join(" · ")}
            </div>
          </div>
        )}
      </FadeIn>
    </section>
  );
};

export default CaseDetails;
