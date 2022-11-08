import { ICard } from "./types";



export const projectNames = ['MyFlix', 'MyCamper', 'Quiz Game', 'Cya App'];
export const projectLinks = [
  'https://myflix-eight.vercel.app/',
  'https://main--effortless-kangaroo-bb5cd4.netlify.app/',
  'https://main.d2en2iuoalsx7.amplifyapp.com/',
  'https://cya-client-cs130.herokuapp.com/login',
];
export const projectDescriptions = [
  'MyFlix is a Netflix mockup website I created using tailwind, NextJS, React, JS, and Firebase',
  'MyCamper is a park finder lets you create account, search any National parks in USA, save National Parks , and more...',
  'Quiz game is a fun side project that I created which can be played with one or two people.',
  'Cya App is a scheduling app I helped create along with four of my classmates as our final project at UCLA.',
];
export const projectsCode = [
  'https://github.com/Erdiha/myFLIX',
  'https://github.com/Erdiha/Camper',
  'https://github.com/Erdiha/Quiz-Game',
  'https://github.com/cs130-w22/Group-A1',
];
const images = [
  'myflix.jpg', 'parks.jpg', 'quiz.jpg', 'schedule.jpg'
];

  export const allProj: any = [];
  for (let i = 0; i < 4; i++) {
    const temp: ICard = {
      id: i,
      title: projectNames[i],
      description: projectDescriptions[i],
      link: projectLinks[i],
      code: projectsCode[i],
      image:images[i]
    };
    allProj.push(temp);
  }