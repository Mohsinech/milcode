import React from "react";
import styles from "./featured.module.css";

const FeaturedProject = () => {
  return (
    <section className={styles.featured}>
      <div className={styles.gridProject}>
        {/* Project #1 */}
        <div className={styles.projectF1}></div>
        {/* Project #2 */}
        <div className={styles.projectF2}></div>
      </div>
    </section>
  );
};

export default FeaturedProject;
