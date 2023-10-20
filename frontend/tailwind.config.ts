import { type Config } from 'tailwindcss';

export default {
	content: [
		'frontend/*.{html,tsx}',
		'frontend/src/*.{html,tsx}',
		'frontend/src/**/*.{html,tsx}',
		'frontend/src/**/**/*.{html,tsx}'
	],
	darkMode: 'class'
} satisfies Config;
