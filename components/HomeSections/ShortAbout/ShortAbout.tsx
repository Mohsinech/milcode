import React from "react";
import styles from "./short.module.css";
import { Link } from "next-view-transitions";

const ShortAbout = () => {
  return (
    <section className={styles.shortAbout}>
      <div className={styles.briefAbout}>
        <h1>
          Fueled by collaboration, creativity, and the people behind every idea.
          we are a digital{" "}
          <span>
            <Link href="/about">creative agency</Link>
          </span>{" "}
          based in the USA and Morocco, dedicated to crafting thoughtful
          strategies, designs, and digital experiences that empower brands and
          their audiences.
        </h1>
      </div>

      <div className={styles.line}></div>
    </section>
  );
};

export default ShortAbout;
