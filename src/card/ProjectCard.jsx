import React from "react";

const ProjectCard = ({ image, title, description, link, github }) => {
  return (
    <div className="w-80 md:w-96 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-5 flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
        loading="lazy"
      />
      <h3 className="text-2xl font-semibold mt-5 text-white dark:text-gray-100">
        {title}
      </h3>
      <p className="mt-3 text-white dark:text-gray-300 text-base leading-relaxed">
        {description}
      </p>
      <div className="mt-auto pt-4 flex flex-col gap-2">
        {link && link.trim() !== "" && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit project: ${title}`}
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors duration-200"
          >
            🔗 Visit Project
          </a>
        )}
        {github && github.trim() !== "" && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View GitHub repository of ${title}`}
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors duration-200"
          >
            💻 GitHub Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
