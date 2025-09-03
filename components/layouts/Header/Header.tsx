"use client";

import React from "react";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import { FollowedEye, TransitionLink } from "@/utils";
import { Link } from "next-view-transitions";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Showcase", href: "/showcase" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
  ];

  // track scroll
  const { scrollY } = useScroll();

  const paddingY = useTransform(scrollY, [0, 300], ["2rem", "1rem"]);

  return (
    <motion.header className={styles.header} style={{ padding: paddingY }}>
      <div className={styles.brand}>
        <Link href="/" className={styles.logo}>
          <h2>milcode </h2>
        </Link>
        <FollowedEye />
      </div>

      <nav className={styles.nav}>
        <ul>
          {navItems.map((item) => (
            <li
              key={item.href}
              className={pathname === item.href ? styles.active : ""}
            >
              <TransitionLink label={item.label} href={item.href} />
              <div className={styles.indicator}></div>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA */}
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 0.9 }}
        transition={{ duration: 0.7, ease: [0.87, 0.13, 0, 1] }}
        className={styles.wrapper}
      >
        <div className={styles.ctaBtn}>
          <TransitionLink
            label="Let's Talk"
            href="/contact"
            style={{
              color: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
