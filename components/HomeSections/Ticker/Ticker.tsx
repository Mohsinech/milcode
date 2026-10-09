import React from "react";
import styles from "./ticker.module.css";

const items = [
  "Online menus",
  "Reservations",
  "Google & local SEO",
  "Multilingual menus",
  "Fast on mobile",
  "Instagram-ready",
];

const Star = () => (
  <svg
    className={styles.star}
    width="22"
    height="22"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="10"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M50 8v84M8 50h84M20 20l60 60M80 20L20 80" />
  </svg>
);

// One set of items; rendered twice so the -50% loop is seamless
const Group = ({ hidden = false }: { hidden?: boolean }) => (
  <ul className={styles.group} aria-hidden={hidden || undefined}>
    {items.map((item) => (
      <li key={item} className={styles.item}>
        <span>{item}</span>
        <Star />
      </li>
    ))}
  </ul>
);

const Ticker = () => {
  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        <Group />
        <Group hidden />
      </div>
    </div>
  );
};

export default Ticker;
