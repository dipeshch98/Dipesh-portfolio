import React, { useState } from 'react';
import ProjectCard from '../card/ProjectCard';
import rkworkshopImg from '../images/rkworkshop.png';
import portfolioImg from '../images/portfolio.jpg';
import randomBlinkingImg from '../images/randomBlinking.png';

const projectData = [
  {
    image: rkworkshopImg,
    title: "RK Workshop",
    description: "A simple website for RK Workshop to showcase services, location, and contact details for a local motor repair shop.",
    link: "https://rk-workshop.netlify.app/",
    github: "https://github.com/dipeshch98/RK-WORKSHOP",
  },
  {
    image: portfolioImg,
    title: "My Portfolio Website",
    description: "A personal portfolio showcasing my projects, skills, and contact information in clean, responsive design.",
    link: "",
    github: "https://github.com/dipeshch98/Dipesh-portfolio",
  },
  {
    image: randomBlinkingImg,
    title: "Random Blinking Grid",
    description: "Boxes randomly blink blue on the screen, showcasing animation with timing and randomness.",
    link: "https://random-blinking-grid.netlify.app/",
    github: "https://github.com/dipeshch98/Task4",
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? projectData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === projectData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full py-20 font-sans text-center" id="projects">
      <h2 className="text-3xl md:text-4xl font-semibold">Projects</h2>
      <p className="text-sm md:text-base pt-2">Some of my recent work</p>

      <div className="flex justify-center items-center py-10 gap-5">
        <button onClick={handlePrev} className="text-2xl px-4">&#8592;</button>
        <ProjectCard {...projectData[current]} />
        <button onClick={handleNext} className="text-2xl px-4">&#8594;</button>
      </div>
    </div>
  );
};

export default Projects;
