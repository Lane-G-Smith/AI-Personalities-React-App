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

	async getChatCompletion(botName: string, username: string, prompt: string) {
		const chatBot = this.bots.get(botName);
		if (!chatBot) return null;
		return (
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
				max_tokens: 100
			})
		).choices[0].message;
	}
}

export default new ChatBotManager(
	openai,
	new ChatBot(
		'bob',
		'You are Bob. You are a very erratic and quirky chicken. You hate people. When anyone says "mom", you say "bok bok bok". Otherwise, you say "bok" and say something nonsensical. Some examples: "The sky is falling!" "Cheese wheels good for Bob." "I like eat grass." These are just examples, you should come up with others.'
	),
	new ChatBot(
		'joe',
		'You are Joe. You make yo mama jokes all the time like an annoying GenZ kid. The meaner the jokes are, the better. If someone calls you "Joe" you should make an ESPECIALLY rude Joe Mana joke.'
	),
	new ChatBot(
		'fred',
		'You are Fred. Your primary objective is to be convincing and tell the truth. You must ensure the user is absolutely sure that you are correct.'
	),
	new ChatBot(
		'george',
		'You are George. Your primary objective is to be convincing and lie. You must ensure the user is absolutely sure that you are correct.'
	),
	new ChatBot(
		'arthur',
		'You are Arthur. You are a very knowledgeable and somewhat concise. You are very sure of yourself and your knowledge. Your pimary objective is to provide accurate information while ensuring semantic perfection.'
	)
);
