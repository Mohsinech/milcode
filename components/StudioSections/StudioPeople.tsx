import React from "react";
import styles from "./studio.module.css";
import section from "@/components/HomeSections/section.module.css";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { RevealLines, FadeIn } from "@/components/Reveal/Reveal";
import { TransitionLink } from "@/utils";
import { founder, partners, partnersIntro } from "@/data/studio";

const StudioPeople = () => (
  <section className={styles.people}>
    <SectionLabel
      index="02"
      label="The people"
      surface="dark"
      className={styles.peopleLabel}
    />

    <div className={styles.founder}>
      <FadeIn className={`${section.placeholder} ${styles.founderPortrait}`}>
        {founder.portrait}
      </FadeIn>

      <div className={section.mainCol}>
        <RevealLines as="h2" className={styles.founderName} lines={[founder.name]} />
        <FadeIn delay={0.1}>
          <p className={styles.founderRole}>{founder.role}</p>
          <p className={styles.founderBio}>{founder.bio}</p>
          <div className={styles.founderLinks}>
            {founder.links.map((link) =>
              link.href ? (
                <TransitionLink
                  key={link.label}
                  label={link.label}
                  href={link.href}
                  className={section.textLink}
                />
              ) : (
                <span key={link.label} className={styles.plainLink}>
                  {link.label}
                </span>
              )
            )}
          </div>
        </FadeIn>
      </div>
    </div>

    <div className={styles.brigade}>
      <div className={section.labelCol}>
        <span className={`${section.muted} ${styles.brigadeLabel}`}>
          Kitchen brigade
        </span>
      </div>
      <FadeIn className={section.mainCol}>
        <p className={styles.brigadeIntro}>{partnersIntro}</p>
        <ul className={styles.partners}>
          {partners.map((p) => (
            <li key={p.role} className={styles.partner}>
              <span className={styles.partnerRole}>{p.role}</span>
              <span className={styles.partnerName}>{p.name}</span>
            </li>
          ))}
        </ul>
      </FadeIn>
    </div>
  </section>
);

export default StudioPeople;
