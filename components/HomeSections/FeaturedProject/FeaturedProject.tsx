import React from "react";
import styles from "./featured.module.css";

const FeaturedProject = () => {
  return (
    <section className={styles.featured}>
      <div className={styles.gridProject}>
        {/* Project #1 */}
        <div className={styles.projectF1}>
          <div className={styles.wrapper}>
            <video src="/assets/videos/fullSite.mp4" loop autoPlay muted />
          </div>
        </div>
        {/* Project #2 */}
        <div className={styles.projectF2}>
          <div className={styles.wrapper}>
            <video src="/assets/videos/vid.mp4" loop autoPlay muted />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
