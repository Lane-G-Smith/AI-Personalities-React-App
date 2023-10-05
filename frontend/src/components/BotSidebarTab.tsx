import { ChatBot } from '../../../common/ChatBot'

export default function BotSidebarTab({ bot }: { bot: ChatBot }) {
	return <div
		className='bot-sidebar-tab flex flex-grow-0 content-center items-center flex-wrap bg-slate-200 dark:bg-slate-600 my-2 mx-0.5 rounded-xl flex-row p-3 max-h-16'
	>
		<img
			src='https://discog.localplayer.dev/logo.png'
			alt={bot.name}
			className='border-red-500 border-2 h-8 aspect-square'
		/>
		<p className='bot-name flex-grow p-4'>{bot.name}</p>
	</div>
}