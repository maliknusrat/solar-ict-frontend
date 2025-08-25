"use client";

import React from "react";
import { motion } from "framer-motion";
import DiscoverStory from "./DiscoverStory";
import OurVision from "./OurVision";
import Reviews from "./Reviews";

export default function About() {
  // Fade + slide up animation for sections
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Header Section */}
      <motion.div
        className="py-20 flex flex-col items-center justify-center space-y-1"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-4xl font-bold">About Us</p>
        <p className="text-lg">
          We create IT solutions that are easy to use, efficient, secure, and
          reliable.
        </p>
      </motion.div>

      {/* DiscoverStory Section */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <DiscoverStory />
      </motion.div>

      {/* OurVision Section */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <OurVision />
      </motion.div>

      {/* Reviews Section */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Reviews />
      </motion.div>
    </div>
  );
}
