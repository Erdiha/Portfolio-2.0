import React, { useState } from 'react';
import Cards from './Cards';
import { allProj } from '../data-types/data';

function Projects() {
  return (
    <div
      id="projects"
      className=" scroll-mt-[6rem] 
    transition-all duration-300 ease-in-out
     flex flex-col justify-center p-5 items-center min-w-full ">
      <div className="text-3xl md:text-5xl  font-bold  min-w-[10rem] m-2 my-4 p-2 border-b-4 border-orange-500 ">
        PROJECTS
      </div>

      <section
        className="flex relative flex-row flex-wrap min-w-[40%] md:max-w-[70%] w-full gap-y-4 justify-around
       items-center">
        {allProj?.map((item: any, index: number) => {
          return <Cards key={index} {...item} />;
        })}
      </section>
    </div>
  );
}

export default Projects;
