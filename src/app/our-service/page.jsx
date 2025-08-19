import React from 'react'
import ServicesSection from './ServicesSection'

export default function OurServices() {
  return (
    <div>
        <div className='py-20 flex flex-col items-center justify-center space-y-1'>
            <p className='text-4xl font-bold '>Services We Offer</p>
            <p className='text-lg'>We create IT solutions that are easy to use, efficient, secure, and reliable.</p>
        </div>
        <ServicesSection></ServicesSection>
    </div>
  )
}
