"use client";

import { useEffect, useState } from "react";

import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Preloader from "@/components/Preloader";
import Footer from "@/components/footer/footer";

import {
  BezierCurve,
  Code,
  IntersectThree,
  MagicWand,
} from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisitedBefore = sessionStorage.getItem("hasVisitedBefore");

    if (hasVisitedBefore) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
        sessionStorage.setItem("hasVisitedBefore", "true");
      }, 2000);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Header />

      <Hero
        textSpan="Product Designer at Granto Seguros"
        textTitle="Hi! I'm Lucas"
        textParagraph="I spend most of my day observing design day by day and how
        people's interactions with the world. My goal is, through
        interfaces, transform your experience into something positive."
        textButton="Explore my projects"
        href="#projects"
      />

      <div>
        <section className="container border-x border-[#F0F0F0] py-10 sm:py-28 flex flex-col gap-4 sm:gap-40 sm:flex-row">
          <div>
            <h2 className="text-black text-4xl font-bold mb-4">Services</h2>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-black rounded-lg p-4 flex gap-4">
              <div className="p-3 bg-white/20 backdrop-blur-3xl block rounded-xl h-fit">
                <BezierCurve color="#fff" />
              </div>
              <div>
                <h3 className="text-white text-lg">UX Design</h3>
                <p className="text-[#BABABA] text-sm mt-1">
                  User flow, UX Research, Ux Writing, Usability Testing, A/B
                  Testing and everything to improve the user experience with the
                  application
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
                  Moodboards, construction of low and high quality wireframes,
                  prototyping in Figma and creation of the final user interface.
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
                  This is the part where the entire ideation and creation
                  process will be put into practice. Using Wordpress and
                  Elementor, the magic will happen right now
                </p>
              </div>
            </div>

            <div className="bg-black rounded-lg p-4 flex gap-4">
              <div className="p-3 bg-white/20 backdrop-blur-3xl block rounded-xl h-fit">
                <Code color="#fff" />
              </div>

              <div>
                <h3 className="text-white text-lg">Front-end Development</h3>
                <p className="text-[#BABABA] text-sm mt-1">
                  If you want a more robust application, front-end development
                  is ideal, using HTML, CSS and JavaScript (React, Vue and
                  Typescript).
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section
          className="container border border-[#F0F0F0] border-b-0 py-10 sm:py-16"
          id="projects"
        >
          <h2 className="text-black text-4xl font-bold mb-6">Feature work</h2>
          <Projects />
        </section>
      </div>

      <Footer />
    </>
  );
}
