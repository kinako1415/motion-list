import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "./GradationButton.module.css";

type GradationIconButtonProps = {
  color: "red" | "green" | "blue";
  onClick?: () => void;
  children: ReactNode;
};

export const GradationIconButton = ({
  color,
  onClick,
  children,
}: GradationIconButtonProps) => {
  const transition = {
    duration: 0.2,
    ease: "easeInOut",
  };

  return (
    <motion.button
      className={`${styles.button} ${styles[color]}`}
      style={{
        padding: "8px",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        border: "none",
        cursor: "pointer",
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={transition}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
