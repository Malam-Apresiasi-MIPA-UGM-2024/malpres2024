"use client";

import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-2 w-[98%] mr-[1rem] h-14 border-[#E9557F] py-3 px-[1rem] flex justify-between mt-4 mx-6 bg-[#FCD9C6] rounded-lg fixed top-0 -right-3 md:-right-2 lg:right-0 z-20 font-poppins">
      <div className={`flex items-center mr-8 ${isOpen ? 'hidden' : ''}`}>
        <Image src="/logo_malpres.svg" alt="Malpres Logo" width={120} height={120} />
      </div>

      <div className="md:hidden flex">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#E9557F] focus:outline-none"
        >
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
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h18M4 12h18m-18 6h18"}
            />
          </svg>
        </button>
      </div>

      <div className={`flex items-center space-x-8 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <a href="/comingsoon" className="text-[#E9557F] font-semibold hover:text-pink-500">Voting</a>
        <a href="/comingsoon">
          <button className="bg-[#E9557F] font-semibold text-white py-2 px-6 rounded-lg hover:bg-pink-400">
            Dapatkan Tiket
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;