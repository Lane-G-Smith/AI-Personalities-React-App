import { Message } from '../../../common/Message';

export default function MessageBox({ message }: { message: Message }) {
	return (
		<p className="text-left text-lg my-2">
			<span className="font-semibold">{message.author}:</span> {message.content}
		</p>
	);
}
