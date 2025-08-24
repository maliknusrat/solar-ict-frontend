"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { useParams } from "next/navigation";
import servicesData from "../../../../public/service.json";
import Link from "next/link";

export default function Page() {
  const { id } = useParams(); // grabs dynamic [id] from URL
  const service = servicesData.find((s) => s.id === Number(id));

  if (!service) {
    return <p className="text-center py-20 text-red-500">Service not found</p>;
  }

  return (
    <div>
      {/* Header */}
      <div className="py-20 flex flex-col items-center justify-center space-y-1">
        <p className="text-4xl font-bold ">{service.service_name}</p>
        <p className="text-lg">{service.service_title}</p>
      </div>

      {/* Details */}
      <div className="bg-[linear-gradient(90deg,#FFFFFF_0%,#DDE4FF_100%)] text-[#03091D] w-full p-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="w-[600px] text-center text-3xl font-bold ">
              Discover Our Story, Mission, and Values
            </p>
            <p className="w-[900px] text-center text-base ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Dynamic categories */}
          <div className="space-y-10 py-20">
            {service.categories?.map((category, index) => (
              <div key={category.category_id}>
                <div className="flex items-center justify-between gap-6">
                  {index % 2 === 0 ? (
                    <div className="flex items-start justify-between gap-6">
                      <Image
                        src={category.category_image}
                        alt={category.category_name}
                        width={400}
                        height={300}
                        className=" rounded-lg "
                      />
                      <div className="h-[200px] w-full space-y-2">
                        <p className="text-2xl font-bold">
                          {" "}
                          {category.category_name}
                        </p>
                        <div className="flex items-end gap-3 justify-between">
                          <p className="text-base text-left">
                          {" "}
                          {category.category_details}
                        </p>
                        <Link
                          href=""
                          className="btn btn-ghost btn-xs flex px-0 items-center gap-1 text-blue-700"
                        >
                          <p className="text-xs text-nowrap">Learn more</p>
                          <p className="text-xs text-nowrap">
                            <FaArrowRight />
                          </p>
                        </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start justify-between gap-6">
                      <div className="h-[200px] w-full space-y-2">
                        <p className="text-2xl font-bold">
                          {" "}
                          {category.category_name}
                        </p>
                        <div className="flex items-end gap-3 justify-between">
                          <p className="text-base text-left">
                          {" "}
                          {category.category_details}
                        </p>
                        <Link
                          href=""
                          className="btn btn-ghost btn-xs flex px-0 items-center gap-1 text-blue-700"
                        >
                          <p className="text-xs text-nowrap">Learn more</p>
                          <p className="text-xs text-nowrap">
                            <FaArrowRight />
                          </p>
                        </Link>
                        </div>
                      </div>
                      <Image
                        src={category.category_image}
                        alt={category.category_name}
                        width={400}
                        height={300}
                        className=" rounded-lg "
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
