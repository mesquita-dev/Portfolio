"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(event) {
    event.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("preencha os dados");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_8shvm58",
        "template_q62otkj",
        templateParams,
        "aQZyE-KoC4w23XEUn"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("Erro: ", error);
        }
      );
  }

  return (
    <div className="bg-black">
      <footer className="container border border-[#202020] border-t-0 py-16">
        <h2 className="text-white text-4xl font-bold mb-2">
          Vamos bater um papo?
        </h2>
        <p className="max-w-md text-[#BABABA] text-base font-medium mb-10">
          Se meus projetos te agradaram ou a minha forma de pensar, estou
          disponível para uma conversa e trocarmos ideia sobre alguns projetos
          ou sobre a vida.
        </p>

        <form onSubmit={sendEmail}>
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Digite seu nome"
              onChange={(event) => setName(event.target.value)}
              value={name}
              className="peer h-8 w-full bg-transparent border-b border-[#202020] text-white placeholder-transparent focus:outline-none focus:border-white mb-8 max-w-lg"
            />
            <label
              htmlFor="name"
              className="absolute left-0 -top-4 text-[#BABABA] text-sm peer-placeholder-shown:text-base transition-all peer-placeholder-shown:text-[#BABABA] peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-[#BABABA] peer-focus:text-sm"
            >
              Digite seu nome
            </label>
          </div>

          <div className="relative">
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Digite seu email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              className="peer h-8 w-full bg-transparent border-b border-[#202020] text-white placeholder-transparent focus:outline-none focus:border-white mb-8 max-w-lg"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-4 text-[#BABABA] text-sm peer-placeholder-shown:text-base transition-all peer-placeholder-shown:text-[#BABABA] peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-[#BABABA] peer-focus:text-sm"
            >
              Digite seu email
            </label>
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              placeholder="Digite sua mensagem..."
              onChange={(event) => setMessage(event.target.value)}
              className="peer h-8 w-full bg-transparent border-b border-[#202020] text-white placeholder-transparent focus:outline-none focus:border-white max-w-lg resize-none"
            />
            <label
              htmlFor="message"
              className="absolute left-0 -top-4 text-[#BABABA] text-sm peer-placeholder-shown:text-base transition-all peer-placeholder-shown:text-[#BABABA] peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-[#BABABA] peer-focus:text-sm break-words"
            >
              Digite sua mensagem
            </label>
          </div>

          <Button type="submit" variant="secondary">
            Enviar sua mensagem
          </Button>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
