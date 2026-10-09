import React from "react";
import styles from "../app.module.css";
import {
  StudioHero,
  StudioStory,
  StudioNumbers,
  StudioPeople,
  HouseRules,
  WorkingTogether,
  StudioTools,
  StudioCards,
  TalkCta,
} from "@/components/StudioSections";

export const metadata = {
  title: "Studio",
  description:
    "Milcode is an independent studio in Casablanca that designs and builds websites for restaurants, cafés and hotels. Meet the people, the house rules and how we work.",
};

export default function StudioPage() {
  return (
    <main className={styles.main}>
      <StudioHero />
      <StudioStory />
      <StudioNumbers />
      <StudioPeople />
      <HouseRules />
      <WorkingTogether />
      <StudioTools />
      <StudioCards />
      <TalkCta />
    </main>
  );
}
