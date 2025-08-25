"use client";

import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function DiscoverStory() {
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariantLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariantRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-[linear-gradient(90deg,#FFFFFF_0%,#DDE4FF_100%)] text-[#03091D] w-full p-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={textVariant}
        >
          <p className="w-[600px] text-center text-3xl font-bold ">
            Discover Our Story, Mission, and Values
          </p>
          <p className="w-[900px] text-center text-base ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip{" "}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-10 py-20">
          {/* Card 1 */}
          <motion.div
            className="flex items-center justify-between gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div variants={imageVariantLeft}>
              <Image
                src="/Group 1000003583.png"
                alt="img1"
                width={600}
                height={300}
              />
            </motion.div>
            <motion.div className="h-[200px] w-full space-y-2" variants={textVariant}>
              <p className="text-2xl font-bold">How we serve</p>
              <p className="text-base text-left">
                You can easily tap into flexible and scalable IT resources
                without the hassle of setting up a complex in-house and
                cloud-based infrastructure with us. Easier for you to
                concentrate on your main business activities while leveraging
                Solar-ICT's specialized knowledge and services to support your
                IT needs.
              </p>
              <p className="btn btn-ghost px-0 text-blue-700">
                Learn more <span><FaArrowRight /></span>
              </p>
            </motion.div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="flex items-center justify-between gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div className="h-[200px] w-full space-y-2" variants={textVariant}>
              <p className="text-2xl font-bold">Who do we serve</p>
              <p className="text-base text-left">
                We serve enterprises, businesses of all sizes, startups,
                developers, researchers, government agencies, and non-profit
                organizations by providing scalable, cost-effective, and
                flexible solutions for their IT infrastructure and operational
                needs.
              </p>
              <p className="btn btn-ghost px-0 text-blue-700">
                Learn more <span><FaArrowRight /></span>
              </p>
            </motion.div>
            <motion.div variants={imageVariantRight}>
              <Image
                src="/Group 1000003575.png"
                alt="img1"
                width={600}
                height={300}
              />
            </motion.div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="flex items-center justify-between gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div variants={imageVariantLeft}>
              <Image src="/image.png" alt="img1" width={600} height={300} />
            </motion.div>
            <motion.div className="h-[200px] w-full space-y-2" variants={textVariant}>
              <p className="text-2xl font-bold">What we offer</p>
              <p className="text-base text-left">
                We are here to provide you with all the facilities for Digital
                Services, Data & AI, Digital Workplace, Platform & Security,
                Digital Transformation, Managed Services, Information
                Management, Software Development, Risk & Compliance and more on.
              </p>
              <p className="btn btn-ghost px-0 text-blue-700">
                Learn more <span><FaArrowRight /></span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
