"use client";

import React from "react";
import styles from "./app.module.css";
import { Hero } from "@/components/HomeSections";
import { useLenis } from "@/hooks/useLenis";

export default function Home() {
  useLenis();
  return (
    <main className={styles.main}>
      <Hero />
      {/* Project */}
      <section className="h-[150vh] bg-[#F1F1F1] z-[9999999]"></section>
    </main>
  );
}
