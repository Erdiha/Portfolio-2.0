import React from 'react'
import { useEffect } from 'react';

function Section() {
    if (typeof window !== 'undefined') {
      const getCards = document.querySelectorAll('.cubes')!;
      const cardsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
              setTimeout(() => {
                entry.target.classList.toggle('active', entry.isIntersecting);
            },100)
            if (entry.isIntersecting) {
              console.log(entry);
              cardsObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 1,
        }
      );

      if (getCards) {
        getCards.forEach((c) => {
          cardsObserver.observe(c);
        });
      }
    }
    
  const bubbles: any = [];
  const sentences = [
    'SKILLS:',
    'REACT',
      'JAVASCRIPT',
    'TYPESCRIPT',
    'CSS & SCSS',
    'HTML',
    'RestAPIs',
    'TAILWIND',
    'NEXTJS',
  ];
  const createBubbles = () => {
    //console.log(sentences[0][0])

    let counter = 0;
    for (let i = 0; i < sentences.length; i++) {
      for (let j = 0; j < 10; j++) {
        counter += 1;
        let item: any = sentences[i][j];
        bubbles.push(
          <span
            key={counter}
            className={`
                   ${i === 0 ? 'text-red-500 mb-4 font-black' : 'text-black'}
                   ${item === undefined || item === ' '? ' bg-gray-600 ': 'bg-orange-100'}
                   ${j % 2 === 0 ? 'translate-x-[20vw]' : '-translate-x-[20vw]'}
                   opacity-0 transform transition-all duration-[1s] ease-in-out
                    rounded-lg cubes flex justify-center items-center font-bold text-2xl 
                    border-2  border-red-300  
                   `}>
            {item}
          </span>
        );
      }
    }
    return bubbles;
  };
  return (
    <div
      className="flex justify-center flex-col
      items-center
      min-h-[40vh]
     bg-gray-200">
      {/* <p className='absolute
          text-5xl
          '>With Help Of </p> */}
          <div id='tech-cubes' className=" min-w-[50vw] min-h-[50vh]  
      grid grid-cols-10 gap-x-[0px] gap-y-2 p-4 md:m-[4rem]">
        {createBubbles()}
      </div>
    </div>
  );
}

export default Section