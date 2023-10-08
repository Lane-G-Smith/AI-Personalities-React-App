import { type Config } from 'tailwindcss';

export default {
	content: [
		'./src/*.{html,tsx}',
		'./src/**/*.{html,tsx}',
		'./src/**/**/*.{html,tsx}'
	],
	darkMode: 'class'
} satisfies Config;
