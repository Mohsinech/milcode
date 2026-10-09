"use client";

import React from "react";
import styles from "./footer.module.css";
import { usePathname } from "next/navigation";
import { TransitionLink } from "@/utils";
import { useLenisInstance } from "@/context/LenisContext";
import {
  sitemap,
  socials,
  contact,
  instagram,
  address,
  fullFooterRoutes,
} from "./data";

interface FooterProps {
  // single-row footer; defaults to compact on every route except fullFooterRoutes
  compact?: boolean;
}

const Footer = ({ compact }: FooterProps) => {
  const pathname = usePathname();
  const lenis = useLenisInstance();
  const isCompact = compact ?? !fullFooterRoutes.includes(pathname);

  const scrollToTop = () => {
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isCompact) {
    return (
      <footer className={`${styles.footer} ${styles.compact}`}>
        <span>© 2026 Milcode Studio — Casablanca</span>
        <span className={styles.legal}>
          <TransitionLink label="Terms" href="/terms" />
          <TransitionLink label="Privacy" href="/privacy" />
          <TransitionLink label={instagram.label} href={instagram.href} />
        </span>
      </footer>
    );
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <span className={styles.heading}>Sitemap</span>
          <ul>
            {sitemap.map((item) => (
              <li key={item.href}>
                <TransitionLink label={item.label} href={item.href} />
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <span className={styles.heading}>Follow</span>
          <ul>
            {socials.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <span className={styles.heading}>Say hello</span>
          <ul>
            {contact.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <span className={styles.heading}>Studio</span>
          <p>
            {address.city}
            <br />
            {address.note}
          </p>
        </div>
      </div>

      <div className={styles.wordmark} aria-hidden="true">
        milcode<span className={styles.dot}>.</span>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 Milcode Studio</span>
        <span className={styles.legal}>
          <TransitionLink label="Terms" href="/terms" />
          <TransitionLink label="Privacy" href="/privacy" />
          <span>Made with care in Casablanca</span>
        </span>
        <button type="button" className={styles.top} onClick={scrollToTop}>
          Back to top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
