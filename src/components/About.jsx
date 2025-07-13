import React from 'react';

const About = () => {
  return (
    <div className="w-full flex justify-center flex-col px-6 py-30" id="about">
      {/* Heading */}
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-sans font-semibold">About Me</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 max-w-6xl mx-auto">
        {/* Image */}
        <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-md">
          <img
            className="w-full h-full object-cover"
            src="src/images/about.jpg"
            alt="About"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col text-center md:text-left font-sans max-w-xl">
          <p className="text-base md:text-lg leading-relaxed">
            Hello! I'm Dipesh Chaudhary, a passionate frontend developer with a strong interest in crafting clean, responsive, and user-friendly web interfaces. I enjoy turning ideas into real-world websites using modern tools like React and Tailwind.
            <br /><br />
            My goal is to become a highly skilled frontend developer, continuously improving my design and development skills to build beautiful, accessible, and performance-optimized web applications.
          </p>

          {/* Resume Button */}
          <div className="mt-6">
            <a
              href="/CH_DIPESH.pdf"
              download
              className="inline-block px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
