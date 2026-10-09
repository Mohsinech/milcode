"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { usePreloader } from "@/context/PreloaderContext";
import { SplitText } from "@/components/ui";
import { FormItem } from "@/components/index";

const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

const isOpen = () => {
  const now = new Date();
  const hour = now.getHours();
  // Example: open from 8:00 to 22:00 (10pm)
  return hour >= 8 && hour < 22;
};

const Contact = () => {
  const [time, setTime] = useState(getCurrentTime());
  const [open, setOpen] = useState(isOpen());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
      setOpen(isOpen());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const { done: preloaderDone } = usePreloader();
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (preloaderDone) {
      setStartAnimation(true);
    }
  }, [preloaderDone]);

  return (
    <motion.main
      className={styles.contact}
      // initial={{ oetpacity: 0 }}
      // animate={{ opacity: startAnimation ? 1 : 0 }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <section className={styles.introContact}>
        {/* Intro */}
        <div className={styles.textTop}>
          <SplitText
            text="( 04 ) Contact"
            className={styles.title}
            delay={10}
            duration={1}
            ease="elastic.out(0.9, 0.6)"
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-100px"
          />
          <motion.sup initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            [ {time} ]
          </motion.sup>
        </div>

        {!open ? (
          <motion.h3
            initial={{ opacity: 0, y: 20, skewY: 5 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{
              delay: 0.2,
              ease: [0.68, -0.55, 0.27, 1.55],
            }}
            className={styles.status}
          >
            <div
              className={styles.bouncingDot}
              style={
                isOpen()
                  ? { backgroundColor: "#F1F1F1" }
                  : { backgroundColor: "#171717" }
              }
            ></div>
            Sorry, We&apos;re currently closed
          </motion.h3>
        ) : (
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: [0.68, -0.55, 0.27, 1.55] }}
            className={styles.status}
          >
            <div className={styles.bouncingDot}></div>
            Hey, We&apos;re currently open
          </motion.h3>
        )}
      </section>

      {/* Reach us Contact */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: [0.68, -0.55, 0.27, 1.55] }}
        className={styles.reachOut}
      >
        <div className={styles.mail}>
          <h4>Location:</h4>
          <h2 className={styles.local}>
            Casablanca <br />
            Morocco
          </h2>

          <a className={styles.mailLink} href="#mailto:infos@mico.studio">
            <h1>Infos@mico.studio</h1>
          </a>
        </div>
        <div className={styles.formText}>
          <h1>
            &bull; Let’s connect. Drop us a message, follow the vibes on social,
            or just say hey — we’re all ears.
          </h1>
        </div>
      </motion.section>

      {/* Contact Form */}
      <section className={styles.contactForm}>
        {/* Content */}
        <div className={styles.lists}>
          {/* Social Media */}
          <div className={styles.list}>
            <h4>Socials:</h4>
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>{" "}
              <li>
                <a href="#">Medium</a>
              </li>
            </ul>
          </div>

          {/* Blog */}
          <div className={styles.list}>
            <h4>Index:</h4>
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.list}>
            <h4>Call us directly:</h4>
            <ul>
              <li>
                <a href="#">+212 713 086 047</a>
              </li>
              <li>
                <a href="#">+9 12 87 69 98 65</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Form */}
        <div className={styles.formField}>
          <div className={styles.formLabel}>
            <h1>* Contact Form</h1>
          </div>

          {/* form */}
          <FormItem />
        </div>
      </section>
    </motion.main>
  );
};

export default Contact;
