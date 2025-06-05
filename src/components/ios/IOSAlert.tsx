"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import styles from "./IOSAlert.module.css";

type IOSAlertAction = {
  title: string;
  style?: "default" | "cancel" | "destructive";
  onPress?: () => void;
};

type IOSAlertProps = {
  visible: boolean;
  title?: string;
  message?: string;
  actions: IOSAlertAction[];
  onClose?: () => void;
};

export const IOSAlert = ({
  visible,
  title,
  message,
  actions,
  onClose,
}: IOSAlertProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={styles.alert}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {title && <div className={styles.title}>{title}</div>}
            {message && <div className={styles.message}>{message}</div>}

            <div className={styles.actions}>
              {actions.map((action, index) => (
                <motion.button
                  key={index}
                  className={`${styles.action} ${
                    styles[action.style || "default"]
                  }`}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    action.onPress?.();
                    onClose?.();
                  }}
                >
                  {action.title}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
