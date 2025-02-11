import { motion } from "framer-motion";
import { useState } from "react";

const boxStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#9911ff",
  borderRadius: 40,
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};

export const Button1 = () => {
  const [isTapped, setIsTapped] = useState(false);
  return (
    <motion.button
      className="phase-text"
      whileHover={{ scale: 0.96 }}
      whileTap={{ scale: 1.04 }}
      onMouseDown={() => setIsTapped(true)}
      transition={{
        repeatType: "loop",
        scale: { duration: 0.3, time: [0, 0.9, 1] },
      }}
      style={boxStyle}
    >
      {isTapped && (
        <motion.div
          className="phase-text"
          initial={{
            opacity: 1,
            scale: 0.98,
          }}
          animate={{
            opacity: 0.3,
            scale: 1.3,
          }}
          transition={{
            repeatType: "loop",
            scale: { duration: 0.24, time: [0, 0.9, 1] },
            opacity: { duration: 0.01, time: [0, 0.9, 1] },
          }}
          onAnimationComplete={() => setIsTapped(false)}
          style={boxStyle}
        ></motion.div>
      )}
    </motion.button>
  );
};
