import express, { Request } from 'express';
import ChatBots from '../../common/chatBots';
import ChatBotManager from '../../common/ChatBotManager';
import OpenAI from 'openai';
import { resolve } from 'path';

const bots = new ChatBotManager(
	new OpenAI({ apiKey: process.env.OPENAI_API_KEY }),
	...ChatBots
);

const router = express.Router();

router.post('/bots/:id/chat', async (req: Request, res) => {
	res.header('Content-Type', 'application/json');
	res.header('Access-Control-Allow-Origin', '*');

	if (req.headers['content-type']?.toLowerCase() !== 'application/json') {
		res.status(415).json({
			err: 'Invalid content type'
		}).end();
		return;
	}
	const { id } = req.params;
	if (!bots.hasBot(id)) {
		res.status(404).json({
			err: 'Chatbot not found'
		}).end();
		return;
	}
	const { message, username } = req.body;
	if (typeof message !== 'string') {
		res.status(422).json({
			err: "Invalid request body: 'message' either missing or not a string"
		}).end();
		return;
	}
	if (typeof username !== 'string') {
		res.status(422).json({
			err: "Invalid request body: 'username' either missing or not a string"
		}).end();
		return;
	}
	res
		.status(200)
		.json({
			msg: 'Response generated',
			response: await bots.getChatCompletion(id, username, message)
		})
		.end();
});

router.get('/assets/bot/:id/icon', (req: Request, res) => {
	res.header('Access-Control-Allow-Origin', '*');

	const { id } = req.params;
	if (!bots.hasBot(id)) {
		res.status(404).json({
			err: 'Chatbot not found'
		}).end();
		return;
	}

	try {
		res.sendFile(`${id}.webp`, {
			root: resolve('backend/assets/bot_icons')
		});
	} catch {
		res.sendStatus(500).end();
	}
});

router.get('/', (_req: Request, res) => {
	res.sendStatus(200).end();
});

// get detailed bot info
router.get('/bot/:id/data', (req: Request, res) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Content-Type', 'application/json');

	const { id } = req.params;
	if (!bots.hasBot(id)) {
		res.status(404).json({
			err: 'Chatbot not found'
		});
		return;
	}

	res.status(200).json(bots.getBotData(id)!).end();
})

// get all bot data
router.get('/bots/all/data', (_req: Request, res) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Content-Type', 'application/json');

	res.status(200).json(bots.getAllBotData()).end();
});

// get all bots
router.get('/bots/all', (_req: Request, res) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Content-Type', 'application/json');

	res.status(200).json(bots.getAllBotNames()).end();
});

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
