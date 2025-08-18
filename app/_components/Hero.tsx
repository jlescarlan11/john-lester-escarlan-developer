import React from "react";
import Header from "./common/Header";
import Button from "./common/Button";
import Image from "next/image";

export const HeroIntroduction = () => {
  return (
    <>
      <Header label="Hello, I am" classname="!mb-6" />
      <div className="space-y-8">
        <h1 className="text-4xl lg:text-6xl font-extralight leading-none tracking-tight">
          John Lester Escarlan
        </h1>
        <p className="border-l-2 border-foreground/20 pl-4 text-1">
          A software engineer with strong foundation in mathematics and computer
          science, building web applications with focus on clean, maintainable
          code.
        </p>
      </div>
      <div className="mt-8 flex items-center gap-4">
        <Button label="Resume" />
        <Button label="Contact" />
        <div className="flex items-center gap-4 text-center lg:text-left">
          <div className="hidden lg:block w-8 h-px bg-foreground/40" />
          <span className="text-2">Available for collaboration</span>
        </div>
      </div>
    </>
  );
};

export const HeroImage = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-primary" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-primary" />
      <Image
        src="/hero-image.jpg"
        width={600}
        height={600}
        alt="John Lester Escarlan portrait"
        className="w-full h-auto scale-95 hover:scale-100 object-cover grayscale hover:grayscale-0 transition-all duration-500"
        priority
      />
    </div>
  );
};
