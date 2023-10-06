import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChatBot } from '../../../common/ChatBot';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function SendBar({ currentBot }: { currentBot: ChatBot }) {
	return <div className='border-amber-600 w-max flex-row p-8 flex-grow-0 text-lg self-stretch'>
		<input type='text' className='border-amber-600 flex-grow m-2 p-0.5 px-2 border-none rounded-md' name='message' placeholder='Type a message...' /> <FontAwesomeIcon icon={faPaperPlane} className='text-amber-600 flex flex-grow-0' />
	</div>
}
