'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { HiMiniBeaker } from "react-icons/hi2";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative bg-gradient-to-r from-neutral-900 to-neutral-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-4xl font-bold text-center md:flex space-x-8">
          <Link href="/" className="hover:text-gray-200 transition">
            <span><HiMiniBeaker className='inline-flex mx-3' />sipcraft</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 text-lg">
          <Link href="/" className="hover:text-gray-500 transition">Home</Link>
          <Link href="/favourites" className="hover:text-gray-500 transition">Favourites</Link>
        </div>

        {/* mobile view*/}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-lg md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 bg-neutral-900 flex flex-col justify-center items-center space-y-8 text-lg text-white opacity-70">
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-8 text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg" >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Link href="/" className="hover:text-gray-500 transition" onClick={toggleMenu}>Home</Link>
          <Link href="/favourites" className="hover:text-gray-500 transition" onClick={toggleMenu}>Favourites</Link>
        </div>
      </div>
    </header>
  )
}

export default Header;