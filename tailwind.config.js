/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				lemonade: {
					...require('daisyui/src/theming/themes')['lemonade'],
					'base-100': '#fafafa',
					'base-200': '#eefad8',
					'base-300': '#e4f7c2',
					secondary: '#E8751A',
					//https://www.colorhexa.com/f8fdef
				},
			},
			'emerald',
		],
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
