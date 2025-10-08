import React from "react";
import styles from "./project.module.css";

const Project = () => {
  return (
    <section className={styles.project}>
      <div className={styles.wrapper}>
        <video src="/assets/videos/vid.mp4" loop autoPlay muted />
      </div>
    </section>
  );
};

export default Project;
