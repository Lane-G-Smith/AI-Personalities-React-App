export class ChatBot {
	public name: string;
	public about: string;
	public prompt: string;

	constructor(name: string, about: string, prompt: string) {
		this.name = name;
		this.about = about;
		this.prompt = prompt;
	}
}
