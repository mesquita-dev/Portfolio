import React from "react";
import Image from "next/image";
import data from "./data";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { MagicWand } from "@phosphor-icons/react";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      {data.map((project) => (

        <div key={project.id}>
          <Image
            src={project.imgSrc}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "4px",
              marginBottom: "8px",
            }}
            alt={project.alt}
            sizes="100vw"
          />
          <span className="block text-[#1E1E1E] text-xs font-normal uppercase mb-2">
            {project.techs}
          </span>
          <h1 className="text-black text-xl sm:text-2xl font-medium mb-4">
            {project.title}
          </h1>
          <div className="flex sm:flex-row flex-col gap-4 sm:gap-12 mb-10 sm:mb-20">
            <Link href={project.linkPublic} target="_blank">
              <Button className="flex gap-4 items-center sm:w-auto w-full">
                <ArrowUpRight size={16} />
                Acessar projeto
              </Button>
            </Link>

            {project.disabled ? (
              <Button className="flex gap-4 items-center" disabled>
                <MagicWand size={16} />
                Acessar protótipo
              </Button>
            ) : (
              <Link href={project.linkFigma} target="_blank">
                <Button variant="outline" className="flex gap-4 items-center sm:w-auto w-full">
                  <MagicWand size={16} />
                  Acessar protótipo
                </Button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
