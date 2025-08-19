import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function DiscoverStory() {
  return (
    <div className="bg-[linear-gradient(90deg,#FFFFFF_0%,#DDE4FF_100%)] text-[#03091D] w-full p-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="w-[600px] text-center text-3xl font-bold ">
            Discover Our Story, Mission, and Values
          </p>
          <p className="w-[900px] text-center text-base ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip{" "}
          </p>
        </div>

       <div className="space-y-10 py-20"> {/* Card */}
        <div className="">
            <div className="flex items-center justify-between gap-6">
                <Image 
                src='/Group 1000003583.png'
                alt="img1"
                width={400}
                height={300}
                />
                <div className="h-[200px] w-full space-y-2">
                    <p className="text-2xl font-bold"> How we serve</p>
                    <p className="text-base text-left">You can easily tap into flexible and scalable IT resources without the hassle of setting up a complex in-house and cloud-based infrastructure with us. Easier for you to concentrate on your main business activities while leveraging Solar-ICT's specialized knowledge and services to support your IT needs.</p>
                    <p className="btn btn-ghost px-0 text-blue-700">Learn more <span><FaArrowRight /></span> </p>
                </div>
            </div>
        </div>


        <div className="">
            <div className="flex items-center justify-between gap-5">
                <div className="h-[200px] w-full space-y-2">
                    <p className="text-2xl font-bold"> Who do we serve</p>
                    <p className="text-base text-left">We serve enterprises, businesses of all sizes, startups, developers, researchers, government agencies, and non-profit organizations by providing scalable, cost-effective, and flexible solutions for their IT infrastructure and operational needs.</p>
                    <p className="btn btn-ghost px-0 text-blue-700">Learn more <span><FaArrowRight /></span> </p>
                </div>
                 <Image 
                src='/Group 1000003575.png'
                alt="img1"
                width={400}
                height={300}
                />
            </div>
        </div>


        <div className="">
            <div className="flex items-center justify-between gap-5">
                <Image 
                src='/image.png'
                alt="img1"
                width={400}
                height={300}
                />
                <div className="h-[200px] w-full space-y-2">
                    <p className="text-2xl font-bold"> What we offer</p>
                    <p className="text-base text-left">We are here to provide you with all the facilities for Digital Services, Data & AI, Digital Workplace, Platform & Security, Digital Transformation, Managed Services, Information Management, Software Development, Risk & Compliance and more on.</p>
                    <p className="btn btn-ghost px-0 text-blue-700">Learn more <span><FaArrowRight /></span> </p>
                </div>
            </div>
        </div></div>
      </div>
    </div>
  );
}
