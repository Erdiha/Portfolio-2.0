/** @type {import('tailwindcss').Config} */

module.exports = {
	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			keyframes: {},
			keyframes: {
				type: {
					'0%': { transform: 'translateX(0ch)' },
					'5%, 10%': { transform: 'translateX(1ch)' },
					'15%, 20%': { transform: 'translateX(2ch)' },
					'25%, 30%': { transform: 'translateX(3ch)' },
					'35%, 40%': { transform: 'translateX(4ch)' },
					'45%, 50%': { transform: 'translateX(5ch)' },
					'55%, 60%': { transform: 'translateX(6ch)' },
					'65%, 70%': { transform: 'translateX(7ch)' },
					'75%, 80%': { transform: 'translateX(8ch)' },
					'85%, 90%': { transform: 'translateX(9ch)' },
					'95%, 100%': { transform: 'translateX(11ch)' },
				},
				text: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center',
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center',
					},
				},
			},
			animation: {
				cursor: 'cursor .6s linear infinite alternate',
				type: 'type 1.8s ease-out .8s 1 normal both',
				typereverse: 'type 1.8s ease-out 0s infinite alternate-reverse both',
				text: 'text 5s ease infinite',
			},
			backgroundImage: {
				'hero-wrapper':
					"linear-gradient(to right bottom, rgba('#000',0.8),[rgb(173,221,208,0.5)]))",
			},
			colors: {
				'custom-black': '#222831',
				'custom-gray': '#393E46',
				'custom-blue': '#00ADB5',
				'custom-white': '#EEEEEE',
			},
		},
	},
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

	plugins: [],
};
