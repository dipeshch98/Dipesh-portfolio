import React from 'react';

const ServiceCard = (props) => {
  return (
    <div className="w-72 md:w-80 shadow-lg rounded-xl overflow-hidden hover:bg-amber-50 hover:text-black transition transform hover:scale-105">
      <img
        src={props.image}
        alt="Image"
        className="w-full h-48 object-contain p-4"
      />
      <div className="px-4 py-3 text-center text-lg font-semibold">
        {props.name}
      </div>
    </div>
  );
};

export default ServiceCard;
