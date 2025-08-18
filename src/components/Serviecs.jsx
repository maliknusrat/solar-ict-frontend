import React from "react";
import { TbCloudNetwork } from "react-icons/tb";
import { SiPagespeedinsights } from "react-icons/si";
import { RiUserStarLine } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";
import { GrAnnounce } from "react-icons/gr";
import { BiDialpadAlt } from "react-icons/bi";
import { RiUserVoiceLine } from "react-icons/ri";
import { TbSettingsCode } from "react-icons/tb";
import { MdWebAsset } from "react-icons/md";

export default function Serviecs() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-white">
      {/* <!-- Section Heading --> */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Services We Offer</h2>
        <p className="mt-4  max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>

      {/* <!-- Services Grid --> */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/* <!-- Service Card --> */}
        <div className="relative">
          {/* <!-- Floating Icon --> */}
          <div className="absolute -top-8 left-6 w-14 h-14 bg-[linear-gradient(161.42deg,rgba(110,232,252,0.7)_5.47%,rgba(106,226,251,0.7)_21.27%,rgba(94,209,247,0.7)_42.01%,rgba(75,181,241,0.7)_65.72%,rgba(48,142,232,0.7)_91.39%,rgba(38,127,229,0.7)_100.28%)] rounded-full flex items-center justify-center shadow-md">
            <span className="text-2xl"><SiPagespeedinsights /></span>
          </div>
          {/* <!-- Card --> */}
          <div className="bg-[linear-gradient(225deg,rgba(212,8,140,0.7)_14.64%,rgba(204,8,140,0.7)_17.47%,rgba(133,7,138,0.7)_47.17%,rgba(89,6,137,0.7)_68.39%,rgba(72,6,137,0.7)_79%)] text-white rounded-2xl p-6 pt-12 shadow-lg h-[220px]">
            <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
            <p className="text-sm">
              Innovate, Transform, and Succeed: Empower Your Digital Journey
            </p>
          </div>
        </div>

        {/* <!-- Cloud Services --> */}
        <div className="relative">
          <div className="absolute -top-8 left-6 w-14 h-14 bg-[linear-gradient(161.42deg,rgba(110,232,252,0.7)_5.47%,rgba(106,226,251,0.7)_21.27%,rgba(94,209,247,0.7)_42.01%,rgba(75,181,241,0.7)_65.72%,rgba(48,142,232,0.7)_91.39%,rgba(38,127,229,0.7)_100.28%)] rounded-full flex items-center justify-center shadow-md">
            <span className="text-2xl"><TbCloudNetwork /></span>
          </div>
          <div className="bg-[linear-gradient(225deg,rgba(212,8,140,0.7)_14.64%,rgba(204,8,140,0.7)_17.47%,rgba(133,7,138,0.7)_47.17%,rgba(89,6,137,0.7)_68.39%,rgba(72,6,137,0.7)_79%)] text-white rounded-2xl p-6 pt-12 shadow-lg h-[220px]">
            <h3 className="text-xl font-bold mb-2">
              Cloud Services (Cross Platform)
            </h3>
            <p className="text-sm">
              Unleash the Power of the Cloud: Seamless Solutions for Your
              Business
            </p>
          </div>
        </div>

        {/* <!-- Enterprise Network --> */}
        <div className="relative">
          <div className="absolute -top-8 left-6 w-14 h-14 bg-[linear-gradient(161.42deg,rgba(110,232,252,0.7)_5.47%,rgba(106,226,251,0.7)_21.27%,rgba(94,209,247,0.7)_42.01%,rgba(75,181,241,0.7)_65.72%,rgba(48,142,232,0.7)_91.39%,rgba(38,127,229,0.7)_100.28%)] rounded-full flex items-center justify-center shadow-md">
            <span className="text-2xl"><RiUserStarLine /></span>
          </div>
          <div className="bg-[linear-gradient(225deg,rgba(212,8,140,0.7)_14.64%,rgba(204,8,140,0.7)_17.47%,rgba(133,7,138,0.7)_47.17%,rgba(89,6,137,0.7)_68.39%,rgba(72,6,137,0.7)_79%)] text-white rounded-2xl p-6 pt-12 shadow-lg h-[220px]">
            <h3 className="text-xl font-bold mb-2">
              Enterprise Network & Security Solutions
            </h3>
            <p className="text-sm">
              Empower Your Enterprise with Unparalleled Network and Security
            </p>
          </div>
        </div>

        {/* <!-- Cyber Security --> */}
        <div className="relative">
          <div className="absolute -top-8 left-6 w-14 h-14 bg-[linear-gradient(161.42deg,rgba(110,232,252,0.7)_5.47%,rgba(106,226,251,0.7)_21.27%,rgba(94,209,247,0.7)_42.01%,rgba(75,181,241,0.7)_65.72%,rgba(48,142,232,0.7)_91.39%,rgba(38,127,229,0.7)_100.28%)] rounded-full flex items-center justify-center shadow-md">
            <span className="text-2xl"><SiAdguard></SiAdguard></span>
          </div>
          <div className="bg-[linear-gradient(225deg,rgba(212,8,140,0.7)_14.64%,rgba(204,8,140,0.7)_17.47%,rgba(133,7,138,0.7)_47.17%,rgba(89,6,137,0.7)_68.39%,rgba(72,6,137,0.7)_79%)] text-white rounded-2xl p-6 pt-12 shadow-lg h-[220px]">
            <h3 className="text-xl font-bold mb-2">Cyber Security</h3>
            <p className="text-sm">
              Safeguard Your Digital Frontier: Protect Your Assets and Ensure
              Peace of Mind
            </p>
          </div>
        </div>

        {/* <!-- IT Virtualization --> */}
        <div className="relative">
          <div className="absolute -top-8 left-6 w-14 h-14 bg-[linear-gradient(161.42deg,rgba(110,232,252,0.7)_5.47%,rgba(106,226,251,0.7)_21.27%,rgba(94,209,247,0.7)_42.01%,rgba(75,181,241,0.7)_65.72%,rgba(48,142,232,0.7)_91.39%,rgba(38,127,229,0.7)_100.28%)] rounded-full flex items-center justify-center shadow-md">
            <span className="text-2xl"><BiDialpadAlt/> </span>
          </div>
          <div className="bg-[linear-gradient(225deg,rgba(212,8,140,0.7)_14.64%,rgba(204,8,140,0.7)_17.47%,rgba(133,7,138,0.7)_47.17%,rgba(89,6,137,0.7)_68.39%,rgba(72,6,137,0.7)_79%)] text-white rounded-2xl p-6 pt-12 shadow-lg h-[220px]">
            <h3 className="text-xl font-bold mb-2">
              IT Infrastructure Virtualization
            </h3>
            <p className="text-sm">
              Virtualize with Confidence: Empower Agility and Efficiency to
              Boost Your Business
            </p>
          </div>
        </div>

        {/* <!-- Digital Marketing --> */}
        <div className="relative">
          <div className="absolute -top-8 left-6 w-14 h-14 bg-[linear-gradient(161.42deg,rgba(110,232,252,0.7)_5.47%,rgba(106,226,251,0.7)_21.27%,rgba(94,209,247,0.7)_42.01%,rgba(75,181,241,0.7)_65.72%,rgba(48,142,232,0.7)_91.39%,rgba(38,127,229,0.7)_100.28%)] rounded-full flex items-center justify-center shadow-md">
            <span className="text-2xl"><GrAnnounce /></span>
          </div>
          <div className="bg-[linear-gradient(225deg,rgba(212,8,140,0.7)_14.64%,rgba(204,8,140,0.7)_17.47%,rgba(133,7,138,0.7)_47.17%,rgba(89,6,137,0.7)_68.39%,rgba(72,6,137,0.7)_79%)] text-white rounded-2xl p-6 pt-12 shadow-lg h-[220px]">
            <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
            <p className="text-sm">
              Maximize the Potential of Your Business and Transform Your Future
              with Digital Marketing
            </p>
          </div>
        </div>

        {/* <!-- Web Development --> */}
        <div className="relative">
          <div className="absolute -top-8 left-6 w-14 h-14 bg-[linear-gradient(161.42deg,rgba(110,232,252,0.7)_5.47%,rgba(106,226,251,0.7)_21.27%,rgba(94,209,247,0.7)_42.01%,rgba(75,181,241,0.7)_65.72%,rgba(48,142,232,0.7)_91.39%,rgba(38,127,229,0.7)_100.28%)] rounded-full flex items-center justify-center shadow-md">
            <span className="text-2xl"><MdWebAsset /></span>
          </div>
          <div className="bg-[linear-gradient(225deg,rgba(212,8,140,0.7)_14.64%,rgba(204,8,140,0.7)_17.47%,rgba(133,7,138,0.7)_47.17%,rgba(89,6,137,0.7)_68.39%,rgba(72,6,137,0.7)_79%)] text-white rounded-2xl p-6 pt-12 shadow-lg h-[220px]">
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p className="text-sm">
              Build Your Digital Presence and Take Your Business to New Level
              with a High-Performance Website
            </p>
          </div>
        </div>

        {/* <!-- DevOps --> */}
        <div className="relative">
          <div className="absolute -top-8 left-6 w-14 h-14 bg-[linear-gradient(161.42deg,rgba(110,232,252,0.7)_5.47%,rgba(106,226,251,0.7)_21.27%,rgba(94,209,247,0.7)_42.01%,rgba(75,181,241,0.7)_65.72%,rgba(48,142,232,0.7)_91.39%,rgba(38,127,229,0.7)_100.28%)] rounded-full flex items-center justify-center shadow-md">
            <span className="text-2xl"><TbSettingsCode /></span>
          </div>
          <div className="bg-[linear-gradient(225deg,rgba(212,8,140,0.7)_14.64%,rgba(204,8,140,0.7)_17.47%,rgba(133,7,138,0.7)_47.17%,rgba(89,6,137,0.7)_68.39%,rgba(72,6,137,0.7)_79%)] text-white rounded-2xl p-6 pt-12 shadow-lg h-[220px]">
            <h3 className="text-xl font-bold mb-2">DevOps</h3>
            <p className="text-sm">
              Accelerate Innovation, Drive Efficiency: Embrace the Power of
              DevOps
            </p>
          </div>
        </div>

        {/* <!-- IT Managed --> */}
        <div className="relative">
          <div className="absolute -top-8 left-6 w-14 h-14 bg-[linear-gradient(161.42deg,rgba(110,232,252,0.7)_5.47%,rgba(106,226,251,0.7)_21.27%,rgba(94,209,247,0.7)_42.01%,rgba(75,181,241,0.7)_65.72%,rgba(48,142,232,0.7)_91.39%,rgba(38,127,229,0.7)_100.28%)] rounded-full flex items-center justify-center shadow-md">
            <span className="text-2xl"><RiUserVoiceLine /></span>
          </div>
          <div className="bg-[linear-gradient(225deg,rgba(212,8,140,0.7)_14.64%,rgba(204,8,140,0.7)_17.47%,rgba(133,7,138,0.7)_47.17%,rgba(89,6,137,0.7)_68.39%,rgba(72,6,137,0.7)_79%)] text-white rounded-2xl p-6 pt-12 shadow-lg h-[220px]">
            <h3 className="text-xl font-bold mb-2">
              IT Managed & Consulting Services
            </h3>
            <p className="text-sm">
              Empower Your Business - with our holistic IT managed and
              consulting solutions, tailored to your needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
