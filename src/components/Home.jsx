import React from 'react';
import profileImage from '../images/profile.jpeg';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { isDark } = useTheme();
  
  return (
    <section 
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden ${
        isDark ? 'bg-[#050505]' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      } px-6 py-20 transition-colors duration-300`}
      id="home"
    >
      {/* 1. Animated Background Elements with Gradients */}
      <div className={`absolute top-20 left-10 w-72 h-72 ${
        isDark ? 'bg-blue-600/10' : 'bg-blue-400/20'
      } blur-[120px] rounded-full animate-pulse`}></div>
      <div className={`absolute bottom-10 right-10 w-96 h-96 ${
        isDark ? 'bg-purple-600/10' : 'bg-purple-400/20'
      } blur-[120px] rounded-full animate-pulse`} style={{ animationDelay: '700ms' }}></div>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] ${
        isDark ? 'bg-cyan-500/5' : 'bg-cyan-300/15'
      } blur-[150px] rounded-full animate-pulse`} style={{ animationDelay: '1400ms' }}></div>
      
      {/* Mesh Gradient Overlay for Light Mode */}
      {!isDark && (
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-100/30 to-transparent opacity-50"></div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
        
        {/* 2. Profile Image with Clean Effect */}
        <div className="relative group">
          <div className={`absolute -inset-2 bg-gradient-to-r ${
            isDark ? 'from-blue-600 via-purple-600 to-cyan-500' : 'from-blue-500 via-purple-500 to-pink-500'
          } rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-all duration-1000`}></div>
          <div className={`relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 ${
            isDark ? 'border-white/10' : 'border-white/80 shadow-[0_0_40px_rgba(0,0,0,0.1)]'
          } shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:rotate-2`}>
            <img
              className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              src={profileImage}
              alt="Dipesh Chaudhary"
            />
          </div>
        </div>

        {/* 3. Text Content with Better Hierarchy */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-6">
          <div className="space-y-3">
            <span className={`${
              isDark ? 'text-blue-400' : 'text-blue-600'
            } font-mono text-sm md:text-base tracking-[0.2em] uppercase font-bold`}>
              Available for work
            </span>
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black ${
              isDark ? 'text-white' : 'text-gray-900'
            } leading-[1.1] tracking-tight`}>
              Hi, I'm <span className={`text-transparent bg-clip-text ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400' 
                  : 'bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600'
              }`}>Dipesh.</span>
            </h1>
          </div>

          <div className="flex flex-col space-y-4">
            <h2 className={`text-2xl md:text-4xl font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
              Frontend <span className={`${isDark ? 'text-gray-500' : 'text-gray-400'} font-light`}>&</span> UI/UX Designer
            </h2>
            <p className={`max-w-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} text-lg md:text-xl leading-relaxed`}>
              I craft <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium`}>high-performance</span> digital experiences where 
              clean code meets intuitive user interface design.
            </p>
          </div>

          {/* 4. Action Buttons (Modern UI Style) */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className={`group relative px-10 py-4 ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500' 
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
              } text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 active:scale-95 overflow-hidden`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className={`px-10 py-4 ${
                isDark 
                  ? 'bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-white/40' 
                  : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50 hover:border-blue-300 shadow-lg'
              } font-bold rounded-xl border-2 transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95`}
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