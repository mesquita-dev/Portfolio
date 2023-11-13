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
        textSpan="A little bit about me"
        textTitle="The hobby that turned into a job"
        textParagraph="Here is some information about my life both personally and professionally."
        textButton="Find out more about me"
        href="https://linkedin.com/in/mesquita-dev"
        target="blank"
      />

      <div>
        <section className="container border-x border-[#F0F0F0] pt-14 sm:pt-28">
          <h2 className="text-black text-4xl font-bold mb-2">
            How it all began?
          </h2>

          <p className="max-w-lg text-base mb-2">
            It all started during the COVID-19 pandemic, where I decided to
            learn a few things about web development and from then on I started
            interest in this area.
          </p>

          <p className="max-w-lg text-base mb-2">
            However, I noticed that interfaces made only with HTML and CSS do
            not there was no confusion about design and I decided to research
            more about how I could improve my interfaces to make more friendly,
            beautiful and more usable for users, so I discovered the UI Design
            and decided to deepen and study it to be able to implement it in my
            projects.
          </p>

          <p className="max-w-lg text-base">
            Obviously, the first interface was extremely ugly but the From then
            on I saw that there was a path to be followed. And so it began my
            journey as a UI Designer, UX Designer, Developer Front End.
          </p>

          <h2 className="text-black text-4xl font-bold mb-2 mt-6">
            The beginning of the professional journey
          </h2>

          <p className="max-w-lg text-base mb-2">
            My professional journey began as an intern at{" "}
            <Link
              href="https://agsix.com.br/"
              className="underline"
              target="_blank"
            >
              Agência SIX
            </Link>
            , a digital agency where I was able to have my first experience in
            this new world for me. It started with a resume delivery without
            pretension and ended up becoming my first work experience.
          </p>

          <p className="max-w-lg text-base mb-2">
            At this agency I met one of the people I owe the most to in my life.
            professional life, my friend{" "}
            <Link href="https://eddu.dev/" className="underline">
              Eduardo Fernandes
            </Link>
            , taught me several things about front-end, but mainly UI/UX Design
            where I owe much of what I know today to him.
          </p>

          <p className="max-w-lg text-base mb-2">
            Later, I applied for a position at{" "}
            <Link
              href="https://grantoseguros.com"
              className="underline"
              target="_blank"
            >
              Granto Seguros
            </Link>{" "}
            to work as a salesperson, however, in the middle of the selection
            process in talk to the{" "}
            <Link
              href="https://www.linkedin.com/in/raquel-santana/"
              className="underline"
              target="_blank"
            >
              Raquel Santana
            </Link>{" "}
            Another person, who I am extremely grateful for, managed to move to
            Web Designer, a position that was not available at the company until
            now.
          </p>

          <p className="max-w-lg text-base mb-2">
            But an internal vacancy for a Product Designer ended up opening up
            and I decided to apply and luckily I managed to get it. Today I am
            acting as Product Designer in an internal project to create a
            dashboard innovative for the business model that Granto Seguros
            follows.
          </p>
        </section>

        <section className="container border-x border-[#F0F0F0] pt-14  pb-14 sm:pb-28">
          <h2 className="text-black text-4xl font-bold mb-4">Career to date</h2>

          <div>
            <div className="flex justify-between max-w-2xl border-b border-[#F0F0F0] mb-4 pb-4">
              <div>
                <h3 className="font-medium text-lg sm:text-xl">
                  Product Designer at Granto Seguros
                </h3>
                <p className="text-sm">
                  UI Design • UX Design • Design System • React • Typescript
                </p>
              </div>
              <h4 className="text-sm sm:text-base">Jun 2023 — Actually</h4>
            </div>

            <div className="flex justify-between max-w-2xl border-b border-[#F0F0F0] mb-4 pb-4">
              <div>
                <h3 className="font-medium text-lg sm:text-xl">
                  Web Designer at Granto Seguros
                </h3>
                <p className="text-sm">
                  UI Design • UX Design • Wordpress • Elementor • CRO
                </p>
              </div>
              <h4 className="text-sm sm:text-base">Dec 2022 — Jun 2023</h4>
            </div>

            <div className="flex justify-between max-w-2xl pb-4">
              <div>
                <h3 className="font-medium text-lg sm:text-xl">
                  Front-end / UI & UX Designer at Agência SIX
                </h3>
                <p className="text-sm">UI/UX Design • HTML • CSS • Figma</p>
              </div>
              <h4 className="text-sm sm:text-base">Jun 2022 — Sep 2022</h4>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default About;
