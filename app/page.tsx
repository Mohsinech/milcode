"use client";

import React from "react";
import styles from "./app.module.css";
import { Hero, Intro } from "@/components/HomeSections";
import { useLenis } from "@/hooks/useLenis";

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
      <section className="h-screen bg-yellow-400"></section>
      <section className="h-screen bg-black"></section>
    </main>
  );
}
