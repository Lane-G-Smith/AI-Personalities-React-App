import { useState } from 'react';
import { ChatBot } from '../../../common/ChatBot';
import { Message, MessageAuthorRole } from '../../../common/Message';
import SendBar from './SendBar';
import MessageBox from './MessageBox';

export default function ChatWindow({ currentBot }: { currentBot: ChatBot }) {
	const [messages, setMessages] = useState<Message[]>([
		new Message(
			MessageAuthorRole.System,
			'System',
			'System Message',
			Date.now()
		)
	]);

	return (
		<div className="border-amber-600 min-h-screen h-screen flex flex-grow flex-col items-stretch place-items-end justify-end flex-nowrap">
			<div
				id="messages"
				className="border-amber-600 h-max p-8 flex-grow-0"
			>
				{...messages.map(message => <MessageBox message={message} />)}
			</div>
			<SendBar
				currentBot={currentBot}
				messages={messages}
				setMessages={setMessages}
			/>
		</div>
	);
}
