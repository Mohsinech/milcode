import React from "react";
import styles from "./services.module.css";
import section from "../section.module.css";
import { ServicesGrid } from "@/components/index";
import Button from "@/components/Button/Button";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { RevealLines } from "@/components/Reveal/Reveal";
import { TransitionLink } from "@/utils";

const Services = () => {
  return (
    <section id="services" className={`${section.section} ${styles.services}`}>
      <div className={section.head}>
        <div className={section.labelCol}>
          <SectionLabel index="03" label="Services" surface="dark" />
        </div>
        <RevealLines
          as="h2"
          className={section.title}
          lines={[
            <>
              Everything a restaurant needs online.{" "}
              <span className={`${section.serif} ${section.muted}`}>
                Nothing it doesn’t.
              </span>
            </>,
          ]}
        />
      </div>

      <ServicesGrid />

      <div className={styles.footer}>
        <span className={styles.featured}>
          Featured project for all four:{" "}
          <TransitionLink
            label="Monch (M001)"
            href="/work/monch"
            className={styles.featuredLink}
          />
        </span>
        <div className={styles.actions}>
          <Button
            label="All services"
            href="/services"
            variant="outline"
            surface="dark"
          />
          <Button label="Get a quote" href="/contact" variant="accent" />
        </div>
      </div>
    </section>
  );
};

export default Services;
