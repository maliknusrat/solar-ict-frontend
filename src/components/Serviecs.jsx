"use client";
import React from "react";
import { TbCloudNetwork, TbSettingsCode } from "react-icons/tb";
import { SiPagespeedinsights, SiAdguard } from "react-icons/si";
import { RiUserStarLine, RiUserVoiceLine } from "react-icons/ri";
import { GrAnnounce } from "react-icons/gr";
import { BiDialpadAlt } from "react-icons/bi";
import { MdWebAsset } from "react-icons/md";
import { motion } from "framer-motion";

import servicesData from "../../public/service.json";
import Link from "next/link";

// Icon mapping
const icons = {
  TbCloudNetwork: TbCloudNetwork,
  SiPagespeedinsights: SiPagespeedinsights,
  RiUserStarLine: RiUserStarLine,
  SiAdguard: SiAdguard,
  GrAnnounce: GrAnnounce,
  BiDialpadAlt: BiDialpadAlt,
  RiUserVoiceLine: RiUserVoiceLine,
  TbSettingsCode: TbSettingsCode,
  MdWebAsset: MdWebAsset,
};

export default function Services() {
  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-white">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold">Services We Offer</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          We provide a wide range of services designed to modernize IT,
          strengthen security, and drive digital transformation.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {servicesData.map((service) => {
          const IconComponent = icons[service.icon];
          return (
            <Link key={service.id} href={`/servicedetails/${service.id}`}>
              <motion.div
                className="relative cursor-pointer"
                variants={cardVariant}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Icon */}
                <div className="absolute -top-8 left-6 w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                  {IconComponent && (
                    <IconComponent className="text-2xl text-white" />
                  )}
                </div>

                {/* Card */}
                <div className="bg-gradient-to-br from-pink-600 to-purple-800 text-white rounded-2xl p-6 pt-12 shadow-lg h-[220px]">
                  <h3 className="text-xl font-bold mb-2">{service.service_name}</h3>
                  <p className="text-sm">{service.service_title}</p>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
