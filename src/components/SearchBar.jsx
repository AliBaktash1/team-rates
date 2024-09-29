
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import Pr from '../assets/Pr.png';
import icon from '../assets/icon.png';
import se from '../assets/Search.png';

const Header = () => {
  return (
    <header className='flex p-8 justify-between h-[14vh]'>
      <div className="rt flex gap-2">
        <CiSearch className='border rounded-full text-[50px] text-green-400 p-2 text-center md:hidden' />
        <IoMdArrowDropdown className='border rounded-full text-[50px] text-green-400 p-2 text-center md:hidden' />
        <div className="relative hidden md:block">
          <input type="text" className="pl-8 pr-4 py-2 border border-gray-300 rounded-3xl w-full outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Search" />
          <span className="absolute inset-y-0 left-0 top-2 pl-3 flex items-center text-gray-500">
            <img src={se} alt="search icon" />
          </span>
        </div>
        <div className="relative hidden md:block">
          <input type="text" className="pl-0.5 pr-0.5 py-2 border border-gray-300 rounded-3xl w-full outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Search" />
          <span className="absolute inset-y-0 left-0 top-2 pl-3 flex items-center text-gray-500">
            <img src={icon} alt="icon" />
          </span>
        </div>
      </div>
      <div className="lt flex gap-2 text-end items-center">
        <img src={Pr} alt="League Logo" />
        <div className="flex flex-col text-green-600">
          <h2 className='text-xl'>Premier League</h2>
          <p className="text-sm">Season 2022 - 2023</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
