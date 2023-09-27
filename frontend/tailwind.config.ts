import { type Config } from 'tailwindcss';
// This is to import react so we can use it for dark mode.
import React, {useState} from 'react';
import ReactDom from 'react-dom/client'

{/* This is my attempt at getting darkmode to work in React.
export const DarkModeToggle = () => {
	const [isDark, setIsDark] = useState(true);
  
	return (
	  <Toggle
		checked={isDark}
		onChange={({ target }) => setIsDark(target.checked)}
		icons={{ checked: "🌙", unchecked: "🔆" }}
		aria-label="Dark mode toggle"
	  />
	);
  };
*/}
export default {
	content: ['./src/**/*.{html,js,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			'heavy-metal': {
				50: '#f6f7f6',
				100: '#e3e6e1',
				200: '#c6ccc3',
				300: '#a3ac9c',
				400: '#7f8978',
				500: '#646f5d',
				600: '#4f5849',
				700: '#41483d',
				800: '#363c33',
				900: '#2d312b',
				950: '#181c17'
			}
		}
	},
	plugins: []
} satisfies Config;
