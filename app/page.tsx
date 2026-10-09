import React from "react";
import styles from "./app.module.css";
import {
  Hero,
  Ticker,
  Statement,
  SelectedWork,
  Services,
  Process,
  Packages,
  Faq,
  ContactCta,
} from "@/components/HomeSections";

export const metadata = {
  title: { absolute: "Milcode Studio — Websites for restaurants" },
  description:
    "An independent studio in Casablanca designing and building websites for restaurants, cafés and hotels — with online menus, reservations and local SEO.",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Ticker />
      <Statement />
      <SelectedWork />
      <Services />
      <Process />
      <Packages />
      <Faq />
      <ContactCta />
    </main>
  );
}
