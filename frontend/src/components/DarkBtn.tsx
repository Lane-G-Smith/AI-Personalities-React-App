import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactStateFunction } from '../types';
import { useState } from 'react';

export default function DarkBtn() {
	// Will always run on page load
	// Get themes from LocalStorage and system preferences
	const userTheme = localStorage.getItem('theme'),
		systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

	const [darkTheme, setTheme] = useState(
		userTheme === null ? systemTheme : userTheme === 'dark'
	);

	// Will run on page load if LocalStorage is empty, aka if user has not visited the site before or cleared their cache
	// Set theme to system theme if LocalStorage is empty, and populate LocalStorage with system theme
	if (userTheme === null) {
		localStorage.setItem('theme', systemTheme ? 'dark' : 'light');
		setTheme(systemTheme);
	}

	// Will run on page load every time, aka also on every theme change
	// Now that we know which theme to use, use it
	darkTheme
		? document.documentElement.classList.add('dark')
		: document.documentElement.classList.remove('dark');

	return (
		/**
			<Tippy
				content={<Tooltip>Toggle between the dark and light themes</Tooltip>}
			>
		*/
		<button
			id="theme-toggle"
			onClick={() => toggleTheme(darkTheme, setTheme)}
			aria-label="Dark mode toggle"
			className="py-2 px-6 my-3 flex-shrink-0 flex-grow-0 self-center bg-slate-500 text-yellow-400 dark:text-amber-500 hover:border-amber-500 focus:border-amber-500 border-2 hover:border-solid focus:border-solid focus:scale-110 hover:scale-110 duration-100 focus:duration-100 hover:duration-100 rounded-xl text-lg font-bold fa-large"
			tabIndex={0}
		>
			<FontAwesomeIcon icon={darkTheme ? faMoon : faSun} />
		</button>
		/**
			</Tippy>
		*/
	);
}

function toggleTheme(
	isDark: boolean,
	setDarkMode: ReactStateFunction<boolean>
) {
	isDark = !isDark;
	localStorage.setItem('theme', isDark ? 'dark' : 'light');
	setDarkMode(isDark);
}
