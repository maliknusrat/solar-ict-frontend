import Image from 'next/image'
import React from 'react'

export default function WeServe() {
  return (
    <div className="max-w-6xl mx-auto min-h-screen text-white">
          {/* Hero Section */}
          <div className='flex flex-col pt-20 items-center justify-center'>
            <p className='text-2xl md:text-4xl font-black text-center'>Who do we serve</p>
            <p className='text-lg text-center w-[300px] md:w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <section className="container mx-auto pt-10 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className='px-10 md:px-0'>
              <h1 className="text-2xl md:text-4xl font-bold leading-tight">
               Comprehensive IT Solutions for Diverse Sectors
              </h1>
              <p className="mt-6 text-lg font-light text-gray-300 max-w-lg">
               At Solar-ICT, we serve a diverse range of clients, including enterprises, startups, developers, researchers, government agencies, and non-profits. Our scalable, cost-effective, and flexible solutions ensure businesses of all sizes have the IT infrastructure and support they need to enhance capabilities and streamline operations.
              </p>
              <div className="flex items-center justify-between">
                <button className="mt-8 px-10 py-2 bg-[linear-gradient(225deg,#D4088C_14.64%,#CC088C_17.47%,#85078A_47.17%,#590689_68.39%,#480689_79%)] hover:bg-pink-600 rounded-full text-white font-extralight">
                  Contact Us
                </button>
                
              </div>
            </div>
    
            {/* Right Image */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/Migration 4 1.png"
                alt="Tech Illustration"
                width={600}
                height={600}
                className="w-[300px] md:w-[600px] h-auto"
              />
            </div>
          </section>
        </div>
  )
}
