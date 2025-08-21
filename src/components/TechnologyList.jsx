import Image from 'next/image';
import React from 'react'
import Marquee from 'react-fast-marquee';

export default function 
() {
  return (
    <div className="w-full bg-gradient-to-r from-[#F4F7FF] to-[#DDE4FF]">
      <div className="max-w-7xl mx-auto  px-6 py-10">
        <div className="flex flex-col items-center justify-center space-y-1 mb-8">
          <h2 className="w-full px-2 md:px-0 text-xl md:w-[820px] md:text-3xl text-center font-bold text-gray-900 mb-4">
            List of our expertise with the world's most trusted Technology
            providers: Few Of Our Trusted Customers
          </h2>
        </div>
        <Marquee
          pauseOnHover
          className="text-gray-700 py-5"
          speed={50}
        >
          <div>
            <Image
              src="/icons/image.png"
              alt="tech-image"
              className='mx-10'
              width={70}
              height={70}
            />
          </div>
          <div>
            <Image
              src="/icons/image 9.png"
              alt="tech-image"
              className='mx-10'
              width={70}
              height={70}
            />
          </div>
          <div>
            <Image
              src="/icons/image 10.png"
              alt="tech-image"
              className='mx-10'
              width={70}
              height={70}
            />
          </div>
          <div>
            <Image
              src="/icons/image 5.png"
              alt="tech-image"
              className='mx-10'
              width={70}
              height={70}
            />
          </div>
          <div>
            <Image
              src="/icons/image 7.png"
              alt="tech-image"
              className='mx-10'
              width={70}
              height={70}
            />
          </div>
          <div>
            <Image
              src="/icons/image 8.png"
              alt="tech-image"
              className='mx-10'
              width={70}
              height={70}
            />
          </div>
          <div>
            <Image
              src="/icons/image 6.png"
              alt="tech-image"
              className='mx-10'
              width={100}
              height={70}
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
