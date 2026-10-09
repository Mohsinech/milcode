import React from "react";
import type { Metadata } from "next";
import styles from "@/components/NotFound/notFound.module.css";
import section from "@/components/HomeSections/section.module.css";
import Button from "@/components/Button/Button";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { RevealLines, FadeIn } from "@/components/Reveal/Reveal";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

// The lime star that stands in for the 0
const Star = () => (
  <svg
    className={styles.star}
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="9"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M50 6v88M6 50h88M19 19l62 62M81 19L19 81" />
  </svg>
);

export default function NotFound() {
  return (
    <main className={styles.main}>
      <FadeIn onMount delay={0.6}>
        <SectionLabel label="Error — 404" surface="dark" />
      </FadeIn>

      <RevealLines
        as="h1"
        className={styles.code}
        onMount
        delay={0.3}
        ariaLabel="404 — page not found"
        lines={[
          <>
            4<Star />4
          </>,
        ]}
      />

      <FadeIn className={styles.bottom} onMount delay={0.8}>
        <p className={styles.line}>
          This table doesn’t exist.{" "}
          <span className={section.muted}>Let us seat you somewhere else.</span>
        </p>
        <nav aria-label="Suggestions" className={styles.actions}>
          <Button label="Back home" href="/" variant="accent" />
          <Button label="See the work" href="/work" variant="outline" surface="dark" />
          <Button label="Contact" href="/contact" variant="outline" surface="dark" />
        </nav>
      </FadeIn>
    </main>
  );
}
