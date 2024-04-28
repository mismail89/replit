import { useState } from 'react'
import '../styles/navbar.css';
import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Data from './nav';
import sublinks from './sublink';
import { RxHamburgerMenu } from "react-icons/rx";
import Mobile from './mobile-nav';
import { RxCross2 } from "react-icons/rx";
import { Router, Link, useNavigate } from 'react-router-dom';

export default function navbar() {
    const [modle, handlemodel] = useState(false)
    const [selected, setselected] = useState(null)
    const[navshow, setnavshow] = useState(false)

    function choice(set){
        setselected(set)
      }
      const  Model = () =>{
          return(
              <div className='main-dialog' onMouseLeave={() => handlemodel(false)}>
          <div className='dialog flex flex-row justify-around items-start'>
              <div className='left-dialog flex flex-col w-1/4 h-full'>
              {sublinks.map((item) => {
              return item.id === selected ? (
                item.name.map((name, index) => (
                  <a href="" key={index} className='text-white flex flex-row justify-between items-center  py-2 px-4'>
                    <p>{name}</p>
                    <h4><IoIosArrowForward /></h4>
                  </a>
                ))
              ) : null;
            })}
                
              </div>
              <div className=' last-grid flex flex-row flex-wrap justify-arround items-start mt-8 w-1/2'>
                  
                  <a href="" className='flex  w-1/4 mt-4'>Reach Us</a>
                  <a href=""  className=' w-1/4  mt-4'>Our Services</a>
                  <a href=""  className=' w-1/4  mt-4'>More About Us</a>
                  <a href=""  className=' w-1/4  mt-4'>Customers</a>
                  <a href=""  className=' w-1/4  mt-4'>Gallery</a>
              </div>
          </div>
      </div>
          )
      }
      const hidenav = () => setnavshow(false)
  return (
    <>
    <div className='main-all-navs flex bg-black z-50 w-full'>
        <div className='main-navbar flex flex-row py-3 justify-around items-center'>
           <div className='logo'>
            <Link to={'/'}>
            <img src="./images/logo.svg" alt=""/>
            </Link>
           </div>
           <div className='main-links'>
            {
                Data.map((item, index) => {
                    return (
                      <Link to={`/${item.to}`}>
                        <a href={item.link} onMouseOver={() =>{
                            handlemodel(true)
                            choice(item.id)
                             }}
                              key={item.id}>
                            {item.Name}
                        </a>
                        </Link>
                    )
                })
            }
           
           </div>
           <div className='last-links' onMouseOver={()=> handlemodel(false)}>
            <a href="">Contact Us</a>
            <a href="">Tcs WORLDWIDE</a>
           </div>
           <div className='last-icons'>
            <a href=""><IoSearch /></a>
            <a href="">
                <img src="https://www.tcs.com/content/dam/global-tcs/en/images/home/tata-logo-1.svg" alt="" />
            </a>
           </div>
           <div className='burger-nav'>
            <h1 onClick={() => setnavshow(!navshow)}>{navshow ?<RxCross2 />: <RxHamburgerMenu />}</h1>
           </div>
        </div>
    </div>

    {modle && <Model />}
    {navshow && <Mobile handlieclose={hidenav}/>}
    </>
  )
}

