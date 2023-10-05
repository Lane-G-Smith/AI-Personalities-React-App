import { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import SideBar from './components/SideBar';
import chatBots from '../../common/chatBots';

export default function App() {
	const [currentBot, setCurrentBot] = useState(chatBots[0])

	return (
		<div className="App bg-slate-50 dark:bg-slate-700 text-black dark:text-white min-w-screen w-screen h-full flex flex-row">
			<SideBar currentBot={currentBot} setCurrentBot={setCurrentBot} />
			<ChatWindow currentBot={currentBot} />
		</div>
	);
}
