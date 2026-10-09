import React from "react";
import styles from "./contact.module.css";
import { FadeIn } from "@/components/Reveal/Reveal";
import { TransitionLink } from "@/utils";
import { email, phone, address, socials } from "@/data/site";

const ContactInfo = () => (
  <FadeIn className={styles.info} onMount delay={0.8}>
    <div>
      <span className={styles.infoLabel}>Email</span>
      <TransitionLink
        label={email.label}
        href={email.href}
        className={styles.email}
      />
    </div>

    <div>
      <span className={styles.infoLabel}>Phone &amp; WhatsApp</span>
      <TransitionLink
        label={phone.label}
        href={phone.href}
        className={styles.infoText}
      />
    </div>

    <div>
      <span className={styles.infoLabel}>Studio</span>
      <p className={styles.infoText}>
        {address.city}
        <br />
        {address.note}
      </p>
    </div>

    <div>
      <span className={styles.infoLabel}>Follow</span>
      <ul className={styles.socials}>
        {socials.map((item) => (
          <li key={item.label}>
            <TransitionLink label={item.label} href={item.href} />
          </li>
        ))}
      </ul>
    </div>
  </FadeIn>
);

export default ContactInfo;
