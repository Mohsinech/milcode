"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./intro.module.css";

const Intro = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const firstWord = "Crafted".split("");
  const secondWord = "Innovation".split("");

  // create individual y motion values for each letter
  const yMotionsFirst = firstWord.map((_, i) =>
    useTransform(
      scrollYProgress,
      [0 + i * 0.02, 0.5 + i * 0.02],
      ["150%", "0%"]
    )
  );
  const yMotionsSecond = secondWord.map((_, i) =>
    useTransform(
      scrollYProgress,
      [0 + i * 0.02, 0.5 + i * 0.02],
      ["150%", "0%"]
    )
  );

  return (
    <section className={styles.intro} ref={ref}>
      <div className={styles.wrapper}>
        <div className={styles.introContent}>
          <div className="overflow-hidden relative">
            {firstWord.map((letter, index) => (
              <motion.h1
                key={index}
                style={{ display: "inline-block", y: yMotionsFirst[index] }}
              >
                {letter}
              </motion.h1>
            ))}
          </div>

          <div className="overflow-hidden relative">
            {secondWord.map((letter, index) => (
              <motion.h1
                key={index}
                style={{ display: "inline-block", y: yMotionsSecond[index] }}
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
