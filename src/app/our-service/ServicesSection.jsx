"use client";
import Image from "next/image";
import { useState } from "react";
import { TbCloudNetwork, TbSettingsCode } from "react-icons/tb";
import { SiPagespeedinsights, SiAdguard } from "react-icons/si";
import { RiUserStarLine, RiUserVoiceLine } from "react-icons/ri";
import { GrAnnounce } from "react-icons/gr";
import { BiDialpadAlt } from "react-icons/bi";
import { MdWebAsset } from "react-icons/md";

import servicesData from "../../../public/service.json";
import { FaArrowRight } from "react-icons/fa6";
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

export default function ServicesSection() {
  const [active, setActive] = useState(1);
  const activeService = servicesData.find((s) => s.id === active);

  return (
    <section className="py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 place-items-start gap-12 px-6">
        {/* LEFT MENU */}
        <div className="space-y-4">
          {servicesData?.map((service, id) => {
            const IconComponent = icons[service.icon];
            return (
              <div
                key={service.id}
                onClick={() => setActive(service.id)}
                className={`cursor-pointer p-4 flex items-center gap-2 h-[80px] border-b-[1px] border-b-gray-200 transition-all duration-300 ${
                  active === service.id
                    ? "bg-gradient-to-r from-[#9A0F7C] to-[#380B6E] text-xl text-white shadow-xl rounded-md"
                    : "hover:bg-gradient-to-r from-[#9A0F7C] to-[#380B6E] hover:text-white text-gray-900"
                }`}
              >
                {IconComponent && <IconComponent className="text-2xl" />}
                <span className="text-xl">{service.service_name}</span>
              </div>
            );
          })}
        </div>

        {/* RIGHT SECTION (only active service shown) */}
        {activeService && (
          <div className="flex flex-col justify-center">
            <div className="w-[390px] mb-3 flex gap-2 items-end justify-between">
              <h2 className="md:text-[28px] font-bold leading-snug">
                {activeService.service_title}
              </h2>

              <Link
                href={`/servicedetails/${activeService.id}`}
                className="btn btn-ghost btn-xs flex px-0 items-center gap-1 text-blue-700"
              >
                <p className="text-xs text-nowrap">Learn more</p>
                <p className="text-xs text-nowrap">
                  <FaArrowRight />
                </p>
              </Link>
            </div>

            <Image
              src="/service.png"
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
