import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={`w-full ${
      isDark 
        ? 'bg-[#050505] text-white border-white/5' 
        : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border-gray-700'
    } py-12 px-6 border-t transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand/Identity */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold tracking-tight text-white">
            DIPESH<span className="text-blue-500">.</span>
          </h2>
          <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'} uppercase tracking-widest mt-1`}>
            Frontend | UI/UX
          </p>
        </div>

        {/* Quick Links */}
        <nav className={`flex items-center gap-6 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-300'}`}>
          <button onClick={() => scrollTo('home')} className="hover:text-blue-500 transition-colors">Home</button>
          <button onClick={() => scrollTo('about')} className="hover:text-blue-500 transition-colors">About</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-blue-500 transition-colors">Work</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-blue-500 transition-colors">Contact</button>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-5 items-center">
          <a 
            href="https://github.com/dipeshch98" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all duration-300 hover:scale-110"
          >
            <img src="https://www.svgrepo.com/show/475654/github-color.svg" alt="GitHub" className="w-8 h-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/dipesh-chaudhary-028a40341/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all duration-300 hover:scale-110"
          >
            <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a 
            href="https://www.instagram.com/chaudharii_dipesh/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all duration-300 hover:scale-110"
          >
            <img src="https://www.svgrepo.com/show/452229/instagram-1.svg" alt="Instagram" className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className={`mt-8 text-center text-xs ${isDark ? 'text-gray-600' : 'text-gray-500'} uppercase tracking-wider`}>
        © {new Date().getFullYear()} Dipesh Chaudhary. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;