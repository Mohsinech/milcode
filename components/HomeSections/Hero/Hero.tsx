"use client";

import React from "react";
import styles from "./hero.module.css";
import { Link } from "next-view-transitions";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { TransitionLink } from "@/utils";
import Silk from "@/components/Silk";

const description = [
  "Milcode Studio is a design & development agency. Creating web solutions that strengthen your online presence.  We help brands, creators, and companies stand out online.",
];

const pageLinks = [
  { href: "/templates", label: "Templates" },
  { href: "Affiliate", label: "Affiliate" },
  { href: "Case Study", label: "Case Study" },
  { href: "Mico Academy", label: "Mico Academy" },
  { href: "Become-a-contributor", label: "Schedule a call" },
];

const socialLinks = [
  { href: "/instagram", label: "Instagram" },
  { href: "/twitter", label: "Twitter (x)" },
  { href: "/linkedin", label: "LinkedIn" },
  { href: "/behance", label: "Behance" },
  { href: "/dribbble", label: "Dribbble" },
];

const headlineLines = [
  "Independent design &",
  "technology agency.",
  "Ma • Casablanca.",
];

const SEQUENCE_EASE = [0.87, 0.13, 0, 1] as const;

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const sequenceItem: Variants = {
    hidden: {
      y: shouldReduceMotion ? 0 : 90,
      opacity: shouldReduceMotion ? 1 : 0,
    },
    show: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        delay: 0.08 * index,
        ease: SEQUENCE_EASE,
      },
    }),
  };

  const fadeInStage: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 25,
    },
    show: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.1 + 0.09 * index,
        ease: SEQUENCE_EASE,
      },
    }),
  };

  return (
    <section className={styles.hero}>
      <div className={styles.silkBackground} aria-hidden="true">
        <Silk
          speed={5}
          scale={1}
          color="#B6B6B6"
          noiseIntensity={2}
          rotation={0}
        />
      </div>

      <div className={styles.paths}>
        <div className={styles.pages}>
          <ul>
            {pageLinks.map((item, index) => (
              <li className="overflow-hidden" key={item.label}>
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={sequenceItem}
                  custom={index + 2}
                >
                  <Link href={item.href}>{item.label}</Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.socials}>
          <ul>
            {socialLinks.map((item, index) => (
              <li className="overflow-hidden" key={item.label}>
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={sequenceItem}
                  custom={index + 4}
                >
                  <Link href={item.href}>{item.label}</Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.agencyData}>
        <div className={styles.flex_col}>
          <div className={styles.intro}>
            {headlineLines.map((line, index) => (
              <div className="relative overflow-hidden" key={line}>
                <motion.h1
                  initial="hidden"
                  animate="show"
                  variants={sequenceItem}
                  custom={index + 7}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeInStage}
            custom={11}
            whileHover={{ scale: 0.9 }}
            className={styles.wrapper}
          >
            <div className={styles.ctaBtn}>
              <TransitionLink
                label="Become an affiliate"
                href="/contact"
                style={{
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </div>
          </motion.div>
        </div>

        <div className={styles.wrapperContent}>
          <div className={styles.shortDescription}>
            {description[0]
              .split(". ")
              .filter((line) => line.trim() !== "")
              .map((line, index) => (
                <div className="overflow-hidden" key={index}>
                  <motion.p
                    initial="hidden"
                    animate="show"
                    variants={sequenceItem}
                    custom={index + 12}
                  >
                    {line.trim()}
                  </motion.p>
                </div>
              ))}
          </div>

          <ul>
            <motion.li
              initial="hidden"
              animate="show"
              variants={fadeInStage}
              custom={13}
            >
              <TransitionLink
                label="info@milcode.com"
                href="mailto:info@milcode.com"
              />
              <div className={styles.indicator}></div>
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
