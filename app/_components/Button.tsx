import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: ReactNode;
  className?: string;
}

const Button = ({ label, className = "", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`group relative border border-primary/20 px-8 py-2 hover:border-primary/80 transition-colors duration-300 ${className}`}
    >
      <div className="group flex flex-col items-center gap-1">
        <span className="label">{label}</span>
      </div>
      <div className="absolute top-2 right-2 w-1 h-1 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </button>
  );
};

export default Button;
