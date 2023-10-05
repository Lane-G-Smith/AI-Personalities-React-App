import { Dispatch, SetStateAction } from 'react';
import { ChatBot } from '../../../common/ChatBot';
import { chatBots } from '../../../common/chatBots';
import BotSidebarTab from './BotSidebarTab';
import DarkBtn from './DarkBtn';

export default function SideBar({ currentBot, setCurrentBot }: { currentBot: ChatBot, setCurrentBot: Dispatch<SetStateAction<ChatBot>> }) {
	const botBars = [];
	for (const b of chatBots)
		botBars.push(<BotSidebarTab setSelected={setCurrentBot} selected={currentBot.name === b.name} bot={b} />);
	return (
		<section
			id="sidebar"
			className="flex flex-col w-1/4 min-h-screen h-screen m-0 p-0 border-solid border-2 border-emerald-500"
		>
			<div id="topbar" className="flex-auto flex-grow-0">
				<input
					type="text"
					name="name"
					className="flex-shrink m-2 p-0.5 px-2 border-none rounded-md max-w-xs w-48"
					placeholder="Name"
					autoComplete="name"
				/>
				<DarkBtn />
			</div>
			{...botBars}
		</section>
	);
}
