import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import styles from "./AlbumBottomSheet.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

type PageTitleType = {
  pageName: string;
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const AlbumBottomSheet = ({
  isOpen,
  children,
  pageName,
  setIsOpen,
}: PageTitleType) => {
  return (
    // <motion.div className={styles.container}>
    //   <div>
    //     {location}
    //     <span>で撮った写真</span>
    //   </div>
    // </motion.div>
    <>
      {/* オーバーレイ（背景クリックで閉じる） */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Bottom Sheet */}
      <motion.div
        className="fixed bottom-0 left-0 w-full bg-white p-5 rounded-t-lg shadow-lg"
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? "0%" : "100%" }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={(_, info) => {
          if (info.offset.y > 100) setIsOpen(false); // 100px以上スワイプしたら閉じる
        }}
      >
        {/* スワイプ用のハンドル */}
        <div className="w-12 h-1 bg-gray-400 rounded-full mx-auto mb-3" />

        <h2 className="text-lg font-bold">Swipeable Bottom Sheet</h2>
        <p>上にスワイプして閉じることができます。</p>
        <p>上にスワイプして閉じることができます。</p>
        <p>上にスワイプして閉じることができます。</p>
        <p>上にスワイプして閉じることができます。</p>
        <p>上にスワイプして閉じることができます。</p>
        <p>上にスワイプして閉じることができます。</p>
        <p>上にスワイプして閉じることができます。</p>
        <p>上にスワイプして閉じることができます。</p>
        <p>上にスワイプして閉じることができます。</p>
        <p>上にスワイプして閉じることができます。</p>

        <button
          className="absolute top-2 right-4 text-gray-500"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
      </motion.div>
    </>
  );
};
