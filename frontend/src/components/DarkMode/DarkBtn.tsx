
export default function DarkBtn() {
	return (
		<button
			id="theme-toggle"
			type="button"
			className="p-4 my-2 flex text-blue-700 dark:bg-red-500 hover:scale-110 duration-100 hover:duration-100 rounded-lg text-sm ">
			<span className="p-1 font-bold fa-large fa-moon">Dark</span>
		</button>
	)
}
