import { ChatBot } from '../../../common/ChatBot';
import { chatBots } from '../../../common/chatBots';
import BotSidebarTab from './BotSidebarTab';
import DarkBtn from './DarkBtn';
import { ReactStateFunction } from '../types';

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
			className="flex flex-grow-0 flex-col w-1/5 min-h-screen h-screen m-0 p-2 border-solid border-2 border-emerald-500"
		>
			<div id="topbar" className="flex-auto flex-grow-0">
				<input
					type="text"
					name="name"
					id="name"
					className="flex-shrink m-2 p-0.5 px-2 border-none rounded-md w-48 text-black bg-slate-300 dark:bg-slate-400"
					placeholder="Name"
					autoComplete="name"
					tabIndex={0}
					onContextMenu={event => event.stopPropagation()}
				/>
				<DarkBtn />
			</div>

			{...chatBots.map(bot => (
				<BotSidebarTab
					setSelected={setCurrentBot}
					selected={currentBot.name === bot.name}
					bot={bot}
				/>
			))}
		</section>
	);
}
