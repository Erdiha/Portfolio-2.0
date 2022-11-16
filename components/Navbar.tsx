import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { atomNavbarItems, atomWindowSize } from '../recoilAtom/AtomContext';
import { useRecoilValue, useRecoilState } from 'recoil';
import { useScrollPosition } from '../hooks/useHelperHooks';

function Navbar() {
  const [burgerClick, setBurgerClick] = useState(false);
  const [windowSize, SetWindowSize] = useRecoilState(atomWindowSize);
  const [navbarItem, setNavbarItem] = useRecoilState(atomNavbarItems);
  const scrollPosition = useScrollPosition();
  const handleResize = () => {
    //SetWindowSize(window.innerWidth);
    // const getNavbarIcon = document.getElementById('navbar-icon')!;
    // if (windowWidthHandler() > 768 && getNavbarIcon !== null) {
    //   setBurgerClick(false);
    //   getNavbarIcon?.classList?.add('deactive-icon');
    // } else {
    //   getNavbarIcon?.classList?.add('active-icon');
    // }
  };

  useEffect(() => {
    //handle the scrool background color change
  console.log(scrollPosition)
    const getNavbarWrapper = document.getElementById('navbar-wrapper')!;
    const getHamburgerWrapper = document.querySelector('.hamburger-wrapper')!;
    const getHeroMovingLines = document.getElementById('moving-hero')!;
    const scroolY = window?.scrollY;
    if (getNavbarWrapper !== null) {
      if (scrollPosition > 0) {
        getHeroMovingLines?.classList.add('hidden');
        getNavbarWrapper?.classList.add(
          'md:bg-black/70',
          'text-custom-white',
          'bg-black/40'
        );
      } else {
        getNavbarWrapper?.classList.remove(
          'md:bg-black/70',
          'text-custom-white',
          'bg-black/40'
        );
      }
      getHamburgerWrapper?.classList?.add('border-white/70', 'bg-custom-white');
    }
  }, [scrollPosition]);

  useEffect(() => {
    const getUl = document.getElementById('navbar-ul')!;
    setTimeout(() => {
      getUl?.classList.remove('opacity-0');
      getUl?.classList.add('opacity-1');
    }, 2000);
  }, []);

  //mobile navbar html population
  const populateNavbar = (num:number) => {
    const linkNames = ['/', '#projects', '#about', '#contact'];
    const htmlNames = ['HOME', 'PROJECTS', 'ABOUT', 'CONTACT'];
    const store: any = [];
    let scrll: boolean = false;
    linkNames.forEach((item: any, index: number) => {
     if (num === 0){
      index === 0 ? (scrll = true) : (scrll = false);
      store.push(
        <Link href={item} scroll={scrll}>
          <li
            className={`text-2xl border-l border-orange-700  p-2 `}
            onClick={() => setBurgerClick((prev) => !prev)}>
            {htmlNames[index]}
          </li>
        </Link>
         );
     }else{
      index === 0 ? (scrll = true) : (scrll = false);
     
      store.push(
      
         <Link href={item} scroll={scrll}>
          <li className={`mx-auto text-center navbar-item cursor-pointer 
          ${scrollPosition < 1300 && htmlNames[index] === 'HOME' && 'bg-custom-blue text-black font-bold'}
          ${scrollPosition < 3300 && scrollPosition >2543 && htmlNames[index] === 'ABOUT' && 'bg-custom-blue text-black font-bold'}
          ${scrollPosition > 3300 && htmlNames[index] === 'CONTACT' && 'bg-custom-blue text-black font-bold'}
          ${scrollPosition > 1300 && scrollPosition < 2543 && htmlNames[index] === 'PROJECTS' && 'bg-custom-blue text-black font-bold'}`}>
            {htmlNames[index]}
          </li>
        </Link>
        )
     }
     
    });
    return store;
  };

  const populateBurgerMenu = () => {
    return burgerClick ? (
      <ul
        className="w-full h-[36rem]  grid grid-rows-4  bg-gradient-to-t from-slate-300 to-white
         text-black font-light shadow-lg 
       justify-around items-center flex-col">
        {populateNavbar(0)}
      </ul>
    ) : (
      <Link href="/">
        <span
          className={`  md:h-[4rem] h-[3rem] w-[3rem]  md:w-[4rem] items-center 
        flex justify-center ${burgerClick ? 'rounded-none' : 'rounded-full'}
      shadow-lg shadow-stone-400`}>
          eH
        </span>
      </Link>
    );
  };

  //handle navbar style change when scrolled

  useEffect(() => {
    const getIcon = document.getElementById('navbar-icon')!;
    getIcon?.classList?.add('motion-safe:animate-bounce');
    setTimeout(() => {
      getIcon?.classList?.remove('motion-safe:animate-bounce');
      setTimeout(() => {
        getIcon?.classList.remove(
          'active-icon',
          'bg-custom-gray',
          'font-semibold'
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
  }, []);
  return (
    <div
      id="navbar-wrapper"
      className="w-full h-[6rem]  flex fixed z-[2]  justify-center nav-wrapper first-letter:transition-all duration-300 ease-in-out
      items-center md:items-baseline
    ">
      <span
        id="navbar-icon"
        className={`transform rounded-full
         bg-custom-white
        ${burgerClick ? 'active-icon' : 'deactive-icon'}
        flex justify-center items-center z-[30] ease-in-out 
        transition-all duration-500
        relative font-bold text-orange-700`}>
        {populateBurgerMenu()}
      </span>
      <ul
        id="navbar-ul"
        className="min-w-[50%] absolute bottom-0 md:grid grid-cols-4 duration-300 gap-4
        md:text-2xl items-end hidden transition-all opacity-0  px-4
        right-[10%] h-[5rem]">
       
        {populateNavbar(1)}
      </ul>
      <div
        onClick={() => setBurgerClick((prev: boolean) => !prev)}
        className={`hamburger-wrapper absolute y w-10 border-8 cursor-pointer md:hidden z-50
         border-custom-gray flex justify-center items-center h-10 right-5 rounded-full `}>
        <span
          className={`hamburger-item relative z-50 h-3 w-3 transition-all duration-300 ease-in-out ${
            burgerClick
              ? ' -rotate-90 bg-orange-600  scale-[1.1] animate-spin'
              : 'rotate-0 bg-custom-gray animate-none'
          }`}></span>
      </div>
    </div>
  );
}

export default Navbar;
