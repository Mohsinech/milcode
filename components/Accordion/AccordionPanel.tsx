import React from "react";
import styles from "./accordion.module.css";

interface AccordionPanelProps {
  id: string;
  // id of the <button> that controls this panel
  labelledBy: string;
  open: boolean;
  className?: string;
  children: React.ReactNode;
}

// Height animates via grid-template-rows 0fr → 1fr, so nothing is measured in JS
const AccordionPanel = ({
  id,
  labelledBy,
  open,
  className = "",
  children,
}: AccordionPanelProps) => {
  return (
    <div
      id={id}
      role="region"
      aria-labelledby={labelledBy}
      className={`${styles.panel} ${open ? styles.open : ""}`}
      inert={!open}
    >
      <div className={styles.inner}>
        <div className={className}>{children}</div>
      </div>
    </div>
  );
};

export default AccordionPanel;
