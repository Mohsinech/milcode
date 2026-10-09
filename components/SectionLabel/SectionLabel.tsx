import React from "react";
import styles from "./label.module.css";

interface SectionLabelProps {
  // e.g. "01"
  index: string;
  label: string;
  surface?: "light" | "dark";
  className?: string;
}

const SectionLabel = ({
  index,
  label,
  surface = "light",
  className = "",
}: SectionLabelProps) => {
  return (
    <span
      className={`${styles.label} ${
        surface === "dark" ? styles.onDark : ""
      } ${className}`}
    >
      ( {index} ) {label}
    </span>
  );
};

export default SectionLabel;
