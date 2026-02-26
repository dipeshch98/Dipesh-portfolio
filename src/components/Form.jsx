import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useTheme } from '../context/ThemeContext';

function ContactForm() {
  const { isDark } = useTheme();
  const [state, handleSubmit] = useForm("xojnrlwp");

  if (state.succeeded) {
    return (
      <div className={`flex flex-col items-center justify-center h-full p-8 text-center`}>
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Message Sent Successfully!</h3>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-sm mb-8`}>
          Thank you for reaching out. I've received your message and will get back to you shortly.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="full-name" className={`flex items-center gap-2 text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Full Name
          </label>
          <input
            id="full-name"
            type="text"
            name="name"
            placeholder="John Doe"
            required
            className={`w-full px-4 py-3.5 rounded-xl border outline-none transition-all duration-300 shadow-sm ${isDark
              ? 'bg-[#1a1a1a]/50 border-white/10 text-white focus:border-blue-500 focus:bg-[#1a1a1a] focus:ring-4 focus:ring-blue-500/10'
              : 'bg-white border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
              }`}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className={`flex items-center gap-2 text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="john@example.com"
            required
            className={`w-full px-4 py-3.5 rounded-xl border outline-none transition-all duration-300 shadow-sm ${isDark
              ? 'bg-[#1a1a1a]/50 border-white/10 text-white focus:border-blue-500 focus:bg-[#1a1a1a] focus:ring-4 focus:ring-blue-500/10'
              : 'bg-white border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
              }`}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 text-xs mt-1 font-medium"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col space-y-2">
        <label htmlFor="message" className={`flex items-center gap-2 text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="How can I help you today?"
          required
          className={`w-full flex-1 px-4 py-4 rounded-xl border outline-none transition-all duration-300 shadow-sm resize-none min-h-[150px] ${isDark
            ? 'bg-[#1a1a1a]/50 border-white/10 text-white focus:border-blue-500 focus:bg-[#1a1a1a] focus:ring-4 focus:ring-blue-500/10'
            : 'bg-white border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
            }`}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-xs mt-1 font-medium"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden ${state.submitting
          ? 'bg-gray-500 cursor-not-allowed opacity-70'
          : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-xl shadow-blue-500/25 active:scale-[0.98]'
          }`}
      >
        <span className="relative z-10 flex items-center gap-2">
          {state.submitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            <>
              Send Message
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </span>
        <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
      </button>
    </form>
  );
}

export default ContactForm;
