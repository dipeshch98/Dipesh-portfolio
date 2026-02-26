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
      color: "hover:text-blue-400"
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
      color: "hover:text-gray-400"
    },
    {
      label: "Location",
      value: "Kathmandu, Nepal",
      icon: "📌",
      link: "#",
      color: "hover:text-red-400"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div className={`${isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-gray-50 border-gray-200'} border rounded-2xl p-8`}>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Get in touch</h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6 leading-relaxed`}>
                Have a project in mind? Feel free to reach out through any of these channels.
              </p>

              <div className="space-y-4">
                {contactLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 ${isDark ? 'bg-[#111] border-white/5 hover:bg-[#161616]' : 'bg-white border-gray-200 hover:bg-gray-100'
                      } border rounded-xl transition-all duration-300 hover:border-blue-500/50 group ${item.color}`}
                  >
                    <div className="text-2xl mr-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className={`text-xs uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-500'} font-bold mb-1`}>
                        {item.label}
                      </p>
                      <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'} group-hover:text-inherit transition-colors`}>
                        {item.value}
                      </p>
                    </div>
                    <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`flex flex-col h-full ${isDark ? 'bg-gradient-to-br from-[#0a0a0a] to-[#111] border-white/10' : 'bg-gradient-to-br from-gray-50 to-white border-gray-200'} border rounded-2xl p-8 shadow-2xl`}>
            <ContactForm />
          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;
