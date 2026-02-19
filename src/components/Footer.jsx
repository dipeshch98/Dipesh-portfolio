import React from 'react';

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050505] py-12 px-6 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand/Identity */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold tracking-tight">
            DIPESH<span className="text-blue-500">.</span>
          </h2>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Frontend Developer</p>
        </div>

        {/* Quick Links */}
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-400">
          <button onClick={() => scrollTo('home')} className="hover:text-blue-500 transition-colors">Home</button>
          <button onClick={() => scrollTo('about')} className="hover:text-blue-500 transition-colors">About</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-blue-500 transition-colors">Work</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-blue-500 transition-colors">Contact</button>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-5 items-center">
          <a href="https://github.com/dipeshch98" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 hover:-translate-y-1 transition-all duration-300">
            <img src="https://www.svgrepo.com/show/475654/github-color.svg" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/dipesh-chaudhary-028a40341/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 hover:-translate-y-1 transition-all duration-300">
            <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/chaudharii_dipesh/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 hover:-translate-y-1 transition-all duration-300">
            <img src="https://www.svgrepo.com/show/452229/instagram-1.svg" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Copyright Bottom */}
      <div className="mt-10 text-center text-[10px] text-gray-600 uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} Designed & Built by Dipesh
      </div>
    </footer>
  );
};

export default Footer;