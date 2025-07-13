import React from 'react';

const ProjectCard = ({ image, title, description, link, github }) => {
  return (
    <div className="w-80 md:w-96 border rounded-lg shadow-md p-4 text-left bg-white dark:bg-gray-800">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
      <div className="flex flex-col">
        {link && link.trim() !== "" && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-500 hover:underline"
          >
            🔗 Visit Project
          </a>
        )}
        {github && github.trim() !== "" && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-500 hover:underline"
          >
            💻 GitHub Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
