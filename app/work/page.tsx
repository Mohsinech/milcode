import React from "react";
import styles from "../app.module.css";
import { Projects, ArchiveBanner } from "@/components/WorkSections";

export const metadata = {
  title: "Work",
  description:
    "Restaurant and hospitality websites by Milcode Studio in Casablanca. Every project is numbered — M001, M002, and so on.",
};

export default function WorkPage() {
  return (
    <main className={styles.main}>
      <Projects />
      <ArchiveBanner />
    </main>
  );
}
