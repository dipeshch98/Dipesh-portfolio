import React from 'react';
import { useTheme } from '../context/ThemeContext';
import ContactForm from './Form';

const Contact = () => {
  const { isDark } = useTheme();

  const contactLinks = [
    {
      label: "Email",
      value: "chaudharydipesh9765@gmail.com",
      icon: "📧",
      link: "mailto:chaudharydipesh9765@gmail.com",
      color: "hover:text-blue-500"
    },
    {
      label: "LinkedIn",
      value: "Dipesh Chaudhary",
      icon: "🔗",
      link: "https://www.linkedin.com/in/dipesh-chaudhary-028a40341/",
      color: "hover:text-blue-500"
    },
    {
      label: "GitHub",
      value: "dipeshch98",
      icon: "💻",
      link: "https://github.com/dipeshch98",
      color: "hover:text-blue-500"
    },
    {
      label: "Behance",
      value: "dipeshch98",
      icon: "🎨",
      link: "https://www.behance.net/dipeshch98",
      color: "hover:text-blue-500"
    },
    {
      label: "Dribbble",
      value: "dipesh-ch",
      icon: "🏀",
      link: "https://dribbble.com/dipesh-ch",
      color: "hover:text-blue-500"
    },
    {
      label: "Location",
      value: "Kathmandu, Nepal",
      icon: "📌",
      link: "#",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <section className={`w-full py-24 ${isDark ? 'bg-[#050505] text-white' : 'bg-white text-gray-900'} px-6 transition-colors duration-300`} id="contact">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Let's <span className="text-blue-500">Connect</span></h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-lg`}>Currently open to new opportunities and collaborations.</p>
        </div>

        {/* Contact Links - 2 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {contactLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center p-5 ${
                isDark
                  ? 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] hover:border-blue-500/30'
                  : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-blue-300 shadow-sm hover:shadow-md'
              } border rounded-2xl transition-all duration-300 group ${item.color}`}
            >
              <div className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-xs uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-400'} font-bold mb-1`}>
                  {item.label}
                </p>
                <p className={`text-sm font-medium truncate ${isDark ? 'text-gray-200' : 'text-gray-700'} group-hover:text-inherit transition-colors`}>
                  {item.value}
                </p>
              </div>
              <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="flex justify-center mb-16">
          <a
            href="mailto:chaudharydipesh9765@gmail.com"
            className={`group inline-flex items-center justify-center gap-3 px-10 py-4 font-bold rounded-xl transition-all duration-300 active:scale-95 ${
              isDark
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40'
                : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Me an Email
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div> */}

        {/* Contact Form */}
        <div className={`${
          isDark
            ? 'bg-gradient-to-br from-[#0a0a0a] to-[#111] border-white/[0.06]'
            : 'bg-gradient-to-br from-gray-50 to-white border-gray-200 shadow-sm'
        } border rounded-2xl p-8 md:p-10 max-w-3xl mx-auto`}>
          <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Or drop a message
          </h3>
          <p className={`${isDark ? 'text-gray-500' : 'text-gray-500'} text-sm mb-6`}>
            Fill out the form and I'll get back to you as soon as possible.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
