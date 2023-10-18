import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChatBot } from '../../../common/ChatBot';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Message, MessageAuthorRole } from '../../../common/Message';
import { ReactStateFunction } from '../types';
import { SERVER_API_BASE } from '../config';

export default function SendBar({
	currentBot,
	messages,
	setMessages
}: {
	currentBot: ChatBot;
	messages: Message[];
	setMessages: ReactStateFunction<Message[]>;
}) {
	async function createMessage() {
		{
			const input = document.getElementById('message')! as HTMLInputElement,
				nameInput = document.getElementById('name') as HTMLInputElement,
				{ value } = input,
				{ value: username } = nameInput;
			if (value.replace(/\s/g, '') === '' || value.trim() === '') return;
			if (
				!username ||
				username.replace(/\s/g, '') === '' ||
				username.trim() === ''
			) {
				alert('Please enter a username.');
				nameInput.focus();
				return;
			}

			const usermsg = new Message(
				MessageAuthorRole.User,
				'You',
				value,
				Date.now()
			);
			setMessages([...messages, usermsg]);
			input.value = '';

			document.getElementById('messages')!.scroll({
				top: document.getElementById('messages')!.scrollHeight,
				behavior: 'smooth'
			});

			input.disabled = true;

			const res = await fetch(
				`${SERVER_API_BASE}/bots/${currentBot.name.toLowerCase()}/chat`,
				{
					headers: [['Content-Type', 'application/json']],
					method: 'POST',
					body: JSON.stringify({ message: value, username })
				}
			);
			const data:
				| { err: string; msg?: undefined; response?: undefined }
				| { err?: undefined; msg: string; response: string } = await res.json();

			if (data.err || !data.response) {
				console.error(data.err);
				alert(
					'An error occurred while sending your message. Please try again later.'
				);
				return;
			}

			setMessages([
				...messages,
				usermsg,
				new Message(
					MessageAuthorRole.ChatBot,
					currentBot.name,
					data.response,
					Date.now()
				)
			]);

			document.getElementById('messages')!.scroll({
				top: document.getElementById('messages')!.scrollHeight,
				behavior: 'smooth'
			});

			input.focus();
			input.disabled = false;
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
				onContextMenu={event => event.stopPropagation()}
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
