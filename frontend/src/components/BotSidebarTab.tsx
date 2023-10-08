import { Dispatch, SetStateAction } from 'react';
import { ChatBot } from '../../../common/ChatBot';
import Tippy from '@tippyjs/react';
import Tooltip from './Tooltip';
import 'tippy.js/animations/shift-away-extreme.css';
import 'tippy.js/themes/material.css';


export default function BotSidebarTab({
	selected,
	setSelected,
	bot
}: {
	selected: boolean;
	setSelected: Dispatch<SetStateAction<ChatBot>>;
	bot: ChatBot;
}) {
	return (
		<Tippy animation='shift-away-extreme' content={<Tooltip>{bot.about}</Tooltip>} delay={[500, 250]} theme='material'>
			<div
				className={`bot-sidebar-tab flex flex-grow-0 content-center items-center flex-wrap ${selected
					? 'bg-slate-400 dark:bg-slate-500'
					: 'bg-slate-300 dark:bg-slate-600'
					} my-2 mx-0.5 rounded-xl flex-row p-3 max-h-16 hover:cursor-pointer`}
				onClick={() => {
					!selected && setSelected(bot);
				}}
			>
				<img
					src="https://discog.localplayer.dev/logo.png"
					alt={bot.name}
					className="border-red-500 border-2 h-8 aspect-square"
				/>
				<p className="bot-name flex-grow p-4 text-xl font-medium">{bot.name}</p>
			</div>
		</Tippy>
	);
}
