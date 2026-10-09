import React from "react";
import { Link } from "next-view-transitions";
import styles from "./studio.module.css";
import section from "@/components/HomeSections/section.module.css";
import { RevealLines } from "@/components/Reveal/Reveal";

const TalkCta = () => (
  <Link href="/contact" className={styles.talk}>
    <span className={styles.talkLabel}>Contact ↗</span>
    <RevealLines
      className={styles.talkTitle}
      lines={[
        <>
          Let’s <span className={section.serif}>talk</span>.
        </>,
      ]}
    />
  </Link>
);

export default TalkCta;
