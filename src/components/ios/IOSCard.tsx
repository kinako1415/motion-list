"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "./IOSCard.module.css";

type IOSCardProps = {
  children: ReactNode;
  elevation?: "low" | "medium" | "high";
  onClick?: () => void;
  className?: string;
};

export const IOSCard = ({
  children,
  elevation = "medium",
  onClick,
  className = "",
}: IOSCardProps) => {
  return (
    <motion.div
      className={`${styles.card} ${styles[elevation]} ${className}`}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.02, y: -2 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {children}
    </motion.div>
  );
};
