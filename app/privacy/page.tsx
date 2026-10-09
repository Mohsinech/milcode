import React from "react";
import type { Metadata } from "next";
import styles from "../app.module.css";
import LegalPage from "@/components/LegalPage/LegalPage";
import { privacy } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What Milcode Studio collects when you get in touch, why, who it’s shared with, how long we keep it and your rights under Moroccan Law 09-08.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className={styles.main}>
      <LegalPage page={privacy} />
    </main>
  );
}
