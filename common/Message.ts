export enum MessageAuthorRole {
	System = 'system',
	ChatBot = 'chatbot',
	User = 'user'
}

export class Message {
	role: MessageAuthorRole;
	content: string;
	timestamp: number;
	constructor(role: MessageAuthorRole, content: string, timestamp: number) {
		this.role = role;
		this.content = content;
		this.timestamp = timestamp;
	}
	static fromJSON(json: {
		role: MessageAuthorRole;
		content: string;
		timestamp: number;
	}): Message {
		return new Message(json.role, json.content, json.timestamp);
	}
}

export default Message;
