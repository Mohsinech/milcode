"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "./eye.module.css";

const EYE_RADIUS = 9;
const DOT_RADIUS = 4;
const MAX_MOVE = EYE_RADIUS - DOT_RADIUS;

const FollowedEye = () => {
  const eyeRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const [dotPositions, setDotPositions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setDotPositions(
        eyeRefs.map((ref) => {
          const eye = ref.current;
          if (!eye) return { x: 0, y: 0 };

          const rect = eye.getBoundingClientRect();
          const eyeCenter = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
          };

          const dx = e.clientX - eyeCenter.x;
          const dy = e.clientY - eyeCenter.y;
          const angle = Math.atan2(dy, dx);
          const distance = Math.min(Math.hypot(dx, dy), MAX_MOVE);

          return {
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
          };
        })
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.eyes}>
      {[0, 1].map((i) => (
        <div className={styles.eye} key={i} ref={eyeRefs[i]}>
          <div
            className={styles.dot}
            style={{
              transform: `translate(${dotPositions[i].x}px, ${dotPositions[i].y}px)`,
            }}
          />
          <div className={styles.eyelid}></div>
        </div>
      ))}
    </div>
  );
};

export default FollowedEye;
