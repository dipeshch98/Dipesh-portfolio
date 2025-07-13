import React, { useState } from "react";
import ProjectCard from "../card/ProjectCard";
import rkworkshopImg from "../images/rkworkshop.png";
import portfolioImg from "../images/portfolio.jpg";
import randomBlinkingImg from "../images/randomBlinking.png";

const projectData = [
  {
    image: rkworkshopImg,
    title: "RK Workshop",
    description:
      "A simple website for RK Workshop to showcase services, location, and contact details for a local motor repair shop.",
    link: "https://rk-workshop.netlify.app/",
    github: "https://github.com/dipeshch98/RK-WORKSHOP",
  },
  {
    image: portfolioImg,
    title: "My Portfolio Website",
    description:
      "A personal portfolio showcasing my projects, skills, and contact information in clean, responsive design.",
    link: "https://chaudharydipesh.netlify.app/",
    github: "https://github.com/dipeshch98/Dipesh-portfolio",
  },
  {
    image: randomBlinkingImg,
    title: "Random Blinking Grid",
    description:
      "Boxes randomly blink blue on the screen, showcasing animation with timing and randomness.",
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
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 font-sans text-center"
    >
      <h2 className="text-4xl font-extrabold text-white dark:text-gray-100">
        Projects
      </h2>
      <p className="mt-2 text-lg text-white dark:text-gray-300">
        Some of my recent work
      </p>

      <div className="flex justify-center items-center mt-12 gap-6">
        <button
          onClick={handlePrev}
          aria-label="Previous project"
          className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        >
          &#8592;
        </button>

        <ProjectCard {...projectData[current]} />

        <button
          onClick={handleNext}
          aria-label="Next project"
          className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Projects;
