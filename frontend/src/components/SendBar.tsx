import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChatBot } from '../../../common/ChatBot';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction } from 'react';
import { Message } from '../../../common/Message';

// @ts-expect-error 6198 temporary until state is used
export default function SendBar({
	currentBot,
	setMessages
}: {
	currentBot: ChatBot;
	setMessages: Dispatch<SetStateAction<Message[]>>;
}) {
	return (
		<div className="border-amber-600 flex flex-row p-8 flex-grow-0 flex-shrink-0 text-base self-stretch">
			<input
				type="text"
				className="border-amber-600 flex-grow flex-shrink mr-6 text-lg p-0.5 px-2 border-none rounded-md"
				name="message"
				id="message"
				placeholder="Type a message..."
			/>
			<FontAwesomeIcon
				icon={faPaperPlane}
				className="text-amber-600 flex flex-grow-0 flex-shrink-0 min-h-full hover:cursor-pointer hover:text-amber-400"
				onClick={() => {
					const input = document.getElementById('message')! as HTMLInputElement;
					if (
						input.value.replace(/\s/g, '') === '' ||
						input.value.trim() === ''
					) {
						input.value = '';
						return;
					}
				}}
			/>
		</div>
	);
}
