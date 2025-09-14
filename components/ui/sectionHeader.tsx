"use client";
import React from "react";
import { motion } from "motion/react";

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex items-center gap-6 mb-16"
    >
      <div className="">
        <h2 className="">{title}</h2>
        <p className="info-text">{subtitle}</p>
      </div>
      <div className="flex-1 h-px bg-foreground/20" />
    </motion.div>
  );
};

export default SectionHeader;
