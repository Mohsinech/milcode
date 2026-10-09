"use client";

import React, { useEffect, useState } from "react";
import styles from "./hero.module.css";
import { Link } from "next-view-transitions";
import Button from "@/components/Button/Button";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { RevealLines, FadeIn } from "@/components/Reveal/Reveal";
import { useLenisInstance } from "@/context/LenisContext";

const getCasablancaTime = () =>
  new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Casablanca",
  }).format(new Date());

const Hero = () => {
  // computed after mount to avoid a hydration mismatch
  const [time, setTime] = useState<string | null>(null);
  const lenis = useLenisInstance();

  useEffect(() => {
    setTime(getCasablancaTime());
    const id = setInterval(() => setTime(getCasablancaTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.hero}>
      <FadeIn className={styles.meta} onMount delay={0.6}>
        <SectionLabel index="00" label="Index" surface="dark" />
        <span>Restaurant websites — Design &amp; development</span>
        <span className={styles.status}>
          <span className={styles.dot} aria-hidden="true" />
          Open for new projects
        </span>
        <span>
          Casablanca, MA — <time>{time ?? "--:--"}</time>
        </span>
      </FadeIn>

      <RevealLines
        as="h1"
        className={styles.title}
        onMount
        delay={0.3}
        lines={[
          "Websites that",
          <>
            fill <span className={styles.serif}>tables</span>
            <span className={styles.accent}>.</span>
          </>,
        ]}
      />

      <div className={styles.intro}>
        <FadeIn onMount delay={0.7}>
          <p className={styles.lead}>
            Milcode is an independent studio from Casablanca. We design and
            build websites for restaurants, cafés and hotels — the kind that
            make people hungry, then help them book.
          </p>
        </FadeIn>
        <FadeIn className={styles.actions} onMount delay={0.8}>
          <Button
            label="See the work"
            href="#work"
            variant="outline"
            surface="dark"
            arrow="down"
            onClick={(e) => {
              if (!lenis) return;
              e.preventDefault();
              lenis.scrollTo("#work");
            }}
          />
          <Button label="Get a quote" href="/contact" surface="dark" />
        </FadeIn>
      </div>

      {/* Featured reel */}
      <FadeIn onMount delay={0.9}>
        <Link href="/work/monch" className={styles.reel}>
          <span className={styles.reelTop}>
            <span>Featured — M001</span>
            <span>01 / 01</span>
          </span>
          <span className={styles.reelPlaceholder}>
            [ Monch website — screen recording, autoplay loop ]
          </span>
          <span className={styles.reelBottom}>
            <span>
              <span className={styles.reelName}>Monch</span>
              <span className={styles.reelInfo}>
                Restaurant website — Design, development, online menu
              </span>
            </span>
            <span className={styles.reelCta}>View case study</span>
          </span>
        </Link>
      </FadeIn>
    </section>
  );
};

export default Hero;
