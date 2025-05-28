import { motion } from "framer-motion";
import styles from "./ModalWindow.module.scss";
import { GradationIconButton } from "../buttons/GradationIconButton";
import { Icon } from "@iconify/react";
import { ReactNode } from "react";

type modalWindowType = {
  children: ReactNode;
  setIsOpen: () => void;
  isOpen: boolean;
};

export const ModalWindow = ({
  children,
  setIsOpen,
  isOpen,
}: modalWindowType) => {
  const handleBackgroundClick = () => {
    // 背景がクリックされたときにモーダルを閉じる
    setIsOpen(false);
  };
  return (
    <>
      {isOpen ? (
        <div className={styles.container} onClick={handleBackgroundClick}>
          <motion.div
            className={styles.mainContainer}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: "100%", scale: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: "100%", scale: "100%" }}
          >
            <GradationIconButton
              color="red"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Icon
                icon="material-symbols:close-rounded"
                style={{
                  fontSize: "18px",
                  color: "#ffffff",
                }}
              />
            </GradationIconButton>
          </motion.div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
