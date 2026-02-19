import React from "react";
import ProjectCard from "../card/ProjectCard";
import rkworkshopImg from "../images/rkworkshop.png";
import portfolioImg from "../images/portfolio.jpg";
import randomBlinkingImg from "../images/randomBlinking.png";
import webloftimg from "../images/webloft.png";

const projectData = [
  {
    image: webloftimg,
    title: "Webloft Digital",
    description: "Webloft is a full-stack web development agency building high-performance websites and scalable applications.",
    link: "https://webloft.digital/",
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
  return (
    <section id="projects" className="w-full bg-[#080808] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* grid-auto-rows-fr: This magic utility ensures every row 
            takes the height of the tallest item in that specific row.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-auto-rows-fr">
          {projectData.map((project, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col h-full bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
            >
              {/* ProjectCard needs to be styled to fill 100% height */}
              <div className="flex flex-col h-full">
                 <ProjectCard {...project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;