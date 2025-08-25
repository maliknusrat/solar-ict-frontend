"use client";

import React from "react";
import ServicesSection from "./ServicesSection";
import { motion } from "framer-motion";

export default function OurServices() {
  const headerVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 } },
  };

  return (
    <div>
      {/* Header */}
      <motion.div
        className="py-20 flex flex-col items-center justify-center space-y-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={headerVariant}
      >
        <p className="text-4xl font-bold">Services We Offer</p>
        <p className="text-lg">
          We create IT solutions that are easy to use, efficient, secure, and reliable.
        </p>
      </motion.div>

      {/* Services Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariant}
      >
        <ServicesSection />
      </motion.div>
    </div>
  );
}
