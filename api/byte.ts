const { Router } = require('express');
const router = Router();

const { chat } = require('../services/xai.service');
const { tweet } = require('../services/x.service');

router.get('/', async (req, res) => {
	const userMessage = req.query.message;
	if (!userMessage) {
		res.send('No message provided');
		return;
	}

	const chatResult = await chat(userMessage);

	if (chatResult) {
		// const tweetResult = await tweet(chatResult);
		// res.send(tweetResult);
		res.send(chatResult);
	} else {
		res.send('Chat failed');
	}
});

module.exports = router;
