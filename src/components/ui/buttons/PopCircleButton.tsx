import { easeOut, motion } from "framer-motion";
import { ReactNode, useState } from "react";

const boxStyle = {
  padding: "8px 20px",
  backgroundColor: "#9911ff",
  borderRadius: 10,
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};

const circleBaseStyle = {
  width: 10,
  height: 10,
  borderRadius: "50%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: -1,
};

const colors = ["#41BCFF", "#2ADA6E", "#FFC80B", "#FF9F40", "#E54671"]; // 5色定義

export const PopCircleButton = ({ children }: { children: ReactNode }) => {
  const [isTapped, setIsTapped] = useState(false);

  const RandomCircle = (function () {
    const list = [];
    for (let i = 0; i < 10; i++) {
      const randomX = Math.floor(Math.random() * 201 - 100);
      const randomY = Math.floor(Math.random() * 201 - 100);
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      list.push(
        <motion.div
          key={i}
          initial={{
            scale: 1.8,
            opacity: 1,
            position: "absolute",
            zIndex: -1,
          }}
          animate={{
            x: randomX,
            y: randomY,
            scale: [1, 1, 1, 0],
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          style={{ ...circleBaseStyle, backgroundColor: randomColor }}
          onAnimationComplete={() => setIsTapped(false)}
        />
      );
    }
    return <div>{list}</div>;
  })();

  return (
    <motion.div
      animate={{ opacity: [0, 1], y: [40, 0], scaleY: [0.8, 1] }}
      style={{ position: "relative", height: "fit-content" }}
    >
      <motion.button
        initial={{ scale: 1, position: "relative", zIndex: 1 }}
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
      </motion.button>
      {isTapped && RandomCircle}
    </motion.div>
  );
};
