"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaCloud,
  FaShieldAlt,
  FaNetworkWired,
  FaBullhorn,
  FaCode,
  FaCogs,
  FaLaptopCode,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { TbCloudNetwork } from "react-icons/tb";

const services = [
  {
    id: 1,
    name: "Digital Transformation",
    heading:
      "We create IT solutions that are easy to use, efficient, secure and reliable.",
    image: "/service.png",
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    name: "Enterprise Network & Security Solutions",
    heading:
      "Empower Your Enterprise with Unparalleled Network and Security Solutions",
    image: "/service.png",
    icon: <FaNetworkWired />,
  },
  {
    id: 3,
    name: "Cyber Security",
    heading:
      "Safeguard Your Digital Frontier: Protect Your Assets and Ensure Peace of Mind",
    image: "/service.png",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    name: "IT Infrastructure Virtualization",
    heading:
      "Virtualize with Confidence: Empower Agility and Efficiency to Boost Your Business",
    image: "/service.png",
    icon: <FaCloud />,
  },
  {
    id: 5,
    name: "Digital Marketing",
    heading:
      "Maximize the Potential of Your Business and Transform Your Future with Digital Marketing",
    image: "/service.png",
    icon: <FaBullhorn />,
  },
  {
    id: 6,
    name: "Web Development",
    heading:
      "Build Your Digital Presence and Take Your Business to New Level with a High-Performance Website",
    image: "/service.png",
    icon: <FaCode />,
  },
  {
    id: 7,
    name: "DevOps",
    heading:
      "Accelerate Innovation, Drive Efficiency: Embrace the Power of DevOps",
    image: "/service.png",
    icon: <FaCogs />,
  },
  {
    id: 8,
    name: "IT Managed & Consulting Services",
    heading:
      "Empower Your Business - with our holistic IT managed and consulting solutions, tailored to your needs",
    image: "/service.png",
    icon: <MdSecurity />,
  },
  {
    id: 9,
    name: "Cloud Services (Cross Plattform)",
    heading:
      "Unleash the Power of the Cloud: Seamless Solutions for Your Business",
    image: "/service.png",
    icon: <TbCloudNetwork />,
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(1);
  const activeService = services.find((s) => s.id === active);

  return (
    <section className="py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 place-items-start gap-12 px-6">
        {/* LEFT MENU */}
        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setActive(service.id)}
              className={`cursor-pointer p-4 flex items-center gap-2 h-[80px] border-b-[1px] border-b-gray-200 transition-all duration-300 ${
                active === service.id
                  ? "bg-gradient-to-r from-[#9A0F7C] to-[#380B6E]  text-xl text-white shadow-xl rounded-md"
                  : "hover:bg-gradient-to-r from-[#9A0F7C] to-[#380B6E] hover:text-white text-gray-900"
              }`}
            >
              <span className="text-xl">{service.icon}</span>
              <span className="text-xl">{service.name}</span>
            </div>
          ))}
        </div>

        {/* RIGHT SECTION (only active service shown) */}
        {activeService && (
          <div className="flex flex-col justify-center">
            <div className="w-[390px] mb-3 flex gap-2 items-end justify-between">
              <h2 className="md:text-[28px] font-bold leading-snug">
                {activeService.heading}
              </h2>
              <div className="btn btn-ghost btn-xs flex px-0 items-center gap-1 text-blue-700">
                <p className="text-xs text-nowrap">Learn more</p>
                <p className="text-xs text-nowrap">
                  <FaArrowRight />
                </p>
              </div>
            </div>

            <Image
              src={activeService.image}
              alt="tech image"
              width={350}
              height={350}
              className="w-[400px]"
            />
          </div>
        )}
      </div>
    </section>
  );
}
