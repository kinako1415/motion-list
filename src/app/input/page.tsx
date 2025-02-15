"use client";
import { GradationButton } from "@/components/GradationButton";
import { IconButton } from "@/components/IconButton";
import { Input } from "@/components/Input";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  name: string;
}

export default function PageInput() {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const page: string = "top";

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <form
        style={{ display: "flex", flexDirection: "column", width: "30%" }}
        // onSubmit={handleSubmit(onSubmit)}
      >
        <Input label="name" register={register} fieldName="name" />
        <Input
          label="e-mail address"
          register={register}
          fieldName="mailAddress"
        />
        <Input label="password" register={register} fieldName="password" />
        <GradationButton color="red" onclick={handleSubmit(onSubmit)}>
          作成
        </GradationButton>
      </form>
      <div
        style={{
          display: "flex",
          gap: "10px",
          boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
          height: "fit-content",
          borderRadius: "50px",
          padding: "8px 16px",
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
    </div>
  );
}
