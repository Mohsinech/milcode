import React from "react";
import styles from "./services.module.css";
import section from "@/components/HomeSections/section.module.css";
import { RevealLines, FadeIn } from "@/components/Reveal/Reveal";

const addOns = [
  "Food & interior photography (with partners)",
  "Printed QR menu cards",
  "Extra language",
  "Events & private dining page",
  "Gift cards & online orders",
];

const AddOns = () => (
  <section className={styles.addOns}>
    <div className={`${section.head} ${styles.blockHead}`}>
      <div className={`${section.labelCol} ${styles.plainLabel}`}>
        On the side
      </div>
      <RevealLines
        as="h2"
        className={section.title}
        lines={[
          <>
            Add-ons, <span className={section.serif}>à la carte.</span>
          </>,
        ]}
      />
    </div>

    <FadeIn>
      <ul className={styles.addOnList}>
        {addOns.map((item) => (
          <li key={item} className={styles.addOn}>
            <span>{item}</span>
            <span>[PRICE]</span>
          </li>
        ))}
      </ul>
    </FadeIn>
  </section>
);

export default AddOns;
