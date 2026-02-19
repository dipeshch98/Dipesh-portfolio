import React from 'react';

const ServiceCard = (props) => {
  return (
    <div className="w-72 md:w-80 lg:w-96 shadow-2xl rounded-2xl overflow-hidden bg-slate-800/50 border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-56 md:h-60 object-contain p-6"
      />
      <div className="px-6 py-5 text-center text-lg md:text-xl font-semibold bg-slate-900/50">
        {props.name}
      </div>
    </div>
  );
};

export default ServiceCard;
