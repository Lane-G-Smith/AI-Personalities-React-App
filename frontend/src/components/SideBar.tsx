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
				{/* Input element for name, may be useful in future */}
				{/* <input
					type="text"
					name="name"
					className="flex-shrink m-2 p-0.5 px-2 border-none rounded-md max-w-xs w-48"
					placeholder="Name"
					autoComplete="name"
				/> */}
				<DarkBtn />
			</div>

			{...chatBots.map(bot => <BotSidebarTab setSelected={setCurrentBot} selected={currentBot.name === bot.name} bot={bot} />)}
		</section>
	);
}
