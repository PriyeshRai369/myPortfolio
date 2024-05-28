"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { BackgroundBeams } from "./ui/background-beams";

function ContactMe() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="w-full h-[90vh] bg-black/[0.96] py-28 px-10 flex justify-center items-center  ">
      <BackgroundBeams />
      <form className="my-8 max-w-xl z-10" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <Label htmlFor="firstname">First name</Label>
          <Input id="firstname" placeholder="Tyler" type="text" />
          <Label htmlFor="lastname">Last name</Label>
          <Input id="lastname" placeholder="Durden" type="text" />
        </div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        <Label htmlFor="password">Subject</Label>
        <Input id="text" placeholder="Web Application" type="text" />

        <Label htmlFor="summary">Summary</Label>
        <Input
          id="summary"
          placeholder="summary of your Project Idea"
          type="text"
        />

        <button
          className=" mt-5 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send &rarr;
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
