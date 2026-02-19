import React from 'react';
import profileImage from '../images/profile.jpeg';

const Home = () => {
  return (
    <section 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] px-6 py-20"
      id="home"
    >
      {/* 1. Animated Background Elements (UI/UX touch) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full animate-pulse delay-700"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
        
        {/* 2. Profile Image with "Floating" Effect */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-2 border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <img
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              src={profileImage}
              alt="Dipesh Chaudhary"
            />
          </div>
        </div>

        {/* 3. Text Content with Better Hierarchy */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-6">
          <div className="space-y-2">
            <span className="text-blue-500 font-mono text-sm md:text-base tracking-[0.2em] uppercase">Available for work</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Dipesh.</span>
            </h1>
          </div>

          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-200">
              Frontend <span className="text-gray-500 font-light">&</span> UI/UX Designer
            </h2>
            <p className="max-w-lg text-gray-400 text-lg md:text-xl leading-relaxed">
              I craft <span className="text-white">high-performance</span> digital experiences where 
              clean code meets intuitive user interface design.
            </p>
          </div>

          {/* 4. Action Buttons (Modern UI Style) */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 active:scale-95"
            >
              Get In Touch
            </button>
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;