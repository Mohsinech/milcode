import React from "react";
import styles from "./grid.module.css";
import { initialData } from "./data";
import Image from "next/image";

const ProjectGrid = () => {
  return (
    <div className={styles.grid}>
      {initialData.map((project) => (
        <div key={project.id} className={styles.innerCard}>
          <Image src={project.projectImage} alt={project.projectTitle} fill />
          <h3>{project.projectTitle}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
