import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

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
        className={`w-full max-w-6xl transition-all duration-500 ease-out rounded-2xl border ${
          isDark ? 'border-white/10' : 'border-gray-200/50'
        } flex items-center justify-between px-6 py-3 md:px-10 shadow-lg ${
          scrolled 
            ? isDark 
              ? 'bg-black/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.3)] py-3' 
              : 'bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-3'
            : isDark
              ? 'bg-black/20 backdrop-blur-sm py-5'
              : 'bg-white/30 backdrop-blur-sm py-5'
        }`}
      >
        {/* Brand Name */}
        <div 
          onClick={() => scrollToSection('home')} 
          className={`text-xl md:text-2xl font-black cursor-pointer tracking-tighter ${
            isDark ? 'text-white' : 'text-gray-900'
          } hover:scale-105 transition-transform duration-200`}
        >
          DIPESH<span className="text-blue-500 animate-pulse">.</span>
        </div>

        {/* Mobile Hamburger (Icon update) */}
        <button 
          onClick={() => setOpen(!open)} 
          className={`md:hidden ${
            isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'
          } focus:outline-none transition-colors duration-200 p-2 rounded-lg ${
            isDark ? 'hover:bg-white/5' : 'hover:bg-gray-100'
          }`}
        >
          {open ? (
            <span className="text-3xl">&times;</span>
          ) : (
            <div className="space-y-1.5">
              <div className={`w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-gray-900'} transition-all duration-200`}></div>
              <div className={`w-5 h-0.5 ${isDark ? 'bg-white' : 'bg-gray-900'} ml-auto transition-all duration-200`}></div>
              <div className={`w-4 h-0.5 ${isDark ? 'bg-white' : 'bg-gray-900'} ml-auto transition-all duration-200`}></div>
            </div>
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className={`relative text-xs font-bold uppercase tracking-[0.15em] ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              } hover:text-blue-500 cursor-pointer transition-all duration-300 group`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`ml-4 p-2.5 rounded-xl ${
              isDark 
                ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-white/10 hover:from-blue-500/20 hover:to-purple-500/20' 
                : 'bg-gradient-to-br from-yellow-100 to-orange-100 border-gray-300 hover:from-yellow-200 hover:to-orange-200'
            } border transition-all duration-300 hover:scale-110 active:scale-95 shadow-md`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-indigo-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </ul>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`absolute top-20 left-0 w-full p-4 md:hidden transition-all duration-500 ${
            open ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-95 pointer-events-none'
          }`}
        >
          <ul className={`${
            isDark 
              ? 'bg-black/95 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)]' 
              : 'bg-white/95 border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.15)]'
          } backdrop-blur-2xl border rounded-2xl p-6 flex flex-col gap-6`}>
            {['home', 'about', 'skills', 'projects', 'contact'].map((item, idx) => (
              <li
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-lg font-bold text-center ${
                  isDark ? 'text-white border-white/5 hover:text-blue-400' : 'text-gray-900 border-gray-200 hover:text-blue-600'
                } capitalize border-b pb-3 cursor-pointer transition-all duration-300 hover:pl-2`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {item}
              </li>
            ))}
            
            {/* Mobile Theme Toggle */}
            <li className="flex items-center justify-center pt-2">
              <button
                onClick={toggleTheme}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-white/10 hover:from-blue-500/20 hover:to-purple-500/20 text-white' 
                    : 'bg-gradient-to-r from-yellow-100 to-orange-100 border-gray-300 hover:from-yellow-200 hover:to-orange-200 text-gray-900'
                } border transition-all duration-300 font-bold shadow-md active:scale-95`}
              >
                {isDark ? (
                  <>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;