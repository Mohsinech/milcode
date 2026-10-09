"use client";

import React from "react";
import styles from "./legal.module.css";
import { TransitionLink } from "@/utils";
import { useLenisInstance } from "@/context/LenisContext";

interface LegalContentsProps {
  items: { id: string; label: string }[];
}

// Sticky "Contents" sidebar on desktop; anchors scroll through the shared Lenis
const LegalContents = ({ items }: LegalContentsProps) => {
  const lenis = useLenisInstance();

  return (
    <nav aria-label="On this page" className={styles.contents}>
      <span className={styles.contentsLabel}>Contents</span>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <TransitionLink
              href={`#${item.id}`}
              label={item.label}
              onClick={(e) => {
                if (!lenis) return;
                e.preventDefault();
                lenis.scrollTo(`#${item.id}`, { offset: -32 });
              }}
            />
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default LegalContents;
