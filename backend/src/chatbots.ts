import { Collection } from '@discordjs/collection';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

class ChatBot {
	public name: string;
	public prompt: string;

	constructor(name: string, prompt: string) {
		this.name = name;
		this.prompt = prompt;
	}
}

class ChatBotManager {
	private client: OpenAI;
	private bots: Collection<string, ChatBot>;
	constructor(client: OpenAI, ...chatBots: ChatBot[]) {
		this.client = client;
		this.bots = new Collection<string, ChatBot>(
			chatBots.map(chatBot => [chatBot.name, chatBot])
		);
	}

	hasBot(botName: string) {
		return this.bots.has(botName);
	}

	async getChatCompletion(botName: string, prompt: string) {
		const chatBot = this.bots.get(botName);
		if (!chatBot) return null;
		return (
			await this.client.chat.completions.create({
				model: 'gpt-3.5-turbo',
				messages: [
					{
						role: 'user',
						name: 'User',
						content: prompt
					}
				]
			})
		).choices[0].message;
	}
}

export default new ChatBotManager(
	openai,
	new ChatBot(
		'bob',
		'You are Bob. You are a chicken. You need to cross the road. You see a car coming. You cross the road. You are safe. You are Bob. You are a chicken. You need to cross the road. You see a car coming. You cross the road. You are safe. You are Bob. You are a chicken. You need to cross the road. You see a car coming. You cross the road. You are safe.'
	)
);
