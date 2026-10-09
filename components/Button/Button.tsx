import React from "react";
import styles from "./button.module.css";
import { TransitionLink } from "@/utils";

type Variant = "solid" | "outline" | "accent";
type Surface = "light" | "dark";

interface ButtonProps {
  label: string;
  href: string;
  variant?: Variant;
  // the background the button sits on — flips solid/outline colors
  surface?: Surface;
  arrow?: boolean;
  className?: string;
}

const Arrow = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <path d="M2 12L12 2M4 2h8v8" />
  </svg>
);

const Button = ({
  label,
  href,
  variant = "solid",
  surface = "light",
  arrow = false,
  className = "",
}: ButtonProps) => {
  const classes = [
    styles.button,
    styles[variant],
    surface === "dark" ? styles.onDark : "",
    className,
  ].join(" ");

  return (
    <TransitionLink
      href={href}
      label={label}
      className={classes}
      style={{ display: "inline-flex" }}
    >
      {arrow && <Arrow />}
    </TransitionLink>
  );
};

export default Button;
