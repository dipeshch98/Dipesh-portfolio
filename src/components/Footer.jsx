import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-slate-900 py-10 px-6 font-sans text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 bg-slate-900">

        <div className="text-2xl font-semibold text-center md:text-left cursor-pointer">
          <h1>
            Dipesh Chaudhary
          </h1>
          <p className='text-sm'>Frontend Developer</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-sm md:text-base">
          <p
            className="hover:underline cursor-pointer"
            onClick={() =>
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Service
          </p>
          <p
            className="hover:underline cursor-pointer"
            onClick={() =>
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Portfolio
          </p>
          <p
            className="hover:underline cursor-pointer"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Contact
          </p>
        </div>

        <div className="flex gap-6 items-center">
          <a href="https://github.com/dipeshch98" target="_blank" rel="noopener noreferrer">
            <img
              src="https://www.svgrepo.com/show/475654/github-color.svg"
              alt="GitHub"
              className="w-8 h-8 hover:scale-110 transition-transform"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/dipesh-chaudhary-028a40341/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.svgrepo.com/show/448234/linkedin.svg"
              alt="LinkedIn"
              className="w-8 h-8 hover:scale-110 transition-transform"
            />
          </a>

          <a
            href="https://www.instagram.com/chaudharii_dipesh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.svgrepo.com/show/452229/instagram-1.svg"
              alt="Instagram"
              className="w-8 h-8 hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
