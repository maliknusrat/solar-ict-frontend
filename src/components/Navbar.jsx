"use client";

import Link from "next/link";
import TopContact from "./TopContact";
import Image from "next/image";
import { CiSearch, CiGlobe } from "react-icons/ci";
import { BiChevronDown, BiMenu, BiX } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ServiceDropdown from "./ServiceDropdown";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // services dropdown
  const [mobileMenu, setMobileMenu] = useState(false); // mobile menu

  // Close modal with delay on mouse leave
  useEffect(() => {
    let timer;
    if (open) {
      const handleClickOutside = (event) => {
        if (!event.target.closest(".modal-container")) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    } else {
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  }, [open]);

  const handleMouseLeave = () => {
    const timer = setTimeout(() => setOpen(false), 100); // 200ms delay
    return () => clearTimeout(timer);
  };

  return (
    <div>
      <div>
        <TopContact />
      </div>

      <nav onMouseLeave={handleMouseLeave}
       className=" max-w-6xl mx-auto flex justify-between items-center px-6 py-4 bg-white/10 text-white">
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

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <ul className="flex space-x-8">
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
            <li className="relative modal-container">
              <div className="flex items-center gap-1 cursor-pointer">
                <Link
                  href="/our-service"
                  className={`transition ${
                    pathname === "/our-service" || open
                      ? "text-pink-500"
                      : "hover:text-pink-500"
                  }`}
                >
                  Our Services
                </Link>
                <BiChevronDown
                  onMouseEnter={() => setOpen(true)}
                  className={` text-xl transition ${
                    open ? "text-pink-500" : "text-gray-500"  
                  }`}
                  onClick={() => setOpen(!open)}
                />
              </div>
              {open && <ServiceDropdown />}
            </li>
            <li>
              <Link
                href="/contact-us"
                className={`transition ${
                  pathname === "/contact-us"
                    ? "text-pink-500"
                    : "hover:text-pink-500"
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Right icons */}
          <button className="hover:text-pink-500 text-2xl">
            <CiSearch />
          </button>
          <button className="hover:text-pink-500 text-2xl">
            <CiGlobe />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {mobileMenu ? (
            <BiX
              className="text-3xl cursor-pointer"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <BiMenu
              className="text-3xl cursor-pointer"
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenu && (
        <div className="md:hidden bg-[#03091D] text-slate-100 px-6 py-6 space-y-4 absolute top-0 left-0 w-full h-[500px] z-50 overflow-y-auto">
          {/* Close Btn + Logo */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/Hosting Logo 1 1.png"
                alt="Logo"
                width={40}
                height={32}
              />
              <span className="font-thin text-lg">SOLAR-ICT</span>
            </div>
            <BiX
              className="text-3xl cursor-pointer"
              onClick={() => setMobileMenu(false)}
            />
          </div>

          <ul className="space-y-4 text-lg font-medium">
            <li>
              <Link href="/" onClick={() => setMobileMenu(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" onClick={() => setMobileMenu(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/our-service" onClick={() => setMobileMenu(false)}>
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/contact-us" onClick={() => setMobileMenu(false)}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Right icons */}
          <div className="flex gap-4 mt-6">
            <button className="hover:text-pink-500 text-2xl">
              <CiSearch />
            </button>
            <button className="hover:text-pink-500 text-2xl">
              <CiGlobe />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
