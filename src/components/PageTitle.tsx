import { ReactNode } from "react";
import styles from "./PageTitle.module.css";
import Image from "next/image";
import { IconButton } from "./IconButton";

type PageTitleType = {
  pageName: string;
  children: ReactNode;
};

export const PageTitle = ({ pageName, children }: PageTitleType) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <IconButton
          color="none"
          url="https://api.iconify.design/heroicons:arrow-left-16-solid.svg?color=%23ffffff"
        />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.title}>{pageName}</span>
        <span className={styles.description}>{children}</span>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/backfire.svg" alt="fire" width={222} height={222} />
      </div>
    </div>
  );
};
