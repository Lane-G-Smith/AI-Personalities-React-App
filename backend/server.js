const express = require('express');
const chatbotRoutes = require('./routes/chatBots');

//express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/chatBots', chatbotRoutes);

//listen for requests
// will want to replace port 3000 with process.env.PORT later
app.listen(3000, () => {
    console.log('listening on port 3000');
});