"use client";
import { Box1 } from "@/components/Box1";
import { Box2 } from "@/components/Box2";
import { Box3 } from "@/components/Box3";
import { Box4 } from "@/components/Box4";
import { PopCircleButton } from "@/components/PopCircleButton";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full h-full">
        <PopCircleButton>
          <Link href={"/button"}>buttonに行く</Link>
        </PopCircleButton>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex gap-10">
          <Box1 />
          <Box2 />
          <Box3 />
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Box4 delay={0.1} />
              <Box4 delay={0.2} />
              <Box4 delay={0.3} />
              <Box4 delay={0.4} />
            </div>
            <div className="flex gap-2">
              <Box4 delay={0.2} />
              <Box4 delay={0.3} />
              <Box4 delay={0.4} />
              <Box4 delay={0.5} />
            </div>
            <div className="flex gap-2">
              <Box4 delay={0.3} />
              <Box4 delay={0.4} />
              <Box4 delay={0.5} />
              <Box4 delay={0.6} />
            </div>
          </div>
          <PopCircleButton>クリックしてみて！！</PopCircleButton>
        </div>
      </main>
    </div>
  );
}
