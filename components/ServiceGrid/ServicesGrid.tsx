"use client";

import React, { useRef, useState } from "react";
import styles from "./service.module.css";
import servicesData from "./data";
import { useInView } from "framer-motion";
import AccordionPanel from "@/components/Accordion/AccordionPanel";

const InfinityIcon = () => (
  <svg
    className={styles.icon}
    width="44"
    height="22"
    viewBox="0 0 44 22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M22 11c-4-5-7-8-11-8a8 8 0 0 0 0 16c4 0 7-3 11-8s7-8 11-8a8 8 0 0 1 0 16c-4 0-7-3-11-8z" />
  </svg>
);

const ServicesGrid = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const [openServiceId, setOpenServiceId] = useState<number | null>(
    servicesData[0].id,
  );

  const toggleService = (serviceId: number) => {
    setOpenServiceId((currentId) =>
      currentId === serviceId ? null : serviceId,
    );
  };

  return (
    <div
      ref={ref}
      className={`${styles.gridServices} ${inView ? styles.visible : ""}`}
    >
      {servicesData.map((service, i) => {
        const open = openServiceId === service.id;
        const buttonId = `service-button-${service.id}`;
        const panelId = `service-options-${service.id}`;

        return (
          <div
            className={`${styles.accordion} ${open ? styles.open : ""}`}
            key={service.id}
            style={{ "--i": i } as React.CSSProperties}
          >
            <h3 className={styles.heading}>
              <button
                type="button"
                id={buttonId}
                className={styles.headerButton}
                onClick={() => toggleService(service.id)}
                aria-expanded={open}
                aria-controls={panelId}
              >
                <span className={styles.index}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <InfinityIcon />
                <span className={styles.title}>{service.title}</span>
                <span className={styles.toggle} aria-hidden="true" />
              </button>
            </h3>

            <AccordionPanel
              id={panelId}
              labelledBy={buttonId}
              open={open}
              className={styles.options}
            >
              <p className={styles.description}>{service.description}</p>
              <ul className={styles.list}>
                {service.options.map((op, j) => (
                  <li
                    className={styles.opHidden}
                    key={op}
                    style={{ "--j": j } as React.CSSProperties}
                  >
                    <span className={styles.mask}>
                      <span className={styles.op}>{op}</span>
                    </span>
                    <span className={styles.line} aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </AccordionPanel>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesGrid;
