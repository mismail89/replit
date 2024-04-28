import React from 'react'
 import '../styles/hero.css'
 import { FaArrowRightLong } from "react-icons/fa6";

export default function hero() {
  return (
    <>
    <div className='main-hero-sec flex flex-col items-center'>
        <div className='heading-hero flex flex-col justify-center gap-4 items-start mt-12'>
            <h3 className='font-bold text-white text-xl uppercase'>Career</h3>
            <hr/>
            <h1 className='mt-8 text-white text-6xl font-medium'>Build a future you believe in</h1>
            <h2 className='mt-4 lg:mt-12 flex flex-row items-center gap-2'>
                <a href="" className='text-white text-xl hover:underline'>Apply Now</a>
                <p className='flex items-center'><FaArrowRightLong /></p>
            </h2>
        </div>
    </div>

    </>
  )
}
