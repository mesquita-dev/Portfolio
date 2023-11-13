"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { Button } from "../ui/button";
import { PaperPlaneTilt } from "@phosphor-icons/react";

const Form = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email,
    };

    emailjs.send(
      "service_8shvm58",
      "template_q62otkj",
      templateParams,
      "aQZyE-KoC4w23XEUn"
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="relative">
        <input
          type="text"
          id="name"
          {...register("name", {
            required: {
              value: true,
              message: "Fill in your name",
            },
          })}
          placeholder="Type your name"
          autoComplete="off"
          className="peer h-8 w-full bg-transparent border-b border-[#202020] text-white placeholder-transparent focus:outline-none focus:border-white mb-8 max-w-lg"
        />
        <label
          htmlFor="name"
          className="absolute left-0 -top-4 text-[#BABABA] cursor-pointer text-sm peer-placeholder-shown:text-base transition-all peer-placeholder-shown:text-[#BABABA] peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-[#BABABA] peer-focus:text-sm"
        >
          Type your name
        </label>
        <p className="text-red-500 -mt-7 mb-7">{errors.name?.message}</p>
      </div>

      <div className="relative">
        <input
          id="email"
          type="email"
          {...register("email", {
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email.",
            },
          })}
          placeholder="Type your email"
          autoComplete="off"
          className="peer h-8 w-full bg-transparent border-b border-[#202020] text-white placeholder-transparent focus:outline-none focus:border-white mb-8 max-w-lg"
        />
        <label
          htmlFor="email"
          className="absolute left-0 -top-4 text-[#BABABA] cursor-pointer text-sm peer-placeholder-shown:text-base transition-all peer-placeholder-shown:text-[#BABABA] peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-[#BABABA] peer-focus:text-sm"
        >
          Type your email
        </label>
        <p className="text-red-500 -mt-7 mb-7">{errors.email?.message}</p>
      </div>

      <div className="relative">
        <textarea
          id="message"
          {...register("message")}
          placeholder="Say your message..."
          className="peer h-8 w-full bg-transparent border-b border-[#202020] text-white placeholder-transparent focus:outline-none focus:border-white max-w-lg resize-none"
        />
        <label
          htmlFor="message"
          className="absolute left-0 -top-4 text-[#BABABA] cursor-pointer text-sm peer-placeholder-shown:text-base transition-all peer-placeholder-shown:text-[#BABABA] peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-[#BABABA] peer-focus:text-sm break-words"
        >
          Say your message...
        </label>
      </div>

      <Button
        type="submit"
        variant="secondary"
        className="mt-8 flex items-center gap-4"
      >
        <PaperPlaneTilt />
        Send your message
      </Button>
    </form>
  );
};

export default Form;
