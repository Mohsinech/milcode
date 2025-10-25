import React from "react";
import styles from "./service.module.css";
import servicesData from "./data";
import Image from "next/image";
import { motion } from "framer-motion";

const ServicesGrid = () => {
  //
  const renderWithIcons = (text: string, iconSrc?: string): React.ReactNode => {
    if (!iconSrc) {
      return text;
    }

    if (!text.includes("[:icon]")) {
      return (
        <>
          {text}
          <motion.img
            src={iconSrc}
            alt=""
            aria-hidden="true"
            className={styles.inlineIcon}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </>
      );
    }

    const parts = text.split("[:icon]");
    return parts.flatMap((part, i) =>
      i === parts.length - 1
        ? [part]
        : [
            part,
            <motion.img
              key={i}
              src={iconSrc}
              alt=""
              aria-hidden="true"
              className={styles.inlineIcon}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />,
          ]
    );
  };

  return (
    <div className={styles.gridServices}>
      {servicesData.map((service) => (
        <div className={styles.card} key={service.id}>
          <div className={styles.header}>
            <div className={styles.imageWrapper}>
              {service.animatedIcon && (
                <Image
                  src={service.animatedIcon}
                  alt={service.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              )}
            </div>
            <h2>{service.title}</h2>
          </div>
          <p>
            {renderWithIcons(
              service.description,
              service.animatedIcon ?? undefined
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
