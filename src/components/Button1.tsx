import { motion } from "framer-motion";
import { ReactNode } from "react";

export const Button1 = ({ children }: { children: ReactNode }) => {
  return (
    <motion.button
      className="phase-text"
      animate={{ scale: [0.6, 1.2, 1] }}
      transition={{
        repeatType: "loop",
        scale: { duration: 0.3, time: [0, 0.9, 1] },
      }}
    >
      {children}
    </motion.button>
  );
};
