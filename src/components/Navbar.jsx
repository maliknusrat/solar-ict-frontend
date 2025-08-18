"use client";

import Link from "next/link";
import TopContact from "./TopContact";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { CiGlobe } from "react-icons/ci";

export default function Navbar() {
  const pathname = usePathname(); // 👈 current route

  return (
    <div>
      <TopContact></TopContact>
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
                href="/about"
                className={`transition ${
                  pathname === "/about"
                    ? "text-pink-500"
                    : "hover:text-pink-500"
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`transition ${
                  pathname === "/services"
                    ? "text-pink-500"
                    : "hover:text-pink-500"
                }`}
              >
                Our Services
              </Link>
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
