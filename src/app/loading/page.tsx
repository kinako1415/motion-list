"use client";
import { motion } from "framer-motion";
import { Loading } from "@/components/ui/loading/Loading";
import { PhaseText } from "@/components/ui/loading/PhaseText";
import styles from "@/styles/pages/loading.module.css";
import { LoadingNormal } from "@/components/ui/loading/LoadingNormal";

export default function loading() {
  return (
    <div className={styles.loadAll}>
      <motion.div className={styles.loadBox}>
        <PhaseText>コードを読み込もう！！！！</PhaseText>
        <div className={styles.load}>
          <Loading delay={0.6} isActive={false} />
          <Loading delay={0.5} isActive={true} />
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
        className={`${styles.bgText} ${styles.colorYellow}`}
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
        className={`${styles.bgText} ${styles.colorRed}`}
      >
        2
      </motion.div>
    </div>
  );
}
