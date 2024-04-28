import React from 'react'
 import '../styles/who.hero.css'
 import { FaArrowRightLong } from "react-icons/fa6";

export default function hero() {
  return (
    <>
    <div className='main-hero-sec flex flex-col items-center' id='main-hero-sec'>
        <div className='heading-hero flex flex-col justify-center gap-4 items-start mt-12'>
            <h3 className='font-bold text-white text-xl uppercase'>Who We Are ?</h3>
            <hr/>
            <h1 className='mt-8 text-white text-6xl font-medium'>Build a future you believe in</h1>
           
        </div>
    </div>

    </>
  )
}
