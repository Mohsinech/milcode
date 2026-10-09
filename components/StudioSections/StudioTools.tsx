import React from "react";
import styles from "./studio.module.css";
import section from "@/components/HomeSections/section.module.css";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { FadeIn } from "@/components/Reveal/Reveal";
import { tools } from "@/data/studio";

const StudioTools = () => (
  <section className={styles.split}>
    <div className={section.labelCol}>
      <SectionLabel index="05" label="Tools we cook with" />
    </div>
    <FadeIn className={section.mainCol}>
      <ul className={styles.tools}>
        {tools.map((tool) => (
          <li key={tool} className={styles.tool}>
            {tool}
          </li>
        ))}
      </ul>
    </FadeIn>
  </section>
);

export default StudioTools;
