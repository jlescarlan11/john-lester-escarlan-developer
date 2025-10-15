import Image from "next/image";
import React from "react";

const StyledImage = ({
  imageLink,
  label,
}: {
  imageLink: string;
  label: string;
}) => {
  return (
    <div className="relative">
      <Image
        src={imageLink}
        width={600}
        height={600}
        alt={`preview image of ${label}`}
        className="w-full max-h-48 sm:max-h-80 lg:max-h-auto object-contain aspect-square grayscale hover:scale-105 hover:grayscale-0 group-hover:grayscale-0 transition-all duration-500"
        priority
      />
    </div>
  );
};

export default StyledImage;
