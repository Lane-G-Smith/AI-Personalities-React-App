import { ChatBot } from '../../../common/ChatBot'

export default function BotSidebarTab({ bot }: { bot: ChatBot }) {
	return <div className='bot-sidebar-tab flex-auto flex-grow-0 bg-slate-200 dark:bg-slate-600 my-2 mx-0.5 rounded-xl'>
		<img src='https://discog.localplayer.dev/logo.png' alt={bot.name} className='flex-shrink border-red-500 border-2 w-1/4 aspect-square' />
		<p className='bot-name flex-auto'>{bot.name}</p>
	</div>
}