"use client";
import { motion } from "framer-motion";
import { Loading } from "@/components/Loading";
import { PhaseText } from "@/components/PhaseText";
import "@/app/loading/loading.css";
import { LoadingNormal } from "@/components/LoadingNormal";

export default function loading() {
  return (
    <div className="load-all">
      <motion.div className="load-box">
        <PhaseText>コードを読み込もう！！！！</PhaseText>
        <div className="load">
          <Loading delay={0.6} isActive={true} />
          <Loading delay={0.5} isActive={false} />
          <LoadingNormal delay={0.2} />
          <LoadingNormal delay={0.2} />
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 30, -1000] }}
        initial={{ y: 0 }}
        transition={{
          delay: 1.28,
          duration: 0.6,
          ase: [0.95, 0, 1, 1],
          times: [0, 0.7, 0.8, 1],
        }}
        className="bg-text color-yellow"
      >
        1
      </motion.div>
      <motion.div
        animate={{ y: ["800px", "0"] }}
        transition={{
          delay: 1.8,
          duration: 0.2,
          ease: [0.95, 0, 1, 1],
          times: [0, 0.7, 0.8, 1],
          repeatType: "loop",
        }}
        className="bg-text color-red"
      >
        2
      </motion.div>
    </div>
  );
}
