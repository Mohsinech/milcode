"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./intro.module.css";

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  const firstWord = "Formed".split("");
  const secondWord = "Innovation".split("");

  const letterVariants = {
    hidden: { y: "150%", opacity: 0, skewY: 30 },
    visible: (i: number) => ({
      y: "0%",
      skewY: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 2,
        ease: [0.65, 0.05, 0, 1],
      },
    }),
  };

  return (
    <section className={styles.intro} ref={ref}>
      <div className={styles.wrapper}>
        <div className={styles.introContent}>
          <div className="overflow-hidden relative">
            {firstWord.map((letter, index) => (
              <motion.h1
                key={index}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.h1>
            ))}
          </div>

          <div className="overflow-hidden relative">
            {secondWord.map((letter, index) => (
              <motion.h1
                key={index}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.h1>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
