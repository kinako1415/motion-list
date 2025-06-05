"use client";
import { motion } from "framer-motion";
import styles from "./IOSSpinner.module.css";

type IOSSpinnerProps = {
  size?: "small" | "medium" | "large";
  color?: string;
};

export const IOSSpinner = ({
  size = "medium",
  color = "#007AFF",
}: IOSSpinnerProps) => {
  return (
    <div className={`${styles.spinner} ${styles[size]}`}>
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className={styles.line}
          style={{
            backgroundColor: color,
            transform: `rotate(${i * 30}deg)`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
