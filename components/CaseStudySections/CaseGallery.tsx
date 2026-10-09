import React from "react";
import styles from "./case.module.css";
import section from "@/components/HomeSections/section.module.css";
import { FadeIn } from "@/components/Reveal/Reveal";
import type { CaseStudy } from "@/data/projects";

type Shot = NonNullable<CaseStudy["gallery"]>[number];

const Placeholder = ({ shot }: { shot: Shot }) => (
  <div
    className={`${section.placeholder} ${styles.shot} ${styles[shot.size]} ${
      styles[shot.tone]
    }`}
  >
    {shot.label}
  </div>
);

const CaseGallery = ({ gallery }: { gallery: Shot[] }) => {
  const wide = gallery.filter((s) => s.size === "wide");
  const tall = gallery.filter((s) => s.size === "tall");

  return (
    <section className={styles.gallery}>
      {wide.map((s, i) => (
        <FadeIn key={i}>
          <Placeholder shot={s} />
        </FadeIn>
      ))}
      {tall.length > 0 && (
        <FadeIn className={styles.tallGrid}>
          {tall.map((s, i) => (
            <Placeholder shot={s} key={i} />
          ))}
        </FadeIn>
      )}
    </section>
  );
};

export default CaseGallery;
