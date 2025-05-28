import { motion } from "framer-motion";

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#9911ff",
  borderRadius: 5,
};

export const Box3 = () => {
  return (
    <motion.div
      animate={{ scale: [0.8, 1.2, 0.8] }}
      transition={{
        duration: 1,
        ease: [0, 0, 0.05, 1],
        repeatType: "loop",
      }}
      style={box}
    />
  );
};
