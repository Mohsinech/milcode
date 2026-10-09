import React from "react";
import styles from "../app.module.css";
import {
  ServicesHero,
  DesignService,
  DevService,
  MenusService,
  VisibilityService,
  AddOns,
  Compare,
  AskCta,
} from "@/components/ServicesSections";

export const metadata = {
  title: "Services",
  description:
    "Website design, development, online menus, reservations and local SEO for restaurants, cafés and hotels — by Milcode Studio in Casablanca.",
};

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      <ServicesHero />
      <DesignService />
      <DevService />
      <MenusService />
      <VisibilityService />
      <AddOns />
      <Compare />
      <AskCta />
    </main>
  );
}
