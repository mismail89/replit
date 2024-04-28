import React, { useState, useEffect } from 'react';
import { BiMessageRounded } from "react-icons/bi";
import '../styles/model.css';
import ShowModel from './showmodel';
export default function Model() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [show, setshow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closemodels = () =>  setshow(false) 

  return (
    <>
    <div className={`main-model flex fixed top-1/2 right-0 z-50 ${scrollPosition > 50 ? 'hide-p' : ''}`} id='main-show-btn-model'>
      <button className='text-white py-4 px-8 bg-blue-700 flex flex-row gap-2 rounded-tl-full rounded-bl-full items-center text-center' onClick={() => setshow(!show)}>
        <h2 className='text-xl'><BiMessageRounded /></h2>
        {scrollPosition <= 50 && <p className=' transition-all'>Contact</p>}
      </button>
    </div>
    {show && <ShowModel closeModel={closemodels} />}
      
      </>
  );
}
