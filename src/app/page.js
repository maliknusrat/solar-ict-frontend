"use client";

import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import Discover from "@/components/Discover";
import Portfolio from "@/components/Protfolio";
import Serve from "@/components/Serve";
import Serviecs from "@/components/Serviecs";
import TechnologyList from "@/components/TechnologyList";
import TrustedCustomer from "@/components/TrustedCustomer";
import WeServe from "@/components/WeServe";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Array of sections with an "animate" flag
const sections = [
  { Component: Banner, animate: true },
  { Component: Discover, animate: false },
  { Component: Serviecs, animate: true },
  { Component: Serve, animate: true },
  { Component: WeServe, animate: true },
  { Component: TechnologyList, animate: false },
  { Component: Portfolio, animate: true },
  { Component: TrustedCustomer, animate: false },
];

export default function Home() {
  return (
    <div>
      {sections.map(({ Component, animate }, index) =>
        animate ? (
          <motion.div
            key={index}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.1, ease: "easeOut", delay: index * 0.1 }}
          >
            <Component />
          </motion.div>
        ) : (
          <div key={index}>
            <Component />
          </div>
        )
      )}
    </div>
  );
}
