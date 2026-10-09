"use client";

import React from "react";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import { FollowedEye, TransitionLink } from "@/utils";
import { Link } from "next-view-transitions";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/Button/Button";
import { navLinks, lightHeaderRoutes } from "./data";

const Header = () => {
  const pathname = usePathname();
  const isLight = lightHeaderRoutes.includes(pathname);

  // track scroll
  const { scrollY } = useScroll();

  const paddingY = useTransform(scrollY, [0, 300], ["28px", "16px"]);
  const transformY = useTransform(scrollY, [0, 300], [0, -100]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.87, 0.13, 0, 1] }}
      className={`${styles.header} ${isLight ? styles.light : ""}`}
      style={{ paddingTop: paddingY, paddingBottom: paddingY, y: transformY }}
    >
      <Link href="/" className={styles.brand} aria-label="Milcode Studio — home">
        <span className={styles.logo}>milcode</span>
        <FollowedEye dark={isLight} />
      </Link>

      <nav className={styles.nav} aria-label="Main">
        <ul>
          {navLinks.map((item) => (
            <li
              key={item.href}
              className={isActive(item.href) ? styles.active : ""}
            >
              <TransitionLink label={item.label} href={item.href} />
              <div className={styles.indicator}></div>
            </li>
          ))}
        </ul>
      </nav>

      <Button
        label="Start a project"
        href="/contact"
        variant={isLight ? "solid" : "accent"}
        arrow
        className={styles.cta}
      />
    </motion.header>
  );
};

export default Header;
