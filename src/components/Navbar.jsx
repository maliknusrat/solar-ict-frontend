"use client";

import Link from "next/link";
import TopContact from "./TopContact";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { CiGlobe } from "react-icons/ci";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import ServiceDropdown from "./ServiceDropdown";

export default function Navbar() {
  const pathname = usePathname(); // 👈 current route
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="hidden md:block">
        <TopContact></TopContact>
      </div>
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4 bg-white/10 text-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/Hosting Logo 1 1.png"
            alt="Logo"
            width={40}
            height={32}
          />
          <span className="font-thin text-lg">SOLAR-ICT</span>
        </div>

        {/* Right icons */}
        <div className="flex space-x-4">
          {/* Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                href="/"
                className={`transition ${
                  pathname === "/" ? "text-pink-500" : "hover:text-pink-500"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className={`transition ${
                  pathname === "/about-us"
                    ? "text-pink-500"
                    : "hover:text-pink-500"
                }`}
              >
                About Us
              </Link>
            </li>
            <li
        className="relative"
        onMouseLeave={() => setOpen(false)} // close when cursor leaves
      >
        <div className="flex items-center gap-1 cursor-pointer">
          <Link
            href="/our-service"
            className={`transition ${
              pathname === "/about-us"
                    ? "text-pink-500"
                    : "hover:text-pink-500",
              open ? "text-pink-500" : "hover:text-pink-500"
            }`}
          >
            Our Services
          </Link>
          <BiChevronDown
            className="w-4 h-4 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        {/* Dropdown */}
        {open && (
         <ServiceDropdown></ServiceDropdown>
        )}
      </li>
    
            <li>
              <Link
                href="/contact"
                className={`transition ${
                  pathname === "/contact"
                    ? "text-pink-500"
                    : "hover:text-pink-500"
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <button className="hover:text-pink-500 text-3xl mx-5">
            <CiSearch />
          </button>
          <button className="hover:text-pink-500 text-3xl ">
          <CiGlobe/>
          </button>
        </div>
      </nav>
    </div>
  );
}
