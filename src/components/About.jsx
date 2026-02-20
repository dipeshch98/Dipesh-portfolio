import React from 'react';
import aboutImage from '../images/about.jpg';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();
  
  const floatingIcons = [
    { 
      src: "https://www.svgrepo.com/show/354113/nextjs-icon.svg", 
      alt: "Next.js",
      position: "top-10 left-10",
      delay: "0s"
    },
    { 
      src: "https://www.svgrepo.com/show/452092/react.svg", 
      alt: "React",
      position: "top-20 right-16",
      delay: "1s"
    },
    { 
      src: "https://www.svgrepo.com/show/448222/figma.svg", 
      alt: "Figma",
      position: "bottom-32 left-20",
      delay: "2s"
    },
    { 
      src: "https://www.svgrepo.com/show/374118/tailwind.svg", 
      alt: "Tailwind",
      position: "bottom-20 right-10",
      delay: "1.5s"
    },
    { 
      src: "https://www.svgrepo.com/show/353925/javascript.svg", 
      alt: "JavaScript",
      position: "top-1/3 left-8",
      delay: "0.5s"
    },
    { 
      src: "https://www.svgrepo.com/show/452185/css-3.svg", 
      alt: "CSS3",
      position: "top-2/3 right-12",
      delay: "2.5s"
    }
  ];
  
  return (
    <section className={`relative w-full overflow-hidden ${isDark ? 'bg-[#0a0a0a] text-white' : 'bg-gray-100 text-gray-900'} py-24 md:py-32 px-6 transition-colors duration-300`} id="about">
      
      {/* Floating Tech Icons */}
      {floatingIcons.map((icon, index) => (
        <div
          key={index}
          className={`absolute ${icon.position} opacity-10 pointer-events-none hidden lg:block`}
          style={{
            animation: `float 6s ease-in-out infinite`,
            animationDelay: icon.delay
          }}
        >
          <img 
            src={icon.src} 
            alt={icon.alt} 
            className="w-16 h-16 md:w-20 md:h-20 filter grayscale"
          />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) rotate(-5deg);
          }
          75% {
            transform: translateY(-15px) rotate(3deg);
          }
        }
      `}</style>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-blue-500">Me</span></h2>
          <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Decorative Image Wrapper with Orbiting Icons */}
          <div className="relative">
            {/* Background geometric shape for UI flair */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-blue-500 rounded-tl-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-blue-500 rounded-br-3xl"></div>
            
            {/* Orbiting Small Icons around Image */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
              <img src="https://www.svgrepo.com/show/452092/react.svg" alt="React" className="w-8 h-8" />
            </div>
            
            <div className="absolute top-1/4 -right-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center" style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '1s' }}>
              <img src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="Tailwind" className="w-8 h-8" />
            </div>
            
            <div className="absolute bottom-1/4 -left-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center" style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '2s' }}>
              <img src="https://www.svgrepo.com/show/448222/figma.svg" alt="Figma" className="w-8 h-8" />
            </div>
            
            <div className="relative w-64 h-80 md:w-80 md:h-[450px] overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:rotate-2">
              <img
                className="w-full h-full object-cover"
                src={aboutImage}
                alt="Dipesh Chaudhary Portrait"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-[#0a0a0a]' : 'from-gray-100'} via-transparent to-transparent opacity-60`}></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col space-y-8 max-w-2xl text-center lg:text-left">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-blue-400">
                Crafting seamless digital experiences with modern design.
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-lg leading-relaxed`}>
                Hi, I'm <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium`}>Dipesh Chaudhary</span>. 
                I create clean, user-friendly websites and applications, ensuring they are visually appealing and easy to navigate. 
                I am passionate about combining design and development to build intuitive digital experiences.
              </p>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-lg leading-relaxed`}>
                My focus is on creating designs that put the user first, backed by strong, modern web technologies. I work with tools like NextJs , React and Tailwind CSS to deliver high-performance, accessible solutions.
              </p>
            </div>

            {/* Quick Skills Grid (UI/UX Best Practice) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
              {['NextJs', 'Tailwind CSS', 'React', 'UI/UX Design', 'Figma', 'Responsive Dev'].map((skill) => (
                <div key={skill} className={`flex items-center gap-2 text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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