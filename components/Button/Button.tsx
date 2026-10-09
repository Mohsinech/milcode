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
  // true = diagonal ↗, "down" = ↓ (in-page anchors)
  arrow?: boolean | "down";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const Arrow = ({ down = false }: { down?: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <path d={down ? "M7 1v12M2 8l5 5 5-5" : "M2 12L12 2M4 2h8v8"} />
  </svg>
);

const Button = ({
  label,
  href,
  variant = "solid",
  surface = "light",
  arrow = false,
  className = "",
  onClick,
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
      onClick={onClick}
    >
      {arrow && <Arrow down={arrow === "down"} />}
    </TransitionLink>
  );
};

export default Button;
