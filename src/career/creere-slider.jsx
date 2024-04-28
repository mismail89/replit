import React from 'react'
import { useState } from 'react';
import '../styles/slides.css'
import { LiaDatabaseSolid } from "react-icons/lia";
import '../styles/careerslider.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";


export default function careersliders() {
    const [sliderPosition, setSliderPosition] = useState(0);
    const slides = ['1', '2', '3' ];
    const [curr, setcurrent] = useState(0)
    const prev = () =>
    setcurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
   const next = () =>
   setcurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
    
  return (

    <>
    <div className='main-slides-last flex w-full flex-col justify-center items-center relative'>
        <div className='slider-arrows-move absolute z-50'>
        <h1 onClick={prev} className=' cursor-pointer'><FaArrowLeftLong /></h1>
          <h1 onClick={next} className=' cursor-pointer'><FaArrowRight /></h1>
        </div>
        <div className='main-slide flex flex-col justify-center items-center'>
            <div className='flex flex-row justify-between items-center w-full py-2'>
                <h1 className='text-white lg:text-4xl font-extralight'>Spotlight on TCS</h1>
                <button href="" className=' border-b-2 border-white text-slate-400'>View all</button>
            </div>
            <div className='main-sliddes flex flex-row justify-between items-center mt-8 mb-8 w-full' id='main-slides'>
            <div className='slider-wrapper ease-out duration-500' id='wraper' style={{transform: `translateX(-${curr * 350}px)`}}>
                <div className='each-slide each-first one-each-slide'>
                    <div className='lower-data-link'>
                        <h1 className=' text-3xl text-white mb-2'>stay up-to-date with latest tcs news</h1>
                        <button className='flex flex-row justify-center items-center gap-2 text-white text-lg font-bold'><LiaDatabaseSolid /> Read More</button>
                    </div>
                </div>
                <div className='each-slide each-second one-each-slide'>
                   
                    <div className='lower-data-link'>
                        <h1 className=' text-3xl text-white mb-2'>stay up-to-date with latest tcs news</h1>
                        <button className='flex flex-row justify-center items-center gap-2 text-white text-lg font-bold'><LiaDatabaseSolid /> Read More</button>
                    </div>
                </div>
                <div className='each-slide each-last one-each-slide'>
                   
                    <div className='lower-data-link'>
                        <h1 className=' text-3xl text-white mb-2'>stay up-to-date with latest tcs news</h1>
                        <button className='flex flex-row justify-center items-center gap-2 text-white text-lg font-bold'><LiaDatabaseSolid /> Read More</button>
                    </div>
                </div>
                <div className='each-slide each-last one-each-slide'>
                   
                   <div className='lower-data-link'>
                       <h1 className=' text-3xl text-white mb-2'>stay up-to-date with latest tcs news</h1>
                       <button className='flex flex-row justify-center items-center gap-2 text-white text-lg font-bold'><LiaDatabaseSolid /> Read More</button>
                   </div>
               </div>
               <div className='each-slide each-last one-each-slide'>
                   
                   <div className='lower-data-link'>
                       <h1 className=' text-3xl text-white mb-2'>stay up-to-date with latest tcs news</h1>
                       <button className='flex flex-row justify-center items-center gap-2 text-white text-lg font-bold'><LiaDatabaseSolid /> Read More</button>
                   </div>
               </div>
               
              
               
                </div>
                
            </div>
        </div>
    </div>

   
    </>
  )
}
