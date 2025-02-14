import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "./WhiteButton.module.css";

type whiteButtonType = {
  children: ReactNode;
  color: "red" | "green" | "blue";
  onclick?: () => void;
};

export const WhiteButton = ({ children, color, onclick }: whiteButtonType) => {
  const transition = {
    duration: 0.2,
    ease: "easeInOut",
  };

  return (
    <motion.div
      className={`${styles.button} ${styles[color]}`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ y: 4 }}
      transition={transition}
      onClick={onclick}
    >
      {children}
    </motion.div>
  );
};
