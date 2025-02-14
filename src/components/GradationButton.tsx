import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "./gradationButton.module.css";

export const GradationButton = ({ children }: { children: ReactNode }) => {
  return <motion.div className={styles.button}>{children}</motion.div>;
};
