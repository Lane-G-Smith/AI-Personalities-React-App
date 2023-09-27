import { useState } from "react";

export default function DarkBtn() {
	const [, setThemeInit] = useState(true);

	const userTheme = localStorage.getItem('theme'),
		systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
	if (userTheme === 'dark' || systemTheme) setThemeInit(true);
	else setThemeInit(false);

	const [darkTheme, setTheme] = useState(userTheme === 'dark' || systemTheme);

	return (
		<input
			id="theme-toggle"
			checked={darkTheme}
			type="checkbox"
			onClick={() => toggleTheme(darkTheme, setTheme)}
			aria-label="Dark mode toggle"
			className="p-4 my-2 flex text-blue-700 dark:bg-red-500 hover:scale-110 duration-100 hover:duration-100 rounded-lg text-sm "
		>
			<span className="p-1 font-bold fa-large fa-moon">Dark</span>
		</input>
	);
}

function toggleTheme(isDark: boolean, setDarKMode: React.Dispatch<React.SetStateAction<boolean>>) {
	isDark = !isDark;
	isDark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
	localStorage.setItem('theme', isDark ? 'dark' : 'light')
	setDarKMode(isDark);
};