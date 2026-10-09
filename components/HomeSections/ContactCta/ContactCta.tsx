import React from "react";
import styles from "./cta.module.css";
import section from "../section.module.css";
import Button from "@/components/Button/Button";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { RevealLines, FadeIn } from "@/components/Reveal/Reveal";
import { TransitionLink } from "@/utils";
import { email, phone } from "@/data/site";

const ContactCta = () => {
  return (
    <section className={styles.cta}>
      <SectionLabel index="07" label="Contact" className={styles.label} />

      <RevealLines
        as="h2"
        className={styles.title}
        lines={[
          "Got tables",
          <>
            to <span className={section.serif}>fill?</span>
          </>,
        ]}
      />

      <FadeIn className={styles.bottom}>
        <div className={styles.contact}>
          <TransitionLink
            label={email.label}
            href={email.href}
            className={styles.email}
          />
          <TransitionLink label={phone.label} href={phone.href} />
        </div>
        <Button
          label="Start a project"
          href="/contact"
          arrow
          className={styles.button}
        />
      </FadeIn>
    </section>
  );
};

export default ContactCta;
