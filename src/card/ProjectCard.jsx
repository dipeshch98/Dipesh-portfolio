import React from 'react';

const ProjectCard = ({ image, title, description, link, github }) => {
  return (
    <div className="w-150 border rounded-lg shadow-md p-4 text-left">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
      <div className='flex flex-col'>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-white hover:text-blue-600 hover:underline"
        >
          🔗 Visit Project
        </a>
        {github && github.trim() !== "" && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-white hover:text-blue-600 hover:underline"
          >
            💻 Github Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
