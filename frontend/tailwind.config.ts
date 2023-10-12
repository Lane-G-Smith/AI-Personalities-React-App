import { type Config } from 'tailwindcss';

export default {
	content: [
		'frontend/src/*.{html,tsx}',
		'frontend/src/**/*.{html,tsx}',
		'frontend/src/**/**/*.{html,tsx}'
	],
	darkMode: 'class'
} satisfies Config;
