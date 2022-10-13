import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <ul className="hidden md:flex  ">
      <li>
        <Link to="/" />
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
