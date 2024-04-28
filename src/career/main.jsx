import React from 'react'
import '../styles/main.css'
import { FaArrowRightLong } from "react-icons/fa6";

export default function main() {

  return (
    <div className='main-sec-last-car w-full flex flex-col bg-white'>
        <div className='main-main mt-12 flex flex-row ' id='main-main'>
            <div className='main-about-sec'>
                <h1 className='text-white text-2xl font-semibold'>About Us</h1>
            </div>
            <div className='main-text-sec'>
                <p className='text-white text-lg font-mono'>A belief in diversity</p>
                <div className='last-tex-sec'>
                    <div className=' bg-blue-500'></div>
                    <h2 className=' text-4xl text-white'>How do you create remarkable change? By hiring, celebrating and nurturing the best people-from all walks of life.</h2>
                </div>
                <h3 className='mt-12 flex flex-row items-center gap-4'>
                    <a href="" className='text-white hover:underline text-lg'>Learn more about us</a>
                    <button><FaArrowRightLong /></button>
                </h3>
            </div>
        </div>
    </div>
  )
}
