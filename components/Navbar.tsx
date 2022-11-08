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
    
  //handle the scrool background color change
  window.addEventListener("scroll", (e) => {
    const getNavbarWrapper = document.getElementById('navbar-wrapper')!;
    const getHamburgerWrapper = document.querySelector('.hamburger-wrapper')!;
     const scroolY = window?.scrollY;
    if (scroolY > 0) {
      getNavbarWrapper.classList.add(
        'md:bg-black/70',
        'text-custom-white',
        'bg-black/40',
      );
    }
    else {
      getNavbarWrapper.classList.remove(
        'md:bg-black/70',
        'text-custom-white',
        'bg-black/40'
      );
    }
      
      getHamburgerWrapper.classList.add("border-white/70", "bg-custom-white");
    
  })
  })

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
          <li onClick={() => setBurgerClick((prev) => !prev)}>HOME</li>
        </Link>
        <Link href="#projects" scroll={false}>
          <li onClick={() => setBurgerClick((prev) => !prev)}>PROJECTS</li>
        </Link>
        <Link href="#" scroll={false}>
          <li onClick={() => setBurgerClick((prev) => !prev)}>CONTACT</li>
        </Link>
      </ul>
    ) : (
      <span
          className="bg-gray-300 rounded-full md:h-[4rem] h-[3rem] w-[3rem]  md:w-[4rem] items-center 
        flex justify-center
      shadow-lg shadow-stone-400">
        eH
      </span>
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
         'active-icon'
       );
     }, 400);
   }, 1500);
 },[]);
  return (
    <div
      id="navbar-wrapper"
      className="w-full h-[6rem]  flex fixed z-[2]  justify-center nav-wrapper first-letter:transition-all duration-300 ease-in-out
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
        className="min-w-[60%] absolute bottom-0 md:grid grid-cols-3 duration-300
        md:text-3xl items-end hidden  transform transition-all opacity-0  px-2
      right-[10%] h-[5rem]">
        <Link href="/">
          <li className="mx-auto text-center cursor-pointer">HOME</li>
        </Link>
        <Link href="#projects" scroll={false}>
          <li className="mx-auto text-center cursor-pointer">PROJECTS</li>
        </Link>
        <Link href="#" scroll={false}>
          <li className="mx-auto text-center cursor-pointer">CONTACT</li>
        </Link>
      </ul>
      <div
        onClick={() => setBurgerClick((prev: boolean) => !prev)}
        className={`hamburger-wrapper absolute y w-10 border-8 cursor-pointer md:hidden
         border-custom-gray flex justify-center items-center h-10 right-5 rounded-full `}>
        <span
          className={`hamburger-item relative h-3 w-3 transition-rotate duration-600 ease-in-out ${
            burgerClick
              ? ' -rotate-90 bg-red-600  scale-[1.1] animate-spin'
              : 'rotate-0 bg-custom-gray animate-none'}`}></span>
      </div>
    </div>
  );
}

export default Navbar