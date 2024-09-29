// components/Footer.jsx
import React from 'react';
import logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className='mt-3'>
      <hr className="" />
      <p className='text-center p-1'>
        <img src={logo} alt="logo" className='inline-block w-6 h-6 ml-4' />
        ساخته شده در <span><a href="" className="text-blue-600">استارکوچ</a></span>
      </p>
    </footer>
  );
};

export default Footer;
