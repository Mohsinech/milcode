"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "next-view-transitions";
import styles from "./transition.module.css";

const DURATION = 0.8;
const STAGGER = 0.025;

interface TransitionLinkProps {
  href: string;
  label: string;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  // call e.preventDefault() to skip navigation (e.g. Lenis anchor scroll)
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  ariaCurrent?: "page" | "location";
}

// external, mailto: and tel: links stay plain <a>
const isInternal = (href: string) =>
  href.startsWith("/") || href.startsWith("#");

const TransitionLink: React.FC<TransitionLinkProps> = ({
  href,
  label,
  style,
  className,
  children,
  onClick,
  ariaCurrent,
}) => {
  const [hovered, setHovered] = useState(false);
  const letters = label.split("");

  const content = (
    <>
      <motion.span
        initial="initial"
        animate={hovered ? "hoverd" : "initial"}
        style={{ position: "relative", display: "inline-block" }}
      >
        <span
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "top",
          }}
          className={styles.a}
        >
          {letters.map((l, i) => (
            <motion.span
              key={`up-${i}`}
              variants={{
                initial: { y: 0 },
                hoverd: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                delay: i * STAGGER,
                ease: [0.87, 0.13, 0, 1],
              }}
              style={{ display: "inline-block" }}
            >
              {l === " " ? " " : l}
            </motion.span>
          ))}
        </span>

        <span
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "top",
            position: "absolute",
            left: 0,
            top: 0,
          }}
          className={styles.a}
          aria-hidden="true"
        >
          {letters.map((l, i) => (
            <motion.span
              key={`down-${i}`}
              variants={{
                initial: { y: "100%" },
                hoverd: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                delay: i * STAGGER,
                ease: [0.87, 0.13, 0, 1],
              }}
              style={{ display: "inline-block" }}
            >
              {l === " " ? " " : l}
            </motion.span>
          ))}
        </span>
      </motion.span>
      {children}
    </>
  );

  const shared = {
    className: `${styles.link} ${className ?? ""}`,
    style: { display: "inline-block", ...style },
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onClick,
    "aria-current": ariaCurrent,
  };

  if (isInternal(href)) {
    return (
      <Link href={href} {...shared}>
        {content}
      </Link>
    );
  }

  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      {...shared}
    >
      {content}
    </a>
  );
};

export default TransitionLink;
