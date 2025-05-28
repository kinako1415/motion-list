"use client";
import { RankingCard } from "@/components/cards/RankingCard";
import { IconButton } from "@/components/ui/buttons/IconButton";
import { PageTitle } from "@/components/layout/PageTitle";

export default function PageInput() {
  const page: string = "top";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PageTitle pageName="ランキング">
        ランキングはリアルタイムで更新され、人気の変動もひと目で分かる。あなたのお気に入りの場所も、もしかしたらランクインしているかも？
        今、行くべきアツい場所を見つけよう！
      </PageTitle>
      <div
        style={{
          display: "flex",
          gap: "10px",
          boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
          height: "fit-content",
          borderRadius: "50px",
          padding: "8px 16px",
          position: "fixed",
          zIndex: 10,
          bottom: "24px",
          left: "24px",
        }}
      >
        {page === "top" ? (
          <IconButton
            color="red"
            url="https://api.iconify.design/heroicons:fire.svg?color=%23ffffff"
          />
        ) : (
          <IconButton
            color="gray"
            url="https://api.iconify.design/heroicons:fire.svg?color=%231b2838"
          />
        )}
        {page === "map" ? (
          <IconButton
            color="red"
            url="https://api.iconify.design/material-symbols:photo-album-outline-rounded.svg?color=%23ffffff"
          />
        ) : (
          <IconButton url="https://api.iconify.design/material-symbols:photo-album-outline-rounded.svg?color=%231b2838" />
        )}
        {page === "ranking" ? (
          <IconButton
            color="red"
            url="https://api.iconify.design/icon-park-outline:ranking.svg?color=%23ffffff"
          />
        ) : (
          <IconButton url="https://api.iconify.design/icon-park-outline:ranking.svg?color=%231b2838" />
        )}
      </div>
      <div
        style={{
          padding: "220px 0",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {[...Array(20)].map((_, i) => (
          <RankingCard
            key={i}
            ranking={i + 1}
            location="愛知県 名古屋城"
            heartsCount={120}
            url="/image1.png"
          />
        ))}
      </div>
    </div>
  );
}
