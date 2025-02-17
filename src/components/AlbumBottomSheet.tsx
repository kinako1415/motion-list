import { Dispatch, ReactNode, SetStateAction } from "react";
import styles from "./AlbumBottomSheet.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

type PageTitleType = {
  pageName: string;
  location: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const AlbumBottomSheet = ({
  isOpen,
  location,
  setIsOpen,
}: PageTitleType) => {
  return (
    <>
      <motion.div
        className={styles.container}
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? "0%" : "100%" }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={(_, info) => {
          if (info.velocity.y > 500) setIsOpen(false);
        }}
      >
        <div className="mt-4 w-12 h-2 bg-gray-400 rounded-full mx-auto mb-3" />

        <div className={styles.text}>
          {location}
          <span>で撮った写真</span>
        </div>
        <div className={styles.imageBox}>
          {[...Array(20)].map((_, i) => (
            <Image
              className={styles.image}
              key={i}
              src="/image1.png"
              alt="fire"
              width={222}
              height={222}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};
