import 'dotenv/config';
import express, { Request } from 'express';
import chatbotRoutes from './routes';

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req: Request, _res, next) => {
	console.log(req.method, req.path, req.body);
	next();
});

// routes
app.use('/api', chatbotRoutes);

// listen for requests
const PORT = 8000;
app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`Listening on port ${PORT}`);
});
