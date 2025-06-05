"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./IOSProgressBar.module.css";

type IOSProgressBarProps = {
  progress: number; // 0-100
  animated?: boolean;
  color?: string;
  trackColor?: string;
  height?: number;
};

export const IOSProgressBar = ({
  progress,
  animated = true,
  color = "#007AFF",
  trackColor = "#E5E5EA",
  height = 4,
}: IOSProgressBarProps) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayProgress(progress);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayProgress(progress);
    }
  }, [progress, animated]);

  return (
    <div
      className={styles.track}
      style={{
        backgroundColor: trackColor,
        height: `${height}px`,
      }}
    >
      <motion.div
        className={styles.progress}
        style={{
          backgroundColor: color,
          height: "100%",
        }}
        initial={{ width: "0%" }}
        animate={{ width: `${Math.max(0, Math.min(100, displayProgress))}%` }}
        transition={{
          duration: animated ? 0.8 : 0,
          ease: "easeOut",
        }}
      />
    </div>
  );
};
