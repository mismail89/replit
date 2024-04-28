import React from 'react';
import '../styles/model.css';
import { CgMediaPodcast } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";


const ShowModel = ({ closeModel }) => {
  return (
    <>
      
      <div className='modal-container z-50 flex flex-col justify-center items-center'>
        <div className='cross flex justify-end'>
          <a href="" className='mt-20' onClick={(e) => {
            e.preventDefault();
            closeModel()
          }}><RxCross1 /></a>
        </div>
        <div className='modal-headers'>
          <h1 className='text-6xl font-semibold'>What’s on your mind?</h1>
          <p className='text-2xl text-slate-400'>We’re here to help! Tell us what you’re looking for and we’ll get you connected to the right people.</p>
        </div>
        <div className='main-links-in-modal py-8 mt-2'>
          <div className='each-modal flex flex-col gap-2 items-center py-8 border-slate-500 rounded-sm '>
            <a href="" className='text-4xl text-blue-600'><CgMediaPodcast /></a>
            <p className='text-bold text-xl'>Request for Services</p>
          </div>
          <div className='each-modal flex flex-col gap-2 items-center py-8 border-slate-500 rounded-sm '>
            <a href="" className='text-4xl text-blue-600'><CgMediaPodcast /></a>
            <p className='text-bold text-xl'>Request for Services</p>
          </div>
          <div className='each-modal flex flex-col gap-2 items-center py-8 border-slate-500 rounded-sm '>
            <a href="" className='text-4xl text-blue-600'><CgMediaPodcast /></a>
            <p className='text-bold text-xl'>Request for Services</p>
          </div>
        </div>
        <div className='hint flex flex-col mb-4'>
          <p className='text-xl text-slate-400'>Looking for something else?</p>
        </div>
        <div className='last-icons-modal flex flex-row justify-between items-center mt-8 py-4 ' id='last-icons-of-modal'>
          <h2 className='flex flex-row justify-center items-center gap-2'>
            <a href="" className='text-xl hover:underline text-bold'>Analyst relations</a>
            <h1><FaArrowRightLong /></h1>
          </h2>
          <h2 className='flex flex-row justify-center items-center gap-2'>
            <a href="" className='text-xl hover:underline text-bold'>Analyst relations</a>
            <h1><FaArrowRightLong /></h1>
          </h2>
          <h2 className='flex flex-row justify-center items-center gap-2'>
            <a href="" className='text-xl hover:underline text-bold'>Analyst relations</a>
            <h1><FaArrowRightLong /></h1>
          </h2>
          <h2 className='flex flex-row justify-center items-center gap-2'>
            <a href="" className='text-xl hover:underline text-bold'>Analyst relations</a>
            <h1><FaArrowRightLong /></h1>
          </h2>
        </div>
      </div>
    </>
  )
}

export default ShowModel;
