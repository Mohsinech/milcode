import React from "react";
import { Link } from "next-view-transitions";
import styles from "./archive.module.css";
import section from "@/components/HomeSections/section.module.css";
import { RevealLines } from "@/components/Reveal/Reveal";

const CurrentWork = () => {
  return (
    <Link href="/work" className={styles.current}>
      <span className={styles.currentLabel}>Now serving ↗</span>
      <RevealLines
        as="div"
        className={styles.currentTitle}
        lines={[
          <>
            Current <span className={section.serif}>work</span>
          </>,
        ]}
      />
    </Link>
  );
};

export default CurrentWork;
