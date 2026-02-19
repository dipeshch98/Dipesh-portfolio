import React from "react";

const ProjectCard = ({ image, title, description, link, github }) => {
  return (
    <div className="group flex flex-col h-full bg-[#111111] border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]">
      
      {/* Image Container with Zoom Effect */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        
        {/* flex-grow here pushes the buttons to the bottom regardless of text length */}
        <p className="mt-3 text-gray-400 text-sm md:text-base leading-relaxed flex-grow">
          {description}
        </p>

        {/* Buttons Section - Always pinned to bottom */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          {link && link.trim() !== "" && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex justify-center items-center px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-500 transition-all duration-300 active:scale-95"
            >
              Live Demo
            </a>
          )}
          {github && github.trim() !== "" && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex justify-center items-center px-4 py-2.5 bg-[#222] text-white text-sm font-semibold border border-white/10 rounded-lg hover:bg-[#333] transition-all duration-300 active:scale-95"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;