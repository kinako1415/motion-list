"use client";
import style from "@/app/button/button.module.css";
import { Button1 } from "@/components/Button1";
import { GradationButton } from "@/components/GradationButton";
import { PopCircleButton } from "@/components/PopCircleButton";
import { WhiteButton } from "@/components/WhiteButton";
import Link from "next/link";

export default function loading() {
  return (
    <div className={style.boxAll}>
      <PopCircleButton>
        <Link href={"/"}>topに戻る</Link>
      </PopCircleButton>
      <Button1></Button1>
      <PopCircleButton>クリックしてみて！！</PopCircleButton>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <WhiteButton color="red">サインイン</WhiteButton>
        <GradationButton color="red">作成</GradationButton>
      </div>
    </div>
  );
}
