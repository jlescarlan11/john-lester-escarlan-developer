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
      <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-primary" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-primary" />
      <Image
        src={imageLink}
        width={600}
        height={600}
        alt={`preview image of ${label}`}
        className="w-full max-h-48 sm:max-h-80 lg:max-h-auto object-contain aspect-square grayscale scale-80 hover:scale-85 hover:grayscale-0 group-hover:grayscale-0 transition-all duration-500"
        priority
      />
    </div>
  );
};

export default StyledImage;
