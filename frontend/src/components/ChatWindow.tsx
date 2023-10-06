import { ChatBot } from '../../../common/ChatBot';
import SendBar from './SendBar';

export default function ChatWindow({ currentBot }: { currentBot: ChatBot }) {
	return <div className='border-amber-600 min-h-screen h-screen flex flex-grow flex-col items-stretch place-items-stretch content-stretch flex-wrap w-max'>
		<div id='messages' className='border-amber-600 h-max flex flex-col content-end p-8 flex-grow'>
			hi mom
		</div>
		<SendBar currentBot={currentBot} />
	</div>
}
