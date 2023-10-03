import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction, useState } from 'react';

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
		<button
			id="theme-toggle"
			onClick={() => toggleTheme(darkTheme, setTheme)}
			aria-label="Dark mode toggle"
			className="p-5 my-2 bg-slate-500 text-yellow-400 dark:text-amber-500 hover:scale-110 duration-100 hover:duration-100 rounded-lg text-sm font-bold fa-large "
		>
			<FontAwesomeIcon icon={darkTheme ? faMoon : faSun} />
		</button>
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
