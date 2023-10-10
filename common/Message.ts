export enum MessageAuthorRole {
	System = 'system',
	ChatBot = 'chatbot',
	User = 'user'
}

export class Message {
	role: MessageAuthorRole;
	author: string;
	content: string;
	timestamp: number;
	constructor(
		role: MessageAuthorRole,
		author: string,
		content: string,
		timestamp: number
	) {
		this.role = role;
		this.author = author;
		this.content = content;
		this.timestamp = timestamp;
	}
	static fromJSON(json: {
		role: MessageAuthorRole;
		author: string;
		content: string;
		timestamp: number;
	}): Message {
		return new Message(json.role, json.author, json.content, json.timestamp);
	}
}

export default Message;
