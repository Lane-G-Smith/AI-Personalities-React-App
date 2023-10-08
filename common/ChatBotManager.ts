import { Collection } from '@discordjs/collection';
import OpenAI from 'openai';
import { ChatBot } from './ChatBot';

export default class ChatBotManager {
	private client: OpenAI;
	private bots: Collection<string, ChatBot>;
	constructor(client: OpenAI, ...chatBots: ChatBot[]) {
		this.client = client;
		this.bots = new Collection<string, ChatBot>(
			chatBots.map(chatBot => [chatBot.name.toLowerCase(), chatBot])
		);
	}

	hasBot(botName: string) {
		return this.bots.has(botName);
	}

	async getChatCompletion(botName: string, username: string, prompt: string) {
		const chatBot = this.bots.get(botName);
		if (!chatBot) return null;
		return decodeURIComponent(
			(
				await this.client.chat.completions.create({
					model: 'gpt-3.5-turbo-0613',
					messages: [
						{
							role: 'system',
							content: chatBot.prompt
						},
						{
							role: 'user',
							name: username,
							content: prompt
						}
					],
					max_tokens: 75
				})
			).choices[0].message.content ?? 'No response'
		);
	}
}
