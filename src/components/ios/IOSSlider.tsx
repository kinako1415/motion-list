"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import styles from "./IOSSlider.module.css";

type IOSSliderProps = {
  // 基本的な値の管理
  min?: number;
  max?: number;
  value?: number;
  defaultValue?: number;
  step?: number;
  onChange?: (value: number) => void;
  onChangeEnd?: (value: number) => void;
  
  // スタイリング
  size?: "small" | "medium" | "large";
  color?: string;
  trackColor?: string;
  thumbColor?: string;
  
  // 表示オプション
  showValue?: boolean;
  showMarkers?: boolean;
  markers?: number[];
  valueFormatter?: (value: number) => string;
  unit?: string;
  
  // 状態
  disabled?: boolean;
  
  // レイアウト
  className?: string;
  orientation?: "horizontal" | "vertical";
  
  // アクセシビリティ
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
};

export const IOSSlider = ({
  min = 0,
  max = 100,
  value,
  defaultValue = 50,
  step = 1,
  onChange,
  onChangeEnd,
  size = "medium",
  color = "#007AFF",
  trackColor = "#E5E5EA",
  thumbColor = "#FFFFFF",
  showValue = false,
  showMarkers = false,
  markers = [],
  valueFormatter,
  unit = "",
  disabled = false,
  className = "",
  orientation = "horizontal",
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  "aria-describedby": ariaDescribedby,
}: IOSSliderProps) => {
  // 制御された値と非制御値の管理
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(
    isControlled ? value : defaultValue
  );
  const [isDragging, setIsDragging] = useState(false);
  const [showValueTooltip, setShowValueTooltip] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  const currentValue = isControlled ? value : internalValue;
  
  useEffect(() => {
    if (isControlled && value !== undefined) {
      setInternalValue(value);
    }
  }, [value, isControlled]);
  
  const percentage = ((currentValue - min) / (max - min)) * 100;
  
  const formatValue = useCallback((val: number): string => {
    if (valueFormatter) {
      return valueFormatter(val);
    }
    return `${val}${unit}`;
  }, [valueFormatter, unit]);
  
  const handleValueChange = useCallback((newValue: number) => {
    const clampedValue = Math.max(min, Math.min(max, newValue));
    const steppedValue = Math.round(clampedValue / step) * step;
    
    if (!isControlled) {
      setInternalValue(steppedValue);
    }
    
    onChange?.(steppedValue);
  }, [min, max, step, onChange, isControlled]);
  
  const handleDragStart = useCallback(() => {
    if (!disabled) {
      setIsDragging(true);
      setShowValueTooltip(true);
    }
  }, [disabled]);
  
  const handleDragEnd = useCallback(() => {
    if (!disabled) {
      setIsDragging(false);
      setShowValueTooltip(false);
      onChangeEnd?.(currentValue);
    }
  }, [disabled, onChangeEnd, currentValue]);
  
  const handlePan = useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: { point: { x: number; y: number } }) => {
    if (disabled || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    let newPercentage;
    
    if (orientation === "horizontal") {
      newPercentage = Math.max(
        0,
        Math.min(100, ((info.point.x - rect.left) / rect.width) * 100)
      );
    } else {
      newPercentage = Math.max(
        0,
        Math.min(100, (1 - (info.point.y - rect.top) / rect.height) * 100)
      );
    }
    
    const newValue = min + (newPercentage / 100) * (max - min);
    handleValueChange(newValue);
  }, [disabled, orientation, min, max, handleValueChange]);
  
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (disabled) return;
    
    let delta = 0;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowUp":
        delta = step;
        break;
      case "ArrowLeft":
      case "ArrowDown":
        delta = -step;
        break;
      case "PageUp":
        delta = (max - min) * 0.1;
        break;
      case "PageDown":
        delta = -(max - min) * 0.1;
        break;
      case "Home":
        handleValueChange(min);
        return;
      case "End":
        handleValueChange(max);
        return;
      default:
        return;
    }
    
    event.preventDefault();
    handleValueChange(currentValue + delta);
  }, [disabled, step, max, min, currentValue, handleValueChange]);

  return (
    <div 
      className={`${styles.container} ${styles[size]} ${styles[orientation]} ${
        disabled ? styles.disabled : ""
      } ${className}`}
      ref={containerRef}
    >
      {/* トラック */}
      <div 
        className={styles.track} 
        style={{ backgroundColor: trackColor }}
      >
        {/* プログレス */}
        <motion.div
          className={styles.progress}
          style={{
            backgroundColor: color,
            [orientation === "horizontal" ? "width" : "height"]: `${percentage}%`,
          }}
          animate={{ 
            [orientation === "horizontal" ? "width" : "height"]: `${percentage}%` 
          }}
          transition={{ duration: 0.1 }}
        />
        
        {/* マーカー */}
        {showMarkers && markers.length > 0 && (
          <div className={styles.markers}>
            {markers.map((marker, index) => {
              const markerPercentage = ((marker - min) / (max - min)) * 100;
              return (
                <div
                  key={index}
                  className={styles.marker}
                  style={{
                    [orientation === "horizontal" ? "left" : "bottom"]: `${markerPercentage}%`,
                  }}
                />
              );
            })}
          </div>
        )}
        
        {/* サム */}
        <motion.button
          className={styles.thumb}
          style={{
            backgroundColor: thumbColor,
            [orientation === "horizontal" ? "left" : "bottom"]: `${percentage}%`,
          }}
          animate={{
            [orientation === "horizontal" ? "left" : "bottom"]: `${percentage}%`,
            scale: isDragging ? 1.2 : 1,
          }}
          whileHover={{ scale: disabled ? 1 : 1.1 }}
          whileTap={{ scale: disabled ? 1 : 1.2 }}
          onPanStart={handleDragStart}
          onPanEnd={handleDragEnd}
          onPan={handlePan}
          onKeyDown={handleKeyDown}
          drag={disabled ? false : orientation === "horizontal" ? "x" : "y"}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0}
          disabled={disabled}
          aria-label={ariaLabel || `スライダー値: ${formatValue(currentValue)}`}
          aria-labelledby={ariaLabelledby}
          aria-describedby={ariaDescribedby}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={currentValue}
          aria-valuetext={formatValue(currentValue)}
          aria-orientation={orientation}
          tabIndex={disabled ? -1 : 0}
          role="slider"
          onFocus={() => setShowValueTooltip(true)}
          onBlur={() => setShowValueTooltip(false)}
        >
          {/* 値のツールチップ */}
          {(showValue || showValueTooltip) && (
            <motion.div
              className={styles.valueTooltip}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              {formatValue(currentValue)}
            </motion.div>
          )}
        </motion.button>
      </div>
    </div>
  );
};
