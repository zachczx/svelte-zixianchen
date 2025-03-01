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
};
