"use client";
import style from "@/styles/pages/button.module.css";
import { Button1 } from "@/components/ui/buttons/Button1";
import { GradationButton } from "@/components/ui/buttons/GradationButton";
import { IconButton } from "@/components/ui/buttons/IconButton";
import { PopCircleButton } from "@/components/ui/buttons/PopCircleButton";
import { WhiteButton } from "@/components/ui/buttons/WhiteButton";
import Link from "next/link";

export default function loading() {
  return (
    <div className={style.boxAll}>
      <PopCircleButton>
        <Link href={"/"}>topに戻る</Link>
      </PopCircleButton>
      <Button1></Button1>
      <PopCircleButton>クリックしてみて！！</PopCircleButton>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          backgroundColor: "#2C3E50",
          padding: "20px",
          borderRadius: "16px",
        }}
      >
        <WhiteButton color="red">サインイン</WhiteButton>
        <GradationButton color="red">作成</GradationButton>
        <div
          style={{
            display: "flex",
            gap: 20,
          }}
        >
          <IconButton url="https://api.iconify.design/material-symbols:photo-album-outline-rounded.svg?color=%231b2838" />
          <IconButton
            color="red"
            url="https://api.iconify.design/heroicons:fire.svg?color=%23ffffff"
          />
        </div>
      </div>
    </div>
  );
}
