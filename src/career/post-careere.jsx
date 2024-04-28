import  { useState } from 'react';
import '../styles/baner.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import '../styles/post-career.css'

export default function postcareer() {
  const [activeLink, setActiveLink] = useState('Impact');

  return (
    <>
      <div className='navlinks bg-black text-white flex flex-row lg:gap-8 py-8 items-center' id='nav-links-btn'>
        <a href="#" onClick={(e) =>{
            e.preventDefault();
             setActiveLink('Impact')
        }} className={activeLink === 'Impact' ? 'active flex lg:ml-20 border-b-2 py-1 text-2xl border-blue-700' : 'flex lg:ml-20 border-b-2 py-1 text-2xl'}>Impact</a>
        <a href="#"  onClick={(e) =>{
            e.preventDefault();
             setActiveLink('Development')
        }} className={activeLink === 'Development' ? 'active flex lg:ml-20 border-b-2 py-1 text-2xl border-blue-700' : 'flex lg:ml-20 border-b-2 py-1 text-2xl'}>Development</a>
        <a href="#"  onClick={(e) =>{
            e.preventDefault();
             setActiveLink('Support')
        }} className={activeLink === 'Support' ? 'active flex lg:ml-20 border-b-2 py-1 text-2xl border-blue-700' : 'flex lg:ml-20 border-b-2 py-1 text-2xl'}>Support</a>
        <a href="#"  onClick={(e) =>{
            e.preventDefault();
             setActiveLink('Progress')
        }} className={activeLink === 'Progress' ? 'active flex lg:ml-20 border-b-2 py-1 text-2xl border-blue-700' : 'flex lg:ml-20 border-b-2 py-1 text-2xl'}>Progress</a>
      </div>

      <div className='section bg-black py-8'>
        {activeLink === 'Impact' && <div className='main-sections'>
            <div className='top-section'>
                <div className='img-sec'>
                    <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/impact-with-meaningful-outcomes-2048x1076-1?wid=1000&hei=526&dpr=off" alt="" />
                </div>
                <div className='text-section' id='text-sec'>
                    <h1>Leading with purpose</h1>
                    <p>Through the application of innovation and our contextual knowledge, we give associates the opportunity to deliver transformative outcomes that benefit society at large and prove that anything is possible.</p>
                </div>
            </div>
               
            </div>}
        {activeLink === 'Development' && 
        <div className='main-sections'>
        <div className='top-section'>
            <div className='img-sec'>
                <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/progress-through-constant-learning-2048x1076-1?wid=1000&hei=526&dpr=off" alt="" />
            </div>
            <div className='text-section' id='text-sec'>
                <h1>Continuous learning</h1>
                <p>We equip our associates to deliver innovative solutions, by providing them with opportunities to access and learn from the vast collective experience that exists within TCS. We ensure they remain at the cutting edge of change.</p>
            </div>
        </div>
          
        </div>
        }
        {activeLink === 'Support' && 
        <div className='main-sections'>
        <div className='top-section'>
            <div className='img-sec'>
                <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/tab3-2048x1076-1?wid=1000&hei=526&dpr=off" alt="" />
            </div>
            <div className='text-section' id='text-sec'>
                <h1>Support</h1>
                <p>Through upskilling and reskilling, and with opportunities to move across the business, our people, regardless of age or stage of their career, are supported to discover and become the professionals they were meant to be.</p>
            </div>
        </div>
            
        </div>
        }
        {activeLink === 'Progress' && 
        <div className='main-sections'>
        <div className='top-section'>
            <div className='img-sec'>
                <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/strategy-execution-ai-guiding-principles?wid=1000&hei=526&dpr=off" alt="" />
            </div>
            <div className='text-section' id='text-sec'>
                <h1>Progress</h1>
                <p>We see our people as long-term relationships that we build together and from which we all grow. We invest in them across the duration of their career and encourage them to strive for perpetual progress.</p>
            </div>
        </div>
           
        </div>
        }
      </div>
      
     
    </>
  );
}
