import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };
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
                    className={`flex items-center p-4 ${
                      isDark ? 'bg-[#111] border-white/5 hover:bg-[#161616]' : 'bg-white border-gray-200 hover:bg-gray-100'
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
          <div className={`${
            isDark 
              ? 'bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border-blue-500/20' 
              : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-blue-200'
          } border-2 rounded-2xl p-8 shadow-xl`}>
            <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Send a Message 💬
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mb-6`}>
              Quick message? Drop it here!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl ${
                    isDark 
                      ? 'bg-black/40 border-blue-500/30 text-white placeholder-gray-400 focus:border-purple-500' 
                      : 'bg-white/80 border-blue-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                  } border-2 outline-none transition-all duration-200 backdrop-blur-sm focus:shadow-lg`}
                  placeholder="👤 Your Name"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl ${
                    isDark 
                      ? 'bg-black/40 border-blue-500/30 text-white placeholder-gray-400 focus:border-purple-500' 
                      : 'bg-white/80 border-blue-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                  } border-2 outline-none transition-all duration-200 backdrop-blur-sm focus:shadow-lg`}
                  placeholder="📧 Your Email"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className={`w-full px-4 py-3 rounded-xl ${
                    isDark 
                      ? 'bg-black/40 border-blue-500/30 text-white placeholder-gray-400 focus:border-purple-500' 
                      : 'bg-white/80 border-blue-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                  } border-2 outline-none transition-all duration-200 resize-none backdrop-blur-sm focus:shadow-lg`}
                  placeholder="✍️ Your Message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 rounded-xl font-bold text-white transition-all duration-300 shadow-lg ${
                  isSubmitting 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 active:scale-95'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message 
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                )}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border-2 border-green-400 rounded-xl p-3 text-green-400 text-center font-semibold flex items-center justify-center gap-2 animate-pulse">
                  <span className="text-xl">✓</span>
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;