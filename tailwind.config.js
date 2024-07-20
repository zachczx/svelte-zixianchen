/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Open Sans Variable'],
			serif: ['IBM Plex Serif', 'Lora'],
		},
		borderRadius: {
			'4xl': '2rem',
			'5xl': '2.5rem',
			'6xl': '3rem',
		},
	},
	daisyui: {
		themes: [
			{
				lemonade: {
					...require('daisyui/src/theming/themes')['lemonade'],
					'base-100': '#fafafa',
					'base-200': '#eefad8',
					'base-300': '#e4f7c2',
					warning: '#d0342c',
					secondary: '#E8751A',
					//https://www.colorhexa.com/f8fdef
				},
			},
			'emerald',
		],
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
