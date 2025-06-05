"use client";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ReactNode, useState } from "react";
import styles from "./IOSBottomSheet.module.css";

type IOSBottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  snapPoints?: number[];
  initialSnap?: number;
};

export const IOSBottomSheet = ({
  isOpen,
  onClose,
  children,
  snapPoints = [0.3, 0.6, 0.9],
  initialSnap = 1,
}: IOSBottomSheetProps) => {
  const [currentSnap, setCurrentSnap] = useState(initialSnap);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const velocity = info.velocity.y;
    const currentHeight = snapPoints[currentSnap] * window.innerHeight;

    if (velocity > 500 || (velocity > 0 && info.offset.y > 50)) {
      // 下方向にスワイプ
      if (currentSnap > 0) {
        setCurrentSnap(currentSnap - 1);
      } else {
        onClose();
      }
    } else if (velocity < -500 || (velocity < 0 && info.offset.y < -50)) {
      // 上方向にスワイプ
      if (currentSnap < snapPoints.length - 1) {
        setCurrentSnap(currentSnap + 1);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={styles.bottomSheet}
            initial={{ y: "100%" }}
            animate={{
              y: `${100 - snapPoints[currentSnap] * 100}%`,
            }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
          >
            <div className={styles.handle} />
            <div className={styles.content}>{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
