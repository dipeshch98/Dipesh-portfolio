import React from "react";
import ProjectCard from "../card/ProjectCard";
import rkworkshopImg from "../images/rkworkshop.png";
import portfolioImg from "../images/my_portfolio.png";
import randomBlinkingImg from "../images/randomBlinking.png";
import webloftimg from "../images/webloft.png";
import { useTheme } from "../context/ThemeContext";

const projectData = [
  {
    image: webloftimg,
    title: "Webloft Digital",
    description: "Webloft is a full-stack web development agency building high-performance websites and scalable applications.",
    link: "https://webloft.digital/",
    github: "https://github.com/dipeshch98/webloft_Frontend-tsx-",
  },
  {
    image: rkworkshopImg,
    title: "RK Workshop",
    description: "A professional service showcase for a local motor repair shop, featuring location and contact integration.",
    link: "https://rk-workshop.netlify.app/",
    github: "https://github.com/dipeshch98/RK-WORKSHOP",
  },
  {
    image: portfolioImg,
    title: "My Portfolio Website",
    description: "A personal portfolio showcasing my projects and skills. This description is intentionally a bit longer to test the height alignment of our grid system.",
    link: "https://chaudharydipesh.netlify.app/",
    github: "https://github.com/dipeshch98/Dipesh-portfolio",
  },
  {
    image: randomBlinkingImg,
    title: "Random Blinking Grid",
    description: "An experimental animation project.",
    link: "https://random-blinking-grid.netlify.app/",
    github: "https://github.com/dipeshch98/Task4",
  },
];

const Projects = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="projects" className={`w-full ${isDark ? 'bg-[#080808]' : 'bg-gray-50'} py-24 px-6 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>My Works</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Alternating Layout: Image Left/Right */}
        <div className="space-y-16 md:space-y-24">
          {projectData.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center ${isDark ? 'bg-[#111] border-white/10' : 'bg-white border-gray-200'} border rounded-2xl p-6 md:p-8 group hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover aspect-video transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                  <h3 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'} transition-colors duration-300`}>
                    {project.title}
                  </h3>
                  
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-base md:text-lg leading-relaxed`}>
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    {project.link && project.link.trim() !== "" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-500 transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg"
                      >
                        Live Demo
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    )}
                    {project.github && project.github.trim() !== "" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-6 py-3 ${isDark ? 'bg-[#222] border-white/10 text-white hover:bg-[#333]' : 'bg-gray-100 border-gray-300 text-gray-900 hover:bg-gray-200'} text-sm font-semibold border rounded-lg transition-all duration-300 active:scale-95`}
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;