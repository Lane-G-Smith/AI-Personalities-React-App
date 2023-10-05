import { Dispatch, SetStateAction } from 'react'
import { ChatBot } from '../../../common/ChatBot'

export default function BotSidebarTab({ selected, setSelected, bot }: { selected: boolean, setSelected: Dispatch<SetStateAction<ChatBot>>, bot: ChatBot }) {
	return <div
		className={`bot-sidebar-tab flex flex-grow-0 content-center items-center flex-wrap ${selected ? 'bg-slate-300 dark:bg-slate-500' : 'bg-slate-100 dark:bg-slate-600'} my-2 mx-0.5 rounded-xl flex-row p-3 max-h-16 hover:cursor-pointer`}
		onClick={() => {
			!selected && setSelected(bot)
		}}
	>
		<img
			src='https://discog.localplayer.dev/logo.png'
			alt={bot.name}
			className='border-red-500 border-2 h-8 aspect-square'
		/>
		<p className='bot-name flex-grow p-4 text-xl font-medium'>{bot.name}</p>
	</div>
}