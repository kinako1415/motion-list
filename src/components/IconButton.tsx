import React from "react";
import styles from "./IconButton.module.css";
import Image from "next/image";

type IconButtonProps = {
  color?: "red" | "gray" | "white" | "none";
  url: string;
  onClick?: () => void;
};

import { easeOut, motion } from "framer-motion";

export const IconButton: React.FC<IconButtonProps> = ({
  url,
  color = "gray",
  onClick,
}) => {
  return (
    <div style={{ position: "relative", height: "fit-content" }}>
      <motion.button
        initial={{ scale: 1, position: "relative", zIndex: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={{
          duration: 0.1,
          ease: easeOut,
        }}
        className={`${styles.button} ${styles[color]}`}
        onClick={onClick}
      >
        <Image src={url} alt="icon" width={24} height={24} />
      </motion.button>
    </div>
  );
};
