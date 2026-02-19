import React from 'react';
import aboutImage from '../images/about.jpg';

const About = () => {
  return (
    <section className="w-full bg-[#0a0a0a] text-white py-24 md:py-32 px-6" id="about">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-blue-500">Me</span></h2>
          <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Decorative Image Wrapper */}
          <div className="relative">
            {/* Background geometric shape for UI flair */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-blue-500 rounded-tl-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-blue-500 rounded-br-3xl"></div>
            
            <div className="relative w-64 h-80 md:w-80 md:h-[450px] overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:rotate-2">
              <img
                className="w-full h-full object-cover"
                src={aboutImage}
                alt="Dipesh Chaudhary Portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col space-y-8 max-w-2xl text-center lg:text-left">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-blue-400">
                Building digital products with a focus on user experience.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Hello! I'm <span className="text-white font-medium">Dipesh Chaudhary</span>. 
                I bridge the gap between complex backend logic and pixel-perfect frontend presentation. 
                With a deep love for clean code and aesthetic interfaces, I build websites that don't just work—they feel right.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                My approach is simple: <span className="italic">User-first design backed by robust modern technology.</span> 
                Whether it's React, Tailwind, or Figma, I choose the best tool for the job to ensure high performance and accessibility.
              </p>
            </div>

            {/* Quick Skills Grid (UI/UX Best Practice) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
              {['React', 'Tailwind CSS', 'JavaScript (ES6+)', 'UI/UX Design', 'Figma', 'Responsive Dev'].map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-sm md:text-base text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {skill}
                </div>
              ))}
            </div>

            {/* Resume Button */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/CH_DIPESH.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/20 active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="SystemUpdateAltIcon" /></svg>
                Download Resume
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;