import React from "react";
import styles from "./studio.module.css";
import section from "@/components/HomeSections/section.module.css";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { RevealLines, FadeIn } from "@/components/Reveal/Reveal";
import { studioMeta } from "@/data/studio";

const StudioHero = () => (
  <>
    <section className={styles.hero}>
      <FadeIn className={styles.meta} onMount delay={0.6}>
        <SectionLabel label="Studio" />
        <span>{studioMeta.location}</span>
        <span>{studioMeta.established}</span>
      </FadeIn>

      <RevealLines
        as="h1"
        className={styles.heroTitle}
        onMount
        delay={0.3}
        lines={["Small studio.", <span className={section.serif}>Big appetite.</span>]}
      />
    </section>

    <FadeIn className={styles.media} onMount delay={0.8}>
      <div className={`${section.placeholder} ${styles.photo}`}>
        [ Studio / workspace photo ]
      </div>
      <div className={`${section.placeholder} ${styles.portrait}`}>
        [ Portrait — founder ]
      </div>
    </FadeIn>
  </>
);

export default StudioHero;
