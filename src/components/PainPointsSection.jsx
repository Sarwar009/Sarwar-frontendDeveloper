import React from 'react'
import SubTitle from './SubTitle'
import Image from 'next/image'
import NoWorries from './NoWorries'

export default function PainPointsSection() {
  return (
    <div className='py-8.75 md:py-30'>
      <div className='container mx-auto text-center'>
        <div className='max-w-2xl mx-auto space-y-6'>
            <SubTitle subTitle="Are Distractions Holding You Back?" />
            <h1 className='text-2xl md:text-4xl font-semi-bold'>
                If you struggle to focus, feel overwhelmed by endl<span className='text-gray-800'>ess tasks, or procrastinate instead of making progress, you’re not alone.</span>
            </h1>
        </div>
        <div className='mt-10 flex flex-col md:flex-row items-center justify-center gap-3'>
          <Image 
            src="/img1.jpg"
            alt="img1"
            width={200}
            height={100}
            className='rounded-2xl w-35 h-35 object-cover'
          />
          <Image 
            src="/img2.jpg"
            alt="img2"
            width={500}
            height={500}
            className='rounded-2xl w-35 h-35 object-cover'
          />
          <Image 
            src="/img3.jpg"
            alt="img3"
            width={500}
            height={500}
            className='rounded-2xl w-35 h-35 object-cover'
          />
        </div>
        <NoWorries />
      </div>
    </div>
  )
}
