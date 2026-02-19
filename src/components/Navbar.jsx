import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow and change background opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setOpen(false);
    }
  };

  return (
    <div className="fixed top-0 w-full flex justify-center z-[100] px-4 py-4 md:py-6">
      <nav 
        className={`w-full max-w-5xl transition-all duration-300 ease-in-out rounded-2xl border border-white/10 flex items-center justify-between px-6 py-3 md:px-10 
        ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent py-5'}`}
      >
        {/* Brand Name */}
        <div 
          onClick={() => scrollToSection('home')} 
          className="text-xl md:text-2xl font-black cursor-pointer tracking-tighter text-white"
        >
          DIPESH<span className="text-blue-500">.</span>
        </div>

        {/* Mobile Hamburger (Icon update) */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden text-white focus:outline-none"
        >
          {open ? (
            <span className="text-3xl">&times;</span> // X icon
          ) : (
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-4 h-0.5 bg-white ml-auto"></div>
            </div>
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm font-semibold uppercase tracking-widest text-gray-400 hover:text-blue-500 cursor-pointer transition-all duration-200"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`absolute top-20 left-0 w-full p-4 md:hidden transition-all duration-300 ${
            open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
          }`}
        >
          <ul className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 shadow-3xl">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <li
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-lg font-bold text-center text-white capitalize border-b border-white/5 pb-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;