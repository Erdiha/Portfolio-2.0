import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

function Hero() {
  const counterRef = useRef(0);

  const heroParagraph = () => {
    const store: any = [];
    const word: any = [
      'Somehow,',
      'Jobs,',
      'Get,',
      'Done,',
      'When,',
      'I am around.',
    ];
    word.forEach((item: string, index: number) => {
      store.push(
        <span key={index} className={`p-2  md:z-50  w-full `}>
          {item.toUpperCase()}
        </span>
      );
    });
    return store;
  };

  let store: any = [];
  const heroBackground = () => {
    for (let index = 0; index < 200; index++) {
      store.push(
        <span
          key={index}
          className={`hero-item z-[30] bg-custom-blue  w-0
          shadow-2xl transition-all duration-[1s] ease-out `}></span>
      );
    }
    return store;
  };

  useEffect(() => {
    let counter = 1;
    const getHeroItem = document.querySelectorAll('.hero-item')!;
    getHeroItem?.forEach((item: any, index: number) => {
      let scaleItems = setTimeout(
        () => {
          item.classList.add('activehero');
          clearTimeout(scaleItems);
        },

        2000 + counter
      );

      counter += 8;
    });
  }, []);

  return (
    <div
      className=" hero-wrapper min-h-[80vh] w-full flex items-center flex-col justify-center 
      relative overflow-x-hidden">
      <Image
        className="imgContainer opacity-50"
        alt=""
        fill
        src="/bg.jpg"></Image>
      <section
        className=" md:w-[50rem]   relative min-h-[50%] border-l-4 border-custom-blue md:border-none
        text-4xl grid grid-rows-5 drop-shadow-2xl   items-center justify-center bg-gradient-to-r md:from-red-600 to-transparent
         transition-all duration-[1000ms] ease-in-out ">
        {heroParagraph()}
        <div
          className="absolute moving-hero  md:grid grid-cols-[1fr] h-full
          w-[50%] hidden  left-0 right-0 mx-auto 
        transition-all duration-[4s] ease-in-out 
        ">
          {heroBackground()}
        </div>
      </section>
    </div>
  );
}

export default Hero;

//  <span
//       id="arrow-button"
//       className=" arrw  text-center animate-bounce opacity-80 z-50 w-fit h-fit p-2
//        text-orange-500 border-2 border-orange-200 hidden
//     transition-all  ease-in-out rounded-full duration-200
//      absolute md:flex justify-center -bottom-[7rem]">
//       {' '}
//       Dont Click Me
//     </span>
// document
//   .getElementById('arrow-button')
//   ?.addEventListener('mouseenter', (e) => {
//     const getArrow = document.getElementById('arrow-button')!;
//     let sign: number;
//     const sassyArrow = [
//       'Geez I said No!',
//       'Annoying',
//       "I should've guessed",
//       'Arent you tired?',
//       'Just Scroll please',
//       'Goodies down below',
//       'Okayyy We are Done!',
//     ];

//     if (getArrow) {
//       if (counterRef.current === sassyArrow.length - 1) {
//         getArrow.innerHTML = sassyArrow[sassyArrow.length - 1];

//         getArrow.style.rotate = `0deg`;
//         getArrow.style.left = 0 + 'px';
//         getArrow.style.top = 'auto';
//         getArrow.classList.add('-bottom-[7rem]');
//       } else {
//         counterRef.current = counterRef.current + 1;
//         counterRef.current % 2 === 0 ? (sign = -1) : (sign = 1);
//         getArrow.style.rotate = `${Math.random() * 90}deg`;
//         getArrow.style.left = sign * Math.random() * 400 + 'px';
//         getArrow.style.top = Math.random() * 400 + 'px';
//         getArrow.innerHTML = sassyArrow[counterRef.current];
//       }
//     }
//   });
