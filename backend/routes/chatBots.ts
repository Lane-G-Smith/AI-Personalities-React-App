import express, { Request } from 'express';

const router = express.Router();

// get all chatbots
router.get('/', (_req: Request, res) => {
	res.json({ mssg: 'Get all chatbots' });
});

// get single chatbot
router.get('/:id', (_req: Request, res) => {
	res.json({ mssg: 'Get single chatbot' });
});

// Post new chatbot
router.post('/', (_req: Request, res) => {
	res.json({ mssg: 'Create new chatbot' });
});

// Delete chatbot
router.delete('/:id', (_req: Request, res) => {
	res.json({ mssg: 'Delete a chatbot' });
});

// update a chatbot
router.patch('/:id', (_req: Request, res) => {
	res.json({ mssg: 'Update a chatbot' });
});

export default router;
