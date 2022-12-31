import { ICard } from './types';

export const projectNames = [
	'Thoodies',
	'MyFlix',
	'MyCamper',
	'Quiz Game',
	'Cya App',
];
export const projectLinks = [
	'https://main--fabulous-valkyrie-e036e0.netlify.app/',
	'https://myflix-eight.vercel.app/',
	'https://main--effortless-kangaroo-bb5cd4.netlify.app/',
	'https://main.d2en2iuoalsx7.amplifyapp.com/',
	'https://cya-client-cs130.herokuapp.com/login',
];
export const projectDescriptions = [
	'Thoodies is a recipe website I created using NextJS, Tailwind, Typescript, and Firebase',
	'MyFlix is a Netflix mockup website I created using tailwind, NextJS, React, TS, and Firebase',
	'MyCamper is an individualized park finder allowing users to search for and bookmark any national park in the US.',
	'Quiz Game is a fun little side project, which can be played with one or two people.',
	'Cya App is a scheduling app I created along with four of my classmates as our final project at UCLA.',
];

export const techUsed = [
	' React, Firebase, Recoil, Next.js, TypeScript, API, Material UI.',
	'',
	'JSX, React, SCSS',
	'  JSX, Firebase, MongoDB, CSS, Bootstrap, Express.',
];

export const projectsCode = [
	'https://github.com/Erdiha/Thoodies',
	'https://github.com/Erdiha/myFLIX',
	'https://github.com/Erdiha/Camper',
	'https://github.com/Erdiha/Quiz-Game',
	'https://github.com/cs130-w22/Group-A1',
];
const images = [
	'recipe.jpg',
	'myflix.jpg',
	'parks.jpg',
	'quiz.jpg',
	'schedule.jpg',
];

export const allProj: any = [];
for (let i = 0; i < 5; i++) {
	const temp: ICard = {
		id: i,
		title: projectNames[i],
		description: projectDescriptions[i],
		link: projectLinks[i],
		code: projectsCode[i],
		image: images[i],
	};
	allProj.push(temp);
}
