import { CollectionsOutlined, SdStorage } from '@mui/icons-material';
import React,{useEffect,useRef,useState} from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Hero() {
  const counterRef = useRef(0);
  setTimeout(() => {
  const getArrow = document.querySelector('.arrw')!;
  getArrow && getArrow?.classList.remove("animate-bounce", "text-[25rem]", 'opacity');
    getArrow?.classList.add("opacity-1")
  }, 2500);
  const heroParagraph = () => {
    const store: any = [];
    const word: any = ["Somehow,", "Jobs,", "Get,", "Done,", "When,", "I am around."];
    word.forEach((item: string, index: number) => {
      let clr = `bg-red-${index*100}`
      store.push(
        <span
          key={index}
          className={`p-2  bg-gradient-to-r from-gray-100 to-custom-gray  rounded w-full ${clr}`}>
          {item.toUpperCase()}
        </span>
      );
    });
    return store
  };

  useEffect(() => {
  }, []);
  
  return (
    <div
      className=" min-h-[80vh] w-full flex items-center flex-col justify-center z-100
      
     overflow-x-hidden">
      <section
        className=" md:max-w-[50%] min-h-[40vh]  md:p-4 relative bg-gray-300   
        text-4xl grid grid-rows-5 gap-2 md:mb-2 items-center justify-center rounded
        bg-gradient-to-r from-gray-100 to-custom-gray 
        z-100 transition-all duration-[2000ms] ease-in-out ">
        {heroParagraph()}
      </section>
    </div>
  );
}

export default Hero

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

