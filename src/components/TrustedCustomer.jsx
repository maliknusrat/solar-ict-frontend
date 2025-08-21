import Image from 'next/image';
import React from 'react'
import Marquee from 'react-fast-marquee';

export default function TrustedCustomer() {
 return (
    <div className="w-full bg-gradient-to-r from-[#F4F7FF] to-[#DDE4FF]">
      <div className="max-w-7xl mx-auto  px-6 py-10">
        <div className="flex flex-col items-center justify-center space-y-1 mb-8">
          <h2 className="w-full px-2 md:px-0  md:w-[600px] text-2xl md:text-3xl text-center font-bold text-gray-900 mb-4">
            Few Of Our Trusted Customers
          </h2>
        </div>
        <Marquee
          pauseOnHover
          className="text-gray-700 py-5"
          speed={50}
        >
          <div>
            <Image
              src="/icons/Company logo.png"
              alt="tech-image"
              className='mx-10'
              width={150}
              height={150}
            />
          </div>
          <div>
            <Image
              src="/icons/Company logo-1.png"
              alt="tech-image"
              className='mx-10'
              width={150}
              height={150}
            />
          </div>
          <div>
            <Image
              src="/icons/Company logo-2.png"
              alt="tech-image"
              className='mx-10'
              width={150}
              height={150}
            />
          </div>
          <div>
            <Image
              src="/icons/Company logo-3.png"
              alt="tech-image"
              className='mx-10'
              width={150}
              height={150}
            />
          </div>
          <div>
            <Image
              src="/icons/Company logo-4.png"
              alt="tech-image"
              className='mx-10'
              width={150}
              height={150}
            />
          </div>
          
        </Marquee>
      </div>
    </div>
  );
}
