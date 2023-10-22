import Code from './components/Code';
import DarkBtn from './components/DarkBtn';
import query_string from 'query-string';
const { parse } = query_string;

export default function NotFound() {
	return (
		<div className="page-404 bg-slate-100 dark:bg-slate-700 text-black dark:text-white min-w-screen w-screen h-screen p-8">
			<h1 className="mb-4">AI Personalities React App</h1>
			{/* button row */}
			<div className="flex flex-row flex-wrap justify-center w-full">
				<DarkBtn />
			</div>
			<hr className="m-4" />
			<h2 className="p-4 text-2xl">
				You seem lost. Wanna go back <a href="/">home</a>?
			</h2>
			<p>
				You were previously in the forbidden lands of{' '}
				<Code>{`/${parse(window.location.search).origin}` || 'nowhere'}</Code>,
				but we magicked you back here. You're welcome.
			</p>
		</div>
	);
}
