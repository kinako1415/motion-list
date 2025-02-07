import { motion } from "framer-motion";
import "@/components/Loading.css";

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#DBE2E7",
  borderRadius: 10,
};

export const LoadingNormal = ({ delay }: { delay: number }) => {
  return (
    <div>
      <motion.div
        animate={{ opacity: [0, 1], scale: [0.6, 1.2, 0.9, 1] }}
        transition={{ delay: delay, duration: 0.4, repeatType: "loop" }}
        style={box}
      />
      <div className="circle"></div>
    </div>
  );
};
