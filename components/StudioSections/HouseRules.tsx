import React from "react";
import styles from "./studio.module.css";
import section from "@/components/HomeSections/section.module.css";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { RevealLines, FadeIn } from "@/components/Reveal/Reveal";
import { houseRules } from "@/data/studio";

const HouseRules = () => (
  <section className={section.section}>
    <div className={section.head}>
      <div className={section.labelCol}>
        <SectionLabel index="03" label="House rules" />
      </div>
      <RevealLines
        as="h2"
        className={section.title}
        lines={[
          <>
            How we{" "}
            <span className={section.serif}>run the kitchen.</span>
          </>,
        ]}
      />
    </div>

    <ul className={styles.rules}>
      {houseRules.map((rule, i) => (
        <li key={rule.title}>
          <FadeIn className={styles.rule} delay={(i % 3) * 0.08}>
            <span className={styles.ruleNum}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={styles.ruleTitle}>{rule.title}</h3>
            <p className={styles.ruleText}>{rule.text}</p>
          </FadeIn>
        </li>
      ))}
    </ul>
  </section>
);

export default HouseRules;
