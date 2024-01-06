import { type Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

export default {
	content: [
		'frontend/src/*.{html,tsx}',
		'frontend/src/**/*.{html,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: 'class',
	plugins: [nextui()]
} satisfies Config;
