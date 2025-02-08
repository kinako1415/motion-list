import { easeOut, motion } from "framer-motion";
import { ReactNode, useState } from "react";

const boxStyle = {
  width: "fit-content",
  height: "fit-content",
  padding: "0 20px",
  backgroundColor: "#9911ff",
  borderRadius: 5,
  border: "none",
  cursor: "pointer",
};

const circleStyle = {
  width: 10,
  height: 10,
  backgroundColor: "#2ADA6E",
  borderRadius: "50%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export const PopCircle = ({ children }: { children: ReactNode }) => {
  const [isTapped, setIsTapped] = useState(false);

  const RandomCircle = (function () {
    const list = [];
    for (let i = 0; i < 10; i++) {
      const randomX = Math.floor(Math.random() * 301 - 150);
      const randomY = Math.floor(Math.random() * 301 - 150);
      list.push(
        <motion.div
          initial={{ scale: 1.8, opacity: 1, position: "absolute", zIndex: -1 }}
          animate={{
            x: randomX,
            y: randomY,
            opacity: 0,
            scale: 0.8,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          style={circleStyle}
          onAnimationComplete={() => setIsTapped(false)}
        />
      );
    }
    return <div>{list}</div>;
  })();

  return (
    <div>
      <motion.button
        initial={{ scale: 1, position: "relative" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onMouseDown={() => setIsTapped(true)}
        transition={{
          duration: 0.1,
          ease: easeOut,
        }}
        style={boxStyle}
      >
        {children}
        {isTapped && RandomCircle}
      </motion.button>
    </div>
  );
};
