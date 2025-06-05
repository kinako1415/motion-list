# iOS Components

iOS風のUIコンポーネント集です。美しいデザインとスムーズなアニメーションを提供します。

## IOSSlider

iOS標準のスライダーコンポーネントを再現した高機能なスライダーです。

### 特徴

- **制御・非制御値の両対応**: `value` propsで制御値、`defaultValue` propsで非制御値
- **完全なアクセシビリティ**: ARIA属性、キーボードナビゲーション対応
- **水平・垂直方向**: `orientation` プロパティで切り替え可能
- **カスタマイズ可能**: 色、サイズ、マーカー表示など豊富なオプション
- **値表示**: ツールチップやカスタムフォーマッター対応
- **タッチ・マウス対応**: レスポンシブ設計

### 基本的な使用方法

```tsx
import { IOSSlider } from "@/components/ios/IOSSlider";

// 基本的なスライダー
<IOSSlider
  value={sliderValue}
  onChange={setSliderValue}
  min={0}
  max={100}
/>

// 値を表示するスライダー
<IOSSlider
  value={volume}
  onChange={setVolume}
  min={0}
  max={100}
  showValue
  valueFormatter={(val) => `${val}%`}
/>
```

### 高度な使用例

```tsx
// カスタムカラーのスライダー
<IOSSlider
  value={temperature}
  onChange={setTemperature}
  min={16}
  max={30}
  step={0.5}
  color="#FF9500"
  thumbColor="#FFB84D"
  showValue
  valueFormatter={(val) => `${val}°C`}
  aria-label="温度調整"
/>

// マーカー付きスライダー
<IOSSlider
  value={brightness}
  onChange={setBrightness}
  min={0}
  max={100}
  showMarkers
  markers={[25, 50, 75]}
  color="#FFCC02"
  size="large"
/>

// 垂直スライダー
<IOSSlider
  value={verticalValue}
  onChange={setVerticalValue}
  orientation="vertical"
  color="#5856D6"
  showValue
/>
```

### Props

| プロパティ | 型 | デフォルト | 説明 |
|-----------|----|-----------|----- |
| `min` | `number` | `0` | 最小値 |
| `max` | `number` | `100` | 最大値 |
| `value` | `number` | - | 制御値（制御モード） |
| `defaultValue` | `number` | `0` | 初期値（非制御モード） |
| `step` | `number` | `1` | ステップ値 |
| `onChange` | `(value: number) => void` | - | 値変更時のコールバック |
| `onChangeEnd` | `(value: number) => void` | - | ドラッグ終了時のコールバック |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | サイズ |
| `color` | `string` | `"#007AFF"` | プログレスバーの色 |
| `trackColor` | `string` | `"#E5E5EA"` | トラックの色 |
| `thumbColor` | `string` | `"#FFFFFF"` | つまみの色 |
| `showValue` | `boolean` | `false` | 値のツールチップを表示 |
| `showMarkers` | `boolean` | `false` | マーカーを表示 |
| `markers` | `number[]` | `[]` | マーカーの位置 |
| `valueFormatter` | `(value: number) => string` | - | 値のフォーマッター |
| `unit` | `string` | `""` | 単位 |
| `disabled` | `boolean` | `false` | 無効状態 |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | 方向 |
| `className` | `string` | `""` | 追加のCSSクラス |
| `aria-label` | `string` | - | アクセシビリティラベル |
| `aria-labelledby` | `string` | - | ラベル要素のID |
| `aria-describedby` | `string` | - | 説明要素のID |

### キーボード操作

- **→** / **↑**: 値を増加（+step）
- **←** / **↓**: 値を減少（-step）
- **Page Up**: 大幅に増加（+10%）
- **Page Down**: 大幅に減少（-10%）
- **Home**: 最小値に設定
- **End**: 最大値に設定

### アクセシビリティ

- スクリーンリーダー対応
- キーボードナビゲーション
- 適切なARIA属性
- フォーカス表示
- 色覚障害への配慮

## その他のコンポーネント

- **IOSButton**: iOS風ボタン
- **IOSCard**: iOS風カード
- **IOSSwitch**: iOS風スイッチ
- **IOSModal**: iOS風モーダル
- **IOSAlert**: iOS風アラート
- **IOSSpinner**: iOS風ローディング
- **IOSProgressBar**: iOS風プログレスバー
- **IOSSegmentedControl**: iOS風セグメントコントロール
- **IOSBottomSheet**: iOS風ボトムシート
- **IOSTabBar**: iOS風タブバー

詳細は各コンポーネントのソースコードをご確認ください。
