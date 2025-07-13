import React from 'react';
import Marquee from "react-fast-marquee";
import Card from '../card/Card';

const Skills = () => {
  return (
    <div className="w-full px-6 py-20 font-sans scroll-mt-20 md:scroll-mt-28" id="skills">
      {/* Title */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Skills</h2>
        <p className="text-sm md:text-base font-medium pt-2">My Technical Skills</p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto mt-10">
        <Card imgLink="https://www.svgrepo.com/show/353925/javascript.svg" imgName="JavaScript" />
        <Card imgLink="https://www.svgrepo.com/show/354259/react.svg" imgName="React JS" />
        <Card imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrWstRgfTNAS4rg4GQ3whlWmU7tXZu2ujhkHBWuka1HLrR27PdgFf1DMaG5JSWEskW-Cg&usqp=CAU" imgName="Tailwind CSS" />
        <Card imgLink="https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg" imgName="Bootstrap" />
        <Card imgLink="https://www.svgrepo.com/show/452185/css-3.svg" imgName="CSS" />
        <Card imgLink="https://www.svgrepo.com/show/448222/figma.svg" imgName="Figma" />
        <Card imgLink="data:image/webp;base64,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" imgName="Canvas" />
        <Card imgLink="https://www.svgrepo.com/show/374016/python.svg" imgName="Python" />
      </div>
    </div>
  );
};

export default Skills;
