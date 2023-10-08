import { Message } from '../../../common/Message';

export default function MessageBox({ message }: { message: Message }) {
	return <><p className='text-left'>{message.content}</p></>;
}
