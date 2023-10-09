import { Message, MessageAuthorRole } from '../../../common/Message';

export default function MessageBox({ botName, message }: { botName: string, message: Message }) {
	return <p className='text-left text-lg my-2'><span className='font-semibold'>{getMessageDisplayAuthor(message, botName)}:</span> {message.content}</p>;
}

function getMessageDisplayAuthor(message: Message, botName: string) {
	if (message.role === MessageAuthorRole.System) {
		return 'System Message';
	} else if (message.role === MessageAuthorRole.User) {
		return 'You';
	}
	else if (message.role === MessageAuthorRole.ChatBot) return botName;
	else {
		return message.role;
	}
}
