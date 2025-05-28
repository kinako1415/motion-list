import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "@/components/Loading.css";

const boxStyle = {
  width: 100,
  height: 100,
  backgroundColor: "#DBE2E7",
  borderRadius: 10,
};

const offVariants = {
  initial: {
    backgroundColor: "#FFC80B",
    opacity: 0,
    scale: 0.6,
  },
  first: {
    backgroundColor: "#FFC80B",
    opacity: 1,
    scale: [0.6, 1.2, 0.9, 1],
    transition: {
      delay: 0.2,
      duration: 0.4,
    },
  },
  second: {
    opacity: 1,
    backgroundColor: ["#FFC80B", "#DBE2E7"],
    scale: 1,
    transition: {
      duration: 0.2,
      time: [0, 0.9, 1],
    },
  },
};

const onVariants = {
  initial: {
    opacity: 0,
    scale: 0.6,
  },
  first: {
    opacity: 1,
    scale: [0.6, 1.2, 0.9, 1],
    transition: {
      delay: 0.2,
      duration: 0.4,
    },
  },
  second: {
    opacity: 1,
    backgroundColor: ["#DBE2E7", "#E54671"],
    scale: [1, 1.2],
    margin: ["0px 0px", "0px 10px"],
    transition: {
      duration: 0.2,
      margin: { duration: 0.2, time: [0, 0.9, 1] },
      scale: { duration: 0.2, time: [0, 0.9, 1] },
    },
  },
};

export const Loading = ({
  delay,
  isActive,
}: {
  delay: number;
  isActive: boolean;
}) => {
  const [phase, setPhase] = useState<"first" | "second">("first");

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("second");
    }, (delay + 0.4) * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div>
      <motion.div
        initial="initial"
        animate={phase === "first" ? "first" : "second"}
        variants={isActive ? onVariants : offVariants}
        style={boxStyle}
      />
      <div className="circle"></div>
    </div>
  );
};
