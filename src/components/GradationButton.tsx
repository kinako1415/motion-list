import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "./GradationButton.module.css";

type gradationButtonType = {
  children: ReactNode;
  color: "red" | "green" | "blue";
  onclick?: () => void;
};

export const GradationButton = ({
  children,
  color,
  onclick,
}: gradationButtonType) => {
  const transition = {
    duration: 0.2,
    ease: "easeInOut",
  };

  return (
    <motion.div
      className={`${styles.button} ${styles[color]}`}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={transition}
      onClick={onclick}
    >
      {children}
    </motion.div>
  );
};
