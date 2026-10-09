import React from "react";
import styles from "./packages.module.css";
import section from "../section.module.css";
import Button from "@/components/Button/Button";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { RevealLines, FadeIn } from "@/components/Reveal/Reveal";

const packages = [
  {
    name: "Starter",
    pitch: "A one-page site that does the basics beautifully.",
    price: "[from PRICE]",
    features: [
      "Single scrolling page",
      "Menu, hours, location",
      "Booking or WhatsApp button",
      "Google Business setup",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Signature",
    tag: "Most chosen",
    pitch: "A full website with your story, your menu and your bookings.",
    price: "[from PRICE]",
    features: [
      "Custom design, up to [5] pages",
      "Editable multilingual menu",
      "Reservations integration",
      "Motion & photo direction",
      "Local SEO setup",
    ],
    cta: "Start with Signature",
    featured: true,
  },
  {
    name: "Care",
    pitch: "Monthly upkeep, so the site never goes stale.",
    price: "[PRICE]",
    per: "/ month",
    features: [
      "Menu & price updates",
      "Seasonal pages and events",
      "Hosting & backups",
      "Monthly visibility report",
    ],
    cta: "Add Care",
  },
];

const Packages = () => {
  return (
    <section className={styles.packages}>
      <div className={`${section.head} ${styles.head}`}>
        <div className={section.labelCol}>
          <SectionLabel index="05" label="Packages" />
        </div>
        <RevealLines
          as="h2"
          className={section.title}
          lines={[
            <>
              Pick a size.{" "}
              <span className={section.serif}>We’ll season to taste.</span>
            </>,
          ]}
        />
      </div>

      <div className={styles.grid}>
        {packages.map((pkg, i) => (
          <FadeIn
            key={pkg.name}
            delay={i * 0.08}
            className={`${styles.card} ${pkg.featured ? styles.featured : ""}`}
          >
            <div className={styles.name}>
              <span>{pkg.name}</span>
              {pkg.tag && <span className={styles.tag}>{pkg.tag}</span>}
            </div>
            <h3 className={styles.pitch}>{pkg.pitch}</h3>
            <div className={styles.price}>
              {pkg.price}
              {pkg.per && <span className={styles.per}> {pkg.per}</span>}
            </div>
            <ul className={styles.features}>
              {pkg.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <Button
              label={pkg.cta}
              href="/contact"
              variant={pkg.featured ? "accent" : "outline"}
              className={styles.cta}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Packages;
