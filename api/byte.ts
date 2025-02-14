const { Router } = require('express');
const router = Router();

const { chat } = require('../services/xai.service');
const { tweet } = require('../services/x.service');

router.get('/', async (req, res) => {
	const userMessage = req.query.msg;
	const chatResult = await chat(userMessage);

	if (chatResult && chatResult.content) {
		// const tweetResult = await tweet(chatResult.content);
		// res.send(tweetResult);
		res.send(chatResult.content);
	} else {
		res.send('Chat failed');
	}
});

module.exports = router;
