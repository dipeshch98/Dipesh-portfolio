import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { isDark } = useTheme();
  
  const SkillCard = ({ imgLink, imgName }) => (
    <div className={`flex flex-col items-center justify-center p-6 ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-gray-200 hover:bg-gray-50'} border rounded-2xl hover:border-blue-500/50 transition-all duration-300 group`}>
      <img 
        src={imgLink} 
        alt={imgName} 
        className="w-12 h-12 md:w-16 md:h-16 object-contain mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300" 
      />
      <h3 className={`${isDark ? 'text-gray-400 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'} font-medium text-sm md:text-base`}>
        {imgName}
      </h3>
    </div>
  );
  const skills = [
    { imgLink: "https://www.svgrepo.com/show/353925/javascript.svg", imgName: "JavaScript" },
    { imgLink: "https://www.svgrepo.com/show/354113/nextjs-icon.svg", imgName: "Next.js" },
    { imgLink: "https://www.svgrepo.com/show/452092/react.svg", imgName: "React JS" },
    { imgLink: "https://www.svgrepo.com/show/374118/tailwind.svg", imgName: "Tailwind CSS" },
    { imgLink: "https://cdn-icons-png.flaticon.com/128/5968/5968672.png", imgName: "Bootstrap" },
    { imgLink: "https://www.svgrepo.com/show/452185/css-3.svg", imgName: "CSS3" },
    { imgLink: "https://www.svgrepo.com/show/448222/figma.svg", imgName: "Figma" },
    { imgLink: "https://www.svgrepo.com/show/374016/python.svg", imgName: "Python" },
    
  ];

  return (
    <section className={`w-full py-24 px-6 ${isDark ? 'bg-[#080808]' : 'bg-gray-50'} transition-colors duration-300`} id="skills">
      <div className="max-w-6xl mx-auto">
        
        {/* Simple Centered Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Skills</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mt-4 text-sm md:text-base`}>Tools and technologies I use to bring ideas to life.</p>
        </div>

        {/* The Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;