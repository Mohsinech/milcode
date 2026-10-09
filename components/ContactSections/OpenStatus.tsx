"use client";

import React, { useEffect, useState } from "react";
import styles from "./contact.module.css";
import { openHours } from "@/data/studio";

interface Status {
  time: string;
  open: boolean;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: openHours.timeZone,
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

// Studio time, whatever the visitor's own clock says
const getStatus = (): Status => {
  const parts = formatter.formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";

  const hour = Number(get("hour"));
  const minute = Number(get("minute"));
  const day = WEEKDAYS.indexOf(get("weekday"));
  const minutes = hour * 60 + minute;

  return {
    time: `${get("hour")}:${get("minute")}`,
    open:
      openHours.days.includes(day) &&
      minutes >= openHours.open &&
      minutes < openHours.close,
  };
};

interface OpenStatusProps {
  className?: string;
}

const OpenStatus = ({ className = "" }: OpenStatusProps) => {
  // null on the server and first client render, so the markup matches
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    setStatus(getStatus());
    const id = setInterval(() => setStatus(getStatus()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`${styles.status} ${className}`}>
      <span
        className={`${styles.statusDot} ${
          status?.open ? "" : styles.statusDotClosed
        }`}
        aria-hidden="true"
      />
      {status
        ? `${status.open ? "Open now" : "Closed now"} — Casablanca ${status.time}`
        : "Casablanca --:--"}
    </span>
  );
};

export default OpenStatus;
