import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { atomWindowSize } from '../recoilAtom/AtomContext';
import { useRecoilValue, useRecoilState } from 'recoil';

function Navbar() {
  const [burgerClick, setBurgerClick] = useState(false);
  const [windowSize, SetWindowSize] = useRecoilState(atomWindowSize);

  const handleResize = () => {
    SetWindowSize(window.innerWidth);
    const getNavbarIcon = document.getElementById('navbar-icon')!;
    if (window.innerWidth > 768) {
      setBurgerClick(false);
      getNavbarIcon.classList.add('deactive-icon');
    } else {
      getNavbarIcon.classList.add('active-icon');
    };
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize);
  };

  useEffect(() => {
    const getUl = document.getElementById('navbar-ul')!;
    setTimeout(() => {
        getUl?.classList.remove('opacity-0');
        getUl?.classList.add('opacity-1');
    }, 2000);
  }, []);

  const populateBurgerMenu = () => {
    return burgerClick ? (
      <ul
      
        className="w-full h-full  flex 
        bg-gray-400  'text-orange-700'
       justify-around items-center flex-col">
        <Link href="/">
          {' '}
          <li>HOME</li>
        </Link>
        <Link href="/projects">
          <li>PROJECTS</li>
        </Link>
        <Link href="/contact">
          {' '}
          <li>CONTACT</li>
        </Link>
      </ul>
    ) : (
      <span className='bg-gray-300 rounded-full p-4 shadow-lg shadow-stone-400'>eH</span>
    );
  };
 useEffect(() => {
   const getIcon = document.getElementById('navbar-icon')!;
   getIcon?.classList?.add('motion-safe:animate-bounce');
   setTimeout(() => {
     getIcon?.classList?.remove('motion-safe:animate-bounce');
     setTimeout(() => {
       getIcon?.classList.remove(
         'active-icon',
         'bg-custom-gray',
         'font-semibold',
       );
       getIcon?.classList.add(
         'md:-translate-x-[40vw]',
         'md:-rotate-[1440deg]',
         'md:font-black',
         'border-black',
         'border-b-4',
         'active-icon'
       );
     }, 400);
   }, 1500);
 },[]);
  return (
    <div
      className="w-full h-[6rem]  flex fixed z-[2]  justify-center rounded nav-wrapper
      items-center md:items-baseline
    ">
      <span
        id="navbar-icon"
        className={`transform
         bg-custom-white
        ${burgerClick ? 'active-icon' : 'deactive-icon'}
        flex justify-center items-center z-[30] ease-in-out 
        transition-all duration-700
        relative font-bold text-orange-700`}>
        {populateBurgerMenu()}
      </span>
      <ul
        id="navbar-ul"
        className="w-[50%] absolute bottom-0 md:grid grid-cols-3 duration-300
        md:text-3xl items-end hidden  transform transition-all opacity-0
      right-[10%] h-[5rem]">
        <li className="mx-auto cursor-pointer">HOME</li>
        <li className="mx-auto cursor-pointer">PROJECTS</li>
        <li className="mx-auto cursor-pointer">CONTACT</li>
      </ul>
      <div
        onClick={() => setBurgerClick((prev: boolean) => !prev)}
        className={`hamburger-wrapper absolute y w-10 border-8
        cursor-pointer md:hidden
         border-custom-gray 
         flex justify-center items-center
        h-10 right-5   rounded-full `}>
        <span
          className={`hamburger-item relative  ${
            burgerClick
              ? ' -rotate-90 bg-red-600  scale-[1.1] animate-spin'
              : 'rotate-0 bg-custom-gray animate-none'
          }  h-3 w-3  transition-rotate duration-600 ease-in-out`}></span>
      </div>
    </div>
  );
}

export default Navbar