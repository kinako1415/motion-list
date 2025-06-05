"use client";
import { useState } from "react";
import { IOSButton } from "@/components/ios/IOSButton";
import { IOSCard } from "@/components/ios/IOSCard";
import { IOSSwitch } from "@/components/ios/IOSSwitch";
import { IOSSpinner } from "@/components/ios/IOSSpinner";
import { IOSProgressBar } from "@/components/ios/IOSProgressBar";
import { IOSModal } from "@/components/ios/IOSModal";
import { IOSBottomSheet } from "@/components/ios/IOSBottomSheet";
import { IOSAlert } from "@/components/ios/IOSAlert";
import { IOSSegmentedControl } from "@/components/ios/IOSSegmentedControl";
import { IOSSlider } from "@/components/ios/IOSSlider";
import { IOSTabBar } from "@/components/ios/IOSTabBar";
import styles from "./ios.module.css";

// アイコンコンポーネント
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const ProfileIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

export default function IOSPage() {
  const [showModal, setShowModal] = useState(false);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [progressValue, setProgressValue] = useState(65);
  const [segmentedIndex, setSegmentedIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const [volumeSlider, setVolumeSlider] = useState(75);
  const [temperatureSlider, setTemperatureSlider] = useState(22);
  const [brightnessSlider, setBrightnessSlider] = useState(80);
  const [verticalSlider, setVerticalSlider] = useState(30);
  const [markerSlider, setMarkerSlider] = useState(50);
  const [tabIndex, setTabIndex] = useState(0);

  // 進捗バーを動的に更新
  const updateProgress = () => {
    setProgressValue((prev) => (prev >= 100 ? 0 : prev + 10));
  };

  const tabItems = [
    { icon: <HomeIcon />, label: "ホーム", badge: 3 },
    { icon: <SearchIcon />, label: "検索" },
    { icon: <HeartIcon />, label: "お気に入り", badge: 12 },
    { icon: <ProfileIcon />, label: "プロフィール" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>iOS Components</h1>
        <p className={styles.subtitle}>iOS風のUIコンポーネント集</p>
      </div>

      <div className={styles.content}>
        {/* Buttons Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Buttons</h2>
          <div className={styles.buttonGroup}>
            <IOSButton size="small" variant="primary">
              小さいボタン
            </IOSButton>
            <IOSButton size="medium" variant="primary">
              標準ボタン
            </IOSButton>
            <IOSButton size="large" variant="primary">
              大きいボタン
            </IOSButton>
          </div>
          <div className={styles.buttonGroup}>
            <IOSButton variant="secondary">セカンダリ</IOSButton>
            <IOSButton variant="destructive">削除</IOSButton>
            <IOSButton disabled>無効</IOSButton>
          </div>
        </section>

        {/* Cards Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Cards</h2>
          <div className={styles.cardGroup}>
            <IOSCard elevation="medium">
              <h3>通知カード</h3>
              <p>新しいメッセージがあります</p>
            </IOSCard>
            <IOSCard
              elevation="high"
              onClick={() => console.log("設定カードクリック")}
            >
              <h3>設定カード</h3>
              <p>アプリの設定を変更できます</p>
            </IOSCard>
          </div>
        </section>

        {/* Controls Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Controls</h2>

          <div className={styles.controlItem}>
            <span>通知を許可</span>
            <IOSSwitch defaultChecked={switchValue} onChange={setSwitchValue} />
          </div>

          <div className={styles.controlItem}>
            <span>進捗: {progressValue}%</span>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <IOSProgressBar progress={progressValue} />
              <IOSButton
                size="small"
                variant="secondary"
                onClick={updateProgress}
              >
                更新
              </IOSButton>
            </div>
          </div>

          <div className={styles.controlItem}>
            <span>音量 (基本): {sliderValue}</span>
            <IOSSlider
              value={sliderValue}
              onChange={setSliderValue}
              min={0}
              max={100}
              showValue
              aria-label="基本的な音量調整"
            />
          </div>

          {/* カスタムカラーのスライダー */}
          <div className={styles.controlItem}>
            <span>音量 (カスタム): {volumeSlider}%</span>
            <IOSSlider
              value={volumeSlider}
              onChange={setVolumeSlider}
              min={0}
              max={100}
              color="#FF3B30"
              thumbColor="#FF6B6B"
              showValue
              valueFormatter={(val) => `${val}%`}
              aria-label="カスタム音量調整"
            />
          </div>

          {/* 温度スライダー（カスタムフォーマッター） */}
          <div className={styles.controlItem}>
            <span>温度: {temperatureSlider}°C</span>
            <IOSSlider
              value={temperatureSlider}
              onChange={setTemperatureSlider}
              min={16}
              max={30}
              step={0.5}
              color="#FF9500"
              showValue
              valueFormatter={(val) => `${val}°C`}
              aria-label="温度調整"
            />
          </div>

          {/* 明るさスライダー（マーカー付き） */}
          <div className={styles.controlItem}>
            <span>明るさ: {brightnessSlider}%</span>
            <IOSSlider
              value={brightnessSlider}
              onChange={setBrightnessSlider}
              min={0}
              max={100}
              color="#FFCC02"
              showMarkers
              markers={[25, 50, 75]}
              showValue
              valueFormatter={(val) => `${val}%`}
              aria-label="明るさ調整"
            />
          </div>

          {/* 大きなサイズのスライダー */}
          <div className={styles.controlItem}>
            <span>マスター音量: {markerSlider}</span>
            <IOSSlider
              value={markerSlider}
              onChange={setMarkerSlider}
              min={0}
              max={100}
              size="large"
              color="#34C759"
              showValue
              aria-label="マスター音量"
            />
          </div>

          {/* 垂直スライダー */}
          <div className={styles.controlItem}>
            <span>垂直スライダー: {verticalSlider}</span>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <IOSSlider
                value={verticalSlider}
                onChange={setVerticalSlider}
                min={0}
                max={100}
                orientation="vertical"
                color="#5856D6"
                showValue
                aria-label="垂直スライダー"
              />
            </div>
          </div>

          <IOSSegmentedControl
            segments={["すべて", "未読", "重要"]}
            selectedIndex={segmentedIndex}
            onChange={setSegmentedIndex}
          />
        </section>

        {/* Loading Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Loading</h2>
          <div className={styles.loadingGroup}>
            <IOSSpinner size="small" />
            <IOSSpinner size="medium" />
            <IOSSpinner size="large" />
          </div>
        </section>

        {/* Modal Actions Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Modals & Alerts</h2>
          <div className={styles.buttonGroup}>
            <IOSButton variant="secondary" onClick={() => setShowModal(true)}>
              モーダルを開く
            </IOSButton>
            <IOSButton
              variant="secondary"
              onClick={() => setShowBottomSheet(true)}
            >
              ボトムシートを開く
            </IOSButton>
            <IOSButton variant="secondary" onClick={() => setShowAlert(true)}>
              アラートを表示
            </IOSButton>
          </div>
        </section>

        {/* Tab Bar Preview */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tab Bar Preview</h2>
          <div className={styles.tabBarPreview}>
            <IOSTabBar
              items={tabItems}
              selectedIndex={tabIndex}
              onChange={setTabIndex}
            />
          </div>
        </section>
      </div>

      {/* Modals */}
      <IOSModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="サンプルモーダル"
      >
        <div className={styles.modalContent}>
          <p>これはiOS風のモーダルダイアログです。</p>
          <p>美しいブラー効果とスプリングアニメーションが特徴です。</p>
          <IOSButton variant="primary" onClick={() => setShowModal(false)}>
            閉じる
          </IOSButton>
        </div>
      </IOSModal>

      <IOSBottomSheet
        isOpen={showBottomSheet}
        onClose={() => setShowBottomSheet(false)}
      >
        <div className={styles.bottomSheetContent}>
          <p>画面下部から表示されるシートです。</p>
          <div className={styles.buttonGroup}>
            <IOSButton variant="primary">アクション 1</IOSButton>
            <IOSButton variant="secondary">アクション 2</IOSButton>
          </div>
        </div>
      </IOSBottomSheet>

      <IOSAlert
        visible={showAlert}
        onClose={() => setShowAlert(false)}
        title="確認"
        message="この操作を実行してもよろしいですか？"
        actions={[
          {
            title: "キャンセル",
            style: "cancel",
          },
          {
            title: "削除",
            style: "destructive",
            onPress: () => console.log("削除されました"),
          },
        ]}
      />
    </div>
  );
}
