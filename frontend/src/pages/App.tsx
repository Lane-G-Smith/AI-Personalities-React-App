import { useEffect, useState } from 'react';
import ChatWindow from '../components/ChatWindow';
import SideBar from '../components/SideBar';
import { BotData } from '../../../common/types';
import { SERVER_API_BASE } from '../config';

export default function App() {
	const [bots, setBots] = useState<BotData[]>([]);
	const [currentBot, setCurrentBot] = useState('');

	useEffect(() => {
		(async () => {
			const response = await window.fetch(`${SERVER_API_BASE}/bots/all/data`);
			const botsData = (await response.json()) as BotData[];
			setBots(botsData);
		})();
	});

	document.documentElement.addEventListener('contextmenu', event => {
		event.preventDefault();
	});

	return (
		<div className="App bg-slate-100 dark:bg-slate-700 text-black dark:text-white min-w-screen w-screen h-screen flex flex-row">
			<SideBar
				bots={bots}
				currentBot={currentBot}
				setCurrentBot={setCurrentBot}
			/>
			<ChatWindow currentBot={bots.filter()} />
		</div>
	);
}
