import React from "react";
import styles from "@/components/ContactSections/contact.module.css";
import {
  ContactHero,
  ContactInfo,
  ContactForm,
} from "@/components/ContactSections";

export const metadata = {
  title: "Contact",
  description:
    "Tell us about your restaurant, café or hotel. Milcode Studio in Casablanca replies within one working day — by email or WhatsApp.",
};

interface ContactPageProps {
  searchParams: Promise<{ topic?: string | string[] }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { topic } = await searchParams;
  const value = Array.isArray(topic) ? topic[0] : topic;

  return (
    <main className={styles.page}>
      <ContactHero />
      <section className={styles.body}>
        <ContactInfo />
        {/* key resets the pills when ?topic changes */}
        <ContactForm key={value ?? "default"} topic={value} />
      </section>
    </main>
  );
}
