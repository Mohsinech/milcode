"use client";

import React from "react";
import styles from "./services.module.css";
import section from "@/components/HomeSections/section.module.css";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { RevealLines, FadeIn } from "@/components/Reveal/Reveal";
import { TransitionLink } from "@/utils";
import { useLenisInstance } from "@/context/LenisContext";

const anchors = [
  { label: "01 Design", href: "#design" },
  { label: "02 Development", href: "#dev" },
  { label: "03 Menus & bookings", href: "#menus" },
  { label: "04 Visibility", href: "#visibility" },
];

const ServicesHero = () => {
  const lenis = useLenisInstance();

  return (
    <section className={styles.hero}>
      <FadeIn className={styles.meta} onMount delay={0.6}>
        <SectionLabel index="05" label="Services" surface="dark" />
        <span>4 services — 1 focus: hospitality</span>
        <span>From brief to launch in [4–6] weeks</span>
      </FadeIn>

      <RevealLines
        as="h1"
        className={styles.heroTitle}
        onMount
        delay={0.3}
        lines={[
          <>
            Serv<span className={section.serif}>ices</span>
            <span className={styles.accent}>.</span>
          </>,
        ]}
      />

      <div className={styles.heroBottom}>
        <FadeIn onMount delay={0.7}>
          <p className={styles.lead}>
            Everything a restaurant needs to look as good online as it does in
            the dining room — and to turn a scroll into a reservation.
          </p>
        </FadeIn>
        <FadeIn onMount delay={0.8}>
          <nav aria-label="Services on this page" className={styles.pills}>
            {anchors.map((a) => (
              <TransitionLink
                key={a.href}
                href={a.href}
                label={a.label}
                className={styles.pill}
                onClick={(e) => {
                  if (!lenis) return;
                  e.preventDefault();
                  lenis.scrollTo(a.href);
                }}
              />
            ))}
          </nav>
        </FadeIn>
      </div>
    </section>
  );
};

export default ServicesHero;
