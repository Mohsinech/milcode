"use client";

import React from "react";
import styles from "./hero.module.css";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";
import { TransitionLink } from "@/utils";

const description = [
  "Mico Supply is a design & development agency crafting web solutions that strengthen your online presence. From websites to digital experiences, we help brands, creators, and companies stand out online.",
];

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.paths}>
        <div className={styles.pages}>
          <ul>
            <li className="overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.87, 0.13, 0, 1] }}
              >
                <Link href="/Templates">Template</Link>
              </motion.div>
            </li>
            <li className="overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.87, 0.13, 0, 1],
                }}
              >
                <Link href="Affiliate">Affiliate</Link>
              </motion.div>
            </li>
            <li className="overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.87, 0.13, 0, 1],
                }}
              >
                <Link href="Case Study">Case Study</Link>
              </motion.div>
            </li>
            <li className="overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3,

                  ease: [0.87, 0.13, 0, 1],
                }}
              >
                <Link href="Mico Academy">Mico Academy</Link>
              </motion.div>
            </li>
            <li className="overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: [0.87, 0.13, 0, 1],
                }}
              >
                <Link href="Become-a-contributor">Become a Contributor</Link>
              </motion.div>
            </li>
          </ul>
        </div>
        <div className={styles.socials}>
          <ul>
            <li className="overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.87, 0.13, 0, 1],
                }}
              >
                <Link href="/instagram">Instagram</Link>
              </motion.div>
            </li>
            <li className="overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.87, 0.13, 0, 1],
                }}
              >
                <Link href="/twitter">Twitter (x)</Link>
              </motion.div>
            </li>
            <li className="overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.87, 0.13, 0, 1],
                }}
              >
                <Link href="/linkedin">LinkedIn</Link>
              </motion.div>
            </li>
            <li className="overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: [0.87, 0.13, 0, 1],
                }}
              >
                <Link href="/behance">Behance</Link>
              </motion.div>
            </li>
            <li className="overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.87, 0.13, 0, 1],
                }}
              >
                <Link href="/dribbble">Dribbble</Link>
              </motion.div>
            </li>
          </ul>
        </div>
      </div>

      {/* Agency Data */}
      <div className={styles.agencyData}>
        <div className={styles.flex_col}>
          {/* Intro */}
          <div className={styles.intro}>
            <div className="relative overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.87, 0.13, 0, 1],
                }}
              >
                Independent design & technology
              </motion.h1>
            </div>
            <div className="relative overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.87, 0.13, 0, 1],
                }}
              >
                agency. Ma • Casablanca.{" "}
              </motion.h1>
            </div>
          </div>

          {/* CTA  */}
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 1, ease: [0.87, 0.13, 0, 1] }}
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

        {/* Wrapper */}
        <div className={styles.wrapperContent}>
          {/* Agency SShort Description */}
          <div className={styles.shortDescription}>
            {description[0]
              .split(". ")
              .filter((line) => line.trim() !== "")
              .map((line, index) => (
                <p key={index}>{line.trim()}</p>
              ))}
          </div>

          {/* wer' open closed */}
          <ul>
            <li>
              <TransitionLink
                label="info@milcode.com"
                href="mailto:info@milcode.com"
              />
              <div className={styles.indicator}></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
