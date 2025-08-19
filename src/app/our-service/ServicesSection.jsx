"use client";
import Image from "next/image";
import { useState } from "react";
import { FaCloud, FaShieldAlt, FaNetworkWired, FaBullhorn, FaCode, FaCogs, FaLaptopCode } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const services = [
  { id: 1, name: "Digital Transformation", icon: <FaLaptopCode /> },
  { id: 2, name: "Enterprise Network & Security Solutions", icon: <FaNetworkWired /> },
  { id: 3, name: "Cyber Security", icon: <FaShieldAlt /> },
  { id: 4, name: "IT Infrastructure Virtualization", icon: <FaCloud /> },
  { id: 5, name: "Digital Marketing", icon: <FaBullhorn /> },
  { id: 6, name: "Web Development", icon: <FaCode /> },
  { id: 7, name: "DevOps", icon: <FaCogs /> },
  { id: 8, name: "IT Managed & Consulting Services", icon: <MdSecurity /> },
];

export default function ServicesSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        
        {/* LEFT MENU */}
        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setActive(service.id)}
              className={`cursor-pointer  p-4 flex items-center gap-2  border-b-[1px] border-b-gray-200 transition-all duration-300 ${
                active === service.id
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-xl rounded-md"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <span className="text-xl">{service.icon}</span>
              <span className="font-semibold">{service.name}</span>
            </div>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center">
          <h2 className="w-[400px] text-xl md:text-3xl font-bold mb-4 leading-snug">
            We create IT solutions that are easy to use, efficient, secure, and reliable.
          </h2>
          
          <Image
          src="/service.png"
          alt="tech image"
          width={350}
          height={350}
          />
        </div>
      </div>
    </section>
  );
}
