import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import LetterByLetter from './Spelling';
import { pitchParagraph } from '../data-types/data';
import styles from '../styles/Home.module.css';
import { get } from 'https';

function Hero() {
	const [startTyping, setStartTyping] = useState<boolean>(false);
	useEffect(() => {
		const getHeroItem = document.getElementById('black-square')!;
		let scaleItems = setTimeout(() => {
			getHeroItem.classList.add(`opacity-0`);
			setStartTyping(true);
		}, 3000);
		scaleItems;
	}, []);

	return (
		<div
			className='relative hero-wrapper min-h-[70vh] w-full flex items-center flex-col justify-center 
       overflow-x-hidden'>
			<Image
				className='imgContainer opacity-50'
				alt=''
				fill
				src='/bg.jpg'></Image>
			<div
				className='mb-2 mt-10  font-mono text-4xl text-gray-900  bg-gray-900 p-1  animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text 
			 md:text-5xl font-black'>
				hi, I&apos;m <br className='block md:hidden' />
				<span className='relative w-full'>
					<span className='h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent '>
						Erdi <span className='text-3xl md:text-5xl'>👋</span>
					</span>
					<span
						id='black-square'
						className={`${styles.cursor} transform-all ease-in-out duration-500 absolute -bottom-0 left-0 -top-1 inline-block bg-gray-900 w-full animate-type will-change`}></span>
				</span>
			</div>
			{startTyping && <LetterByLetter sentence={pitchParagraph} speed={50} />}
		</div>
	);
}

export default Hero;
