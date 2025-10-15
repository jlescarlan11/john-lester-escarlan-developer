"use client";
import { motion } from "motion/react";

const TrustSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 lg:py-24 bg-gray-50/50"
      aria-label="Trust and credibility section"
    >
      <div className="wrapper">
        <div className="text-center space-y-12">
          {/* Trust Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <div className="text-sm uppercase tracking-wider text-foreground/60 font-semibold">
              Trusted by
            </div>
            <div className="text-xl lg:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Government agencies, educational institutions, and leading Philippine organizations
            </div>
          </motion.div>

          {/* Client Names */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 lg:gap-12"
          >
            <div className="text-lg lg:text-xl font-bold text-foreground">Wind's Gate Philippines</div>
            <div className="w-px h-6 bg-foreground/40"></div>
            <div className="text-lg lg:text-xl font-bold text-foreground">Alliance Software</div>
            <div className="w-px h-6 bg-foreground/40"></div>
            <div className="text-lg lg:text-xl font-bold text-foreground">Bayoa Analytics</div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TrustSection;
