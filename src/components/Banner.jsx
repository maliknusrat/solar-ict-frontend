"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Banner() {
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative max-w-6xl mx-auto min-h-screen text-white overflow-hidden">
      {/* Floating circles background */}
<motion.div
  className="absolute top-10 left-20 w-2 h-2 rounded-full bg-pink-500 opacity-50"
  animate={{ y: [0, -40, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
/>

<motion.div
  className="absolute top-32 right-20 w-6 h-6 rounded-full bg-blue-500 opacity-50"
  animate={{ y: [0, -60, 0] }}
  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
/>

<motion.div
  className="absolute top-1/4 left-1/4 w-5 h-5 rounded-full bg-yellow-400 opacity-50"
  animate={{ y: [0, -45, 0] }}
  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
/>

<motion.div
  className="absolute bottom-28 left-1/3 w-8 h-8 rounded-full bg-purple-500 opacity-50"
  animate={{ y: [0, -50, 0] }}
  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
/>

<motion.div
  className="absolute bottom-16 right-1/3 w-4 h-4 rounded-full bg-green-400 opacity-50"
  animate={{ y: [0, -30, 0] }}
  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
/>

<motion.div
  className="absolute top-1/2 right-10 w-3 h-3 rounded-full bg-red-400 opacity-50"
  animate={{ y: [0, -35, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
/>

      {/* Hero Section */}
      <section className="container px-10 md:px-0 mx-auto py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            Transforming Technology <br />
            Solutions for a Digital Future
          </h1>
          <p className="mt-6 text-lg font-light text-gray-300 max-w-lg">
            Delivering Sustainable Positive Impact through Expertly Crafted
            Infrastructure & Software Solutions. Empowering Your Business with
            Design, Development & Operations.
          </p>
          <div className="flex items-center justify-between mt-8">
            <Link
              href="/contact-us"
              className="px-10 py-2 bg-pink-500 hover:bg-pink-600 rounded-full text-white font-extralight hover:scale-110 transition-transform"
            >
              Contact Us
            </Link>
            <div className="size-10 shadow-2xl rounded-full bg-[linear-gradient(225deg,#D4088C_14.64%,#CC088C_17.47%,#85078A_47.17%,#590689_68.39%,#480689_79%)]"></div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/Banner 1.png"
            alt="Tech Illustration"
            width={600}
            height={400}
            className="w-[800px] h-auto"
          />
        </motion.div>
      </section>
    </div>
  );
}
