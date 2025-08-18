import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineCheck } from "react-icons/ai";
import { IoGlobeOutline } from "react-icons/io5";

export default function Serve() {
  return (
    <div className="py-16 bg-gradient-to-r from-[#F4F7FF] to-[#DDE4FF]">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How we serve</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          You can easily tap into flexible and scalable IT resources without the
          hassle of setting up a complex in-house and cloud-based infrastructure
          with us. Easier for you to concentrate on your main business
          activities while leveraging Solar-ICT's specialized knowledge and
          services to support your IT needs.
        </p>

        {/* Steps */}
        <div className="relative flex items-center justify-between w-full max-w-4xl mx-auto">
          {/* SVG Connector Line */}
          <svg
            className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M100,50 C500,-80 450,140 800,60 "
              stroke="#A31FA9"
              strokeWidth="2"
              strokeDasharray="12 12"
            />
          </svg>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white text-3xl shadow-lg">
                <FaRegCircleUser />
              </div>
              <div>
                <p className="w-[180px] text-sm text-center mt-8">
                  Seamless IT Resource Integration
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white text-3xl shadow-lg">
                <AiOutlineCheck />
              </div>
            </div>
            <p className="w-[180px] text-sm text-center mt-8 ">
              Cloud and Infrastructure Management
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white text-3xl shadow-lg">
                <IoGlobeOutline />
              </div>
            </div>
            <p className="w-[180px] text-sm text-center mt-8 ">
              Business-Focused IT Support Solutions
            </p>
          </div>
        </div>
       

        {/* CTA Button */}
        <div className="mt-12">
          <button className="bg-[#29335D] btn btn-lg rounded-full font-extralight text-sm text-white px-8 py-3 shadow transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
