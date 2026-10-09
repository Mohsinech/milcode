import React from "react";
import styles from "./case.module.css";
import section from "@/components/HomeSections/section.module.css";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { RevealLines, FadeIn } from "@/components/Reveal/Reveal";

interface CaseBriefProps {
  index: string;
  challenge?: string;
  approach?: string;
}

const CaseBrief = ({ index, challenge, approach }: CaseBriefProps) => {
  const blocks = [
    { title: "Challenge", text: challenge },
    { title: "Approach", text: approach },
  ].filter((b) => b.text);

  return (
    <section className={`${section.section} ${styles.split}`}>
      <div className={section.labelCol}>
        <SectionLabel index={index} label="The brief" />
      </div>
      <div className={`${section.mainCol} ${styles.briefGrid}`}>
        {blocks.map((b) => (
          <div key={b.title}>
            <RevealLines as="h2" className={styles.briefTitle} lines={[b.title]} />
            <FadeIn>
              <p className={styles.body}>{b.text}</p>
            </FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseBrief;
