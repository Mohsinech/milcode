"use client";

import React, { useState } from "react";
import styles from "./faq.module.css";
import section from "../section.module.css";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import AccordionPanel from "@/components/Accordion/AccordionPanel";
import { FadeIn } from "@/components/Reveal/Reveal";

// Answers 2–5 are placeholders: check them before launch
const questions = [
  {
    q: "Do you only work with restaurants?",
    a: "Mostly. Food and hospitality is our focus — restaurants, cafés, bakeries, bars and small hotels. If you’re close to that world, ask.",
  },
  {
    q: "How long does a website take?",
    a: "It depends on the size of the site and how ready your content is. Most projects take [X weeks] from the first call to launch — we’ll give you a clear timeline before we start.",
  },
  {
    q: "Can I update the menu myself?",
    a: "Yes. Dishes, prices and languages live in a simple editor you can use from your phone, and we show your team how it works at launch.",
  },
  {
    q: "Do you work with clients outside Morocco?",
    a: "Yes. We’re based in Casablanca and work with clients worldwide — calls, design reviews and handover all happen online.",
  },
  {
    q: "Do you take the food photos too?",
    a: "Photo direction is part of the design work. For the shoot itself, we work with [photographer partner] or with the photographer you already trust.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.faq}>
      <div className={section.labelCol}>
        <SectionLabel index="06" label="Questions" />
      </div>

      <FadeIn className={`${section.mainCol} ${styles.list}`}>
        {questions.map((item, i) => {
          const open = openIndex === i;
          const buttonId = `faq-button-${i}`;
          const panelId = `faq-panel-${i}`;

          return (
            <div
              key={item.q}
              className={`${styles.item} ${open ? styles.open : ""}`}
            >
              <h3 className={styles.heading}>
                <button
                  type="button"
                  id={buttonId}
                  className={styles.question}
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={panelId}
                >
                  <span>{item.q}</span>
                  <span className={styles.toggle} aria-hidden="true" />
                </button>
              </h3>
              <AccordionPanel id={panelId} labelledBy={buttonId} open={open}>
                <p className={styles.answer}>{item.a}</p>
              </AccordionPanel>
            </div>
          );
        })}
      </FadeIn>
    </section>
  );
};

export default Faq;
