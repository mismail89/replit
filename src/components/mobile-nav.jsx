import React, { useState } from 'react';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';
import navs from './mob'; // 
import '../styles/mobile-nav.css'
import { Router, Link, useNavigate } from 'react-router-dom';



const MobileNavbar = ({ navData, handlieclose }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (label) => {
    setOpenMenus((prevMenus) => ({
      ...prevMenus,
      [label]: !prevMenus[label],
    }));
  };

  const renderNavItems = (items) => {
    return (
      

      
      <ul className='flex items-start justify-center flex-col w-full gap-1 py-4'>
        {items.map((item, index) => (
          <li key={index} className='w-full flex flex-col justify-between bg-slate-700'>
            <button
              onClick={() => toggleMenu(item.label)}
              className=" w-full flex flex-row items-start justify-around py-4 bg-slate-800 "
            >
              <Link to={`${item.to}`}>
              <h2 className=' font-mono' onClick={handlieclose}>{item.label}</h2>
              </Link>
              {item.children && (
                <span className='text-xl'>
                  {openMenus[item.label] ? <HiMinusSm /> : <HiPlusSm />}
                </span>
              )}
            </button>
            {openMenus[item.label] && item.children && (
              <div className="flex flex-col mb-2">
                {renderNavItems(item.children)}
              </div>
            )}
          </li>
        ))}
      </ul>
      
    );
  };

  return (
    <nav className=' w-11/12 text-lg'>
      {renderNavItems(navData)}
    </nav>
  );
};

const mobile = ({handlieclose}) => {
  return (
    <div className="main-mobile-navbar-div lg:hidden text-white z-50">
      <MobileNavbar navData={navs} handlieclose={handlieclose} />
    </div>
  );
};

export default mobile;
