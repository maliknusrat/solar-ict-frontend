"use client";

import React from "react";
import { motion } from "framer-motion";

export default function OurVision() {
  // Section fade-in variant
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Cards stagger variant
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // each card appears 0.2s after previous
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="border border-b-[1px] border-slate-200"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto p-20">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-2"
          variants={sectionVariant}
        >
          <p className="w-[600px] text-center text-3xl font-bold ">
            Our Vision for Success
          </p>
          <p className="w-[600px] text-center text-base ">
            We are dedicated to empowering your business with cutting-edge
            solutions that drive growth and efficiency.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-2 gap-5 py-10"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {[
            {
              title: "Our Roadmap",
              content:
                "Our roadmap includes infrastructure setup, deployment of a comprehensive cloud platform, security implementation, service expansion, scalability optimization, cost optimization, monitoring and analytics, disaster recovery planning, continuous learning, and customer satisfaction focus.",
            },
            {
              title: "Our Context",
              content:
                "Our focus is to empower organizations to streamline operations, innovate, and achieve their IT goals efficiently. In a rapidly evolving digital landscape, we understand the critical need for organizations to stay competitive and adapt to changing market dynamics.",
            },
            {
              title: "Our Berifs",
              content:
                "We are here to embrace innovation and stay at the forefront of technology advancements and to ensure robust security measures to protect customer data and privacy. We are passionate about harnessing the power of innovation to create transformative solutions that drive organizational growth and competitive advantage.",
            },
            {
              title: "Our Commitment",
              content:
                "Count on us for a stable and accessible cloud infrastructure reliability and scalability. We prioritize the protection of your data and infrastructure. Your Satisfaction, Our Priority.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-[linear-gradient(225deg,rgba(212,8,140,0.7)_14.64%,rgba(204,8,140,0.7)_17.47%,rgba(133,7,138,0.7)_47.17%,rgba(89,6,137,0.7)_68.39%,rgba(72,6,137,0.7)_79%)] text-white rounded-2xl p-6 pt-12 shadow-lg h-[220px]"
              variants={cardVariant}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-sm">{card.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
