import { useState } from 'react';

export default function DarkBtn() {
	const [{ localChecked }, setThemeInit] = useState({ localChecked: false, darkTheme: true });

	const userTheme = localStorage.getItem('theme'),
		systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
	if (!localChecked)
		setThemeInit({
			localChecked: true,
			darkTheme: userTheme === 'dark' || systemTheme,
		});

	const [darkTheme, setTheme] = useState(userTheme === 'dark' || systemTheme);

	return (
		<button
			id="theme-toggle"
			onClick={() => toggleTheme(darkTheme, setTheme)}
			aria-label="Dark mode toggle"
			className="p-5 my-2 flex text-blue-700 dark:bg-red-500 hover:scale-110 duration-100 hover:duration-100 rounded-lg text-sm font-bold fa-large fa-moon"
		>Dark</button>
	);
}

function toggleTheme(
	isDark: boolean,
	setDarKMode: React.Dispatch<React.SetStateAction<boolean>>
) {
	isDark = !isDark;
	isDark
		? document.documentElement.classList.remove('light-mode')
		: document.documentElement.classList.add('light-mode');
	localStorage.setItem('theme', isDark ? 'dark' : 'light');
	setDarKMode(isDark);
}
