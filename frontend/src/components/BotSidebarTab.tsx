import Tippy from '@tippyjs/react';
import Tooltip from './Tooltip';
import 'tippy.js/animations/shift-away-extreme.css';
import 'tippy.js/themes/material.css';
import { ReactStateFunction } from '../types';
import { SERVER_API_BASE } from '../config';
import { BotData } from '../../../common/types';

export default function BotSidebarTab({
	selected,
	setSelected,
	data
}: {
	selected: boolean;
	setSelected: ReactStateFunction<string>;
	data: BotData;
}) {
	return (
		<Tippy
			animation="shift-away-extreme"
			content={<Tooltip>{}</Tooltip>}
			delay={[500, 250]}
			theme="material"
		>
			<div
				className={`bot-sidebar-tab flex flex-grow-0 content-center items-center flex-wrap ${
					selected
						? 'bg-slate-400 dark:bg-slate-500'
						: 'bg-slate-300 dark:bg-slate-600'
				} my-2 mx-0 rounded-xl flex-row p-3 max-h-16 hover:cursor-pointer`}
				onClick={() => {
					!selected && setSelected(bot);
				}}
			>
				<img
					src={`${SERVER_API_BASE}/assets/bot/${bot.toLowerCase()}/icon`}
					alt={bot}
					className="border-red-500 border-2 h-8 aspect-square"
				/>
				<p className="bot-name flex-grow p-4 text-xl font-medium">{bot}</p>
			</div>
		</Tippy>
	);
}
