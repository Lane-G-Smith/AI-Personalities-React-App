import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import { Dispatch, SetStateAction, useState } from 'react';
import Tooltip from './Tooltip';

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
		<Tippy content={<Tooltip>Toggle between the dark and light themes</Tooltip>}>
			<button
				id="theme-toggle"
				onClick={() => toggleTheme(darkTheme, setTheme)}
				aria-label="Dark mode toggle"
				className="p-1 my-3 bg-slate-500 text-yellow-400 dark:text-amber-500 hover:scale-110 duration-100 hover:duration-100 rounded-lg text-xs font-bold fa-large"
			>
				<FontAwesomeIcon icon={darkTheme ? faMoon : faSun} />
			</button>
		</Tippy>
	);
}

function toggleTheme(
	isDark: boolean,
	setDarkMode: Dispatch<SetStateAction<boolean>>
) {
	isDark = !isDark;
	localStorage.setItem('theme', isDark ? 'dark' : 'light');
	setDarkMode(isDark);
}
