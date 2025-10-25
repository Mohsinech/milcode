import React from "react";
import styles from "./services.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { ServicesGrid } from "@/components/index";

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.content}>
        <h1>
          <sup>our services</sup>
          Helping brands thrive through strategy, design, and development{" "}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: [0.65, 0.05, 0, 1],
            }}
            className={styles.rotatingLines}
          >
            <Image src="/assets/icons/sym.svg" fill alt="rotating lines" />
          </motion.div>{" "}
          building digital experiences that inspire, engage, and drive growth.
        </h1>
      </div>

      {/* Services */}
      <ServicesGrid />
    </section>
  );
};

export default Services;
