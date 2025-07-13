import React from 'react';
import profileImage from '../images/profile.jpeg';

const Home = () => {
  return (
    <div
      className="flex flex-col md:flex-row pt-24 md:pt-10 justify-center items-center gap-10 md:gap-40 w-full h-screen px-6"
      id="home"
    >
      {/* Profile Image */}
      <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-md">
        <img
          className="w-full h-full object-cover"
          src={profileImage}
          alt="Profile"
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left font-sans max-w-xl">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-wide">
          Hi, I'm Dipesh <br />
          Chaudhary
        </h1>
        <p className="text-xl md:text-2xl py-2">Frontend Developer</p>
        <p className="py-3 text-base md:text-xl">
          Aspiring frontend developer with a strong interest in <br className="hidden md:block" />
          responsive design and modern web technologies.
        </p>
        <div onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="py-2">
          <button className="bg-blue-500 px-5 py-2 rounded-2xl text-white hover:bg-blue-600 transition tracking-wider">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
