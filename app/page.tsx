import React from "react";
import styles from "./app.module.css";
import { Hero } from "@/components/HomeSections";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}
