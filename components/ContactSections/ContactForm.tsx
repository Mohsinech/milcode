"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./contact.module.css";
import { FadeIn } from "@/components/Reveal/Reveal";
import { TransitionLink } from "@/utils";
import { email, FORMSUBMIT_ENDPOINT } from "@/data/site";

const NEEDS = [
  "New website",
  "Redesign",
  "Online menu",
  "Reservations",
  "Local SEO",
  "Monthly care",
];

const COLLAB = "Collaboration";

// Keep the [bracketed] placeholders until real prices exist
const BUDGETS = ["[< X MAD]", "[X–Y MAD]", "[Y+ MAD]", "Not sure yet"];

type State = "idle" | "sending" | "sent" | "error";

interface PillProps {
  label: string;
  pressed: boolean;
  onClick: () => void;
}

const Pill = ({ label, pressed, onClick }: PillProps) => (
  <button
    type="button"
    className={styles.pill}
    aria-pressed={pressed}
    onClick={onClick}
  >
    {label}
  </button>
);

const Arrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <path d="M2 12L12 2M4 2h8v8" />
  </svg>
);

interface ContactFormProps {
  // ?topic=collab adds a preselected "Collaboration" pill
  topic?: string;
}

const ContactForm = ({ topic }: ContactFormProps) => {
  const isCollab = topic === "collab";
  const needOptions = isCollab ? [COLLAB, ...NEEDS] : NEEDS;

  const [needs, setNeeds] = useState<string[]>([
    isCollab ? COLLAB : "New website",
  ]);
  const [budget, setBudget] = useState("");
  const [state, setState] = useState<State>("idle");
  const thanksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state === "sent") thanksRef.current?.focus();
  }, [state]);

  const toggleNeed = (label: string) =>
    setNeeds((prev) =>
      prev.includes(label)
        ? prev.filter((n) => n !== label)
        : // keep the on-screen order
          needOptions.filter((n) => n === label || prev.includes(n))
    );

  // Only runs once native validation has passed
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === "sending") return;

    const data = new FormData(e.currentTarget);
    setState("sending");

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const json = await res.json().catch(() => null);

      if (!res.ok || String(json?.success) === "false") throw new Error();
      setState("sent");
    } catch {
      setState("error");
    }
  };

  if (state === "sent") {
    return (
      <div
        ref={thanksRef}
        role="status"
        tabIndex={-1}
        className={styles.thanks}
      >
        Thanks — your table’s reserved.
        <span className={styles.thanksNote}>
          We reply within one working day.
        </span>
      </div>
    );
  }

  const sending = state === "sending";

  return (
    <FadeIn className={styles.formWrap} onMount delay={0.9}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        aria-busy={sending}
      >
        {/* FormSubmit options */}
        <input
          type="hidden"
          name="_subject"
          value="New project request — milcode.com"
        />
        <input type="hidden" name="_template" value="table" />
        <input
          type="text"
          name="_honey"
          className={styles.honey}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Pill values, so they're submitted with the form */}
        <input type="hidden" name="needs" value={needs.join(", ")} />
        <input type="hidden" name="budget" value={budget} />

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>What do you need?</legend>
          <div className={styles.pills}>
            {needOptions.map((label) => (
              <Pill
                key={label}
                label={label}
                pressed={needs.includes(label)}
                onClick={() => toggleNeed(label)}
              />
            ))}
          </div>
        </fieldset>

        <div className={styles.fields}>
          <label className={styles.field}>
            Full name *
            <input
              required
              name="name"
              autoComplete="name"
              placeholder="Your name"
              className={styles.input}
            />
          </label>
          <label className={styles.field}>
            Email or WhatsApp *
            <input
              required
              name="contact"
              autoComplete="email"
              placeholder="you@restaurant.com"
              className={styles.input}
            />
          </label>
          <label className={styles.field}>
            Restaurant name *
            <input
              required
              name="restaurant"
              autoComplete="organization"
              placeholder="Name & city"
              className={styles.input}
            />
          </label>
          <label className={styles.field}>
            Current website / Instagram
            <input
              name="link"
              placeholder="https://"
              className={styles.input}
            />
          </label>
        </div>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Budget</legend>
          <div className={styles.pills}>
            {BUDGETS.map((label) => (
              <Pill
                key={label}
                label={label}
                pressed={budget === label}
                onClick={() => setBudget(label)}
              />
            ))}
          </div>
        </fieldset>

        <label className={styles.field}>
          Tell us about your place
          <textarea
            name="message"
            rows={4}
            placeholder="Cuisine, number of covers, what isn’t working today, when you’d like to launch…"
            className={`${styles.input} ${styles.textarea}`}
          />
        </label>

        <div className={styles.submitRow}>
          <span className={styles.note}>
            We reply within one working day. No spam, no newsletter.
          </span>
          <button type="submit" className={styles.submit} disabled={sending}>
            {sending ? "Sending…" : "Send request"}
            <Arrow />
          </button>
        </div>

        {state === "error" && (
          <p role="alert" className={styles.error}>
            Something went wrong and your request wasn’t sent. Please try
            again, or email us at{" "}
            <TransitionLink
              label={email.label}
              href={email.href}
              className={styles.errorLink}
            />
            .
          </p>
        )}
      </form>
    </FadeIn>
  );
};

export default ContactForm;
