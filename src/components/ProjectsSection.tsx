"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import Image from "next/image";
import pData from "@/data/projectData.json"

function ProjectsSection() {
  return (
    <div className="w-full min-h-screen bg-black/[0.96] py-28 px-10 ">
          <BackgroundBeams className="min-h-screen" />
      <h1 className="text-lg md:text-7xl text-center font-sans mb-8 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        All Projects
      </h1>
      <div className="flex flex-wrap justify-center z-50 gap-10">
        {pData.projects.map(projectInfo=>(
            <CardContainer className="inter-var z-50">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {projectInfo.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {projectInfo.description.split("", 100)}...
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={projectInfo.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={projectInfo.link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    
    </div>
  );
}

export default ProjectsSection;
