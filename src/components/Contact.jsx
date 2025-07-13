import React from 'react';

const Contact = () => {
  return (
    <div className="w-full py-20 px-6 font-sans  text-white" id="contact">
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Contact Me</h2>
        <p className="text-sm md:text-base pt-2 text-gray-300">Get in touch</p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-28 mt-14 max-w-4xl mx-auto">
        {/* Basic Info */}
        <div className="text-lg flex flex-col gap-4">
          <p>📧 Email: chaudharydipesh9765@gmail.com</p>
          <p>📞 Phone: +977 9825382298</p>
          <p>📌 Location: Kathmandu, Nepal</p>
        </div>

        {/* Social Links */}
        <div className="text-lg flex flex-col gap-4">
          <p className="flex items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="w-6 h-6"
            />
            <a
              href="https://www.linkedin.com/in/dipesh-chaudhary-028a40341/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/dipesh-chaudhary-028a40341
            </a>
          </p>

          <p className="flex items-center gap-3">
            <img
              src="https://www.svgrepo.com/show/475654/github-color.svg"
              alt="GitHub"
              className="w-6 h-6"
            />
            <a
              href="https://github.com/dipeshch98"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/dipeshch98
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
