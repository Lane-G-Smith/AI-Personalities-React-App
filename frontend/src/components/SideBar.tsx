import BotSidebarTab from './BotSidebarTab';
import DarkBtn from './DarkBtn';
import { ReactStateFunction } from '../types';
import ClickVoteLikes from './ClickVoteLikes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Skeleton } from '@nextui-org/react';
import { BotData } from '../../../common/types';

export default function SideBar({
	bots,
	currentBot,
	setCurrentBot
}: {
	bots: BotData[];
	currentBot: string;
	setCurrentBot: ReactStateFunction<string>;
}) {
	return (
		<Skeleton>
			<main
				id="sidebar"
				className="flex flex-grow-0 flex-col justify-start w-1/5 min-h-screen h-screen m-0 px-2 py-4 border-solid border-2 border-emerald-500"
			>
				<ClickVoteLikes />
				{/* <div
				id="topbar"
				className="flex flex-row flex-grow-0 justify-center"
			></div> */}
				{/* Input element for name */}
				<input
					type="text"
					name="name"
					id="name"
					className="flex-shrink m-2 p-0.5 px-2 border-none rounded-md"
					placeholder="Name"
					autoComplete="name"
				/>
				<DarkBtn />

				{...bots.map(bot => (
					<BotSidebarTab
						setSelected={setCurrentBot}
						selected={currentBot === bot.name}
						data={bot}
					/>
				))}

				<div id="bottombar" className="flex-grow flex flex-col justify-end">
					<p className="block">
						Likes provided by{' '}
						<a href="https://clickvote.dev" className="ml-1">
							ClickVote
						</a>
					</p>
					<p className="block">
						Source code available on{' '}
						<a href="https://github.com/Lane-G-Smith/AI-Personalities-React-App">
							GitHub <FontAwesomeIcon icon={faGithub} className="text-2xl" />
						</a>
					</p>
				</div>
			</main>
		</Skeleton>
	);
}
