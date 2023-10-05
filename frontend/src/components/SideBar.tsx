import { ChatBot } from '../../../common/ChatBot';
import BotSidebarTab from './BotSidebarTab';
import DarkBtn from './DarkBtn';

export default function SideBar() {
	return <section id="sidebar" className="flex flex-col w-1/4 min-h-screen h-screen m-0 p-0 border-solid border-2 border-emerald-500">
		<div id="topbar" className="flex-auto flex-grow-0">
			<input type='text' className='flex-shrink m-2 p-0.5 px-2 border-none rounded-md max-w-xs w-48' placeholder='Name' />
			<DarkBtn />
		</div>
		<BotSidebarTab bot={new ChatBot('DisCog', 'You are a Discord bot')} />
	</section>
}