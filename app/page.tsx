"use client";

import React from "react";
import styles from "./app.module.css";
import {
  FeaturedProject,
  Hero,
  Intro,
  Project,
  ProjectGrid,
  PrSection,
  Services,
  ShortAbout,
} from "@/components/HomeSections";
import GradualBlur from "@/components/GradualBlur";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      {/* Project */}
      <Project />²
      <Intro />
      {/* Featured Project */}
      <FeaturedProject />
      {/* Get more info */}
      <ShortAbout />
      {/* Services */}
      <Services />
      {/* Project */}
      <PrSection />
      <ProjectGrid />
      <section
        style={{ position: "relative", height: "auto", overflow: "hidden" }}
      >
        <GradualBlur
          target="page"
          position="bottom"
          height="10rem"
          strength={1}
          divCount={3}
          curve="bezier"
          exponential
          opacity={1}
        />
      </section>
    </main>
  );
}
