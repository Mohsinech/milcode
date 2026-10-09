"use client";

import React, { useState } from "react";
import styles from "./service.module.css";
import servicesData from "./data";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AnimatePresence, motion } from "framer-motion";

const LOTTIE_SPEED = 0.4;

const ServicesGrid = () => {
  const [openServiceId, setOpenServiceId] = useState<number | null>(null);

  const toggleService = (serviceId: number) => {
    setOpenServiceId((currentId) =>
      currentId === serviceId ? null : serviceId,
    );
  };

  return (
    <div className={styles.gridServices}>
      {servicesData.map((service) => (
        <div className={styles.accordion} key={service.id}>
          <button
            type="button"
            className={styles.headerButton}
            onClick={() => toggleService(service.id)}
            aria-expanded={openServiceId === service.id}
            aria-controls={`service-options-${service.id}`}
          >
            <div className={styles.header}>
              {service.lottieIcon && (
                <DotLottieReact
                  src={service.lottieIcon}
                  loop
                  autoplay
                  className={styles.lottie}
                  speed={LOTTIE_SPEED}
                />
              )}
              <h2>{service.title}</h2>
            </div>
          </button>

          <AnimatePresence initial={false}>
            {openServiceId === service.id && (
              <motion.div
                id={`service-options-${service.id}`}
                className={styles.options}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 1, ease: [0.65, 0.05, 0, 1] }}
              >
                {service.Options.map((op, i) => (
                  <div className={styles.opHidden} key={op}>
                    <div className="overflow-hidden">
                      <motion.h2
                        initial={{ y: "200%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "200%", opacity: 0 }}
                        transition={{
                          duration: 1.5,
                          ease: [0.65, 0.05, 0, 1],
                          delay: i * 0.1,
                        }}
                        className={styles.op}
                      >
                        {op}
                      </motion.h2>
                      <motion.div
                        initial={{
                          width: "0%",
                        }}
                        animate={{
                          width: "100%",
                        }}
                        exit={{
                          width: "0%",
                        }}
                        transition={{
                          duration: 1.8,
                          ease: [0.65, 0.05, 0, 1],
                          delay: i * 0.1,
                        }}
                        className={styles.line}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
