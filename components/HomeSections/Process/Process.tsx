import React from "react";
import styles from "./process.module.css";
import section from "../section.module.css";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { RevealLines, FadeIn } from "@/components/Reveal/Reveal";

const steps = [
  {
    title: "Taste",
    duration: "[1 week]",
    text: "A call or a visit. We learn your menu, your guests and what “full” looks like for you.",
  },
  {
    title: "Plate",
    duration: "[2 weeks]",
    text: "Art direction and key pages, designed and reviewed together. Two rounds of feedback included.",
  },
  {
    title: "Serve",
    duration: "[2 weeks]",
    text: "We build, load your content, launch, and show your team how to update the menu.",
  },
  {
    title: "Refill",
    duration: "Ongoing",
    text: "Optional monthly care: seasonal menus, new pages, speed checks and small fixes.",
    dark: true,
  },
];

const Process = () => {
  return (
    <section className={section.section}>
      <div className={section.head}>
        <div className={section.labelCol}>
          <SectionLabel index="04" label="Process" />
        </div>
        <RevealLines
          as="h2"
          className={section.title}
          lines={[
            <>
              From first taste{" "}
              <span className={section.serif}>to full service.</span>
            </>,
          ]}
        />
      </div>

      <ol className={styles.steps}>
        {steps.map((step, i) => (
          <li key={step.title}>
            <FadeIn
              className={`${styles.step} ${step.dark ? styles.dark : ""}`}
              delay={i * 0.08}
            >
              <div className={styles.stepTop}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.duration}>{step.duration}</span>
              </div>
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            </FadeIn>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Process;
