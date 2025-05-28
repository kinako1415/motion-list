import { motion } from "framer-motion";
import "./Box1.css";

// フェードインアニメション
export const Box1 = () => {
  return (
    <motion.div
      className="time"
      animate={{ opacity: [0, 1], y: [40, 0], scaleY: [0.8, 1] }}
    >
      <span className="time-span">残り時間</span>2:23
    </motion.div>
  );
};
