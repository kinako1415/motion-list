"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "./IOSButton.module.css";

type IOSButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "destructive";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
};

export const IOSButton = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
}: IOSButtonProps) => {
  return (
    <motion.button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled}
      onClick={onClick}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
    >
      {children}
    </motion.button>
  );
};
