import React from "react";
import { Link } from "next-view-transitions";
import styles from "./studio.module.css";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { FadeIn } from "@/components/Reveal/Reveal";
import { recognition, joinKitchen } from "@/data/studio";

// Recognition only shows once `recognition` has items; Join takes its number otherwise
const StudioCards = () => {
  const hasRecognition = recognition.length > 0;

  return (
    <FadeIn className={styles.cards}>
      {hasRecognition && (
        <div className={`${styles.card} ${styles.recognition}`}>
          <SectionLabel index="06" label="Recognition" />
          <ul className={styles.awards}>
            {recognition.map((r) => (
              <li key={r.title} className={styles.cardTitle}>
                {r.href ? (
                  <a href={r.href} target="_blank" rel="noopener noreferrer">
                    {r.title} ↗
                  </a>
                ) : (
                  r.title
                )}
                {r.detail && (
                  <span className={styles.awardDetail}>{r.detail}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link href={joinKitchen.href} className={`${styles.card} ${styles.join}`}>
        <SectionLabel
          index={hasRecognition ? "07" : "06"}
          label="Join the kitchen"
          surface="dark"
        />
        <span className={styles.cardTitle}>{joinKitchen.title}</span>
        <span className={styles.joinCta}>{joinKitchen.cta}</span>
      </Link>
    </FadeIn>
  );
};

export default StudioCards;
