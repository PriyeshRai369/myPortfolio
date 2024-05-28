"use client";
import React from "react";
import { FlipWords } from "./ui/flip-words";
import { Spotlight } from "./ui/Spotlight";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  const words = [
    "FrontEnd-Developer",
    "BackEnd-Developer",
    "MERN-Stack-Developer &",
    "PHP-Developer",
  ];
  const disc =
    "Self-Taught Developer, I Skilled in Frontend, Backend with React.JS, Node.JS, & PHP. I Keep Secrets in MySQL & MongoDB. Use GIT to manage & control the code history.";

  return (
    <div className="h-[90vh] w-full flex justify-center items-center flex-col lg:p-16 md:p-14 sm:p-10 p-5">
      <Spotlight
        className="left-0 lg:-top-16 md:-top-8 -top-32  "
        fill="white"
      />
      <h1 className="lg:mt-28 md:mt-3 mt-2 whitespace-nowrap  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 lg:text-8xl md:text-7xl sm:text-6xl text-4xl">
        Priyesh Kumar Rai
      </h1>
      <h1 className="text-2xl mt-1 mb-1 ">
        A
        <FlipWords words={words}  />
      </h1>
      <div className="mt-4 text-neutral-300 max-w-2xl mx-auto ">
        <TextGenerateEffect
          words={disc}
          className="lg:text-xl md:text-sm text-xs"
        />
      </div>
      <div className="w-full mt-10 h-20 flex flex-row justify-center items-center gap-7 p-5">
        <Image
          src="/images/github.png"
          width={40}
          height={40}
          alt="linkedin"
          className="w-10 h-10 cursor-pointer "
        />
        <Image
          src="/images/linkedin.png"
          width={40}
          height={40}
          alt="linkedin"
          className="w-10 h-10 cursor-pointer "
        />
        <Image
          src="/images/twitter.png"
          width={40}
          height={40}
          alt="twitter"
          className="w-12 h-12 cursor-pointer"
        />
      </div>
      <div className="mt-5">
        <a
          href="/myCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download={true}
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            duration={1}
            className="dark:bg-black text-black dark:text-white flex items-center space-x-2"
          >
            <span>Download CV</span>
          </HoverBorderGradient>
        </a>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default HeroSection;
