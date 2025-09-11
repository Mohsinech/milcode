"use client";

import React from "react";
import styles from "./app.module.css";
import { FeaturedProject, Hero, Intro } from "@/components/HomeSections";
import { useLenis } from "@/hooks/useLenis";
import { Link } from "next-view-transitions";

export default function Home() {
  // track scroll

  useLenis();
  return (
    <main className={styles.main}>
      <Hero />
      {/* Project */}
      <section className="h-screen bg-[#F1F1F1] z-[9999999]"></section>
      {/* Intro */}
      <Intro />
      {/* Featured Project */}
      <FeaturedProject />
      {/* Get more info */}
      <section className={styles.briefAbout}>
        <div className={styles.content}>
          <h1>
            Get more about{" "}
            <span>
              <Link href="/about">Milcode Studio</Link>
            </span>
          </h1>
        </div>
      </section>
    </main>
  );
}
