import React from "react";

import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";

import Link from "next/link";
import Footer from "@/components/footer/footer";

const About = () => {
  return (
    <>
      <Header />

      <Hero
        textSpan="Um pouco sobre mim"
        textTitle="O hobbie que virou um trabalho"
        textParagraph="Aqui estará algumas informações sobre minha vida tanto pessoalmente quanto profissionalmente."
        textButton="Saber mais sobre mim"
        href='https://linkedin.com/in/mesquita-dev'
        target='blank'
      />

      <div>
        <section className="container border-x border-[#F0F0F0] pt-14 sm:pt-28">
          <h2 className="text-black text-4xl font-bold mb-2">
            Como tudo começou?
          </h2>

          <p className="max-w-lg text-base mb-2">
            Tudo começou durante a pandemia do COVID-19, onde resolvi aprender
            algumas coisas sobre desenvolvimento web e a partir daí comecei a me
            interessar por essa área.
          </p>

          <p className="max-w-lg text-base mb-2">
            Porém, eu notava que as interfaces feitas apenas HTML e CSS não
            tinham embaçamento nenhum sobre design e resolvi pesquisar mais
            sobre como poderia melhorar minhas interfaces para deixar mais
            amigáveis, bonitas e mais usáveis para os usuários, então descobri o
            UI Design e resolvi aprofundar e estudar para poder implmentar nos
            meus projetos.
          </p>

          <p className="max-w-lg text-base">
            Obviamente, a primeira interface ficou extremamente feia mas a
            partir daí vi que existia um caminho a ser seguido. E assim começou
            a minha jornada como um UI Designer, UX Designer, Desenvolvedor
            Front-End.
          </p>

          <h2 className="text-black text-4xl font-bold mb-2 mt-6">
            O ínicio da jornada profissional
          </h2>

          <p className="max-w-lg text-base mb-2">
            A minha jornada profissional começou como um estagiário na{" "}
            <Link href="https://agsix.com.br/" className="underline" target="_blank">Agência SIX</Link>, uma agência digital onde pude ter
            minha primeira experiência nesse mundo novo para mim. Começou com
            uma entrega de currículo sem pretensão e acabou virando minha
            primeira experiência de trabalho.
          </p>

          <p className="max-w-lg text-base mb-2">
            Nessa agência conheci uma das pessoas das quais mais devo na minha
            vida profissional, o meu amigo{" "}
            <Link href="https://eddu.dev/" className="underline">Eduardo Fernandes</Link>, me ensinou diversas coisas
            sobre front-end mas principalmente UI/UX Design onde muito do que
            sei hoje devo a ele.
          </p>

          <p className="max-w-lg text-base mb-2">
            Posteriormente, apliquei para uma vaga na{" "}
            <Link href="https://grantoseguros.com" className="underline" target="_blank">Granto Seguros</Link> para trabalhar como vendedor,
            porém, no meio do processo seletivo em conversa com a{" "}
            <Link href="https://www.linkedin.com/in/raquel-santana/" className="underline" target="_blank">Raquel Santana</Link> uma outra pessoa que sou
            extremamente grato, consegui mudar para Web Designer, uma posição
            que não havia até o momento na empresa.
          </p>

          <p className="max-w-lg text-base mb-2">
            Mas acabou surgindo uma vaga interna para UI/UX Designer e resolvi
            aplicar e felizmente consegui conseguir. Hoje estou atuando como
            UI/UX Designer em um projeto interno para a criação de um dashboard
            inovador para o modelo de negócio que a Granto Seguros segue.
          </p>
        </section>

        <section className="container border-x border-[#F0F0F0] pt-14  pb-14 sm:pb-28">
          <h2 className="text-black text-4xl font-bold mb-4">
            Carreira até o momento
          </h2>

          <div>
            <div className="flex justify-between max-w-2xl border-b border-[#F0F0F0] mb-4 pb-4">
              <div>
                <h3 className="font-medium text-lg sm:text-xl">UI Engineer na Granto Seguros</h3>
                <p className="text-sm">
                  UI Design • UX Design • Design System • React • Typescript
                </p>
              </div>
              <h4 className="text-sm sm:text-base">Jun 2023 — Atualmente</h4>
            </div>

            <div className="flex justify-between max-w-2xl border-b border-[#F0F0F0] mb-4 pb-4">
              <div>
                <h3 className="font-medium text-lg sm:text-xl">Web Designer na Granto Seguros</h3>
                <p className="text-sm">
                  UI Design • UX Design • Wordpress • Elementor • CRO
                </p>
              </div>
              <h4 className="text-sm sm:text-base">Dez 2022 — Jun 2023</h4>
            </div>

            <div className="flex justify-between max-w-2xl pb-4">
              <div>
                <h3 className="font-medium text-lg sm:text-xl">Front-end / UI & UX Designer na Agência SIX</h3>
                <p className="text-sm">
                  UI/UX Design • HTML • CSS • Figma
                </p>
              </div>
              <h4 className="text-sm sm:text-base">Jun 2022 — Set 2022</h4>
            </div>
          </div>
        </section>
      </div>
    
      <Footer />
    </>
  );
};

export default About;
