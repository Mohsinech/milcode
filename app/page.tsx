"use client";

import React from "react";
import styles from "./app.module.css";
import {
  FeaturedProject,
  Hero,
  Intro,
  Project,
  Services,
  ShortAbout,
} from "@/components/HomeSections";
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
      <ShortAbout />
      {/* Services */}
      <Services />
    </main>
  );
}
