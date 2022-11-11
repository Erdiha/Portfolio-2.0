import React from 'react';
import { ICard } from '../data-types/types';
import Image from 'next/image'


function Cards(props: ICard) {
  return (
    <section
      className="max-w-sm bg-custom-white rounded-lg border opacity-0  transition-all duration-500 ease-in-out
 border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className=" max-h-[20rem] max-w-auto rounded-t-lg"
          src={props.image}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </a>
        <p className="mb-3 min-h-[5rem] font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <div className="flex flex-row w-[70%] md:w-[50%] justify-between">
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center py-2 px-3 text-sm 
        font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-blue-800 focus:ring-4
        focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
         dark:focus:ring-blue-800">
            Visit Website
          </a>
          <a
            href={props.code}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center py-2 px-3 text-sm 
        font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4
        focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
         dark:focus:ring-blue-800">
            code
          </a>
        </div>
      </div>
    </section>
  );
}
export default Cards;