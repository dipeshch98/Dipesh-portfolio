import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false); // close mobile menu after click
  };

  return (
    <nav className="w-full shadow-md fixed top-0 left-0 z-50 font-sans bg-slate-900">
      <div className="md:flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="text-xl font-semibold">Dipesh Chaudhary</div>

        {/* Hamburger button (shown only on mobile) */}
        <div onClick={() => setOpen(!open)} className="text-2xl cursor-pointer md:hidden">
          ☰
        </div>

        {/* Menu items */}
        <ul
          className={`md:flex md:items-center md:static absolute  w-full left-0 md:w-auto md:py-0 py-4 px-6 transition-all duration-300 ease-in ${
            open ? 'top-16' : 'top-[-400px]'
          }`}
        >
          {['home', 'about', 'skills', 'services', 'projects', 'contact'].map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className="cursor-pointer capitalize my-2 md:my-0 md:ml-6 hover:text-blue-500"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
