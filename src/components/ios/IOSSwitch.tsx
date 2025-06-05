"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./IOSSwitch.module.css";

type IOSSwitchProps = {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
};

export const IOSSwitch = ({
  defaultChecked = false,
  onChange,
  disabled = false,
  size = "medium",
}: IOSSwitchProps) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleToggle = () => {
    if (disabled) return;
    const newState = !isChecked;
    setIsChecked(newState);
    onChange?.(newState);
  };

  return (
    <motion.div
      className={`${styles.switch} ${styles[size]} ${
        isChecked ? styles.checked : ""
      } ${disabled ? styles.disabled : ""}`}
      onClick={handleToggle}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={styles.thumb}
        animate={{
          x: isChecked ? "100%" : "0%",
          scale: isChecked ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </motion.div>
  );
};
