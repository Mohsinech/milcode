import React from "react";
import styles from "./legal.module.css";
import section from "@/components/HomeSections/section.module.css";
import { RevealLines, FadeIn } from "@/components/Reveal/Reveal";
import { TransitionLink } from "@/utils";
import LegalContents from "./LegalContents";
import {
  legalPages,
  type LegalPageData,
  type LegalParagraph,
} from "@/data/legal";

// "01 — Who we are"
const sectionNo = (i: number) => String(i + 1).padStart(2, "0");

const Paragraph = ({ p }: { p: LegalParagraph }) => (
  <p>
    {typeof p === "string"
      ? p
      : p.map((part, i) =>
          typeof part === "string" ? (
            <React.Fragment key={i}>{part}</React.Fragment>
          ) : (
            <TransitionLink
              key={i}
              href={part.href}
              label={part.label}
              className={styles.inlineLink}
            />
          )
        )}
  </p>
);

const LegalPage = ({ page }: { page: LegalPageData }) => (
  <>
    <section className={styles.hero}>
      <FadeIn className={styles.meta} onMount delay={0.6}>
        <span>Legal — {page.docNo}</span>
        <span>Last updated {page.updated}</span>
      </FadeIn>

      <RevealLines
        as="h1"
        className={styles.title}
        onMount
        delay={0.3}
        lines={[
          <>
            {page.title}
            <span className={section.serif}>{page.titleSerif}</span>
          </>,
        ]}
      />

      <FadeIn onMount delay={0.8}>
        <nav aria-label="Legal pages" className={styles.switch}>
          {legalPages.map((p) => (
            <TransitionLink
              key={p.slug}
              href={p.href}
              label={p.navLabel}
              className={`${styles.pill} ${
                p.slug === page.slug ? styles.pillActive : ""
              }`}
              ariaCurrent={p.slug === page.slug ? "page" : undefined}
            />
          ))}
        </nav>
      </FadeIn>
    </section>

    <div className={styles.body}>
      <LegalContents
        items={page.sections.map((s, i) => ({
          id: s.id,
          label: `${sectionNo(i)} ${s.title}`,
        }))}
      />

      <div className={styles.content}>
        <FadeIn>
          <p className={styles.lead}>{page.lead}</p>
        </FadeIn>

        {page.summary && (
          <FadeIn className={styles.summary}>
            {page.summary.map((card) => (
              <div
                key={card.label}
                className={`${styles.card} ${card.dark ? styles.cardDark : ""}`}
              >
                <span className={styles.cardLabel}>{card.label}</span>
                <span className={styles.cardText}>{card.text}</span>
              </div>
            ))}
          </FadeIn>
        )}

        {page.sections.map((s, i) => (
          <section key={s.id} id={s.id} className={styles.section}>
            <h2>
              {sectionNo(i)} — {s.title}
            </h2>
            {s.body.map((p, j) => (
              <Paragraph key={j} p={p} />
            ))}
          </section>
        ))}
      </div>
    </div>
  </>
);

export default LegalPage;
