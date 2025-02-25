import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			dropShadow: {
				glow: ['0 0px 20px rgba(255,255, 255, 0.95)', '0 0px 65px rgba(255, 255,255, 0.2)'],
				// 'red-glow': ['0 0px 20px rgba(255, 114, 94, 0.95)', '0 0px 65px rgba(255, 114, 94, 0.2)'],
				'red-glow': ['0 0px 20px rgba(0, 0, 0, 0.95)', '0 0px 65px rgba(0, 0, 0, 0.2)'],
			},
			borderRadius: {
				'4xl': '2rem',
				'5xl': '2.5rem',
				'6xl': '3rem',
				'7xl': '3.5rem',
				'8xl': '4rem',
			},
		},
		fontFamily: {
			sans: ['"Open Sans Variable"', 'sans-serif'],
			serif: ['"IBM Plex Serif"', 'Lora'],
			inter: ['"Inter Variable"'],
		},
	},
	daisyui: {
		themes: [
			{
				lemonade: {
					...themes.lemonade,

					primary: '#F93827',
					secondary: '#F93827',
					info: '#16C47F',
					accent: '#FFD65A',
					'base-100': '#fafafa',
					'base-200': '#eefad8',
					'base-300': '#e4f7c2',
					warning: '#d0342c',

					//https://www.colorhexa.com/f8fdef
				},
			},
			'emerald',
		],
	},
	plugins: [require('@tailwindcss/typography'), daisyui],
};
