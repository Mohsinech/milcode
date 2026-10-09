"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import styles from "./studio.module.css";
import { numbers, type StudioNumber } from "@/data/studio";

// "12+" → { target: 12, suffix: "+" }; placeholders like "[X]+" → null (static)
const parse = (value: string) => {
  const match = value.match(/^(\d+)(.*)$/);
  return match ? { target: Number(match[1]), suffix: match[2] } : null;
};

const Counter = ({ value, label }: StudioNumber) => {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const parsed = parse(value);
  const target = parsed?.target ?? null;
  // server render shows the final value, so no-JS and reduced motion see it as-is
  const [count, setCount] = useState(target);

  useEffect(() => {
    if (target === null || reduce) return;
    if (!inView) {
      setCount(0);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, target]);

  return (
    <li ref={ref} className={styles.number}>
      {parsed ? (
        <>
          <span className={styles.numberValue} aria-hidden="true">
            {count}
            {parsed.suffix}
          </span>
          <span className={styles.srOnly}>{value}</span>
        </>
      ) : (
        <span className={styles.numberValue}>{value}</span>
      )}
      <span className={styles.numberLabel}>{label}</span>
    </li>
  );
};

const StudioNumbers = () => (
  <ul className={styles.numbers}>
    {numbers.map((n) => (
      <Counter key={n.label} {...n} />
    ))}
  </ul>
);

export default StudioNumbers;
