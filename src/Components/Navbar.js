// Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-400 p-4 fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center">
        <div className="flex-shrink-0">
          <img className="h-8" src="/logo.png" alt="Logo" />
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-800">Home</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-800">About</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-800">Services</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-800">Contact</a>
            </li>
          </ul>
        </div>
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 md:hidden">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#" className="text-white hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">About</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">Services</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
