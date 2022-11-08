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
          className={`p-2 bg-gradient-to-r from-${clr} to-custom-white rounded w-full ${clr}`}>
          {item.toUpperCase()}
        </span>
      );
    });
    return store
  };

  useEffect(() => {
    document.getElementById('arrow-button')?.addEventListener('mouseenter', (e) => {
    counterRef.current = counterRef.current + 1;
     console.log(counterRef.current)
      const getArrow = document.getElementById('arrow-button')!;
      let sign:number;
      if (getArrow) {
        counterRef.current % 2 === 0 ? sign = -1 : sign = 1;
        getArrow.style.rotate = `${Math.random()* 300}deg`;
        getArrow.style.left = sign * Math.random() * 400 + 'px';
        getArrow.style.top =  Math.random() * 400 + 'px';
        };
    });
       
  },[]);
  return (
    <div
      className="bg-custom-white min-h-[80vh] w-full flex items-center flex-col justify-center z-100 
     overflow-x-hidden">
      <section
        className=" md:max-w-[50%] min-h-[40vh]  md:p-4 relative bg-gray-300   
        text-4xl grid grid-rows-5 gap-2 md:mb-2 items-center justify-center rounded
        bg-gradient-to-r from-gray-100 to-custom-white 
        z-100 transition-all duration-[2000ms] ease-in-out ">
        {heroParagraph()}
        <span id='arrow-button' className=" arrw  text-center animate-bounce opacity-50 z-50 w-fit h-fit
        transition-all  ease-in-out rounded-full
         absolute flex justify-center -bottom-[7rem]">
          <ArrowDownwardIcon className=" text-[3rem] md:text-[5rem] cursor-pointer hidden md:flex
           bg-slate-300 rounded-full  shadow-2xl shadow-slate-300 " />
        </span>
      </section>
     
    </div>
  );
}

export default Hero


