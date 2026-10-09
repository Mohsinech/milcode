import React from "react";
import styles from "../app.module.css";
import archive from "@/components/ArchiveSections/archive.module.css";
import { ArchiveIndex, Lab, CurrentWork } from "@/components/ArchiveSections";

export const metadata = {
  title: "Archive",
  description:
    "Before restaurants: e-commerce, brand sites, portfolios and experiments by Milcode Studio. Numbered A, for archive.",
};

export default function ArchivePage() {
  return (
    <main className={`${styles.main} ${archive.page}`}>
      <ArchiveIndex />
      <Lab />
      <CurrentWork />
    </main>
  );
}
