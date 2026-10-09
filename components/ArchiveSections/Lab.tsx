import React from "react";
import styles from "./archive.module.css";
import { FadeIn } from "@/components/Reveal/Reveal";

// Dribbble and Behance URLs are still placeholders in the design,
// so they render as plain underlined text until real links exist
const Lab = () => {
  return (
    <section className={styles.lab}>
      <div className={styles.labLabel}>Lab</div>
      <FadeIn className={styles.labMain}>
        <p className={styles.labText}>
          Small experiments with motion, type and 3D live on our{" "}
          <span className={styles.labLink}>Dribbble</span> and{" "}
          <span className={styles.labLink}>Behance</span>. Some of them end up
          on a restaurant’s homepage.
        </p>
      </FadeIn>
    </section>
  );
};

export default Lab;
