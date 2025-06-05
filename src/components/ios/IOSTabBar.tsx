"use client";
import { motion } from "framer-motion";
import { useState, ReactNode } from "react";
import styles from "./IOSTabBar.module.css";

type IOSTabBarItem = {
  icon: ReactNode;
  label: string;
  badge?: number;
};

type IOSTabBarProps = {
  items: IOSTabBarItem[];
  selectedIndex?: number;
  onChange?: (index: number) => void;
  appearance?: "light" | "dark";
};

export const IOSTabBar = ({
  items,
  selectedIndex = 0,
  onChange,
  appearance = "light",
}: IOSTabBarProps) => {
  const [selected, setSelected] = useState(selectedIndex);

  const handleSelect = (index: number) => {
    setSelected(index);
    onChange?.(index);
  };

  return (
    <div className={`${styles.tabBar} ${styles[appearance]}`}>
      {items.map((item, index) => (
        <motion.button
          key={index}
          className={`${styles.tabItem} ${
            selected === index ? styles.selected : ""
          }`}
          onClick={() => handleSelect(index)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className={styles.iconContainer}
            animate={{
              scale: selected === index ? 1.1 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {item.icon}
            {item.badge && item.badge > 0 && (
              <div className={styles.badge}>
                {item.badge > 99 ? "99+" : item.badge}
              </div>
            )}
          </motion.div>
          <span className={styles.label}>{item.label}</span>
        </motion.button>
      ))}
    </div>
  );
};
