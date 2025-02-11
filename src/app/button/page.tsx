"use client";
import style from "@/app/button/button.module.css";
import { Button1 } from "@/components/Button1";
import { PopCircleButton } from "@/components/PopCircleButton";
import Link from "next/link";

export default function loading() {
  return (
    <div className={style.boxAll}>
      <PopCircleButton>
        <Link href={"/"}>topに戻る</Link>
      </PopCircleButton>
      <Button1>dfla</Button1>
      <PopCircleButton>クリックしてみて！！</PopCircleButton>
    </div>
  );
}
