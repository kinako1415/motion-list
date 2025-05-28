import { IconButton } from "../ui/buttons/IconButton";
import styles from "./LocationRanking.module.css";

export const LocationRanking = () => {
  return (
    <div className={styles.container}>
      <div>現在の順位</div>
      <span>2位</span>
      <div className={styles.bottom}>
        <span>ランキング</span>
        <IconButton
          color="none"
          url="https://api.iconify.design/heroicons:arrow-right-16-solid.svg?color=%23ffffff"
        />
      </div>
    </div>
  );
};
