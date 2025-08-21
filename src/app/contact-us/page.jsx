"use client";

import React from "react";
import { FiMapPin } from "react-icons/fi";
import { IoLogoInstagram, IoMailOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";

export default function ContactUs() {
  return (
    <div>
      <div className="py-20 flex flex-col items-center justify-center space-y-1">
        <p className="text-4xl font-bold ">Contact Us</p>
        <p className="w-full px-4 md:w-[600px] text-lg text-center py-5">
          Discover new opportunities for your business. We are ready to assist
          you every step of the way.
        </p>
      </div>
      <div>
        <div className="bg-gradient-to-r from-[#f7f9ff] to-[#eef3ff] py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12">
            {/* Left Side */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Let’s Talk</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
              </p>
              <div className="border-t border-gray-300 pt-6 space-y-5">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 text-white">
                    <IoMailOutline className="text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Our email</p>
                    <p className="text-gray-600 text-sm">info@solar-ict.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 text-white">
                    <IoMdCall className="text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Call us</p>
                    <p className="text-gray-600 text-sm">+41 21 561 53 15</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 text-white">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Find us</p>
                    <a
                      href="https://maps.app.goo.gl/tgx8mr9MfYhRgPKW9"
                      className="text-blue-600 text-sm underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Google Maps
                    </a>
                    <p className="text-gray-600 text-sm">
                      Rue du Jura 3, 1023 Crissier, Switzerland
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 text-3xl pt-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <SlSocialFacebook />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <IoLogoInstagram />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <CiLinkedin />
                </a>
              </div>
            </div>

            {/* Right Side (Form) */}
            <div className="bg-gray-50 rounded-2xl shadow-md p-8 w-full max-w-3xl mx-auto">
              <form className="space-y-6">
                {/* First & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-gray-800 mb-2">First name</label>
                    <input
                      type="text"
                      className="border-b border-gray-300 focus:border-gray-800 focus:outline-none bg-transparent py-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-gray-800 mb-2">Last name</label>
                    <input
                      type="text"
                      className="border-b border-gray-300 focus:border-gray-800 focus:outline-none bg-transparent py-2"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-gray-800 mb-2">Email</label>
                    <input
                      type="email"
                      className="border-b border-gray-300 focus:border-gray-800 focus:outline-none bg-transparent py-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-gray-800 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="border-b border-gray-300 focus:border-gray-800 focus:outline-none bg-transparent py-2"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label className="text-gray-800 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="border-b border-gray-300 focus:border-gray-800 focus:outline-none bg-transparent py-2"
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-[#1f2b50] text-white hover:bg-[#15213d] transition"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-10">
          <iframe
            className="w-full h-[400px] rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.421836835858!2d6.576404775484473!3d46.539341571111876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c31a02111bb6f%3A0xf3ef7d7d2bde117d!2sRue%20du%20Jura%203%2C%201023%20Crissier%2C%20Switzerland!5e0!3m2!1sen!2sbd!4v1755790253150!5m2!1sen!2sbd"
            width="1152px"
            height="400"
            style={{ border: 0 }} // ✅ FIXED
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
