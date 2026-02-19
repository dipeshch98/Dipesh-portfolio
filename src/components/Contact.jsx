import React from 'react';

const Contact = () => {
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
    <section className="w-full py-24 bg-[#050505] px-6 text-white" id="contact">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's <span className="text-blue-500">Connect</span></h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400">Currently open to new opportunities and collaborations.</p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center p-6 bg-[#111] border border-white/5 rounded-2xl transition-all duration-300 hover:border-blue-500/50 hover:bg-[#161616] group ${item.color}`}
            >
              <div className="text-3xl mr-5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">{item.label}</p>
                <p className="text-sm md:text-base font-medium text-gray-200 group-hover:text-inherit transition-colors">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Minimal Footer */}
        <div className="mt-24 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Dipesh Chaudhary. Built with React & Tailwind.</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;