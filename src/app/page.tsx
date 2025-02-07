"use client";
import { Box1 } from "@/components/Box1";
import { Box2 } from "@/components/Box2";
import { Box3 } from "@/components/Box3";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full h-full">
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
      </main>
    </div>
  );
}
