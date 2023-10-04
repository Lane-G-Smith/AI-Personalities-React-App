import express, { Request } from 'express';
import ChatBots from '../../common/chatBots';
import ChatBotManager from '../../common/ChatBotManager';
import OpenAI from 'openai';

const bots = new ChatBotManager(
	new OpenAI({ apiKey: process.env.OPENAI_API_KEY }),
	...ChatBots
);

const router = express.Router();

// get all chatbots
router.get('/', async (_req: Request, res) => {
	res.json({ msg: 'Get all chatbots' });
});

router.post('/querychat/:id', async (req: Request, res) => {
	if (req.headers['content-type']?.toLowerCase() !== 'application/json') {
		res.status(415).json({
			err: 'Invalid content type'
		});
		return;
	}
	const { id } = req.params;
	if (!bots.hasBot(id)) {
		res.status(404).json({
			err: 'Chatbot not found'
		});
		return;
	}
	const { message, username } = req.body;
	if (typeof message !== 'string') {
		res.status(422).json({
			err: "Invalid request body: 'message' either missing or not a string"
		});
		return;
	}
	if (typeof username !== 'string') {
		res.status(422).json({
			err: "Invalid request body: 'username' either missing or not a string"
		});
		return;
	}
	/**
		res.status(202).json({
			msg: 'Accepted, generating response'
		});
	*/
	res
		.status(200)
		.json({
			msg: 'Response generated',
			response: await bots.getChatCompletion(id, username, message)
		})
		.end();
});

// get single chatbot
/**
	router.get('/:id', (req: Request, res) => {
		res.json({ msg: `Get single chatbot, ID: ${req.params.id}` });
	});
*/

// Post new chatbot
/**
	router.post('/', (_req: Request, res) => {
		res.json({ msg: 'Create new chatbot' });
	});
*/

// Delete chatbot
/**
	router.delete('/:id', (_req: Request, res) => {
		res.json({ msg: 'Delete a chatbot' });
	});
*/

// update a chatbot
/**
	router.patch('/:id', (_req: Request, res) => {
		res.json({ msg: 'Update a chatbot' });
	});
*/

export default router;
