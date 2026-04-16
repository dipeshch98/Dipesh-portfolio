import React from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Completed' },
    { value: '10+', label: 'Happy Clients' },
    { value: '5+', label: 'Technologies' },
  ];

  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Frontend Development',
      description: 'Building responsive, high-performance web apps with React, Next.js, and modern JavaScript.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'Crafting intuitive, visually compelling interfaces with Figma and modern design principles.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Performance Optimization',
      description: 'Ensuring blazing-fast load times through lazy loading, code splitting, and best practices.',
    },
  ];

  return (
    <section
      className={`relative w-full overflow-hidden ${
        isDark ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-gray-900'
      } py-24 md:py-32 px-6 transition-colors duration-300`}
      id="about"
    >
      {/* Subtle Background Glow */}
      <div
        className={`absolute top-0 left-1/4 w-[500px] h-[500px] ${
          isDark ? 'bg-blue-600/5' : 'bg-blue-400/10'
        } blur-[150px] rounded-full pointer-events-none`}
      ></div>
      <div
        className={`absolute bottom-0 right-1/4 w-[400px] h-[400px] ${
          isDark ? 'bg-purple-600/5' : 'bg-purple-400/10'
        } blur-[150px] rounded-full pointer-events-none`}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 md:mb-20">
          <span
            className={`${
              isDark ? 'text-blue-400' : 'text-blue-600'
            } font-mono text-sm tracking-[0.2em] uppercase font-bold mb-4`}
          >
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            About{' '}
            <span
              className={`text-transparent bg-clip-text ${
                isDark
                  ? 'bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400'
                  : 'bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600'
              }`}
            >
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Bio Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20 space-y-6">
          <h3
            className={`text-xl md:text-2xl font-semibold ${
              isDark ? 'text-blue-300' : 'text-blue-600'
            } leading-relaxed`}
          >
            Crafting seamless digital experiences with modern design & clean code.
          </h3>
          <p
            className={`${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } text-base md:text-lg leading-relaxed`}
          >
            Hi, I'm{' '}
            <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-semibold`}>
              Dipesh Chaudhary
            </span>
            — a passionate frontend developer and UI/UX designer based in Nepal. I create clean,
            user-friendly websites and applications that are visually appealing and intuitive to
            navigate. My focus is on combining design and development to build digital experiences
            that truly connect with users.
          </p>
          <p
            className={`${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } text-base md:text-lg leading-relaxed`}
          >
            I work with modern tools like{' '}
            <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium`}>
              React, Next.js, Tailwind CSS, and Figma
            </span>{' '}
            to deliver high-performance, accessible solutions. Every project I take on is driven by a
            commitment to pixel-perfect design and robust, maintainable code.
          </p>
        </div>

        {/* Stats Row */}
        {/* <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20 p-6 md:p-8 rounded-2xl ${
            isDark
              ? 'bg-white/[0.03] border border-white/[0.06]'
              : 'bg-white border border-gray-200 shadow-sm'
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <span
                className={`text-3xl md:text-4xl font-black ${
                  isDark
                    ? 'text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-cyan-300'
                    : 'text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-cyan-500'
                } group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.value}
              </span>
              <span
                className={`text-xs md:text-sm mt-2 font-medium tracking-wide uppercase ${
                  isDark ? 'text-gray-500' : 'text-gray-500'
                }`}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div> */}

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 md:mb-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`group relative p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? 'bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-blue-500/30'
                  : 'bg-white border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-lg'
              }`}
            >
              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDark ? 'bg-blue-500/5' : 'bg-blue-50/50'
                }`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                    isDark
                      ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20'
                      : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                  }`}
                >
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? 'text-gray-500' : 'text-gray-500'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Tags + Resume Button */}
        <div className="flex flex-col items-center space-y-8">
          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React',
              'Next.js',
              'Tailwind CSS',
              'JavaScript',
              'TypeScript',
              'Figma',
              'UI/UX Design',
              'Responsive Design',
              'Git & GitHub',
            ].map((skill) => (
              <span
                key={skill}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default hover:scale-105 ${
                  isDark
                    ? 'bg-white/[0.05] text-gray-300 border border-white/[0.08] hover:border-blue-500/40 hover:text-blue-300'
                    : 'bg-gray-100 text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Resume Button */}
          <a
            href="/dipesh_uiux_frontend.pdf"
            download
            className={`group inline-flex items-center justify-center gap-3 px-8 py-4 font-bold rounded-xl transition-all duration-300 active:scale-95 ${
              isDark
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40'
                : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30'
            }`}
          >
            <svg
              className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;