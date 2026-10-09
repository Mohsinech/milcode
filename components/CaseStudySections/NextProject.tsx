import React from "react";
import { Link } from "next-view-transitions";
import styles from "./case.module.css";
import section from "@/components/HomeSections/section.module.css";
import {
  nextProjectNo,
  projectHref,
  type ClientProject,
} from "@/data/projects";

// Next case study, or the open "Your restaurant" slot when this is the last one
const NextProject = ({ next }: { next?: ClientProject }) => {
  return (
    <Link href={next ? projectHref(next) : "/contact"} className={styles.next}>
      <div className={styles.nextMeta}>
        <span>Next — {next ? next.no : nextProjectNo}</span>
        <span>{next ? "View case study ↗" : "Start a project ↗"}</span>
      </div>
      <div className={styles.nextTitle}>
        {next ? (
          next.name
        ) : (
          <>
            Your <span className={section.serif}>restaurant</span>
          </>
        )}
      </div>
    </Link>
  );
};

export default NextProject;
