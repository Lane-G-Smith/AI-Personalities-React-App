import 'dotenv/config';
import express, { Request } from 'express';
import chatbotRoutes from './routes/chatBots';

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req: Request, _res, next) => {
	console.log(req.path, req.method);
	next();
});

// routes
app.use('/api/chatBots', chatbotRoutes);

// listen for requests
// will want to replace port 3000 with process.env.PORT later
app.listen(process.env.PORT, () => {
	console.log(`Listening on port ${process.env.PORT}`);
});
