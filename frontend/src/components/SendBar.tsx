import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChatBot } from '../../../common/ChatBot';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Message, MessageAuthorRole } from '../../../common/Message';
import { ReactStateFunction } from '../types';

export default function SendBar({
	currentBot,
	messages,
	setMessages
}: {
	currentBot: ChatBot;
	messages: Message[];
	setMessages: ReactStateFunction<Message[]>;
}) {
	function createMessage() {
		{
			const input = document.getElementById('message')! as HTMLInputElement,
				{ value } = input;

			input.value = '';
			if (value.replace(/\s/g, '') === '' || value.trim() === '') return;

			setMessages([
				...messages,
				new Message(MessageAuthorRole.User, value, Date.now())
			]);

			document.getElementById('messages')!.scroll({
				top: document.getElementById('messages')!.scrollHeight,
				behavior: 'smooth'
			});

			// fetch(`http://localhost:8000/api/bots/${currentBot.name}/send`)
		}
	}

	return (
		<div className="border-amber-600 flex flex-row p-8 flex-grow-0 flex-shrink-0 text-base self-stretch">
			<input
				type="text"
				className="border-amber-600 border-2 bg-slate-500 text-slate-100 flex-grow flex-shrink mr-6 text-lg p-0.5 px-2 rounded-md"
				name="message"
				id="message"
				placeholder="Type a message..."
				onKeyDown={e => {
					if (e.key === 'Enter') createMessage();
				}}
			/>
			<button
				onClick={() => {
					createMessage();
					document.getElementById('message')!.focus();
				}}
			>
				<FontAwesomeIcon
					icon={faPaperPlane}
					className="text-amber-600 flex flex-grow-0 flex-shrink-0 min-h-full hover:cursor-pointer hover:text-amber-400"
				/>
			</button>
		</div>
	);
}
