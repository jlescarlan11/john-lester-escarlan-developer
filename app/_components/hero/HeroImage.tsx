import Image from "next/image";
import React from "react";

const HeroImage = () => {
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

export default HeroImage;
