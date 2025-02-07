import { motion } from "framer-motion";

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#9911ff",
  borderRadius: 5,
};

export const Box2 = () => {
  return (
    <motion.div
      animate={{ scale: [0.8, 1.2, 0.8] }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeatType: "loop", // ループタイプ（"mirror"の場合は行ったり来たり）
      }}
      style={box}
    />
  );
};
