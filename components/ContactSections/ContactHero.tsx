import React from "react";
import styles from "./contact.module.css";
import section from "@/components/HomeSections/section.module.css";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { RevealLines, FadeIn } from "@/components/Reveal/Reveal";

const ContactHero = () => (
  <section className={styles.hero}>
    <FadeIn onMount delay={0.6}>
      <SectionLabel index="04" label="Contact" className={styles.label} />
    </FadeIn>

    <RevealLines
      as="h1"
      className={styles.heroTitle}
      onMount
      delay={0.3}
      lines={[
        "Let’s get",
        <>
          you <span className={section.serif}>booked.</span>
        </>,
      ]}
    />
  </section>
);

export default ContactHero;
