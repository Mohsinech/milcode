import React from "react";
import styles from "./studio.module.css";
import section from "@/components/HomeSections/section.module.css";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { FadeIn } from "@/components/Reveal/Reveal";
import { workingDetails } from "@/data/studio";

const WorkingTogether = () => (
  <section className={`${styles.split} ${styles.working}`}>
    <div className={section.labelCol}>
      <SectionLabel index="04" label="Working together" />
    </div>
    <FadeIn className={section.mainCol}>
      <dl className={styles.details}>
        {workingDetails.map((d) => (
          <div key={d.label} className={styles.detail}>
            <dt className={styles.detailLabel}>{d.label}</dt>
            <dd className={styles.detailText}>{d.text}</dd>
          </div>
        ))}
      </dl>
    </FadeIn>
  </section>
);

export default WorkingTogether;
