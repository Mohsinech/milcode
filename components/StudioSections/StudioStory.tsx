import React from "react";
import styles from "./studio.module.css";
import section from "@/components/HomeSections/section.module.css";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { FadeIn } from "@/components/Reveal/Reveal";
import { story } from "@/data/studio";

const StudioStory = () => (
  <section className={styles.split}>
    <div className={section.labelCol}>
      <SectionLabel index="01" label="Story" />
    </div>
    <div className={section.mainCol}>
      <FadeIn>
        <p className={styles.storyLead}>{story.lead}</p>
      </FadeIn>
      <FadeIn className={styles.storyCols} delay={0.1}>
        {story.paragraphs.map((p) => (
          <p key={p} className={styles.body}>
            {p}
          </p>
        ))}
      </FadeIn>
    </div>
  </section>
);

export default StudioStory;
