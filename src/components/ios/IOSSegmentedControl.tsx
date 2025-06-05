"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./IOSSegmentedControl.module.css";

type IOSSegmentedControlProps = {
  segments: string[];
  selectedIndex?: number;
  onChange?: (index: number) => void;
  size?: "small" | "medium" | "large";
};

export const IOSSegmentedControl = ({
  segments,
  selectedIndex = 0,
  onChange,
  size = "medium",
}: IOSSegmentedControlProps) => {
  const [selected, setSelected] = useState(selectedIndex);

  const handleSelect = (index: number) => {
    setSelected(index);
    onChange?.(index);
  };

  return (
    <div className={`${styles.container} ${styles[size]}`}>
      <motion.div
        className={styles.selector}
        animate={{
          x: `${(selected / segments.length) * 100}%`,
          width: `${100 / segments.length}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />
      {segments.map((segment, index) => (
        <button
          key={index}
          className={`${styles.segment} ${
            selected === index ? styles.selected : ""
          }`}
          onClick={() => handleSelect(index)}
        >
          {segment}
        </button>
      ))}
    </div>
  );
};
