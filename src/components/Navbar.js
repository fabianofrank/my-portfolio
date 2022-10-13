import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="sticky top-0 z-10 w-full bg-gray-500 backdrop-filter backdrop-blur-lg bg-opacity-30">
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <span className="text-2xl text-[#e6e6e9] font-semibold">
          <Link to="/">Home</Link>
        </span>
        <div className="hidden md:flex space-x-4 text-xl text-[#e6e6e9]">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <span className="flex md:hidden text-white">Menu</span>
      </div>
    </div>
  </nav>
);

export default Navbar;
