import React from "react";
import type { Metadata } from "next";
import styles from "../app.module.css";
import LegalPage from "@/components/LegalPage/LegalPage";
import { terms } from "@/data/legal";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "The terms for using the Milcode Studio website and working with us: quotes, payment, ownership of your website and liability.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className={styles.main}>
      <LegalPage page={terms} />
    </main>
  );
}
