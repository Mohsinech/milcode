"use client";

import React from "react";
import styles from "./app.module.css";
import {
  FeaturedProject,
  Hero,
  Intro,
  Project,
} from "@/components/HomeSections";
import { Link } from "next-view-transitions";
import useLenis from "@/hooks/useLenis";

export default function Home() {
  // track scroll
  useLenis();

  return (
    <main className={styles.main}>
      <Hero />
      {/* Project */}
      <Project />
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
