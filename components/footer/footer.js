"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import emailjs from '@emailjs/browser'

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
      email: email
    }

    emailjs.send("service_8shvm58", "template_q62otkj", templateParams, "aQZyE-KoC4w23XEUn")
    .then((response) => {
      console.log("Email enviado", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (error) => {
      console.log('Erro: ', error)
    })
  }

  return (
    <div className="bg-black">
      <footer className="container border border-[#202020] border-t-0">
        <h2>Vamos bater um papo?</h2>
        <p>
          Se meus projetos te agradaram ou a minha forma de pensar, estou
          disponível para uma conversa e trocarmos ideia sobre alguns projetos
          ou sobre a vida.
        </p>

        <form onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Digite seu nome"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />

          <input
            type="text"
            placeholder="Digite seu email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />

          <textarea
            placeholder="Digite sua mensagem..."
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>

          <Button type="submit" variant="secondary">
            Enviar sua mensagem
          </Button>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
