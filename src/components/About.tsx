'use client'
import React from "react";
import Image from "next/image";
import { Boxes } from "./ui/background-boxes";
import { BackgroundGradient } from "./ui/background-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";

function About() {
    const disc = 'Work For Money😊 and CODE for Love! I M Priyesh Kumar Rai a Full Stack Developer. Trying to make "Hello World" the new "abc"; I have done my diploma in Computer Science Engineering from Feroze Gandhi Polytechnic Raebareli Uttar Pradesh.I have interned with Softpro India. Technology excites me and I am always in awe of the change it drives in the world. Certain skills that I have worked with include MERN, PHP, JAVA, C. And what I might lack in skills I make up for with my determination to learn. Outside of tech, I am a cricket lover.'
  return (
    <div className="w-full h-[90vh] relative overflow-hidden flex justify-center items-center flex-col lg:p-16 md:p-14 sm:p-10 p-5 bg-black/[0.96]">
      <div className="w-[320px] h-[320px] flex justify-center items-center p-3 mt-20">
        <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
        <Image
          src={"/images/imgOne.png"}
          alt="myInage"
          width={300}
          height={500}
          className="grayscale"
        />
        </BackgroundGradient>
      </div>
      <div className="mt-10 z-30">
        <h1 className="max-w-5xl">
        <TextGenerateEffect
          words={disc}
          className="lg:text-xl md:text-sm text-xs"
        />
        </h1>
      </div>
      <Boxes className="w-full max-h-screen" />
    </div>
  );
}

export default About;
