import React from "react";
import styles from "./services.module.css";
import section from "@/components/HomeSections/section.module.css";
import { RevealLines } from "@/components/Reveal/Reveal";
import { Link } from "next-view-transitions";

const AskCta = () => (
  <Link href="/contact" className={styles.ask}>
    <span className={styles.askTop}>
      <span>Not sure which one?</span>
      <span>Free 20-min call ↗</span>
    </span>
    <RevealLines
      className={styles.askTitle}
      lines={[
        <>
          Ask the{" "}
          <span className={`${section.serif} ${styles.accent}`}>chef.</span>
        </>,
      ]}
    />
  </Link>
);

export default AskCta;
