import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DarkBtn from './components/DarkBtn';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import Tooltip from './components/Tooltip';
import List from './components/List';

export default function Home() {
	if (window.location.pathname === '/')
		return (
			<div className="Home bg-slate-100 dark:bg-slate-700 text-black dark:text-white min-w-screen w-screen h-screen p-8">
				<h1 className="mb-4">AI Personalities React App</h1>
				{/* button row */}
				<div className="flex flex-row flex-wrap justify-center w-full">
					<DarkBtn />
					<Tippy content={<Tooltip>Launch the app!</Tooltip>}>
						<button
							className="ml-4 py-2 px-6 my-3 flex-shrink-0 flex-grow-0 self-center bg-slate-500 text-yellow-400 dark:text-amber-500 hover:border-amber-500 focus:border-amber-500 border-2 hover:border-solid focus:border-solid focus:scale-110 hover:scale-110 duration-100 focus:duration-100 hover:duration-100 rounded-xl text-lg font-bold fa-large"
							tabIndex={0}
							onClick={() => window.location.assign('/app/')}
						>
							<FontAwesomeIcon icon={faRocket} />
						</button>
					</Tippy>
				</div>
				<hr className="m-4" />
				<section className="flex flex-col flex-grow flex-shrink text-left p-4 mx-auto w-fit">
					<h2 className="text-2xl text-center underline mb-2">Tech Stack</h2>
					<List
						content={['Node.js with TypeScript', 'React (Vite)']}
						listClass="text-lg list-disc px-4"
					/>
				</section>
			</div>
		);
	else {
		window.location.assign(`/404.html?origin=${window.location.pathname}`);
	}
}
