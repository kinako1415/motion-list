"use client";
import { Input } from "@/components/Input";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  name: string;
}

export default function PageInput() {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="name" register={register} fieldName="name" />
    </form>
  );
}
