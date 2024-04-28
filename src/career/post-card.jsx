import React from 'react'
import '../styles/post-card.css'
export default function postcard() {
  return (
    <div className='main-poster-card flex lg:flex-row w-full'>
        <div className='poster-img'>
            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/home-footer-careers-updated?wid=1000&hei=526&dpr=off" alt="" />
        </div>
        <div className='poster-text-sec'>
            <h1 className='text-white font-thin'>Greater futures through innovation</h1>
            <p className='text-slate-400'>Watching the world of next-tech unfold? It's time to be part of it. Explore challenging and exciting opportunities across the globe.</p>
            o<button className='text-white py-2 px-6 mb-1 rounded-full bg-blue-600'>Search Open roles</button>
        </div>
    </div>
  )
}

