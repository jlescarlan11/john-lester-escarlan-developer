"use client";
import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";

export const Grid = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start"
    >
      {children}
    </motion.div>
  );
};

export const Col3 = ({ children }: PropsWithChildren) => {
  return <div className="lg:col-span-3 relative order-2 lg:order-1">{children}</div>;
};

export const Col2 = ({ children }: PropsWithChildren) => {
  return <div className="lg:col-span-2 relative order-1 lg:order-2">{children}</div>;
};
