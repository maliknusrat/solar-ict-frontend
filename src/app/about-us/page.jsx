import React from 'react'
import DiscoverStory from './DiscoverStory'
import OurVision from './OurVision'
import Reviews from './Reviews'

export default function About() {
  return (
    <div>
        <div className='py-20 flex flex-col items-center justify-center space-y-1'>
            <p className='text-4xl font-bold '>About Us</p>
            <p className='text-lg'>We create IT solutions that are easy to use, efficient, secure, and reliable.</p>
        </div>
        <DiscoverStory></DiscoverStory>
        <OurVision></OurVision>
        <Reviews></Reviews>
    </div>
  )
}
