import { ChatBot } from '../../../common/ChatBot';
import { chatBots } from '../../../common/chatBots';
import BotSidebarTab from './BotSidebarTab';
import DarkBtn from './DarkBtn';
import { ReactStateFunction } from '../types';
import ClickVoteLikes from './ClickVoteLikes';

export default function SideBar({
	currentBot,
	setCurrentBot
}: {
	currentBot: ChatBot;
	setCurrentBot: ReactStateFunction<ChatBot>;
}) {
	return (
		<section
			id="sidebar"
			className="flex flex-grow-0 flex-col justify-start w-1/5 min-h-screen h-screen m-0 p-2 border-solid border-2 border-emerald-500"
		>
			{/* Input element for name */}
			<input
				type="text"
				name="name"
				id="name"
				className="flex-shrink m-2 p-0.5 px-2 border-none rounded-md"
				placeholder="Name"
				autoComplete="name"
			/>
			<div id="topbar" className="flex flex-row flex-grow-0 justify-center">
				<ClickVoteLikes />
				<DarkBtn />
			</div>

			{...chatBots.map(bot => (
				<BotSidebarTab
					setSelected={setCurrentBot}
					selected={currentBot.name === bot.name}
					bot={bot}
				/>
			))}

			<div id="bottombar" className="flex-grow flex flex-col justify-end pb-4">
				<p className="flex">
					Likes provided by{' '}
					<a href="https://clickvote.dev" className="ml-1">
						ClickVote
					</a>
				</p>
			</div>
		</section>
	);
}
