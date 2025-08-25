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

const sections = [
  Banner,
  Discover,
  Serviecs,
  Serve,
  WeServe,
  TechnologyList,
  Portfolio,
  TrustedCustomer,
];

export default function Home() {
  return (
    <div>
      {sections.map((Section, index) => (
        <motion.div
          key={index}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }} // 🔹 triggers every scroll
          transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
        >
          <Section />
        </motion.div>
      ))}
    </div>
  );
}
