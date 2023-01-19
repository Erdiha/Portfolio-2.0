import React, { useState } from 'react';

interface Props {
	sentence: string;
	speed?: number;
}

const LetterByLetter: React.FC<Props> = ({ sentence, speed }) => {
	const [display, setDisplay] = useState('');

	React.useEffect(() => {
		let index = 0;
		const interval = setInterval(() => {
			setDisplay(sentence.slice(0, index++));
			if (index > sentence.length) {
				clearInterval(interval);
			}
		}, speed);
		return () => clearInterval(interval);
	}, [sentence, speed]);

	return (
		<div
			className='delay-[2s] text-center text-2xl cursor-progress px-20 py-4 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text 
			text-transparent md:text-4xl font-black '>
			<a className='text-teal-900 md:text-4xl text-2xl w-1 h-2 font-extrabold'>
				{'<'}
			</a>
			{display}
			<span className='text-teal-900 md:text-4xl text-2xl w-1 h-2  font-extrabold'>
				<a className='animate-ping text-black ' href=''>
					|
				</a>
				{'/>'}
			</span>
		</div>
	);
};

export default LetterByLetter;
