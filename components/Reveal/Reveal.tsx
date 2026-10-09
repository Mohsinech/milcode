"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import styles from "./reveal.module.css";

const EASE = [0.87, 0.13, 0, 1] as const;

interface RevealLinesProps {
  // one entry per visual line; each slides up out of its own mask
  lines: React.ReactNode[];
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  delay?: number;
  // play on mount instead of when scrolled into view (hero)
  onMount?: boolean;
  ariaLabel?: string;
}

export const RevealLines = ({
  lines,
  as = "div",
  className,
  delay = 0,
  onMount = false,
  ariaLabel,
}: RevealLinesProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const show = onMount || inView;
  const Tag = as as React.ElementType;

  return (
    <Tag ref={ref} className={className} aria-label={ariaLabel}>
      {lines.map((line, i) => (
        <span className={styles.mask} key={i}>
          <motion.span
            className={styles.line}
            initial={reduce ? false : { y: "110%" }}
            animate={show ? { y: "0%" } : undefined}
            transition={{ duration: 1, delay: delay + i * 0.08, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onMount?: boolean;
}

export const FadeIn = ({
  children,
  className,
  delay = 0,
  onMount = false,
}: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const show = onMount || inView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={show ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};
