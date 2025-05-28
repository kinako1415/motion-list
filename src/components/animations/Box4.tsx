import { easeOut, motion } from "framer-motion";

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#9911ff",
  borderRadius: 5,
};

export const Box4 = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        scale: [0.2, 1],
      }}
      transition={{
        duration: 0.3,
        delay: delay,
        ease: easeOut,
        repeatType: "loop",
      }}
      style={box}
    />
  );
};
