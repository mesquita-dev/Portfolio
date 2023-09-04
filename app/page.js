"use client";

import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";

import {
  BezierCurve,
  Code,
  IntersectThree,
  MagicWand,
} from "@phosphor-icons/react";

export default function Home() {
  return (
    <>
      <Hero
        textSpan="UI Engineer na Granto Seguros"
        textTitle="Olá! Eu sou o Lucas"
        textParagraph="Passo a maior parte do meu dia observando o design dia a dia e as
        interações das pessoas com o mundo. O meu objetivo é, através de
        interfaces, transformar a sua experiência em algo positivo."
        textButton="Explore meus projetos"
        href='#projects'
      />

      <div>
        <section className="container border-x border-[#F0F0F0] py-28 flex gap-40">
          <div>
            <h2 className="text-black text-4xl font-bold mb-4">Serviços</h2>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-black rounded-lg p-4 flex gap-4">
              <div className="p-3 bg-white/20 backdrop-blur-3xl block rounded-xl h-fit">
                <BezierCurve color="#fff" />
              </div>
              <div>
                <h3 className="text-white text-lg">UX Design</h3>
                <p className="text-[#BABABA] text-sm mt-1">
                  Criação de jornadas de usuário, design system e mapeamento de
                  usuário para trazer uma melhor usabilidade e experiência.
                </p>
              </div>
            </div>

            <div className="bg-black rounded-lg p-4 flex gap-4">
              <div className="p-3 bg-white/20 backdrop-blur-3xl block rounded-xl h-fit">
                <IntersectThree color="#fff" />
              </div>

              <div>
                <h3 className="text-white text-lg">UI Design</h3>
                <p className="text-[#BABABA] text-sm mt-1">
                  Com a contrução de wireframes de baixa e alta fidelidade e
                  criação de design através do Figma, facilita visualmente o
                  futuro de sua interface.
                </p>
              </div>
            </div>

            <div className="bg-black rounded-lg p-4 flex gap-4">
              <div className="p-3 bg-white/20 backdrop-blur-3xl block rounded-xl h-fit">
                <MagicWand color="#fff" />
              </div>

              <div>
                <h3 className="text-white text-lg">Web Design</h3>
                <p className="text-[#BABABA] text-sm mt-1">
                  Essa é a parte onde todo o processo de idealização e criação
                  será colocado em prática. Utilizando Wordpress e Elementor, a
                  mágica irá acontecer nesse momento.
                </p>
              </div>
            </div>

            <div className="bg-black rounded-lg p-4 flex gap-4">
              <div className="p-3 bg-white/20 backdrop-blur-3xl block rounded-xl h-fit">
                <Code color="#fff" />
              </div>

              <div>
                <h3 className="text-white text-lg">
                  Desenvolvimento Front-end
                </h3>
                <p className="text-[#BABABA] text-sm mt-1">
                  Se deseja uma aplicação mais robusta, um desenvolvimento em
                  front-end é ideal, utilizando HTML, CSS e JavaScript (React e
                  Typescript).
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="container border border-[#F0F0F0] border-b-0 py-16" id="projects">
          <h2 className="text-black text-4xl font-bold mb-6">
            Projetos selecionados
          </h2>
          <Projects />
        </section>
      </div>
    </>
  );
}
